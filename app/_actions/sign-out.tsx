"use server";

import { signOut } from "@/auth";

export const signOutAction = async (callbackPath: string) => {
  await signOut({ redirect: true, redirectTo: callbackPath });
};
