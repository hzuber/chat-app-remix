import { getChat } from "server/chats/utils";
import { getUser } from "server/users/utils";
import { Chat, User, UserChat } from "types";

// export async function getUserChat(chatId: string, userId: string) {
//   const user: User = await getUser(userId);
//   if (user && user.chats) {
//     const chat = user.chats.find((c) => c.chatId === chatId);
//     if (chat) {
//       return chat;
//     }
//   }
// }

// export function getChatFromUserChat(userChat: UserChat, chats: Chat[]) {
//   const chat = chats.find((c) => c.id === userChat.chatId);
//   if (chat) {
//     return chat;
//   }
// }
