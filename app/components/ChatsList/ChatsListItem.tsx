import { UserChat } from "types";

interface Props {
  userChat: UserChat;
}

const ChatsListItem = ({ userChat }: Props) => {
  return (
    <div>
      <div>
        <div className="w-10 h-10">
          {/* {userChat.icon ? userChat.icon : <BiBiBumSVG width={100} />} */}
        </div>
        <h6>{userChat.chatName}</h6>
      </div>
      {userChat.lastSent && (
        <p>
          {userChat.lastSent && (
            <span>
              {userChat.lastSent.author.username
                ? userChat.lastSent.author.username
                : userChat.lastSent.author.email}
            </span>
          )}
          {userChat.lastSent && <span>{userChat.lastSent.text}</span>}
        </p>
      )}
    </div>
  );
};

export default ChatsListItem;
