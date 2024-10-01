import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { Form, json, useActionData } from "@remix-run/react";
import { authenticator } from "~/services/auth.server";
import { UnauthorizedLayout } from "~/components/Layouts/UnauthorizedLayout";
import { FormCard } from "~/components/FormCard/FormCard";
import { commitSession, getSession } from "~/services/session.server";
import { useState } from "react";

// First we create our UI with the form doing a POST and the inputs with the
// names we are going to use in the strategy
export default function Login() {
  //   const sessionError = useActionData<typeof action>();
  //   const [error, seterror] = useState<string>();
  //   sessionError && seterror(sessionError.message);
  return (
    <UnauthorizedLayout>
      <FormCard classes="max-w-lg">
        <h5>Login</h5>
        <p>
          Don&apos;t have an account yet? <a href="/signup">Sign Up</a>
        </p>
        <Form method="post" className="mt-5">
          <div className="form-field">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
            />
          </div>
          <div className="form-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              autoComplete="current-password"
              required
              placeholder="Enter your password"
            />
          </div>
          <button className="mt-5 mx-auto">Login</button>
          {/* {error && (
            <p
              className="text-red-600 min-h-4 text-sm leading-4"
              dangerouslySetInnerHTML={{ __html: error }}
            />
          )} */}
        </Form>
      </FormCard>
    </UnauthorizedLayout>
  );
}

export async function action({ request }: ActionFunctionArgs) {
  const session = await getSession(request.headers.get("cookie"));
  const sessionError = session.get(authenticator.sessionErrorKey);
  console.log("actionerror", sessionError);

  // console.log("auth", auth);
  if (sessionError) {
    //   console.log("auth2", auth);
    return sessionError;
  } else {
    return await authenticator.authenticate("user-login", request, {
      successRedirect: "/chats",
      failureRedirect: "/login",
    });
  }
}

export async function loader({ request }: LoaderFunctionArgs) {
  const auth = await authenticator.isAuthenticated(request, {
    successRedirect: "/chats",
  });
  const session = await getSession(request.headers.get("cookie"));
  const error = session.get(authenticator.sessionErrorKey);
  console.error("loginloader", error, "auth", auth);
  if (error) {
    return json(
      { error },
      {
        headers: {
          "Set-Cookie": await commitSession(session), // You must commit the session whenever you read a flash
        },
      }
    );
  } else {
    return auth;
  }
}
