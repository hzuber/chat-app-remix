import { Chat, chat, ChatObject } from "types";
import { UserIcon } from "../UserIcon";
import { useUserContext } from "~/contexts/userContext";
import { translateDates } from "~/utils/general";

interface Props {
  chat: ChatObject;
}

const ChatsListItem = ({ chat }: Props) => {
  const { users } = useUserContext();
  const lastSent = chat.chat.lastSent;
  const translateDate = lastSent && translateDates(lastSent.date);
  const lastSentAuthor = users.find((u) => u.id === lastSent?.author);
  const chatIcon = chat.icon && chat.icon.icon ? chat.icon.icon : null;
  const chatIconBg =
    chat.icon && chat.icon.background ? chat.icon.background : null;
  // console.log("chatslistitem last", chat.chat);
  return (
    <div className="my-3 mb-4">
      <div className="flex items-center">
        <UserIcon
          icon={chatIcon}
          background={chatIconBg}
          width={"30px"}
          height={"30px"}
        />
        <div className="mx-3 w-full">
          <p className="text-lg font-semibold">{chat.name}</p>
          {lastSent && (
            <div className="flex justify-between items-center">
              <p className="flex max-h-8">
                {lastSentAuthor && (
                  <span className="font-medium">
                    {lastSentAuthor?.username
                      ? lastSentAuthor.username
                      : lastSentAuthor.email}
                  </span>
                )}
                :{" "}
                {lastSent && (
                  <span className="max-h-6 text-ellipsis truncate max-w-40">
                    &nbsp;{lastSent.text}
                  </span>
                )}
              </p>
              {translateDate && (
                <p className="text-xs h-full">
                  {!translateDate.isToday && `${translateDate.showDate} `}
                  {translateDate.showTime}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatsListItem;
