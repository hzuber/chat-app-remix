// import {
//   createContext,
//   useContext,
//   useState,
//   ReactNode,
//   useEffect,
// } from "react";
// import { Chat, UserChat } from "types";
// import { getChatFromUserChat } from "~/utils/chats";
// // import { getChatFromUserChat } from "~/utils/chats";

// // Define the context type to include both the active chat and a setter function
// interface ChatContextType {
//   activeChat: Chat | null;
//   setActiveUserChat: (userChat: UserChat | null) => void;
//   setActiveChat: (chat: Chat | null) => void;

//   chats: Chat[] | null;
//   setChats: (chats: Chat[] | null) => void;
// }

// // Create the context
// const ChatContext = createContext<ChatContextType | undefined>(undefined);

// // Custom hook to use the active chat context
// export const useChatContext = () => {
//   const context = useContext(ChatContext);
//   if (context === undefined) {
//     throw new Error("useActiveChat must be used within an ActiveChatProvider");
//   }
//   return context;
// };

// // Provider component that manages the state for active chat
// interface ChatProviderProps {
//   initialChats: Chat[] | null;
//   initialChat: Chat | null;
//   children: ReactNode;
// }

// export const ChatProvider = ({
//   initialChats,
//   initialChat,
//   children,
// }: ChatProviderProps) => {
//   const [activeChat, setActiveChat] = useState<Chat | null>(initialChat);
//   const [chats, setChats] = useState<Chat[] | null>(initialChats);

//   function setActiveUserChat(userChat: UserChat | null) {
//     console.log("set activechat in context");
//     if (userChat && chats) {
//       const chat = getChatFromUserChat(userChat, chats);
//       chat && setActiveChat(chat);

//       console.log(chat, activeChat);
//     }
//   }

//   useEffect(() => {
//     console.log("activeChat updated:", activeChat);
//   }, [activeChat]);

//   return (
//     <ChatContext.Provider
//       value={{ activeChat, setActiveUserChat, setActiveChat, chats, setChats }}
//     >
//       {children}
//     </ChatContext.Provider>
//   );
// };
