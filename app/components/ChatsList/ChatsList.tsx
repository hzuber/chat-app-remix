import React from "react";
import { User, UserChat } from "types";
import ChatsListItem from "./ChatsListItem";
import { useChatContext } from "~/contexts/chatContext";

interface Props {
  user: User;
}

const ChatsList = ({ user }: Props) => {
  const { setActiveUserChat } = useChatContext();

  const handleChatClick = (chat: UserChat) => {
    setActiveUserChat(chat);
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
    chat: UserChat
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      handleChatClick(chat);
    }
  };

  return (
    <div className="flex flex-col">
      {user.chats &&
        user.chats.map((chat) => (
          <div
            key={chat.chatId}
            onClick={() => {
              handleChatClick(chat);
            }}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => handleKeyDown(event, chat)}
          >
            <ChatsListItem userChat={chat} />
          </div>
        ))}
    </div>
  );
};
export default ChatsList;
