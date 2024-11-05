import { useEffect, useRef, useContext } from "react";
import { Message, UserChat } from "types";
import { socketContext } from "~/socket.context"
import SingleMessage from "./SingleMessage";
import { useUserContext } from "~/contexts/userContext";

interface Props {
  messages: Message[];
  isPrivate: boolean;
  chatId?: string | null;
  lastRead?: Message | null;
  userChatId?: string | null;
  otherMember?: UserChat | null | undefined
}

export const ChatMessageContainer = ({ messages, chatId, isPrivate, lastRead, userChatId, otherMember }: Props) => {
  const socket = useContext(socketContext)
  const { user } = useUserContext();
  const messageRefs = useRef<Array<HTMLDivElement | null>>([]);
  const lastReadDate = otherMember?.lastRead && new Date(otherMember?.lastRead.date)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const notRead = entry.target.getAttribute("data-is-read") === "read-false" || entry.target.getAttribute("data-is-read") === "read-null"
        // console.log("1", notRead, entry.target.getAttribute("data-message-id"))
        if (entry.isIntersecting && notRead) {
          const messageId = entry.target.getAttribute("data-message-id");
          const authorId = entry.target.getAttribute("data-author-id");
          // console.log("2", authorId, messageId, user?.id, authorId === user?.id)
          if (authorId !== user?.id) {
            socket?.emit("message_read", { messageId, chatId, userChatId });
            console.log("3", authorId, messageId)
          }
        }
      })
    },
      { threshold: 0.5 }
    );
    messageRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [messages, socket, chatId, user?.id])

  return (

    <div className="flex flex-col-reverse max-h-full overflow-y-scroll pb-5 ">
      {messages.map((mes, i) => {
        const date = new Date(mes.date)
        const now = new Date()
        const isRead = lastReadDate && date <= lastReadDate
        console.log(mes.id)
        return <SingleMessage key={`${mes.id}-${user?.id}`} message={mes} isPrivate={isPrivate} userChatId={userChatId} ref={(el: HTMLDivElement) => (messageRefs.current[i] = el)} isRead={isRead} />;
      })}
    </div>
  );
};
