import { promises as fs } from "fs";
import { fileURLToPath } from "url";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import { Chat, Message, User } from "types";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DB_PATH = path.resolve(__dirname, "db.messages.json");
const CHAT_DB_PATH = path.resolve(__dirname, "../chats/db.chats.json");

let isWriting = false;

async function readDB(): Promise<Message[]> {
  try {
    const data = await fs.readFile(DB_PATH, "utf-8");
    return JSON.parse(data) as Message[];
  } catch (err) {
    console.error("Error reading from database:", err);
    return [];
  }
}

async function writeDB(db: Message[]) {
  while (isWriting) {
    // Wait until the previous write is done
    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  isWriting = true;
  try {
    await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2), "utf-8");
    console.log("Messages database written successfully.");
  } catch (err) {
    console.error("Error writing to database:", err);
  }
}

async function readChatDB(): Promise<Chat[]> {
  try {
    const data = await fs.readFile(CHAT_DB_PATH, "utf-8");
    return JSON.parse(data) as Chat[];
  } catch (err) {
    console.error("Error reading from chat database:", err);
    return [];
  }
}

async function writeChatDB(chatDb: Chat[]) {
  while (isWriting) {
    // Wait until the previous write is done
    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  isWriting = true;
  try {
    await fs.writeFile(CHAT_DB_PATH, JSON.stringify(chatDb, null, 2), "utf-8");
    console.log("Chat database written successfully.");
  } catch (err) {
    console.error("Error writing to database:", err);
  }
}

export async function getAllMessages() {
  const db = await readDB();
  if (!db) {
    throw new Error("Unable to read database");
  }
  return db;
}

export async function getMessage(id: string) {
  const db = await readDB();
  const message = db.find((m: Message) => m.id === id);
  console.log("get Message", id);
  if (!message) {
    throw new Error("Message not found");
  } else {
    return message;
  }
}

export async function getChatMessages(id: string) {
  const messageDB = await getAllMessages();
  const messages: Message[] = messageDB.filter((m: Message) => m.chatId === id);
  return messages;
}

export async function createNewMessage(
  author: User,
  chatId: string,
  text: string,
  status: "draft" | "live" | "edited" | "deleted"
) {
  const db = await readDB();
  const chatDb = await readChatDB();
  const id = uuidv4();
  const now = new Date();
  try {
    const message: Message = {
      id,
      author: author.id,
      chatId,
      text,
      status,
      date: now,
      dateEdited: now,
    };
    console.log("message1", message);
    db.push(message);
    await writeDB(db);
    const theChat: Chat | undefined = chatDb.find((c: Chat) => c.id === chatId);
    if (!theChat) {
      throw new Error(`Chat with id ${chatId} not found`);
    }
    console.log("theChat", theChat.members);
    theChat.messages ? theChat.messages.push(id) : (theChat.messages = [id]);
    theChat.lastSent = message;
    await writeChatDB(chatDb);
    console.log("Message successfully added and chat updated.");
    return message;
  } catch (error) {
    console.log("Unable to add new message", error);
    throw new Error("Failed to create new message");
  }
}
