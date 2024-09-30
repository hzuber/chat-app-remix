import { Authenticator, AuthorizationError } from "remix-auth";
import { FormStrategy } from "remix-auth-form";
import { Response, User } from "../../types";
import { getSession, sessionStorage } from "~/services/session.server";
import { login, signup } from "utils/users/utils";

export const authenticator = new Authenticator<User>(sessionStorage);

authenticator.use(
  new FormStrategy(async ({ form }) => {
    const email = form.get("email")?.toString();
    const password = form.get("password")?.toString();
    console.log(email, password);

    const user: User = email && password && (await login(email, password));
    console.log("user is", user);
    const theSessionUser = (await getSession()).get("user");
    const theSessionEmail = (await getSession()).get("email");
    console.log("session", theSessionUser, theSessionEmail);
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
    console.log(email, password);
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

// authenticator.use(
//   new FormStrategy(async ({ form, context }) => {
//     // const {...context} = context
//     // console.log("context", context);
//     // let response: Response = {
//     //   status: 400,
//     //   data: {},
//     //   error: "There was a problem processing your request.",
//     // };
//     // const email = form.get("email")?.toString();
//     // const password = form.get("password")?.toString();
//     // const username = form.get("username")?.toString();
//     // const icon = form.get("icon")?.toString();
//     // console.log(form, email, password);
//     // if (email && password) {
//     //   const user: User = await signup(
//     //     email,
//     //     password,
//     //     username && username,
//     //     icon
//     //   );
//     //   // if (user) {
//     //     const newUser: User = {
//     //       id: user.id,
//     //       email: email ? email : "",
//     //       password: password ? password : "",
//     //       username: username ? username : null,
//     //       icon: icon ? icon : null,
//     //       chats: null,
//     //     };
//     //     response = { data: { user: newUser }, status: 200, error: null };
//     //     return newUser;
//     //   // }
//     // }
//     // return
//     const user = {context.user}
//   }),
//   // each strategy has a name and can be changed to use another one
//   // same strategy multiple times, especially useful for the OAuth2 strategy.
//   "user-signup"
// );
