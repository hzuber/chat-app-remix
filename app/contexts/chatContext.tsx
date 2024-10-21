// import {
//   createContext,
//   useContext,
//   useState,
//   ReactNode,
//   useEffect,
// } from "react";
// import { ChatObject, UserChat } from "types";

// // Define the context type to include both the active chat and a setter function
// interface ChatContextType {
//   // activeChat: ChatObject | null;
//   // setActiveChat: (chat: ChatObject | null) => void;
//   // chats: ChatObject[] | null;
//   // setChats: (chats: ChatObject[] | null) => void;
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
//   initialChats: ChatObject[] | null;
//   initialChat: ChatObject | null;
//   children: ReactNode;
// }

// export const ChatProvider = ({
//   initialChats,
//   initialChat,
//   children,
// }: ChatProviderProps) => {
//   const [activeChat, setActiveChat] = useState<ChatObject | null>(initialChat);
//   const [chats, setChats] = useState<ChatObject[] | null>(initialChats);

//   useEffect(() => {
//     console.log("activeChat updated:", activeChat);
//   }, [activeChat]);

//   return (
//     <ChatContext.Provider
//       value={{ activeChat, setActiveChat, chats, setChats }}
//     >
//       {children}
//     </ChatContext.Provider>
//   );
// };
