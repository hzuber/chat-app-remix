import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { Form, json, useActionData, useLoaderData } from "@remix-run/react";
import { authenticator } from "server/services/auth.server";
import { PageLayout } from "~/components/PageLayout";
import { FormCard } from "~/components/FormCard/FormCard";
import { commitSession, getSession } from "server/services/session.server";
// import { useState } from "react";
// import { useUserContext } from "~/contexts/userContext";

export default function Login() {
	const sessionError = useLoaderData<typeof loader>();
	return (
		<PageLayout>
			<FormCard classes="max-w-lg">
				<h5>Login</h5>
				<p>
					Don&apos;t have an account yet? <a href="/signup">Sign Up</a>
				</p>
				<Form method="post" className="mt-5">
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
						<label htmlFor="password">Password</label>
						<input
							type="password"
							name="password"
							autoComplete="current-password"
							required
							placeholder="Enter your password"
						/>
					</div>
					<p className="text-red-600 min-h-4 text-sm leading-4">
						{sessionError && (
							<span
								dangerouslySetInnerHTML={{ __html: sessionError.error.message }}
							/>
						)}
					</p>
					<button className="mt-5 mx-auto">Login</button>
				</Form>
			</FormCard>
		</PageLayout>
	);
}

export async function action({ request }: ActionFunctionArgs) {
	const session = await getSession(request.headers.get("cookie"));
	const sessionError = session.get(authenticator.sessionErrorKey);
	if (sessionError) {
		return sessionError;
	} else {
		return await authenticator.authenticate("user-login", request, {
			successRedirect: "/chats",
			failureRedirect: "/login",
		});
	}
}

export async function loader({ request }: LoaderFunctionArgs) {
	const auth = await authenticator.isAuthenticated(request, {
		successRedirect: "/chats",
	});
	const session = await getSession(request.headers.get("cookie"));
	const error = session.get(authenticator.sessionErrorKey);
	if (error) {
		return json(
			{ error },
			{
				headers: {
					"Set-Cookie": await commitSession(session), // You must commit the session whenever you read a flash
				},
			}
		);
	} else {
		return auth;
	}
}
