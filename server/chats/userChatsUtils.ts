import { PrismaClient, User, Chat, UserChat } from "@prisma/client";
import { ChatObject, Icon, Response } from "types";
import { v4 as uuidv4 } from "uuid";
import { getUser } from "server/users/utils";

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
    const data = await prisma.userChat.findUnique({
      where: {
        id: id,
      },
    });
    return data;
  } catch (err) {
    return [];
  }
}

export async function getUserChatFromChatId(chatId: string, userId: string) {
  try {
    const data = await prisma.userChat.findUnique({
      where: {
        chatId: chatId,
        userId: userId,
      },
    });
    return data;
  } catch (err) {
    return [];
  }
}

export async function addUserChats(userChats: UserChat[]) {
  try {
    await prisma.userChat.createMany({ data: userChats });
  } catch (err) {
    console.error("Error writing to database:", err);
  }
}

export async function addUserChat(userChat: UserChat) {
  try {
    await prisma.userChat.create({ data: userChat });
  } catch (err) {
    console.error("Error writing to database:", err);
  }
}
