import { useContext, useEffect } from "react";
import { socketContext } from "~/socket.context";
import { useUserContext } from "~/contexts/userContext";
import { useChatContext } from "~/contexts/chatContext";

export default function ChatContainer() {
  const { user } = useUserContext();
  const { activeChat } = useChatContext();
  const socket = useContext(socketContext);
  console.log("chat container", user, activeChat);
  useEffect(() => {
    if (!socket) return;

    socket.on("event", (data) => {
      console.log(data);
    });

    socket.emit("something", "ping");
  }, [socket]);
  return <div>chat</div>;
}
