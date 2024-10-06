export type User = {
  id: string;
  username: string | null;
  email: string;
  password: string;
  icon: string | null;
  chats: UserChat[] | null;
};

export type Message = {
  id: string;
  authorId: string;
  date: Date;
  chatId: string;
  text: string;
  dateEdited: Date | null;
  status: "draft" | "live" | "edited" | "deleted";
};

export type Chat = {
  id: string;
  members: string[];
  icon: string | null;
  description: string | null;
  chatName: string | null;
  type: "public" | "private_chat" | "private_group";
  lastSent: string | null;
  messages: string[] | null;
  admins: string[];
};

export type UserChat = {
  chatId: string;
  lastRead: Message | null;
  style: string | null;
  admin: boolean;
  deleted?: boolean;
  chatName: string;
  icon: string | null;
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
