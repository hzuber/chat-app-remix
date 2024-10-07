import { LoaderFunctionArgs } from "@remix-run/node";
import { authenticator } from "server/services/auth.server";
import { Layout } from "~/components/Layout";
import { Outlet, useLoaderData } from "@remix-run/react";
import { useContext, useEffect, useState } from "react";
import { SocketContext, useSocket } from "~/socket.context";
import { useUserContext } from "~/contexts/userContext";
import { getAllUsers, getUser } from "server/users/utils";
import { Chat, User, UserChat } from "../../types";
import { addPrivateChat, getAllChats, getChat } from "server/chats/utils";
import ChatsList from "~/components/ChatsList/ChatsList";
import { ChatProvider } from "~/contexts/chatContext";
import ChatContainer from "~/components/ChatContainer/ChatContainer";

export default function Chats() {
  const { allUsers, allChats, users, activeChat } =
    useLoaderData<typeof loader>();
  const { user } = useUserContext();
  console.log("user is", user);
  // const currentUser = user as User;
  // const auth = useLoaderData<typeof loader>();
  //   const socket = useContext(SocketContext);
  //   useEffect(() => {
  //     if (!socket) return;

  //     socket.on("event", (data) => {
  //       console.log(data);
  //     });

  //     socket.emit("something", "ping");
  //   }, [socket]);
  //console.log("chat auth", user, users, allUsers, allChats);
  return (
    <Layout>
      <ChatProvider initialChat={activeChat} initialChats={allChats}>
        <div className="flex w-full">
          <div className="flex flex-col w-2/6">
            <p>Add New</p>
            <p>The chats</p>
            {user && <ChatsList user={user} />}
          </div>
          {/* <Outlet /> */}
          <ChatContainer />
        </div>
      </ChatProvider>
    </Layout>
  );
}

export async function loader({ request, params }: LoaderFunctionArgs) {
  const auth = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
  const allUsers = await getAllUsers();
  const users: User[] = allUsers.filter((u: User) => u.id !== auth.id);
  const activeChat = params.chatId && (await getChat(params.chatId));
  await createPrivateChats(users, auth);
  const allChats = await getAllChats();
  const user = await getUser(auth.id);
  return { user, allUsers, allChats, users, activeChat };
}

async function createPrivateChats(users: User[], auth: User) {
  for (const user of users) {
    //console.log("Creating private chat with user: ", user.email);
    await addPrivateChat([auth.id, user.id], null);
  }
}
