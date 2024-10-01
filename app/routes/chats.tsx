import { LoaderFunctionArgs } from "@remix-run/node";
import { authenticator } from "~/services/auth.server";
import { getSession } from "~/services/session.server";

export const Chats = () => {
  return <div>C</div>;
};

export async function loader({ request }: LoaderFunctionArgs) {
  const auth = await authenticator.isAuthenticated(request, {});
  const session = await getSession(request.headers.get("cookie"));
  const error = session.get(authenticator.sessionErrorKey);
  console.log("auth", auth, "errorkey", error);
  return null;
}
