import {
  PrismaClient,
  User as PrismaUser,
  UserChat as PrismaUserChat,
  Chat as PrismaChat,
} from "@prisma/client";
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";
import { Icon, Response, User, UserChat } from "types";
import { prismaUserToUser } from "server/general/prismaMapping";

const prisma = new PrismaClient();

export async function hashPassword(password: string) {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

export async function comparePasswords(password: string, hash: string) {
  // console.log("bcrypt", password, hash);
  return await bcrypt.compare(password, hash);
}

export const checkUserExists = async (email: string) => {
  const exists =
    (await prisma.user.count({
      where: { email },
    })) > 0;
  return exists;
};

export async function signup(
  email: string,
  password: string,
  username?: string,
  icon?: Icon | null
) {
  let user: User;
  let prismaUser: PrismaUser;
  if (await checkUserExists(email)) {
    throw new Error(
      "A user with this email already exists <a className='text-red-400' href='/login'>Login</a>"
    );
  } else {
    const hashedPassword = await hashPassword(password);
    const id = uuidv4();
    prismaUser = {
      id,
      email,
      password: hashedPassword,
      username: username ? username : null,
      iconIcon: icon ? icon.icon : null,
      iconBg: icon ? icon.background : null,
    };
    user = {
      id,
      email,
      password: hashedPassword,
      username: username ? username : null,
      icon: icon ? { icon: icon.icon, background: icon.background } : null,
      chats: [],
    };

    await prisma.user.create({
      data: prismaUser,
    });
  }
  return user;
}

export async function login(email: string, password: string) {
  const user: PrismaUser | null = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (!user) {
    throw new Error("User not found");
  }
  const comparison = await comparePasswords(password, user.password);
  if (!comparison) {
    throw new Error("Incorrect password");
  } else {
    return await prismaUserToUser(user);
  }
}

//getAllUsers
export async function getAllUsers() {
  const data: PrismaUser[] | null = await prisma.user.findMany();
  const users = [];
  if (!data) {
    throw new Error("Unable to read database");
  }
  for await (const u of data) {
    const user = await prismaUserToUser(u);
    users.push(user);
  }
  return users;
}

//getUser(id)
export async function getUser(id: string) {
  const data: PrismaUser | null = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
  if (!data) {
    throw new Error("getUser : User not found" + id);
  } else {
    const user = await prismaUserToUser(data);
    return user;
  }
}

//update function
export async function updateUser(id: string, updatedData: Partial<User>) {
  const updatedPrismaData: Partial<PrismaUser> = {};
  const user = await getUser(id);
  if (!user) {
    throw new Error("User not found");
  }
  if (updatedData.password) {
    const hashedPassword = await hashPassword(updatedData.password);
    updatedPrismaData.password = hashedPassword;
  }
  if (updatedData.icon) {
    updatedPrismaData.iconIcon = updatedData.icon.icon;
    updatedPrismaData.iconBg = updatedData.icon.background;
  }
  if (updatedData.username) {
    updatedPrismaData.username = updatedData.username;
  }
  const updatedPrismaUser: PrismaUser = await prisma.user.update({
    where: {
      id: id,
    },
    data: {
      ...updatedPrismaData,
    },
  });
  const updatedUser = await prismaUserToUser(updatedPrismaUser);
  return updatedUser;
}

//soft delete function

//hard delete function
