import type { auth } from "@server/lib/auth";
import { inferAdditionalFields } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  plugins: [inferAdditionalFields<typeof auth>()],
});

export type TAuthSession = (typeof authClient.$Infer.Session)["session"];
export type TAuthUser = (typeof authClient.$Infer.Session)["user"];
