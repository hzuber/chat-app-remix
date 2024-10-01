import { LoaderFunctionArgs } from "@remix-run/node";
import { authenticator } from "~/services/auth.server";
import { Layout } from "~/components/Layout";
import { Outlet, useLoaderData } from "@remix-run/react";
import { useContext, useEffect } from "react";
import { SocketContext, useSocket } from "~/socket.context";

export default function Chats() {
  const auth = useLoaderData<typeof loader>();
  //   const socket = useContext(SocketContext);
  //   useEffect(() => {
  //     if (!socket) return;

  //     socket.on("event", (data) => {
  //       console.log(data);
  //     });

  //     socket.emit("something", "ping");
  //   }, [socket]);
  //   console.log("chat auth", auth);
  return (
    <Layout>
      <div className="flex w-full">
        <div className="flex flex-col w-2/6">
          <p>Add New</p>
          <p>The chats</p>
        </div>
        <Outlet />
      </div>
    </Layout>
  );
}

export async function loader({ request }: LoaderFunctionArgs) {
  const auth = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
  return auth;
}
