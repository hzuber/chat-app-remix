import React from "react";
import { Chat, User, UserChat } from "types";

interface Props {
  user: User;
}

const ChatsList = ({ user }: Props) => {
  console.log(user, user.chats);
  return (
    <div>
      {user.chats &&
        user.chats.map((chat) => (
          <>
            <p>{chat.chatName}</p>
          </>
        ))}
    </div>
  );
};
export default ChatsList;
