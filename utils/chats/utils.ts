import { promises as fs } from "fs";
import { fileURLToPath } from "url";
import path from "path";
import { Chat, Response, User, UserChat } from "types";
import { v4 as uuidv4 } from "uuid";
import { getUser } from "utils/users/utils";

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
    //console.error("Error writing to database:", err);
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

export async function getPrivateChat(members: string[]) {
  const db = await readDB();
  const response: Response = { status: 200, data: { chat: null }, error: null };
  const chat = db.find(
    (chat: Chat) =>
      chat.type === "private_chat" &&
      chat.members.includes(members[0]) &&
      chat.members.includes(members[1])
  );
  if (!chat) {
    throw new Error("Chat not found");
  } else {
    response.data.chat = chat;
  }
  return response;
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

export async function addPrivateChat(members: string[], icon: string | null) {
  const db = await readDB();
  console.log("run add private chat", members);

  const response: Response = { status: 200, data: { chat: null }, error: null };

  // Check if a private chat between these two users already exists
  const existingChat = db.find(
    (chat: Chat) =>
      chat.type === "private_chat" &&
      chat.members.length === members.length && // Ensure both members are included
      chat.members.every((member) => members.includes(member)) // Checks both members
  );

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

    db.push(newChat); // Add new chat to database
    console.log("push new chat", db);

    await writeDB(db); // Persist the updated database
    await createUserChat(newChat);
    response.data.chat = newChat;
  }

  console.log("add private chat response", response);
  return response;
}

export async function createUserChat(chat: Chat) {
  let title: string;
  let admin: boolean;
  let icon: string | null;

  const userDB = await readUserDB();
  console.log("create user chat", chat);

  for (const userId of chat.members) {
    const chatUser: User = userDB.find((u: User) => userId === u.id);
    console.log("a member in create user chat", chatUser);

    if (chat.type === "private_chat") {
      const otherId = chat.members.find((id) => userId !== id);
      const otherUser: User = otherId && (await getUser(otherId));
      if (otherUser) {
        title = otherUser.username ? otherUser.username : otherUser.email;
        icon = otherUser.icon;
      } else {
        title = chat.chatName ? chat.chatName : "Unnamed Chat";
        icon = chat.icon;
      }
      admin = true;
    } else {
      title = chat.chatName ? chat.chatName : "Unnamed Chat";
      admin = chat.admins.includes(userId);
      icon = chat.icon;
    }

    const userChat: UserChat = {
      chatName: title,
      lastRead: null,
      style: null,
      admin,
      deleted: false,
      chatId: chat.id,
      icon,
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

  // Write the updated userDB after modifying all users
  await writeUserDB(userDB);
  console.log("Updated userDB with new chats");
}
