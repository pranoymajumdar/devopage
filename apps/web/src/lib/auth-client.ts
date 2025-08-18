import { createAuthClient } from "better-auth/react";
import { inferAdditionalFields } from "better-auth/client/plugins";
import type { auth } from "../../../server/src/lib/auth";

export const authClient = createAuthClient({
	baseURL: import.meta.env.VITE_SERVER_URL,
	plugins: [inferAdditionalFields<typeof auth>()],
});

export type TAuthSession = (typeof authClient.$Infer.Session)["session"];
export type TAuthUser = (typeof authClient.$Infer.Session)["user"];
