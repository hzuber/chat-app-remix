import { Authenticator, AuthorizationError } from "remix-auth";
import { FormStrategy } from "remix-auth-form";
import { Icon, Response, User } from "../../types";
import { sessionStorage } from "server/services/session.server";
import { login, signup } from "server/users/utils";
import { createIcon } from "server/general/utils";

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
    const user = email && password && (await login(email, password));
    if (!user || typeof user === "string") {
      throw new Error("unable to authenticate");
    }
    return user;
  }),
  "user-login"
);

authenticator.use(
  new FormStrategy(async ({ form }) => {
    const email = form.get("email")?.toString();
    const password = form.get("password")?.toString();
    const username = form.get("username")?.toString();
    const iconIcon = form.get("iconIcon")?.toString();
    const iconBg = form.get("iconBg")?.toString();
    const icon: Icon | null | undefined = createIcon(iconIcon, iconBg);
    const errorText = "Unable to perform action";
    if (email && password) {
      try {
        const user: User = await signup(
          email,
          password,
          username,
          icon && icon
        );
        if (user) {
          return user;
        }
        throw new AuthorizationError(errorText);
      } catch (err) {
        throw new AuthorizationError(errorText);
      }
    } else {
      throw new Error(errorText);
    }
  }),
  "user-signup"
);
