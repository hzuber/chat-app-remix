import { promises as fs } from "fs";
import { fileURLToPath } from "url";
import path from "path";
import { Chat } from "types";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DB_PATH = path.resolve(__dirname, "db.chats.json");

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
