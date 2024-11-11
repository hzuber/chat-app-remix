import {
	json,
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useLoaderData,
} from "@remix-run/react";
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";

import "./tailwind.css";
// import styles from "../app/assets/styles/Global.scss";
import { authenticator } from "../server/services/auth.server";
import { socketContext } from "./socket.context";
import { UserProvider } from "./contexts/userContext";
import { useEffect, useState } from "react";
import { Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io";
import { connect } from "./socket.client";
import { getAllUsers, getUser } from "server/users/utils";
import { User } from "types";

export const links: LinksFunction = () => [
	// { rel: "stylesheet", href: styles },
	{ rel: "preconnect", href: "https://fonts.googleapis.com" },
	{
		rel: "preconnect",
		href: "https://fonts.gstatic.com",
		crossOrigin: "anonymous",
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&v=1729414993802",
	},
];

export async function loader({ request }: LoaderFunctionArgs) {
	const auth = await authenticator.isAuthenticated(request);
	const user: User | null = auth && (await getUser(auth.id));
	const users: User[] = await getAllUsers();
	return json({ user, users });
}

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	const { user, users } = useLoaderData<typeof loader>();
	const currentUser = user as User;
	const allUsers = users as User[];
	const [socket, setSocket] =
		useState<Socket<DefaultEventsMap, DefaultEventsMap>>();

	useEffect(() => {
		const connection = connect();
		console.log("connection", connection);
		setSocket(connection);
		return () => {
			connection.close();
		};
	}, []);

	useEffect(() => {
		if (!socket) return;
		socket.on("event", (data) => {
			console.log(data);
		});
	}, [socket]);
	return (
		<UserProvider initialUser={currentUser} initialUsers={allUsers}>
			<socketContext.Provider value={socket}>
				<Outlet context={user} />
			</socketContext.Provider>
		</UserProvider>
	);
}
