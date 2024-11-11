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
	const [selectedBackground, setSelectedBackground] = useState<string | null>(
		null
	);
	const u = useLoaderData<typeof loader>();
	const user = u.user as User;
	const actionData = useActionData<typeof action>();
	const [errors, setErrors] = useState<Errors>({});
	// const error = actionData?.error ?? null;

	useEffect(() => {
		if (user && user.icon) {
			setSelectedIcon(user.icon.icon);
			setSelectedBackground(user.icon.background);
		}
	}, [user]);

	const handleIconSelect = (theIcon: string) => {
		setSelectedIcon(theIcon);
	};

	const handleBackgroundSelect = (theBackground: string) => {
		setSelectedBackground(theBackground);
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
						icon: selectedIcon,
						background: selectedBackground,
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
	if (request.method !== "POST" && request.method !== "PUT") {
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

		const body = await request.formData();
		const icon = body.get("icon") as string;
		const background = body.get("background") as string;

		if (!icon) {
			return json(
				{ error: "Icon not provided", updatedUser: null, success: false },
				{ status: 400 }
			);
		}

		const auth = await authenticator.isAuthenticated(request);
		if (!auth) {
			return json(
				{ error: "User not authenticated", updatedUser: null, success: false },
				{ status: 401 }
			);
		}

		const userId = auth.id;
		if (userId) {
			const updatedUser = await updateUser(userId, {
				icon: { background, icon },
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
		}
		return json(
			{ error: "User ID not found", updatedUser: null, success: false },
			{ status: 404 }
		);
	} catch (error) {
		return json(
			{ error: "Error updating user icon", updatedUser: null, success: false },
			{ status: 500 }
		);
	}
}

export default ChooseIcon;
