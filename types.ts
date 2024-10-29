export type Icon = {
  icon: string | null;
  background: string | null;
};

export type User = {
  id: string;
  username: string | null;
  email: string;
  password: string;
  icon: Icon | null;
  chats: UserChat[] | null;
};

export type Message = {
  id: string;
  author: string;
  date: Date;
  chatId: string;
  text: string;
  dateEdited: Date | null;
  status: "draft" | "live" | "edited" | "deleted";
};

export type Chat = {
  id: string;
  members: string[] | null;
  icon: Icon | null;
  description: string | null;
  chatName: string | null;
  type: "public" | "private_chat" | "private_group";
  lastSent: Message | null;
  messages: Message[] | null;
  admins: string[] | null;
};

export type UserChat = {
  id: string;
  userId: string;
  chatId: string;
  lastRead: Message | null;
  theme: string | null;
  admin: boolean;
  deleted?: boolean | null;
};

export type ChatObject = {
  icon: Icon | null;
  name: string | null;
  chat: Chat;
  userChat: UserChat | null;
};

export type Response = {
  status: number;
  error: string | null | undefined;
  data: {
    chat?: Chat | null;
    chats?: Chat[] | null;
    user?: User | null;
    users?: User[] | null;
    message?: Message | null;
    messages?: Message[] | null;
    userChat?: UserChat | null;
    userChats?: UserChat[] | null;
  };
};
