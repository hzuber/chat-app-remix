import { Authenticator, AuthorizationError } from "remix-auth";
import { FormStrategy } from "remix-auth-form";
import { Response, User } from "../../types";
import { sessionStorage } from "~/services/session.server";
import { login, signup } from "utils/users/utils";

export const authenticator = new Authenticator<User>(sessionStorage, {
  sessionErrorKey: "chat-app-error-key",
});
// const session = await sessionStorage.getSession();
// const sessionError = session.get(authenticator.sessionErrorKey);
// console.log(
//   "login auth",
//   authenticator.sessionErrorKey,
//   "login auth2",
//   sessionError
// );

authenticator.use(
  new FormStrategy(async ({ form }) => {
    const email = form.get("email")?.toString();
    const password = form.get("password")?.toString();
    console.log("email", email, "passowrd", password);
    // const session = await sessionStorage.getSession();

    const user: User = email && password && (await login(email, password));
    // const theSessionUser = session.get("user");
    // const theSessionEmail = session.get("email");
    // console.log("session", theSessionUser, theSessionEmail);
    return user;
  }),
  "user-login"
);

authenticator.use(
  new FormStrategy(async ({ form }) => {
    const email = form.get("email")?.toString();
    const password = form.get("password")?.toString();
    const username = form.get("username")?.toString();
    const icon = form.get("icon")?.toString();
    let errorText = "Unable to perform action";
    if (email && password) {
      try {
        const response: Response = await signup(
          email,
          password,
          username,
          icon
        );
        if (response && response.data.user) {
          return response.data.user;
        }
        if (response?.error) {
          errorText = response.error;
          console.log("auth.server", response.error);
        }
        throw new AuthorizationError(errorText);
      } catch (err) {
        throw new AuthorizationError(errorText);
      }
    } else {
      throw new Error("Unable to perform action");
    }
  }),
  "user-signup"
);
