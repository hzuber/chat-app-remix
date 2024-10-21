import { DefaultEventsMap, Server } from "socket.io";

let io: Server | null = null;

export const createSocketServer = (server: DefaultEventsMap | undefined) => {
  io = new Server(server, {
    connectionStateRecovery: {},
  });

  io &&
    io.on("connection", (socket) => {
      console.log("user connected", socket.id);
      socket.on("join-chat", ({ chatId }) => {
        console.log(`User ${socket.id} joined chat ${chatId}`);
        socket.join(chatId);
      });

      socket.on("send-message", (newMessage) => {
        console.log("message sent", newMessage);
        if (!newMessage) {
          console.error("Missing data for send-message event", newMessage);
          return;
        }
        io && io.to(newMessage.chatId).emit("receive-message", newMessage);
      });

      socket.on("message_read", ({ messageId, chatId }) => {
        if (!chatId || !messageId) {
          console.error(
            "Missing data for send-message event",
            messageId,
            chatId
          );
          return;
        }
        io && io.to(chatId).emit("message_marked_read", { messageId, chatId });
      });

      socket.on("disconnect", () => {
        console.log(`user disconnected ${socket.id}`);
      });
    });
};

export const getIO = () => {
  if (!io) throw new Error("Socket.io is not initialized!");
  return io;
};
