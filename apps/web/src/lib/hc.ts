import type { AppRouter } from "@server/index";
import { hc as honoClient } from "hono/client";
import { env } from "./env";

export const hc = honoClient<AppRouter>(env.VITE_SERVER_URL, {
	init: {
		credentials: "include",
	},
});
