import { promises as fs } from "fs";
import { fileURLToPath } from "url";
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import { Icon, Response, User } from "types";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DB_PATH = path.resolve(__dirname, "db.users.json");

export async function hashPassword(password: string) {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

export async function comparePasswords(password: string, hash: string) {
  // console.log("bcrypt", password, hash);
  return await bcrypt.compare(password, hash);
}

async function readDB() {
  try {
    const data = await fs.readFile(DB_PATH, "utf-8");

    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

async function writeDB(User: User) {
  try {
    await fs.writeFile(DB_PATH, JSON.stringify(User, null, 2), "utf-8");
  } catch (err) {
    console.error("Error writing to database:", err);
  }
}

export const checkUserExists = async (email: string) => {
  const db = await readDB();
  (await db.user.count({
    where: { email },
  })) > 0;
};

export async function signup(
  email: string,
  password: string,
  username?: string,
  icon?: Icon
) {
  const db = await readDB();
  let user: User;
  const response: Response = { status: 200, data: { user: null }, error: null };
  if (db.find((user: User) => user.email === email)) {
    response.error =
      "A user with this email already exists <a className='text-red-400' href='/login'>Login</a>";
    response.status = 401;
  } else {
    const hashedPassword = await hashPassword(password);
    const id = uuidv4();
    user = {
      id,
      email,
      password: hashedPassword,
      username: username ? username : null,
      icon: icon ? { icon: icon.icon, background: icon.background } : null,
      chats: [],
    };
    db.push(user);
    await writeDB(db);
    response.data.user = user;
  }
  return response;
}

export async function login(email: string, password: string) {
  const db = await readDB();
  const user = db.find((user: User) => user.email === email);
  if (!user) {
    throw new Error("User not found");
  }
  const comparison = await comparePasswords(password, user.password);
  if (!comparison) {
    throw new Error("Incorrect password");
  } else {
    return user;
  }
}

//getAllUsers
export async function getAllUsers() {
  // console.log("run get all users");
  const db = await readDB();
  if (!db) {
    throw new Error("Unable to read database");
  }
  return db;
}

//getUser(id)
export async function getUser(id: string) {
  const db = await readDB();
  const user = db.find((user: User) => user.id === id);
  // console.log("get user", id);
  if (!user) {
    throw new Error("User not found");
  } else {
    return user;
  }
}

//update function
export async function updateUser(id: string, updatedData: Partial<User>) {
  console.log("update user", id, updatedData);
  const db = await readDB();
  const index = db.findIndex((user: User) => user.id === id);

  if (index === -1) {
    console.log("User not found");
    throw new Error("User not found");
  }

  console.log("UserIndex", index);
  if (updatedData.password) {
    const hashedPassword = await hashPassword(updatedData.password);
    updatedData.password = hashedPassword;
  }
  db[index] = { ...db[index], ...updatedData };
  await writeDB(db);
  return db[index];
}

//soft delete function

//hard delete function
