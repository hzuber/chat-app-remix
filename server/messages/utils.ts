import {
  PrismaClient,
  User as PrismaUser,
  UserChat as PrismaUserChat,
  Chat as PrismaChat,
  Message as PrismaMessage,
} from "@prisma/client";
import { v4 as uuidv4 } from "uuid";
import { Chat, Message, User } from "types";
import { prismaMessageToMessage } from "server/general/prismaMapping";

const prisma = new PrismaClient();

export async function getAllMessages() {
  const data = await prisma.message.findMany();
  const messages: Message[] = [];
  if (!data) {
    throw new Error("Unable to read database");
  }
  for (const m of data) {
    messages.push(prismaMessageToMessage(m));
  }
  return messages;
}

export async function getMessage(id: string) {
  const data = await prisma.message.findUnique({
    where: {
      id,
    },
  });
  if (!data) {
    throw new Error("Unable to read database");
  }
  return prismaMessageToMessage(data);
}

export async function getChatMessages(chatId: string) {
  const data = await prisma.message.findMany({
    where: {
      chatId,
    },
    orderBy: [
      {
        date: "asc",
      },
    ],
  });
  const messages: Message[] = [];
  if (!data) {
    throw new Error("Unable to read database");
  }
  for (const m of data) {
    messages.push(prismaMessageToMessage(m));
  }
  return messages;
}

export async function createNewMessage(
  author: User,
  chatId: string,
  text: string,
  status: "draft" | "live" | "edited" | "deleted"
) {
  const id = uuidv4();
  const now = new Date();
  try {
    const message: PrismaMessage = {
      id,
      author: author.id,
      chatId,
      text,
      status,
      date: now,
      dateEdited: now,
    };
    console.log("message1", message);
    await prisma.message.create({
      data: message,
    });
    const theChat = await prisma.chat.update({
      where: {
        id: chatId,
      },
      data: {
        lastSent: id,
      },
    });
    if (!theChat) {
      throw new Error(`Chat with id ${chatId} not found`);
    }
    // console.log("theChat", theChat.members);
    // theChat.messages ? theChat.messages.push(id) : (theChat.messages = [id]);
    // theChat.lastSent = message;
    // await writeChatDB(chatDb);
    console.log("Message successfully added and chat updated.");
    return message;
  } catch (error) {
    console.log("Unable to add new message", error);
    throw new Error("Failed to create new message");
  }
}
