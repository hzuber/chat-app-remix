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
    const mem = await prisma.userChat.findMany({
      where: {
        chatId: prismaChat.id,
      },
      select: {
        userId: true,
        isAdmin: true,
      },
    });
    const pushMember = (member: { userId: string; isAdmin: boolean }) => {
      members.push(member.userId);
      member.isAdmin && admins.push(member.userId);
    };
    mem.map((m) => pushMember(m));
    const prismaMessages = await prisma.message.findMany({
      where: {
        chatId: prismaChat.id,
      },
      orderBy: {
        date: "desc",
      },
    });
    prismaMessages.map((mess) => pushMessages(mess));
    const pushMessages = (mess: PrismaMessage) => {
      const message: Message = {
        id: mess.id,
        author: mess.author,
        date: mess.date,
        chatId: mess.chatId,
        text: mess.text,
        status: prismaStatusToStatus(mess.status),
        dateEdited: mess.dateEdited,
      };
      messages.push(message);
    };
    chat = {
      id: prismaChat.id,
      members: members,
      icon: createIcon(prismaChat.iconIcon, prismaChat.iconBg),
      description: prismaChat.description,
      chatName: prismaChat.chatName,
      type: prismaChatTypeToType(prismaChat.type),
      lastSent: messages && messages.length ? messages[length - 1] : null,
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
