// import { Chat, User } from "types";
import ChatsListItem from "./ChatsListItem";
import { NavLink } from "@remix-run/react";
// import { useContext } from "react";
// import { UserProvider, useUserContext } from "~/contexts/userContext";
// import { useChatContext } from "~/contexts/chatContext";

interface Props {
  // user: User;
  class?: string;
  // chats: Chat[] | null;
}

const ChatsList = (props: Props) => {
  // const { user, chats } = props;
  // const {user} = useUserContext()
  // const { chats } = useChatContext();
  return (
    <div className={`flex flex-col ${props.class} `}>
      {/* {chats &&
        chats.map((chat) => (
          <NavLink
            key={chat.chat.id}
            to={`/chats/${chat.chat.id}`}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            <ChatsListItem chat={chat} />
          </NavLink>
        ))} */}
    </div>
  );
};
export default ChatsList;
