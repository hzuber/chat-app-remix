import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { Form, json, useActionData, useSubmit } from "@remix-run/react";
import { authenticator } from "~/services/auth.server";
import { UnauthorizedLayout } from "~/components/Layouts/UnauthorizedLayout";
import { Card } from "~/components/Card/Card";
import { signup } from "utils/users/utils";
import { commitSession, getSession } from "~/services/session.server";

interface Errors {
  verify?: string | null;
  password?: string | null;
  general?: string | null;
}

export default function Signup() {
  const errors = useActionData<typeof action>();
  console.log("errors", errors);
  return (
    <UnauthorizedLayout>
      <Card classes="max-w-lg">
        <h5>Sign Up</h5>
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
        <Form method="post" className="mt-5">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" placeholder="Your Name" />
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
          <label htmlFor="verify">Verify Password</label>
          <input
            type="password"
            name="verify"
            required
            placeholder="Retype password"
          />
          {errors?.verify && <p className="text-red-600">{errors.verify}</p>}
          <button className="mt-5 mx-auto">Sign Up</button>
          {errors?.general && <p className="text-red-600">{errors.general}</p>}
        </Form>
      </Card>
    </UnauthorizedLayout>
  );
}

export async function action({ request }: ActionFunctionArgs) {
  //   const session = await getSession();

  //FORM DATA CAN"T BE READ TWICE
  const formData = await request.formData();
  const errors: Errors = {};
  //   console.log(request, formData);
  if (formData.get("password") !== formData.get("verify")) {
    errors.verify = "Passwords do not match";
    console.log("errors action", errors);
    return json(errors);
  }
  //   return null;
  //   try {
  //     // const email = formData.get("email")?.toString();
  //     // const password = formData.get("password")?.toString();
  //     // const username = formData.get("username")?.toString();
  //     // const icon = formData.get("icon")?.toString();

  //     const email = 'formData.get("email")?.toString()';
  //     const password = 'formData.get("password")?.toString()';
  //     const username = 'formData.get("username")?.toString()';
  //     const icon = 'formData.get("icon")?.toString()';

  //     try {
  //       //   email && formData.set("email", email);
  //       //   password && formData.set("password", password);
  //       //   username && formData.set("username", username);
  //       //   icon && formData.set("icon", icon);
  //       console.log(email, password);
  //       const user =
  //         email &&
  //         password &&
  //         (await signup(email, password, username && username, icon));
  //       console.log("signup", user);

  //       if (user) {
  //         // formData.set("id", user.id);
  //         // formData.append("id", user.id);
  //         // console.log("formData", formData);
  //         session.set("user", user);
  //         // const committedCookie = await commitSession(session);

  //         const auth = await authenticator.authenticate("user-signup", request, {
  //           context: { user },
  //           successRedirect: "/chats",
  //           failureRedirect: "/signup",
  //         });
  //         console.log("auth", auth);
  //         return auth;
  //       }
  //     } catch (err) {
  //       console.log("err", err);
  //       errors.general = "Unable to process request";
  //       return json(errors);
  //     }
  //   } catch (err) {
  //     console.log("err", err);
  //     errors.general = "Unable to process request";
  //     return json(errors);
  //   }

  const auth = await authenticator.authenticate("user-signup", request, {
    successRedirect: "/chats",
    failureRedirect: "/signup",
  });
  console.log("auth", auth);
  return json(errors);
}

export async function loader({ request }: LoaderFunctionArgs) {
  return await authenticator.isAuthenticated(request, {
    successRedirect: "/chats",
  });
}
