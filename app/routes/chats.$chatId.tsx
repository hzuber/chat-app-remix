import { LoaderFunctionArgs } from "@remix-run/node";
import { authenticator } from "server/services/auth.server";
import { useLoaderData, useOutletContext } from "@remix-run/react";
import { useContext, useEffect } from "react";
import { socketContext } from "~/socket.context";
import { useUserContext } from "~/contexts/userContext";
import { getChat } from "server/chats/utils";
import { Chat, UserChat } from "types";

export default function ActiveChat() {
  const { user } = useUserContext();
  const activeChat = useLoaderData<typeof loader>();
  const chat = activeChat as Chat;
  const userChat: UserChat | null | undefined =
    user?.chats && user.chats.find((c) => c.chatId === chat.id);
  const socket = useContext(socketContext);
  //   console.log("chat socket", socketContext);
  useEffect(() => {
    if (!socket) return;

    socket.on("event", (data) => {
      console.log(data);
    });

    socket.emit("something", "ping");
  }, [socket]);
  return (
    <div>
      {chat.id}
      {userChat && <p>{userChat.chatName}</p>}
    </div>
  );
}

export async function loader({ request, params }: LoaderFunctionArgs) {
  const chatId = params.chatId;
  const activeChat: Chat = chatId && (await getChat(chatId));
  await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
  return activeChat;
}
