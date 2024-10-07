import { promises as fs } from "fs";
import { fileURLToPath } from "url";
import path from "path";
import { Chat, Message } from "types";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DB_PATH = path.resolve(__dirname, "db.messages.json");

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
