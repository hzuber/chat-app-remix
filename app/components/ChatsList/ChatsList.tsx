import { User } from "types";
import ChatsListItem from "./ChatsListItem";
import { NavLink } from "@remix-run/react";

interface Props {
  user: User;
}

const ChatsList = ({ user }: Props) => {
  return (
    <div className="flex flex-col">
      {user.chats &&
        user.chats.map((chat) => (
          <NavLink
            key={chat.chatId}
            to={`/chats/${chat.chatId}`}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            <ChatsListItem userChat={chat} />
          </NavLink>
        ))}
    </div>
  );
};
export default ChatsList;
