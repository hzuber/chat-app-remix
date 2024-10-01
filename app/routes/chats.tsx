import { LoaderFunctionArgs } from "@remix-run/node";
import { authenticator } from "~/services/auth.server";
import { Layout } from "~/components/Layout";
import { useLoaderData } from "@remix-run/react";

export default function Chats() {
  const auth = useLoaderData<typeof loader>();
  console.log("chat auth", auth);
  return (
    <Layout>
      <p>hi</p>
    </Layout>
  );
}

export async function loader({ request }: LoaderFunctionArgs) {
  const auth = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
  return auth;
}
