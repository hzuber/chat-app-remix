import { PrismaClient, User, Chat } from "@prisma/client";
import { ChatObject, Icon, Response, UserChat, chat } from "types";
import { v4 as uuidv4 } from "uuid";
import { getUser } from "server/users/utils";

const prisma = new PrismaClient();

export async function getAllChats() {
  try {
    const data = await prisma.chat.findMany();

    return data;
  } catch (err) {
    return [];
  }
}

export async function addChats(chats: Chat[]) {
  try {
    await prisma.chat.createMany({ data: chats });
  } catch (err) {
    console.error("Error writing to database:", err);
  }
}

export async function addChat(chat: Chat) {
  try {
    await prisma.chat.create({ data: chat });
  } catch (err) {
    console.error("Error writing to database:", err);
  }
}

async function readUserDB() {
  try {
    const data = await prisma.user.findMany();

    return data;
  } catch (err) {
    return [];
  }
}

async function writeUserDB(users: User[]) {
  try {
    await prisma.chat.createMany({ data: users });
  } catch (err) {
    console.error("Error writing to user database:", err);
  }
}

export async function getChat(id: string) {
  const chat = await prisma.chat.findUnique({
    where: { id },
  });
  if (!chat) {
    throw new Error("Chat not found");
  } else {
    return chat;
  }
}

export async function getPrivateChat(members: string[]) {
  const userChats = await prisma.user.findMany({
    where: {
      OR: [{ id: members[0] }, { id: members[1] }],
    },
    select: {
      userChats: {
        where: {
          chat: {
            type: "private_chat",
          },
        },
      },
    },
  });
  if (userChats.length !== 2) {
    return [];
  }
  const id = userChats[0].userChats[0].chatId;
  const chat = await prisma.chat.findUnique({
    where: {
      id: id,
    },
  });
  return chat;
}

export async function addGroupChat(
  email: string,
  password: string,
  username?: string,
  icon?: string
) {
  const db = await readDB();
  let chat: Chat;
  const response: Response = { status: 200, data: { chat: null }, error: null };
  // if (db.find((chat:Chat) => user.email === email)) {
  //   response.error =
  //     "A user with this email already exists <a className='text-red-400' href='/login'>Login</a>";
  //   response.status = 401;
  // } else {
  //   const hashedPassword = await hashPassword(password);
  //   const id = uuidv4();
  //   user = {
  //     id,
  //     email,
  //     password: hashedPassword,
  //     username: username ? username : null,
  //     icon: icon ? icon : null,
  //     chats: [],
  //   };
  //   db.push(user);
  //   await writeDB(db);
  //   response.data.user = user;
  // }
  return response;
}

export async function addPrivateChat(members: string[], icon: Icon | null) {
  const db = await readDB();
  const response: Response = { status: 200, data: { chat: null }, error: null };
  const existingChat = await getPrivateChat(members);

  if (existingChat) {
    response.error = "A private chat with these members already exists";
    response.status = 401;
  } else {
    const id = uuidv4();
    const newChat: Chat = {
      id,
      members,
      icon,
      description: null,
      chatName: null,
      lastSent: null,
      messages: [],
      admins: members,
      type: "private_chat",
    };

    db.push(newChat);
    await writeDB(db);
    await createUserChat(newChat);
    response.data.chat = newChat;
  }
  return response;
}

export async function createUserChat(chat: Chat) {
  let admin: boolean;

  const userDB = await readUserDB();

  for (const userId of chat.members) {
    const chatUser: User = userDB.find((u: User) => userId === u.id);

    if (chat.type === "private_chat") {
      admin = true;
    } else {
      admin = chat.admins.includes(userId);
    }

    const userChat: UserChat = {
      lastRead: null,
      style: null,
      admin,
      deleted: false,
      chatId: chat.id,
    };

    if (chatUser) {
      if (!chatUser.chats) {
        chatUser.chats = [userChat];
      } else if (
        !chatUser.chats.some((existingChat) => existingChat.chatId === chat.id)
      ) {
        chatUser.chats.push(userChat);
      }
    }
  }

  await writeUserDB(userDB);
}

export async function createChatObject(chatId: string, userId: string) {
  let icon: Icon | null;
  let name: string | null;
  const chat: Chat = await getChat(chatId);
  const user: User = await getUser(userId);
  const userChat = user.chats?.find((c) => c.chatId === chatId);
  if (chat.type === "private_chat") {
    const otherMemberId = chat.members.find((m) => m !== userId);
    const otherUser: User = otherMemberId && (await getUser(otherMemberId));
    icon = otherUser.icon;
    name = otherUser.username ? otherUser.username : otherUser.email;
  } else {
    icon = chat.icon;
    name = chat.chatName;
  }
  const chatObject: ChatObject = {
    chat,
    icon,
    name,
    userChat: userChat ? userChat : null,
  };
  return chatObject;
}
