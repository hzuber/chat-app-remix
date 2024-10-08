import { LoaderFunctionArgs } from "@remix-run/node";
import { authenticator } from "server/services/auth.server";
import { Layout } from "~/components/Layout";
import { Outlet, useLoaderData, useOutletContext } from "@remix-run/react";
import { useContext, useEffect, useState } from "react";
import { SocketContext, useSocket } from "~/socket.context";
import { useUserContext } from "~/contexts/userContext";
import { getAllUsers, getUser } from "server/users/utils";
import { User } from "../../types";
import { addPrivateChat, getAllChats, getChat } from "server/chats/utils";
import ChatsList from "~/components/ChatsList/ChatsList";
import IconSelection from "~/components/Modals/IconSelector";

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
      <div className="flex w-full align-stretch justify-between">
        <div className="flex flex-col w-2/6  py-12 px-3 bg-amber-100">
          <div className="flex justify-between">
            <p>Chats</p>
            <div className="flex justify-evenly">
              <p className="p-2">Add New</p>
              <p className="p-2">Filter</p>
            </div>
          </div>

          {user && <ChatsList user={user} class={"w-4/6"} />}
        </div>
        <div className="w-4/6 py-12 px-3">
          <Outlet />
          <IconSelection onSaveIcon={() => console.log("save")} />
        </div>
      </div>
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
