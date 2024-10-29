import {
  PrismaClient,
  User as PrismaUser,
  UserChat as PrismaUserChat,
  Chat as PrismaChat,
  Message as PrismaMessage,
} from "@prisma/client";
import {
  ChatObject,
  Icon,
  Response,
  Chat,
  Message,
  UserChat,
  User,
} from "types";
import { v4 as uuidv4 } from "uuid";
import { getUser } from "server/users/utils";
import { getUserChatFromChatId } from "./userChatsUtils";
import { createIcon } from "server/general/utils";
import { getUserChat, getUsersUserChats } from "server/chats/userChatsUtils";

const prisma = new PrismaClient();

export const prismaStatusToStatus = (
  stat: string
): "draft" | "live" | "edited" | "deleted" => {
  const status =
    stat === "draft" ||
    stat === "live" ||
    stat === "edited" ||
    stat === "deleted"
      ? stat
      : "live";
  return status;
};

export const prismaChatTypeToType = (
  type: string
): "public" | "private_chat" | "private_group" => {
  const status =
    type === "public" || type === "private_chat" || type === "private_group"
      ? type
      : "public";
  return status;
};

//chats
export async function prismaChatToChat(prismaChat: PrismaChat) {
  let chat: Chat;
  try {
    const members: string[] = [];
    const messages: Message[] = [];
    const admins: string[] = [];
    let lastMessage: Message | null = null;
    await prisma.userChat
      .findMany({
        where: {
          chatId: prismaChat.id,
        },
      })
      .then((res) => {
        for (const mem of res) {
          members.push(mem.userId);
          mem.isAdmin && admins.push(mem.userId);
        }
      });
    const prismaMessages = await prisma.message.findMany({
      where: {
        chatId: prismaChat.id,
      },
      orderBy: {
        date: "desc",
      },
    });
    for (const mess of prismaMessages) {
      const message = prismaMessageToMessage(mess);
      messages.push(message);
      if (mess.id === prismaChat.lastSent) {
        lastMessage = message;
      }
    }

    chat = {
      id: prismaChat.id,
      members: members,
      icon: createIcon(prismaChat.iconIcon, prismaChat.iconBg),
      description: prismaChat.description,
      chatName: prismaChat.chatName,
      type: prismaChatTypeToType(prismaChat.type),
      lastSent: lastMessage ? lastMessage : null,
      messages: messages,
      admins: admins,
    };
  } catch (err) {
    console.log(err);
    return null;
  }
  return chat;
}

//userChats
export async function prismaUserChatToUserChat(prismaUserChat: PrismaUserChat) {
  const lastRead =
    prismaUserChat.lastRead &&
    (await prisma.message.findUnique({
      where: {
        id: prismaUserChat.lastRead,
      },
    }));
  const userChat: UserChat = {
    id: prismaUserChat.id,
    userId: prismaUserChat.userId,
    chatId: prismaUserChat.chatId,
    lastRead: lastRead ? prismaMessageToMessage(lastRead) : null,
    theme: prismaUserChat.theme,
    admin: prismaUserChat.isAdmin,
    deleted: prismaUserChat.deleted,
  };
  return userChat;
}

//messages
export function prismaMessageToMessage(prismaMessage: PrismaMessage) {
  const message: Message = {
    id: prismaMessage.id,
    author: prismaMessage.author,
    date: prismaMessage.date,
    chatId: prismaMessage.chatId,
    text: prismaMessage.text,
    dateEdited: prismaMessage.dateEdited,
    status: prismaStatusToStatus(prismaMessage.status),
  };
  return message;
}

//users
export async function prismaUserToUser(prismaUser: PrismaUser) {
  const userChats = await getUsersUserChats(prismaUser.id);
  const user: User = {
    id: prismaUser.id,
    username: prismaUser.username,
    email: prismaUser.email,
    password: prismaUser.password,
    icon: createIcon(prismaUser.iconIcon, prismaUser.iconBg),
    chats: userChats,
  };
  return user;
}
