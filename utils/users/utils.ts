import { promises as fs } from "fs";
import { fileURLToPath } from "url";
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import { Response, User } from "types";
import { AuthorizationError } from "remix-auth";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DB_PATH = path.resolve(__dirname, "db.users.json");

export async function hashPassword(password: string) {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

export async function comparePasswords(password: string, hash: string) {
  return bcrypt.compare(password, hash);
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
  icon?: string
) {
  //check if email exists
  const db = await readDB();
  let user: User;
  const response: Response = { status: 200, data: { user: null }, error: null };
  if (db.find((user: User) => user.email === email)) {
    // throw new Error(
    //   "A user with this email already exists <a href='/login'>Login</a>"
    // );
    response.error =
      "A user with this email already exists <a href='/login'>Login</a>";
    response.status = 401;
  } else {
    //password verification happens client side
    const hashedPassword = await hashPassword(password);
    const id = uuidv4();
    user = {
      id,
      email,
      password: hashedPassword,
      username: username ? username : null,
      icon: icon ? icon : null,
      chats: [],
    };
    db.push(user);
    await writeDB(db);
    response.data.user = user;
  }
  return response;
}

export async function login(email: string, password: string) {
  // let response: Response;
  console.log("login ran");
  const db = await readDB();
  console.log("db is ", db);
  const user = db.find((user: User) => user.email === email);
  if (!user || !(await bcrypt.compare(password, user.password))) {
    // response = { status: 401, error: "Invalid credentials", data: null };
    console.log("no user");
    throw new Error("User not found");
  } else {
    // response = {
    //   status: 200,
    //   error: null,
    //   data: user,
    // };
    console.log("login user", user);
    return user;
  }
  // return response;
}
