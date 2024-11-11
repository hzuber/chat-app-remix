import { LoaderFunctionArgs } from "@remix-run/node";
import { authenticator } from "server/services/auth.server";
import { PageLayout } from "~/components/PageLayout";
import {
	Outlet,
	useLoaderData,
	useLocation,
	useOutletContext,
	useParams,
} from "@remix-run/react";
import { getAllUsers } from "server/users/utils";
import { ChatObject, User, UserChat } from "../../types";
import { addChat, createChatObject } from "server/chats/utils";
import ChatsList from "~/components/ChatsList/ChatsList";
import { getUsersUserChats } from "server/chats/userChatsUtils";

export default function Chats() {
	const { usersChats, chatObjects } = useLoaderData<typeof loader>();
	const chats = chatObjects as ChatObject[] | null;
	const userChats = usersChats as UserChat[];
	const user: User = useOutletContext();
	const location = useParams();

	return (
		<PageLayout>
			<div className="flex w-full align-stretch justify-between h-full">
				<div className="flex flex-col w-2/6  border-r-1 border-slate-100 border-solid">
					<div className="flex justify-between border-b-1 border-slate-100 border-solid p-3">
						<p>Chats</p>
						<div className="flex justify-evenly">
							<button
								type="button"
								aria-label="Write new message"
								className="p-2"
							>
								<span className="material-symbols-outlined">note_add</span>
							</button>

							<button type="button" aria-label="Filter chats" className="p-2">
								<span className="material-symbols-outlined">filter_list</span>
							</button>
						</div>
					</div>

					{user && (
						<ChatsList
							class={" p-3"}
							user={user}
							userChats={userChats}
							chatObjects={chats}
						/>
					)}
				</div>
				<div className="w-4/6 p-3 items-stretch flex max-h-screen bg-stone-50">
					{location.chatId ? (
						<Outlet />
					) : (
						<div className="text-center w-full mt-3">
							<p>Click on a chat to begin!</p>
						</div>
					)}
				</div>
			</div>
		</PageLayout>
	);
}

export async function loader({ request }: LoaderFunctionArgs) {
	const auth = await authenticator.isAuthenticated(request, {
		failureRedirect: "/login",
	});
	const chatObjs: ChatObject[] = [];
	const allUsers = await getAllUsers();
	const users: User[] = allUsers.filter((u: User) => u.id !== auth.id);
	await createPrivateChats(users, auth);
	const usersChats = await getUsersUserChats(auth.id);
	for await (const chat of usersChats) {
		const obj = await createChatObject(chat.chatId, auth.id);
		chatObjs.push(obj);
	}
	const sortChats = (chat1: ChatObject, chat2: ChatObject) => {
		const date1 = chat1.chat.lastSent && new Date(chat1.chat.lastSent?.date);
		const date2 = chat2.chat.lastSent && new Date(chat2.chat.lastSent?.date);
		if (!date1 || !date2) {
			return 0;
		}
		if (date1 < date2) {
			return 1;
		}
		if (date1 > date2) {
			return -1;
		}
		return 0;
	};

	const sortedChats = () => {
		chatObjs?.sort((a, b) => sortChats(a, b));
		return chatObjs;
	};

	const chatObjects = sortedChats();
	return { usersChats, chatObjects };
}

async function createPrivateChats(users: User[], auth: User) {
	for (const user of users) {
		// console.log("Creating private chat with user: ", user.email);
		await addChat(
			auth.id,
			[auth.id, user.id],
			null,
			null,
			null,
			"private_chat",
			null
		);
	}
}
