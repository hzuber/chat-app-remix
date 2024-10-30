// import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { authenticator } from "server/services/auth.server";
// import {
//   useLoaderData,
//   Form,
//   useActionData,
//   useFetcher,
// } from "@remix-run/react";
// import { FormEvent, useContext, useEffect, useMemo, useState } from "react";
// import { socketContext } from "~/socket.context";
// import { useUserContext } from "~/contexts/userContext";
import { createChatObject, getChat } from "server/chats/utils";
import { Chat, ChatObject, Icon, Message, User, UserChat } from "types";
import { createNewMessage, getChatMessages } from "server/messages/utils";
// import MessageContainer from "~/components/MessageContainer/MessageContainer";
// import { UserIcon } from "~/components/UserIcon";
import { getIO } from "socket.server";
// import { getUser } from "server/users/utils";
// import { useChatContext } from "~/contexts/chatContext";

import { useFetcher, useLoaderData, Form } from "@remix-run/react";
import { useContext, useEffect, useMemo, useState } from "react";
// import { socketContext } from "~/socket.context";
// import { useUserContext } from "~/contexts/userContext";
// import MessageContainer from "~/components/MessageContainer/MessageContainer";
import { UserIcon } from "~/components/UserIcon";
// import { useChatContext } from "~/contexts/chatContext";
import { ActionFunctionArgs, LoaderFunctionArgs, json } from "@remix-run/node";
import SingleMessage from "~/components/MessageContainer/SingleMessage";
import { ChatMessageContainer } from "~/components/MessageContainer/ChatMessageCOntainer";

function parseMessageDates(
  message: Omit<Message, "date" | "dateEdited"> & {
    date: string;
    dateEdited: string | null;
  }
): Message {
  return {
    ...message,
    date: new Date(message.date),
    dateEdited: message.dateEdited ? new Date(message.dateEdited) : null,
  };
}

export default function ActiveChat() {
  // const socket = useContext(socketContext);
  // const fetcher = useFetcher();
  // const { user } = useUserContext();
  // const { activeChat, setActiveChat } = useChatContext();
  // const chat = activeChat?.chat;
  // const fetcherData = useFetcher<typeof loader>();
  // console.log("fetcherData", fetcherData);
  // const newChatMessages = fetcherData.data?.chatMessages;
  const { theChat, chatMessages } = useLoaderData<typeof loader>();
  const [newMessageText, setNewMessageText] = useState("");
  const [messages, setMessages] = useState<Message[]>();
  const messageHistory = chatMessages.map(parseMessageDates);
  // const isPrivate = activeChat?.chat.type === "private_chat";

  // useEffect(() => {
  //   if (socket && chat?.id) {
  //     console.log("Joining chat:", chat.id);
  //     socket.emit("join-chat", { chatId: chat.id });
  //   }
  // }, [socket, chat?.id]);

  // useEffect(() => {
  //   if (socket) {
  //     socket.on("receive-message", (newMessage) => {
  //       console.log("message received", newMessage);
  //       setMessages((prevMessages) => [...prevMessages, newMessage.newMessage]);
  //     });
  //   }

  //   return () => {
  //     socket && socket.off("receive-message");
  //   };
  // }, [socket]);

  // const renderedMessages = useMemo(() => {
  //   console.log("Rendering message list...");
  //   return messages.map((mes: Message) => (
  //     // <MessageContainer key={mes.id} message={mes} isPrivate={isPrivate} />

  //     <MessageContainer key={mes.id} message={mes} isPrivate={false} />
  //   ));
  // }, [messages]); // Only dependent on messages

  useEffect(() => {
    // console.log("useEffect");
    const messageHistory2 = chatMessages.map(parseMessageDates);
    if (chatMessages) {
      // console.log("useEffect2", messageHistory2);
      setMessages(messageHistory2);
    }
  }, [chatMessages]);

  // useEffect(() => {
  //   console.log("fetcher state");
  //   if (fetcher.state === "submitting" || fetcher.state === "loading") {
  //     setNewMessageText(""); // Reset the input only when form is being submitted
  //   }
  // }, [fetcher.state]);

  return (
    <div className="flex p-3 w-full bg-stone-100">
      <div className="flex flex-col relative w-full bg-stone-100 pb-12">
        <div className="mb-4 p-3 w-full bg-white flex items-center">
          <UserIcon
            // icon={activeChat?.icon?.icon || null}
            // background={activeChat?.icon?.background || null}
            icon={null}
            background={null}
            width={"30px"}
            height={"30px"}
            padding={"p-2"}
          />
          {/* <h6 className="mx-3">{activeChat?.name}</h6> */}

          <h6 className="mx-3">name</h6>
        </div>
        <div className="flex flex-col max-h-full overflow-y-scroll pb-5">
          {!messages?.length ? (
            <p className="mx-auto">There are no messages in this chat yet</p>
          ) : (
            <ChatMessageContainer messages={messages} isPrivate={true} />
          )}
        </div>
        <div className="card-footer input-group absolute bottom-0 w-full">
          <Form method="post">
            <div className="w-full flex items-end">
              <input
                name="text"
                type="text"
                onChange={(e) => setNewMessageText(e.target.value)}
                value={newMessageText}
                className="w-full p-2"
                placeholder="Type a message..."
              />
              <div className="input-group-append absolute right-0 h-full">
                <button
                  type="submit"
                  className="flex h-full py-1 px-3 items-center justify-center hover:opacity-75 rounded"
                >
                  <span className="material-symbols-outlined text-theme-primary">
                    send
                  </span>
                </button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export async function loader({ params, request }: LoaderFunctionArgs) {
  const chatId = params.chatId as string;
  const auth = await authenticator.isAuthenticated(request);
  let theChat: ChatObject | null = null;
  if (chatId && auth) {
    theChat = await createChatObject(chatId, auth.id);
  }
  const chatMessages: Message[] = await getChatMessages(chatId);
  // const chatMessages = [
  //   {
  //     id: "8e8ce448-1c9d-48ef-85ab-933ecf25293b",
  //     author: "ba791977-daa1-45e3-b191-58ad57bc997f",
  //     chatId: "b8264923-619d-470f-8911-816a1468de4c",
  //     text: "hi again",
  //     status: "live",
  //     date: `2024-10-20T14:24:48.245Z`,
  //     dateEdited: `2024-10-20T14:24:48.245Z`,
  //   },
  // ];
  // async function getChatIcon() {
  //   let icon: Icon | null = null;
  //   if (activeChat.type === "private_chat") {
  //     const otherMemberId = activeChat.members.find((m) => m !== auth.id);
  //     const otherMember: User = otherMemberId && (await getUser(otherMemberId));
  //     if (otherMember.icon) {
  //       icon = otherMember.icon;
  //     }
  //   } else {
  //     icon = activeChat.icon;
  //   }
  //   return icon;
  // }
  // const chatIcon = await getChatIcon();

  return { chatMessages, theChat };
}

export async function action({ request, params }: ActionFunctionArgs) {
  const auth = await authenticator.isAuthenticated(request);
  const chatId = params.chatId;
  const io = getIO();
  const body = await request.formData();
  const text = body.get("text") as string;
  // console.log("text", text);
  if (auth && chatId) {
    try {
      const newMessage = await createNewMessage(auth, chatId, text, "live");
      await new Promise((resolve) => setTimeout(resolve, 1000));
      io.to(chatId).emit("receive-message", {
        newMessage,
      });
      return { success: true, newMessage };
    } catch (error) {
      console.error("Error creating message:", error);
      return { success: false, error: "Failed to create message" };
    }
  }
  return { success: false, error: "Invalid authentication or chat ID" };
}
