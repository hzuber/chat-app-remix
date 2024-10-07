import { UserChat } from "types";

interface Props {
  userChat: UserChat;
}

const ChatsListItem = ({ userChat }: Props) => {
  return (
    <div>
      {!userChat.lastSent ? (
        <>
          <h6>{userChat.chatName}</h6>
        </>
      ) : (
        <>
          <h6>{userChat.chatName}</h6>
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
        </>
      )}
    </div>
  );
};

export default ChatsListItem;
