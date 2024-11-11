import { authenticator } from "server/services/auth.server";
import { createChatObject } from "server/chats/utils";
import { ChatObject, Message, Response, UserChat } from "types";
import { createNewMessage, getChatMessages } from "server/messages/utils";
import { getIO } from "socket.server";
import {
	useFetcher,
	useLoaderData,
	Form,
	useActionData,
} from "@remix-run/react";
import { useContext, useEffect, useState } from "react";
import { socketContext } from "~/socket.context";
import { UserIcon } from "~/components/UserIcon";
import { ActionFunctionArgs, LoaderFunctionArgs, json } from "@remix-run/node";
import { ChatMessageContainer } from "~/components/MessageContainer/ChatMessageContainer";
import { markMessageRead } from "server/chats/userChatsUtils";

function parseMessageDates(
	message: Omit<Message, "date" | "dateEdited"> & {
		date: string;
		dateEdited: string | null;
	}
): Message {
	return {
		...message,
		date: new Date(message.date),
		dateEdited: message.dateEdited ? new Date(message.dateEdited) : null,
	};
}

export default function ActiveChat() {
	const socket = useContext(socketContext);
	const { theChat, chatMessages } = useLoaderData<typeof loader>();
	const chatObject = theChat as ChatObject;
	const [newMessageText, setNewMessageText] = useState("");
	const [messages, setMessages] = useState<Message[]>();
	const fetcher = useFetcher();
	const actionData = useActionData<typeof action>();
	let last = chatObject?.userChat?.lastRead;
	const lastReadDate = last && new Date(last.date);
	const otherUserChat = chatObject?.otherMemberUserChat as UserChat;
	const lastReadMessage = { ...last, date: lastReadDate } as Message;

	const clickSubmit = (text: string) => {
		setNewMessageText("");
		const formData = new FormData();
		formData.append("text", text);
		formData.append("action", "send-message");
		fetcher.submit(formData, {
			method: "post",
			action: `/chats/${chatObject?.chat.id}`,
		});
	};

	useEffect(() => {
		if (actionData?.data.text && actionData.success) {
			setNewMessageText(actionData.data.text);
		}
	}, [actionData]);

	useEffect(() => {
		if (actionData?.data.message && actionData.success) {
			const messageHistory = chatMessages.map(parseMessageDates);
			if (chatMessages) {
				setMessages(messageHistory);
			}
		}
	}, [actionData?.data.message]);

	useEffect(() => {
		if (socket && chatObject?.chat?.id) {
			socket.emit("join-chat", { chatId: chatObject.chat.id });
		}
	}, [socket, chatObject?.chat?.id]);

	useEffect(() => {
		const messageHistory = chatMessages.map(parseMessageDates);
		if (chatMessages) {
			setMessages(messageHistory);
		}
	}, [chatMessages]);

	return (
		<div className="flex p-3 w-full ">
			<div className="flex flex-col relative w-full pb-12">
				<div className="mb-4 p-3 w-full bg-white flex items-center">
					<UserIcon
						icon={chatObject?.icon && chatObject?.icon?.icon}
						background={chatObject?.icon && chatObject?.icon?.background}
						width={"30px"}
						height={"30px"}
						padding={"p-2"}
					/>
					{/* <h6 className="mx-3">{activeChat?.name}</h6> */}

					<h6 className="mx-3">
						{theChat?.name ? theChat?.name : "Unnamed Chat"}
					</h6>
				</div>
				{!messages?.length ? (
					<div className="flex flex-col max-h-full pb-5">
						<p className="mx-auto">There are no messages in this chat yet</p>
					</div>
				) : (
					<ChatMessageContainer
						messages={messages}
						isPrivate={true}
						chatId={theChat?.chat.id}
						userChatId={theChat?.userChat?.id}
						otherMember={otherUserChat}
					/>
				)}
				<div className="card-footer input-group absolute bottom-0 w-full">
					<Form
						method="post"
						onSubmit={() => {
							clickSubmit(newMessageText);
						}}
					>
						<div className="w-full flex items-end">
							<input
								name="text"
								type="text"
								onChange={(e) => setNewMessageText(e.target.value)}
								value={newMessageText}
								className="w-full p-2"
								placeholder="Type a message..."
							/>
							<div className="input-group-append absolute right-0 h-full">
								<button
									type="submit"
									className="flex h-full py-1 px-3 items-center justify-center hover:opacity-75 rounded"
								>
									<span className="material-symbols-outlined text-theme-primary">
										send
									</span>
								</button>
							</div>
						</div>
					</Form>
				</div>
			</div>
		</div>
	);
}

export async function loader({ params, request }: LoaderFunctionArgs) {
	const chatId = params.chatId as string;
	const auth = await authenticator.isAuthenticated(request);
	let theChat: ChatObject | null = null;
	if (chatId && auth) {
		theChat = await createChatObject(chatId, auth.id);
	}
	const chatMessages: Message[] = await getChatMessages(chatId);

	return { chatMessages, theChat };
}

export async function action({ request, params }: ActionFunctionArgs) {
	const auth = await authenticator.isAuthenticated(request);
	let response: Response = {
		success: false,
		data: {},
		error: "Could not deliver message",
	};
	const chatId = params.chatId;
	const io = getIO();
	const body = await request.formData();
	const action = body.get("action");
	if (action === "send-message") {
		const text = body.get("text") as string;
		response.data.text = text;
		if (auth && chatId) {
			try {
				const newMessage = await createNewMessage(auth, chatId, text, "live");
				await new Promise((resolve) => setTimeout(resolve, 1000));
				io.to(chatId).emit("receive-message", {
					newMessage,
				});
				response = {
					success: true,
					data: {
						text: "",
					},
					error: null,
				};
			} catch (error) {
				console.error("Error creating message:", error);
			}
		}
	}
	if (action === "mark-as-read") {
		const messageId = body.get("messageId") as string;
		const userChatId = body.get("userChatId") as string;
		try {
			const userChat = await markMessageRead(userChatId, messageId);
			response = {
				success: true,
				data: {
					message: userChat.lastRead,
				},
				error: null,
			};
		} catch (error) {
			console.error("Error marking message read:", error);
		}
	}
	return json(response);
}
