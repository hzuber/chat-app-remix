import { useEffect, useRef } from "react";
import { Message } from "types";
import SingleMessage from "./SingleMessage";

interface Props {
  messages: Message[];
  isPrivate: boolean;
}

export const ChatMessageContainer = ({ messages }: Props) => {


  return (

    <div className="flex flex-col-reverse max-h-full overflow-y-scroll pb-5 ">
      {messages.map((mes) => {
        return <SingleMessage key={mes.id} message={mes} isPrivate />;
      })}
    </div>
  );
};
