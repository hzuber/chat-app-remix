import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { authenticator } from "~/services/auth.server";
import { UnauthorizedLayout } from "~/components/Layouts/UnauthorizedLayout";
import { Card } from "~/components/Card/Card";

// First we create our UI with the form doing a POST and the inputs with the
// names we are going to use in the strategy
export default function Screen() {
  return (
    <UnauthorizedLayout>
      <Card classes="max-w-lg">
        <h5>Login</h5>
        <p>
          Don&apos;t have an account yet? <a href="/signup">Sign Up</a>
        </p>
        <Form method="post" className="mt-5">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            required
            placeholder="you@example.com"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            autoComplete="current-password"
            required
            placeholder="Enter your password"
          />
          <button className="mt-5 mx-auto">Login</button>
        </Form>
      </Card>
    </UnauthorizedLayout>
  );
}

export async function action({ request }: ActionFunctionArgs) {
  console.log("request is", request);
  return await authenticator.authenticate("user-login", request, {
    successRedirect: "/chats",
    failureRedirect: "/login",
  });
}

export async function loader({ request }: LoaderFunctionArgs) {
  return await authenticator.isAuthenticated(request, {
    successRedirect: "/chats",
  });
}
