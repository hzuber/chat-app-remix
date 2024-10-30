import {
  PrismaClient,
  User as PrismaUser,
  Chat as PrismaChat,
  UserChat as PrismaUserChat,
} from "@prisma/client";
import { ChatObject, Icon, Response, UserChat, chat } from "types";
import { v4 as uuidv4 } from "uuid";
import { getUser, updateUser } from "server/users/utils";
import {
  prismaMessageToMessage,
  prismaUserChatToUserChat,
  prismaUserToUser,
} from "server/general/prismaMapping";

const prisma = new PrismaClient();

export async function getAllUserChats() {
  try {
    const data = await prisma.userChat.findMany();
    return data;
  } catch (err) {
    return [];
  }
}

export async function getUserChat(id: string) {
  try {
    const data: PrismaUserChat | null = await prisma.userChat.findUnique({
      where: {
        id: id,
      },
    });
    const userChat = data && (await prismaUserChatToUserChat(data));
    return userChat;
  } catch (err) {
    return [];
  }
}

export async function getUsersUserChats(userid: string) {
  const userChats: UserChat[] = [];
  try {
    const data = await prisma.userChat.findMany({
      where: {
        userId: userid,
      },
      orderBy: {
        chat: {
          lastSent: "desc",
        },
      },
    });
    if (data && data.length > 0) {
      for await (const uc of data) {
        const chat = await prismaUserChatToUserChat(uc);
        userChats.push(chat);
      }
    }
    return userChats;
  } catch (err) {
    return [];
  }
}

export async function getUserChatFromChatId(chatId: string, userId: string) {
  const data: PrismaUserChat | null = await prisma.userChat.findUnique({
    where: {
      chatId: chatId,
      userId: userId,
    },
  });
  const userChat = data && (await prismaUserChatToUserChat(data));
  return userChat;
}

// export async function createUserChats(
//   members: string[],
//   chatId: string,
//   theme?: string | null,
//   admin?: boolean
// ) {
//   try {
//     const data: PrismaUserChat[] = [];
//     for (const u of members) {
//       const id = uuidv4();
//       const userChat = {
//         id: id,
//         userId: u,
//         chatId: chatId,
//         lastRead: null,
//         isAdmin: admin ? admin : false,
//         theme: theme ? theme : null,
//         deleted: false,
//       };
//       data.push(userChat);
//     }
//     await prisma.userChat.createMany({ data: data, skipDuplicates: true });
//   } catch (err) {
//     console.error("Error writing to database:", err);
//   }
// }

export async function createUserChat(
  userId: string,
  chatId: string,
  theme?: string | null,
  admin?: boolean
) {
  try {
    const id = uuidv4();
    const userChat = {
      id: id,
      userId: userId,
      chatId: chatId,
      lastRead: null,
      isAdmin: admin ? admin : false,
      theme: theme ? theme : null,
      deleted: false,
    };
    await prisma.userChat.createMany({ data: userChat, skipDuplicates: true });
  } catch (err) {
    console.error("Error writing to database:", err);
  }
}

export async function updateUserChat(
  chatId: string,
  updatedData: Partial<UserChat>
) {
  const updatedPrismaData: Partial<PrismaUserChat> = {};
  const prismaData = prisma.userChat.findUnique({
    where: {
      id: chatId,
    },
  });

  if (!prismaData) {
    console.log("updateUserChat : UserChat not found");
    throw new Error("UserChat not found");
  }
  if (updatedData.admin) {
    updatedPrismaData.isAdmin = updatedData.admin;
  }
  if (updatedData.lastRead) {
    updatedPrismaData.lastRead = updatedData.lastRead.id;
  }
  if (updatedData.theme) {
    updatedPrismaData.theme = updatedData.theme;
  }
  if (updatedData.deleted) {
    updatedPrismaData.deleted = updatedData.deleted;
  }
  const updatedPrismaUserChat: PrismaUserChat = await prisma.userChat.update({
    where: {
      id: chatId,
    },
    data: {
      ...updatedPrismaData,
    },
  });
  const updatedUserChat = await prismaUserChatToUserChat(updatedPrismaUserChat);
  return updatedUserChat;
}

export async function markMessageRead(userChatId: string, messageId: string) {
  const lastReadMessage = await prisma.message.findUnique({
    where: {
      id: messageId,
    },
  });
  if (!lastReadMessage) {
    throw new Error("Could not find message");
  }
  const message = prismaMessageToMessage(lastReadMessage);
  const updatedData: Partial<UserChat> = {
    lastRead: message,
  };
  const updatedUserChat = await updateUserChat(userChatId, updatedData);
  return updatedUserChat;
}
