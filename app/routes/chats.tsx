import { LoaderFunctionArgs } from "@remix-run/node";
import React from "react";
import { authenticator } from "~/services/auth.server";

export const Chats = () => {
  return <div>C</div>;
};

export async function loader({ request }: LoaderFunctionArgs) {
  const auth = await authenticator.isAuthenticated(request, {});
  console.log("auth", auth);
  return null;
}
