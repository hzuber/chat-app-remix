import { useUserContext } from "~/contexts/userContext";
import { Message } from "types";
import { translateDates } from "~/utils/general";
import { forwardRef, useContext, useEffect, useState } from "react";
import { socketContext } from "~/socket.context";
import { useFetcher } from "@remix-run/react";

interface Props {
  message: Message;
  isPrivate: boolean;
  isRead?: boolean | null;
  userChatId?: string | null;
}


const SingleMessage = forwardRef<HTMLDivElement, Props>(({ message, isPrivate, isRead, userChatId }, ref) => {
  const { user, users } = useUserContext();
  const socket = useContext(socketContext);
  const fetcher = useFetcher();
  const [markedAsRead, setMarkedAsRead] = useState(isRead)

  const author = users?.find((u) => u.id === message.author);
  const { showDate, showTime, isToday } = translateDates(message.date);
  const align = message.author === "i-am-the-author" ? "self-end" : author && author.id === user?.id ? "self-end" : "self-start";

  const markRead = (data: { [key: string]: string }) => {
    if (markedAsRead) {
      console.log("markedAsRead")
      return
    }
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => formData.append(key, value));
    formData.append("action", "mark-as-read")
    console.log("markMessageRead", data, formData)
    fetcher.submit(formData, { method: "post", action: `/chats/${message.chatId}` });
    setMarkedAsRead(true)
    console.log(markedAsRead, formData)
  };

  useEffect(() => {
    if (socket) {
      socket.on("message_marked_read", ({ messageId, chatId, userChatId }) => {
        markRead({ messageId, userChatId })
        console.log("message_marked_read", messageId, chatId, userChatId);
      });
    }

    return () => {
      socket && socket.off("message_marked_read");
    };
  }, [socket, markedAsRead]);


  return (
    <div
      id={message.id}
      ref={ref}
      data-message-id={message.id}
      data-author-id={author && author.id}
      data-is-read={`read-${markedAsRead}`}
      className={`${align} p-3 m-1 bg-white flex flex-col min-w-40`}
    >
      {!isPrivate && author && author.id !== user?.id && (
        <p>
          <strong>{author.username ? author.username : author.email}</strong>{" "}
        </p>
      )}
      {message.text}
      <div className="flex justify-between flex-row-reverse items-center">
        <p className="text-xs self-end">
          {!isToday && `${showDate} `}
          {showTime}
        </p>
        {author?.id === user?.id &&
          <span className="ms-2 flex justify-start items-center">
            {markedAsRead ? (
              <span className="material-symbols-outlined text-sky-500">done_all</span>
            ) : (
              <span className="material-symbols-outlined text-gray-600">done_all</span>
            )}
          </span>}
      </div>
    </div>
  )
})
export default SingleMessage;
