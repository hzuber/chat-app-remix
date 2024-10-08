import { User } from "types";
import ChatsListItem from "./ChatsListItem";
import { NavLink } from "@remix-run/react";

interface Props {
  user: User;
  class?: string;
}

const ChatsList = (props: Props) => {
  const { user } = props;
  return (
    <div className={`flex flex-col ${props.class}`}>
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
