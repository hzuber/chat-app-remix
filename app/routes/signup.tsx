import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { authenticator } from "~/services/auth.server";
import { Layout } from "~/components/Layout";
import { getSession } from "~/services/session.server";
import { useState } from "react";
import { FormCard } from "~/components/FormCard/FormCard";

interface Errors {
  verify?: string | null;
  password?: string | null;
  general?: string | null;
}

export default function Signup() {
  const sessionError = useLoaderData<typeof loader>();
  const [errors, setErrors] = useState<Errors>({});
  const [password, setPassword] = useState("");

  function checkPwd(pw: string) {
    setPassword(pw);
    if (pw.length < 6) {
      setErrors({ ...errors, password: "Minimum length is 6 characters" });
    } else if (pw.search(/\d/) == -1) {
      setErrors({ ...errors, password: "Does not contain a number" });
    } else if (pw.search(/[a-zA-Z]/) == -1) {
      setErrors({ ...errors, password: "Does not contain a letter" });
    } else setErrors({ ...errors, password: null });
  }

  const checkPasswordVerification = (pw: string) => {
    pw !== password
      ? setErrors({ ...errors, verify: "Passwords don't match" })
      : setErrors({ ...errors, verify: null });
  };

  const disableSubmitButton = () => {
    if (errors.password || errors.verify) {
      return true;
    } else return false;
  };

  return (
    <Layout>
      <FormCard classes="max-w-lg">
        <h5>Sign Up</h5>
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
        <Form method="post" className="mt-5">
          <div className="form-field">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" placeholder="Your Name" />
          </div>
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
            <label htmlFor="password">
              Password{" "}
              <span className="text-red-600 text-sm">{errors?.password}</span>
            </label>
            <input
              type="password"
              name="password"
              autoComplete="current-password"
              required
              placeholder="Enter your password"
              onChange={(e) => checkPwd(e.target.value)}
            />
          </div>
          <div className="form-field">
            <label htmlFor="verify">
              Verify Password{" "}
              <span className="text-red-600 text-sm ">{errors?.verify}</span>
            </label>
            <input
              type="password"
              name="verify"
              required
              placeholder="Retype password"
              onChange={(e) => checkPasswordVerification(e.target.value)}
            />
          </div>
          <button disabled={disableSubmitButton()} className="mt-2 mx-auto">
            Sign Up
          </button>
          {sessionError && (
            <p
              className="text-red-600 min-h-4 text-sm leading-4 mt-3"
              dangerouslySetInnerHTML={{ __html: sessionError.message }}
            />
          )}
        </Form>
      </FormCard>
    </Layout>
  );
}

export async function action({ request }: ActionFunctionArgs) {
  const session = await getSession(request.headers.get("cookie"));
  const sessionError = session.get(authenticator.sessionErrorKey);

  const auth = await authenticator.authenticate("user-signup", request, {
    successRedirect: "/chats",
    failureRedirect: "/signup",
  });
  if (sessionError) {
    return sessionError;
  } else {
    return auth;
  }
}

export async function loader({ request }: LoaderFunctionArgs) {
  const session = await getSession(request.headers.get("cookie"));
  const sessionError = session.get(authenticator.sessionErrorKey);
  await authenticator.isAuthenticated(request, {
    successRedirect: "/chats",
  });
  if (sessionError) {
    return sessionError;
  } else {
    return null;
  }
}
