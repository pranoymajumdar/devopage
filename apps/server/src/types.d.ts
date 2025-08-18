import type { TAuthSession, TAuthUser } from "./lib/auth";

declare module "hono" {
	interface ContextVariableMap {
		user: TAuthUser | null;
		session: TAuthSession | null;
	}
}
