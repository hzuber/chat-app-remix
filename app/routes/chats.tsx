import { LoaderFunctionArgs } from "@remix-run/node";
import { authenticator } from "~/services/auth.server";
import { Layout } from "~/components/Layout";
import { Outlet, useLoaderData } from "@remix-run/react";
import { useContext, useEffect } from "react";
import { SocketContext, useSocket } from "~/socket.context";
import { getAllUsers, getUser } from "utils/users/utils";
import { Chat, User, UserChat } from "../../types";
import { addPrivateChat, getAllChats, getPrivateChat } from "utils/chats/utils";
import ChatsList from "~/components/ChatsList/ChatsList";

export default function Chats() {
  const { auth, allUsers, allChats, users } = useLoaderData<typeof loader>();
  const currentUser = auth as User;
  // const auth = useLoaderData<typeof loader>();
  //   const socket = useContext(SocketContext);
  //   useEffect(() => {
  //     if (!socket) return;

  //     socket.on("event", (data) => {
  //       console.log(data);
  //     });

  //     socket.emit("something", "ping");
  //   }, [socket]);
  console.log("chat auth", auth, users, allUsers, allChats);
  return (
    <Layout>
      <div className="flex w-full">
        <div className="flex flex-col w-2/6">
          <p>Add New</p>
          <p>The chats</p>
          <ChatsList user={currentUser} />
        </div>
        <Outlet />
      </div>
    </Layout>
  );
}

export async function loader({ request }: LoaderFunctionArgs) {
  const auth = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
  const allUsers = await getAllUsers();
  const users: User[] = allUsers.filter((u: User) => u.id !== auth.id);
  // console.log("users are", allUsers, users);
  await createPrivateChats(users, auth);
  const allChats = await getAllChats();

  return { auth, allUsers, allChats, users };
}

async function createPrivateChats(users: User[], auth: User) {
  for (const user of users) {
    console.log("Creating private chat with user: ", user.email);
    await addPrivateChat([auth.id, user.id], null);
  }
}
