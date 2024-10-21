import { promises as fs } from "fs";
import { fileURLToPath } from "url";
import path from "path";
import { Chat, ChatObject, Icon, Response, User, UserChat } from "types";
import { v4 as uuidv4 } from "uuid";
import { getUser } from "server/users/utils";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DB_PATH = path.resolve(__dirname, "db.chats.json");
const USER_DB_PATH = path.resolve(__dirname, "../users/db.users.json");

async function readDB() {
  try {
    const data = await fs.readFile(DB_PATH, "utf-8");

    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

async function writeDB(Chat: Chat) {
  try {
    await fs.writeFile(DB_PATH, JSON.stringify(Chat, null, 2), "utf-8");
  } catch (err) {
    console.error("Error writing to database:", err);
  }
}

async function readUserDB() {
  try {
    const data = await fs.readFile(USER_DB_PATH, "utf-8");

    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

async function writeUserDB(user: User) {
  try {
    await fs.writeFile(USER_DB_PATH, JSON.stringify(user, null, 2), "utf-8");
  } catch (err) {
    //console.error("Error writing to database:", err);
  }
}

export async function getAllChats() {
  const db = await readDB();
  if (!db) {
    throw new Error("Unable to read database");
  }
  return db;
}

export async function getAllUsersChats(id: string) {
  const db = await readDB();
  const usersChats: Chat[] = db.filter((c: Chat) => c.members.includes(id));
  return usersChats;
}

export async function getChat(id: string) {
  const db = await readDB();
  const chat = db.find((c: Chat) => c.id === id);
  if (!chat) {
    throw new Error("Chat not found");
  } else {
    return chat;
  }
}

export async function getPrivateChat(members: string[]) {
  const db = await readDB();
  const chat = db.find(
    (chat: Chat) =>
      chat.type === "private_chat" &&
      chat.members.includes(members[0]) &&
      chat.members.includes(members[1])
  );
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
