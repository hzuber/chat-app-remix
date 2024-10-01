import { io } from "socket.io-client";

export function connect() {
  const port = import.meta.env.VITE_SOCKET_PORT || 3002;
  console.log("port is ", port);
  return io("http://localhost:" + port, {
    transports: ["websocket"],
  });
}
