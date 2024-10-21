import { useUserContext } from "~/contexts/userContext";
import { Message } from "types";
import { translateDates } from "~/utils/general";

interface Props {
  message: Message;
  isPrivate: boolean;
}

const MessageContainer = ({ message, isPrivate }: Props) => {
  const { user, users } = useUserContext();
  const author = users?.find((u) => u.id === message.author);
  const { showDate, showTime, isToday } = translateDates(message.date);
  const align = author && author.id === user?.id ? "self-end" : "self-start";
  // console.log("date", message.date, showTime, messageDate);
  return (
    <div
      //   ref={(el) => (messageRefs.current[index] = el)}
      data-message-id={message.id}
      data-author-id={author && author.id}
      //   data-is-read={`read-${message.read}`}
      className={`${align} p-3 m-1 bg-white flex flex-col  min-w-40`}
    >
      {!isPrivate && author && author.id !== user?.id && (
        <p>
          <strong>{author.username ? author.username : author.email}</strong>{" "}
        </p>
      )}
      {message.text}
      <p className="text-xs self-end">
        {!isToday && `${showDate} `}
        {showTime}
      </p>
      {/* <span className="ms-2">
    {msg.read ? (
      <i className="bi bi-check-all text-primary"></i>
    ) : (
      <i className="bi bi-check-all text-muted"></i>
    )}
  </span> */}
    </div>
  );
};
export default MessageContainer;
