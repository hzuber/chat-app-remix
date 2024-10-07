import { LoaderFunctionArgs } from "@remix-run/node";
import { authenticator } from "server/services/auth.server";
import { Layout } from "~/components/Layout";
import { Outlet, useLoaderData } from "@remix-run/react";
import { useContext, useEffect } from "react";
import { socketContext } from "~/socket.context";
import { useUserContext } from "~/contexts/userContext";

export default function Chats() {
  const { user } = useUserContext();
  const socket = useContext(socketContext);
  //   console.log("chat socket", socketContext);
  useEffect(() => {
    if (!socket) return;

    socket.on("event", (data) => {
      console.log(data);
    });

    socket.emit("something", "ping");
  }, [socket]);
  return <div>chat</div>;
}

export async function loader({ request }: LoaderFunctionArgs) {
  const auth = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
  return auth;
}
