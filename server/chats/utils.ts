import {
  PrismaClient,
  User as PrismaUser,
  UserChat as PrismaUserChat,
  Chat as PrismaChat,
  Message as PrismaMessage,
} from "@prisma/client";
import { ChatObject, Icon, Response, Chat, Message, UserChat } from "types";
import { v4 as uuidv4 } from "uuid";
import { getUser } from "server/users/utils";
import {
  createUserChat,
  createUserChats,
  getUserChatFromChatId,
} from "./userChatsUtils";
import { createIcon } from "server/general/utils";
import { prismaChatToChat, prismaUserChatToUserChat } from "server/general/prismaMapping";

const prisma = new PrismaClient();

export async function getAllChats() {
  const chats: Chat[] = [];
  try {
    const data = await prisma.chat.findMany();
    // const mapped = await prismaChatToChat(data);
    for (const c of data) {
      const chat = await prismaChatToChat(c);
      chat && chats.push(chat);
    }
    return chats;
  } catch (err) {
    return [];
  }
}

export async function getChat(id: string) {
  const prismaChat: PrismaChat | null = await prisma.chat.findUnique({
    where: { id },
  });
  if (!prismaChat) {
    throw new Error("getChat : Chat not found" + id);
  } else {
    const chat: Chat | null = await prismaChatToChat(prismaChat);
    return chat;
  }
}

export async function addChat(
  addedBy: string,
  members: string[],
  icon: Icon | null,
  description: string | null,
  chatName: string | null,
  type: "public" | "private_chat" | "private_group",
  theme?: string | null
) {
  if (type === "private_chat") {
    const privateChat = await getPrivateChat(members);
    if (privateChat) {
      return;
    }
  }
  const id = uuidv4();
  const chat: PrismaChat = {
    id,
    iconIcon: icon && icon.icon ? icon.icon : null,
    iconBg: icon && icon.background ? icon.background : null,
    description: description,
    chatName: chatName,
    type,
    lastSent: null,
  };
  try {
    const newChat = await prisma.chat.create({
      data: chat,
    });
    for (const m of members) {
      await createUserChat(m, id, theme, m === addedBy);
    }
    return prismaChatToChat(chat);
  } catch (err) {
    console.error("Error writing to database:", err);
  }
}

export async function getUsersChats(userid: string) {
  const chats: Chat[] = [];
  const userChats = await prisma.userChat.findMany({
    where: {
      userId: userid,
    },
    select: {
      chat: true,
    },
    orderBy: {
      chat: {
        lastSent: "desc",
      },
    },
  });
  if (!userChats) {
    throw new Error("Chat does not exist");
  }
  for (const uc of userChats) {
    const chat = uc.chat && (await prismaChatToChat(uc.chat));
    chat && chats.push(chat);
  }
  return chats;
}

export async function getPrivateChat(members: string[]) {
  let privateChatId: string = "";
  if (members.length !== 2) {
    throw new Error("A private chat may only have two members");
  }
  const user1Chats = await prisma.user.findUnique({
    where: {
      id: members[0],
    },
    select: {
      userChats: {
        where: {
          chat: {
            type: "private_chat",
          },
        },
        select: {
          chatId: true,
        },
      },
    },
  });
  if (!user1Chats) {
    return null;
  }
  for await (const uc of user1Chats.userChats) {
    const chatId = await prisma.user.findUnique({
      where: {
        id: members[1],
      },
      select: {
        userChats: {
          where: {
            chatId: uc.chatId,
          },
          select: {
            chatId: true,
          },
        },
      },
    });
    if (chatId?.userChats.length !== 0) {
      privateChatId = uc.chatId;
    }
  }
  if (privateChatId.length === 0) {
    return null;
  }
  const prismaChat = await prisma.chat.findUnique({
    where: {
      id: privateChatId,
    },
  });
  const chat = prismaChat && (await prismaChatToChat(prismaChat));
  return chat;
}

export async function createChatObject(chatId: string, userId: string) {
  let icon: Icon | null;
  let name: string | null;
  const chat = await getChat(chatId);
  const userChat = await getUserChatFromChatId(chatId, userId);
  let otherMemberUserChat: UserChat | null;
  // const userChat = uChat as PrismaUserChat;
  // const userChat = user.chats?.find((c) => c.chatId === chatId);
  if (!chat) {
    throw new Error("createChatObject: Cannot find chat");
  }
  if (chat?.type === "private_chat") {
    const otherMember = await prisma.userChat.findFirst({
      where: {
        chatId,
        NOT: {
          userId: userId,
        },
      },
    });
    const other = otherMember && await prismaUserChatToUserChat(otherMember)
    const otherUser = otherMember && (await getUser(otherMember.userId));
    if (!otherUser) {
      throw new Error("Cannot find other member");
    }
    otherMemberUserChat = other ? other : null
    icon = otherUser && otherUser.icon;
    name = otherUser.username ? otherUser.username : otherUser.email;
  } else {
    icon = chat ? chat.icon : null;
    name = chat ? chat.chatName : null;
    otherMemberUserChat = null
  }
  const chatObject: ChatObject = {
    chat,
    icon,
    name,
    userChat: userChat ? userChat : null,
    otherMemberUserChat
  };
  return chatObject;
}
