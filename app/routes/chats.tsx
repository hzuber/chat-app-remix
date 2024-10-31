import { LoaderFunctionArgs } from "@remix-run/node";
import { authenticator } from "server/services/auth.server";
import { PageLayout } from "~/components/PageLayout";
import { Outlet, useLoaderData, useOutletContext } from "@remix-run/react";
import { useContext, useEffect, useState } from "react";
import { SocketContext, useSocket } from "~/socket.context";
import { useUserContext } from "~/contexts/userContext";
import { getAllUsers, getUser } from "server/users/utils";
import { Chat, ChatObject, User, UserChat } from "../../types";
import {
  addChat,
  addPrivateChat,
  createChatObject,
  getAllChats,
  getAllUsersChats,
  getChat,
  getUsersChats,
} from "server/chats/utils";
import ChatsList from "~/components/ChatsList/ChatsList";
import { ChatProvider } from "~/contexts/chatContext";
import { getUsersUserChats } from "server/chats/userChatsUtils";

export default function Chats() {
  const { allUsers, allChats, users, activeChat, usersChats, chatObjects } =
    useLoaderData<typeof loader>();
  const chats = chatObjects as ChatObject[] | null;
  const chat = activeChat as ChatObject | null;
  const userChats = usersChats as UserChat[];
  const { user } = useUserContext();

  return (
    // <ChatProvider initialChats={chats} initialChat={chat}>
    <PageLayout>
      <div className="flex w-full align-stretch justify-between h-full">
        <div className="flex flex-col w-2/6  border-r-1 border-slate-100 border-solid">
          <div className="flex justify-between border-b-1 border-slate-100 border-solid p-3">
            <p>Chats</p>
            <div className="flex justify-evenly">
              <button aria-label="Write new message" className="p-2">
                <span className="material-symbols-outlined">note_add</span>
              </button>

              <button aria-label="Filter chats" className="p-2">
                <span className="material-symbols-outlined">filter_list</span>
              </button>
            </div>
          </div>

          {user && (
            <ChatsList
              class={" p-3"}
              user={user}
              userChats={userChats}
              chatObjects={chats}
            />
          )}
        </div>
        <div className="w-4/6 p-3 items-stretch flex max-h-screen">
          <Outlet />
        </div>
      </div>
    </PageLayout>
    // </ChatProvider>
  );
}

export async function loader({ request, params }: LoaderFunctionArgs) {
  const auth = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
  const chatObjects: ChatObject[] = [];
  const allUsers = await getAllUsers();
  const users: User[] = allUsers.filter((u: User) => u.id !== auth.id);
  // console.log("users", users);
  await createPrivateChats(users, auth);
  const activeChat =
    params.chatId && (await createChatObject(params.chatId, auth.id));
  const usersChats = await getUsersUserChats(auth.id);
  for await (const chat of usersChats) {
    const obj = await createChatObject(chat.chatId, auth.id);
    chatObjects.push(obj);
  }
  // console.log(chatObjects);
  return { allUsers, users, activeChat, usersChats, chatObjects };
}

async function createPrivateChats(users: User[], auth: User) {
  for (const user of users) {
    // console.log("Creating private chat with user: ", user.email);
    await addChat(
      auth.id,
      [auth.id, user.id],
      null,
      null,
      null,
      "private_chat",
      null
    );
  }
}
