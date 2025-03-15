"use server";

import { signOut } from "@/server/auth";

export const signOutAction = async (callbackPath: string) => {
  await signOut({ redirect: true, redirectTo: callbackPath });
};
