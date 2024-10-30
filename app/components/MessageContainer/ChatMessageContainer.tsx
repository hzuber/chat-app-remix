import React from "react";
import { Message } from "types";
import SingleMessage from "./SingleMessage";

interface Props {
  messages: Message[];
  isPrivate: boolean;
}

export const ChatMessageContainer = ({ messages }: Props) => {
  return (
    <>
      {messages.map((mes) => {
        return <SingleMessage key={mes.id} message={mes} isPrivate />;
      })}
    </>
  );
};
