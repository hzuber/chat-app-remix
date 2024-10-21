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
import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";

export default function ActiveChat() {
  // const socket = useContext(socketContext);
  // const fetcher = useFetcher();
  // const { user } = useUserContext();
  // const { activeChat, setActiveChat } = useChatContext();
  // const chat = activeChat?.chat;
  // const fetcherData = useFetcher<typeof loader>();
  // console.log("fetcherData", fetcherData);
  // const newChatMessages = fetcherData.data?.chatMessages;
  // const { theChat, chatMessages } = useLoaderData<typeof loader>();
  // console.log("loaderData", theChat);
  const [newMessageText, setNewMessageText] = useState("");
  // const [messages, setMessages] = useState<Message[]>(chatMessages || []);
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

  // useEffect(() => {
  //   if (chatMessages) {
  //     setMessages(chatMessages);
  //   }
  // }, [chatMessages]);

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
          {/* {!messages.length ? (
            <p className="mx-auto">There are no messages in this chat yet</p>
          ) : (
            <div></div>
            // renderedMessages
          )} */}
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

// export async function loader({ params, request }: LoaderFunctionArgs) {
//   console.log("loader");
//   const chatId = params.chatId as string;
//   const auth = await authenticator.isAuthenticated(request);
//   let theChat: ChatObject | null = null;
//   if (chatId && auth) {
//     // theChat = await createChatObject(chatId, auth.id);

//     theChat = {
//       chat: {
//         id: "b8264923-619d-470f-8911-816a1468de4c",
//         members: [
//           "1fa03f88-11f1-47c0-807f-e1ec95ac3c50",
//           "ba791977-daa1-45e3-b191-58ad57bc997f",
//         ],
//         icon: null,
//         description: null,
//         chatName: null,
//         lastSent: null,
//         messages: [
//           "60a4386e-601d-4cfc-8250-d5fc4d14adb4",
//           "daad72ae-8dc7-4233-9ad6-4529624742b8",
//           "3075c717-db51-4cdc-9205-a9c1fcc0b36a",
//           "2012d06e-5ce3-4510-95f8-bde0bb082dc2",
//           "c70f8658-2341-462b-9536-534c831d40cc",
//           "b238075a-486e-477b-a56d-4a5912a2a0bc",
//           "27e59f81-dca7-4498-b5f3-1a34348b3cab",
//           "8c0f351b-79ae-46ff-a01a-f9cfb08ad47b",
//           "65af8879-efcc-46c8-9cbb-ca2a901b96b6",
//           "17469146-79a3-4e8f-8fc8-ce935d597205",
//           "bd3a1e55-395d-4867-9020-714a875276b1",
//           "0e6bebc0-4d0b-4774-8c91-8fc8f3974e79",
//           "213c252c-576b-404c-8bc5-2cb57d1a9b85",
//           "03e06b8b-e561-46fe-8406-fc50e6dded0a",
//           "d3481f19-f3d2-43e6-89fe-23e0471d7c72",
//           "9e6601f4-5ac8-4eb6-ba45-6d21bc55d108",
//           "ce4d7d77-3c87-4497-99c1-f0b9cd4be2c6",
//           "ea4ae3e3-b612-43b5-902c-c15e8a193258",
//           "8fa7f613-077b-45f1-bbb8-c5e9d3fe79ea",
//           "db70b50b-9789-47bb-b148-03a4ddbd80c8",
//           "4ad98d29-453a-46b6-8a84-482722063d0c",
//           "a45cf825-b42f-4f4c-a267-6739f1c4d9ce",
//           "f5e0998b-ea35-426c-b633-5190f813d444",
//           "c8c37032-7ce2-44b0-ab93-a48c11532171",
//           "ed8e9864-c103-4577-8731-75c6433b5a89",
//           "5ad57242-2db9-42e6-9fc5-1cf202597acc",
//           "60dc704b-2192-40b6-a870-d5cf425ac84d",
//           "2a2e4b16-fca8-473a-b311-bab6dc5e63d9",
//           "a4a2e0ae-86da-415c-9502-634135698613",
//           "6e6b51bc-830e-4e21-a942-4e8903735572",
//           "7c72a80c-8ae1-4c3d-a28f-63901bb7a25f",
//           "fdd6025e-367a-469f-b10c-b1072c0817cb",
//           "dc1c3e65-31ce-4d4b-94c1-fb2b306ffb8e",
//           "e375be9a-f6ea-4ebe-b688-4392043f260a",
//           "c91b67db-d4b0-4f55-8407-ac770e05f961",
//           "f85d3b43-64b3-4035-9b82-1706a8f629ec",
//           "bbcee129-6d78-42aa-94b0-a94766dc5653",
//           "e2302752-51b4-4c47-889c-0d0ac4728b2f",
//           "70544b15-bd13-4cfb-92aa-8dcce4d735d4",
//           "ffc81f03-927d-4c14-9720-9a1aff5c9d71",
//           "feb5521f-9c4f-45c0-ae09-28d3c4d9a419",
//           "c61c7324-2e9b-4a5f-89b9-0a9102469321",
//           "506acba4-f572-4bca-bf5a-2e28e8410873",
//           "8ca29feb-aae8-46e4-a222-5d8516f7dd09",
//           "da14c202-a1b9-4715-8643-1bbcb3ca2e91",
//           "8e8ce448-1c9d-48ef-85ab-933ecf25293b",
//         ],
//         admins: [
//           "1fa03f88-11f1-47c0-807f-e1ec95ac3c50",
//           "ba791977-daa1-45e3-b191-58ad57bc997f",
//         ],
//         type: "private_chat",
//       },
//       icon: { background: "bg-rose-600 hover:bg-rose-500", icon: "crab" },
//       name: "Alice",
//       userChat: {
//         lastRead: null,
//         style: null,
//         admin: true,
//         deleted: false,
//         chatId: "b8264923-619d-470f-8911-816a1468de4c",
//       },
//     };
//   }
//   // const chatMessages = await getChatMessages(chatId);
//   const chatMessages = [
//     {
//       id: "8e8ce448-1c9d-48ef-85ab-933ecf25293b",
//       author: "ba791977-daa1-45e3-b191-58ad57bc997f",
//       chatId: "b8264923-619d-470f-8911-816a1468de4c",
//       text: "hi again",
//       status: "live",
//       date: `2024-10-20T14:24:48.245Z`,
//       dateEdited: `2024-10-20T14:24:48.245Z`,
//     },
//   ];
//   // async function getChatIcon() {
//   //   let icon: Icon | null = null;
//   //   if (activeChat.type === "private_chat") {
//   //     const otherMemberId = activeChat.members.find((m) => m !== auth.id);
//   //     const otherMember: User = otherMemberId && (await getUser(otherMemberId));
//   //     if (otherMember.icon) {
//   //       icon = otherMember.icon;
//   //     }
//   //   } else {
//   //     icon = activeChat.icon;
//   //   }
//   //   return icon;
//   // }
//   // const chatIcon = await getChatIcon();

//   return { chatMessages, theChat };
// }

export async function action({ request, params }: ActionFunctionArgs) {
  const auth = await authenticator.isAuthenticated(request);
  const chatId = params.chatId;
  // const io = getIO();
  const body = await request.formData();
  const text = body.get("text") as string;
  console.log("text", text);
  if (auth && chatId) {
    try {
      const newMessage = await createNewMessage(auth, chatId, text, "live");
      console.log("newMessage", newMessage);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      //   // io.to(chatId).emit("receive-message", {
      //   //   newMessage,
      //   // });
      return { success: true, newMessage };
    } catch (error) {
      console.error("Error creating message:", error);
      return { success: false, error: "Failed to create message" };
    }
  }
  return { success: false, error: "Invalid authentication or chat ID" };
}
