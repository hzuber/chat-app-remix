import { UserChat, User, ChatObject } from "types";
import ChatsListItem from "./ChatsListItem";
import { NavLink } from "@remix-run/react";

interface Props {
  user: User;
  class?: string;
  userChats: UserChat[] | null;
  chatObjects: ChatObject[] | null;
}

const ChatsList = (props: Props) => {
  const { chatObjects } = props;
  return (
    <div className={`flex flex-col ${props.class} `}>
      {chatObjects &&
        chatObjects.map((chat) => (
          <NavLink
            key={chat.chat.id}
            to={`/chats/${chat.chat.id}`}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            <ChatsListItem chat={chat} />
          </NavLink>
        ))}
    </div>
  );
};
export default ChatsList;
