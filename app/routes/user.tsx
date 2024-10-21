import { useEffect, useState } from "react";
import { ActionFunctionArgs, json, LoaderFunctionArgs } from "@remix-run/node";
import { authenticator } from "server/services/auth.server";
import { getUser, updateUser } from "server/users/utils";
import {
  Form,
  NavLink,
  Outlet,
  useActionData,
  useLoaderData,
} from "@remix-run/react";
import { PageLayout } from "~/components/PageLayout";
// import { ModalLayout } from "~/components/Modals/ModalLayout/ModalLayout";
import { UserIcon } from "~/components/UserIcon";
import { FormCard } from "~/components/FormCard/FormCard";
import { User } from "types";
import { useUserContext } from "~/contexts/userContext";

interface Errors {
  verify?: string | null;
  password?: string | null;
  general?: string | null;
  icon?: string | null;
  background?: string | null;
}

const UserProfile = () => {
  // const [currentIcon, setCurrentIcon] = useState<string | null>(null);
  // const [currentBackground, setCurrentBackground] = useState<string | null>(
  //   null
  // );
  const [userInfo, setUserInfo] = useState<User | null>(null);
  // const { user } = useLoaderData<typeof loader>();
  const { user } = useUserContext();
  const actionData = useActionData<typeof action>();
  const [errors, setErrors] = useState<Errors>({});
  // const error = actionData?.error ?? null;
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

  const cancelChanges = () => {
    setErrors({});
    setUserInfo(user);
  };

  useEffect(() => {
    console.log("updatedUser", actionData);
    if (actionData?.updatedUser) {
      setUserInfo(actionData.updatedUser);
    }
  }, [actionData]);

  useEffect(() => {
    console.log("error", actionData);
    if (actionData?.error) {
      setErrors({ ...errors, general: actionData?.error });
    }
  }, [actionData, errors]);

  useEffect(() => {
    console.log("user data", user);
    if (user) {
      setUserInfo(user);
    }
  }, [user]);

  // useEffect(() => {
  //   console.log("user data", userInfo);
  //   if (userInfo && userInfo.icon) {
  //     setCurrentIcon(userInfo.icon.icon);
  //     setCurrentBackground(userInfo.icon.background);
  //   }
  // }, [userInfo]);

  return (
    <PageLayout>
      <div className="w-full flex flex-col items-center">
        {!user && (
          <>
            You are not signed in. <a href="/login">Login</a>
          </>
        )}
        {user && (
          <>
            <h1>Edit Profile</h1>
            <NavLink to={`/user/icon`}>
              <button className="flex hover:opacity-80 p-2">
                <UserIcon
                  icon={userInfo?.icon ? userInfo.icon.icon : null}
                  background={userInfo?.icon ? userInfo.icon.background : null}
                  width="50"
                  height="50"
                />
                <span className="material-symbols-outlined">edit</span>
              </button>
            </NavLink>
            <Outlet />
            <FormCard classes={"w-full max-w-4xl"}>
              <Form method="post" replace>
                <div className="form-field">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    name="username"
                    placeholder={
                      user.username
                        ? user.username
                        : "You don't have a username yet"
                    }
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="email">Email Address</label>
                  <p id="email">{user.email}</p>
                </div>
                <div className="form-field">
                  <label htmlFor="password">Change Password </label>
                  <span className="text-red-600 text-sm">
                    {errors?.password}
                  </span>
                  <input
                    type="password"
                    name="password"
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    onChange={(e) => checkPwd(e.target.value)}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="verify">Verify Password </label>
                  <span className="text-red-600 text-sm ">
                    {errors?.verify}
                  </span>
                  <input
                    type="password"
                    name="verify"
                    placeholder="Retype password"
                    onChange={(e) => checkPasswordVerification(e.target.value)}
                  />
                </div>
                <button
                  disabled={disableSubmitButton()}
                  className="mt-2 mx-auto"
                >
                  Save changes
                </button>
                {errors.general && (
                  <p
                    className="text-red-600 min-h-4 text-sm leading-4 mt-3"
                    dangerouslySetInnerHTML={{ __html: errors.general }}
                  />
                )}
                <button
                  className="mt-2 mx-auto cancel"
                  onClick={() => cancelChanges()}
                >
                  Cancel
                </button>
              </Form>
            </FormCard>
          </>
        )}
      </div>
    </PageLayout>
  );
};

export async function loader({ request }: LoaderFunctionArgs) {
  const auth = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
  const user = await getUser(auth.id);
  return json({ user: user });
}

export async function action({ request }: ActionFunctionArgs) {
  console.log("run action", request);
  const body = await request.formData();
  if (request.method !== "POST" && request.method !== "PUT") {
    console.log("method", request.method);
    return json(
      { error: "Invalid request method", success: false, updatedUser: null },
      { status: 405 }
    );
  }
  try {
    const contentLength = request.headers.get("content-length");

    if (!contentLength || Number(contentLength) === 0) {
      return json(
        { error: "Request body is empty", updatedUser: null, success: false },
        { status: 400 }
      );
    }

    console.log("body", body);
  } catch (error) {
    return json(
      {
        error: "Invalid or empty JSON body",
        updatedUser: null,
        success: false,
      },
      { status: 400 }
    );
  }
  console.log("body", body);
  const username = body.get("username") as string;
  const password = body.get("password") as string;
  console.log("before ifs", body);

  const auth = await authenticator.isAuthenticated(request);
  console.log("after auths", auth, body);

  if (!auth) {
    return json(
      { error: "User not authenticated", updatedUser: null, success: false },
      { status: 401 }
    );
  }

  const userId = auth.id;
  if (userId) {
    const userData: Partial<User> = {};
    try {
      if (username) {
        userData.username = username;
      }
      if (password) {
        userData.password = password;
      }
      const updatedUser = await updateUser(userId, userData);
      if (updatedUser) {
        return json(
          { updatedUser: updatedUser, error: null, success: true },
          { status: 200 }
        );
      } else {
        return json({
          updatedUser: null,
          error: "No server response",
          success: false,
        });
      }
    } catch (error) {
      return json(
        {
          error: "Error updating user icon",
          updatedUser: null,
          success: false,
        },
        { status: 500 }
      );
    }
  }

  console.log("oh no", auth);
  return json(
    { error: "User ID not found", updatedUser: null, success: false },
    { status: 404 }
  );
}

export default UserProfile;
