import { useEffect, useState } from "react";
import IconSelection from "../components/Modals/IconSelector";
import {
  ActionFunctionArgs,
  json,
  LoaderFunctionArgs,
  redirect,
} from "@remix-run/node";
import { authenticator } from "server/services/auth.server";
import { getUser, updateUser } from "server/users/utils";
import {
  Form,
  useActionData,
  useLoaderData,
  useNavigate,
} from "@remix-run/react";
import { ModalLayout } from "~/components/Modals/ModalLayout/ModalLayout";
import { User } from "types";

interface Errors {
  verify?: string | null;
  password?: string | null;
  general?: string | null;
  icon?: string | null;
  background?: string | null;
}

const ChooseIcon = () => {
  const navigate = useNavigate();
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);
  const [currentIcon, setCurrentIcon] = useState<string | null>(null);
  const [selectedBackground, setSelectedBackground] = useState<string | null>(
    null
  );
  const [currentBackground, setCurrentBackground] = useState<string | null>(
    null
  );
  const [userInfo, setUserInfo] = useState<User | null>(null);
  const u = useLoaderData<typeof loader>();
  const user = u.user as User;
  const actionData = useActionData<typeof action>();
  const [errors, setErrors] = useState<Errors>({});
  // const error = actionData?.error ?? null;

  useEffect(() => {
    console.log("updatedUser", actionData);
    if (actionData?.updatedUser) {
      setUserInfo(actionData.updatedUser);
    }
  }, [actionData]);

  useEffect(() => {
    console.log("error", actionData);
    if (actionData?.error) {
      setErrors({ general: actionData?.error });
    }
  }, [actionData]);

  useEffect(() => {
    console.log("user data", user);
    if (user) {
      setUserInfo(user);
    }
  }, [user]);

  useEffect(() => {
    console.log("user data", userInfo);
    if (userInfo && userInfo.icon) {
      setCurrentIcon(userInfo.icon.icon);
      setCurrentBackground(userInfo.icon.background);
    }
  }, [userInfo]);

  // useEffect(() => {
  //   console.log("use effect 1", selectedIcon, errors.icon);
  //   selectedIcon && !errors.icon && setCurrentIcon(selectedIcon);
  // }, [selectedIcon, errors]);

  // useEffect(() => {
  //   console.log("use effect 2", selectedBackground, errors.background);
  //   selectedBackground &&
  //     !errors.background &&
  //     setCurrentBackground(selectedBackground);
  // }, [selectedBackground, errors]);

  const handleIconSelect = (selectedIcon: string) => {
    setSelectedIcon(selectedIcon);
  };
  const handleBackgroundSelect = (selectedBackground: string) => {
    setSelectedBackground(selectedBackground);
  };

  return (
    <ModalLayout
      onModalClose={() => {
        navigate(-1);
      }}
    >
      <Form method="post">
        <IconSelection
          currentIcon={{
            icon: currentIcon,
            background: currentBackground,
          }}
          onIconSelect={handleIconSelect}
          onBackgroundSelect={handleBackgroundSelect}
        />
        <button type="submit" disabled={!selectedIcon}>
          Save Icon
        </button>
        <input type="hidden" name="icon" value={selectedIcon || ""} />
        <input
          type="hidden"
          name="background"
          value={selectedBackground || ""}
        />
        {errors.icon && (
          <p className="text-red-600 min-h-4 text-sm leading-4 mt-3">
            {errors.icon}
          </p>
        )}
        {errors.background && (
          <p className="text-red-600 min-h-4 text-sm leading-4 mt-3">
            {errors.background}
          </p>
        )}
      </Form>
    </ModalLayout>
  );
};

export async function loader({ request }: LoaderFunctionArgs) {
  const auth = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
  const user = auth && (await getUser(auth.id));
  return json({ user: user });
}

export async function action({ request }: ActionFunctionArgs) {
  console.log("run action", request);
  let icon: string;
  let background: string;
  if (request.method !== "POST" && request.method !== "PUT") {
    console.log("method", request.method);
    return json(
      { error: "Invalid request method", success: false, updatedUser: null },
      { status: 405 }
    ); // 405 Method Not Allowed
  }
  try {
    const contentLength = request.headers.get("content-length");

    if (!contentLength || Number(contentLength) === 0) {
      return json(
        { error: "Request body is empty", updatedUser: null, success: false },
        { status: 400 }
      ); // 400 Bad Request
    }

    const body = await request.formData();
    console.log("body", body);
    icon = body.get("icon") as string;
    background = body.get("background") as string;
    if (!icon) {
      return json(
        { error: "Icon not provided", updatedUser: null, success: false },
        { status: 400 }
      ); // 400 Bad Request
    }
  } catch (error) {
    // If parsing fails (e.g., empty or invalid JSON), return an error response or handle it
    return json(
      {
        error: "Invalid or empty JSON body",
        updatedUser: null,
        success: false,
      },
      { status: 400 }
    );
  }

  const auth = await authenticator.isAuthenticated(request);
  console.log("after auths", auth);

  if (!auth) {
    return json(
      { error: "User not authenticated", updatedUser: null, success: false },
      { status: 401 }
    );
  }

  // Save the selected icon to the database (assuming you have a Prisma or similar setup)
  const userId = auth.id; // Assuming you have a function to get the user ID
  if (userId) {
    try {
      const updatedUser = await updateUser(userId, {
        icon: { background: background, icon: icon },
      });
      if (updatedUser?.icon) {
        return redirect("/user");
      } else {
        return json({
          updatedUser: null,
          error: "No server response",
          success: false,
        });
      }
    } catch (error) {
      console.log("icon catch error");
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

export default ChooseIcon;
