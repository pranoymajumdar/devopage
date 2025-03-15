"use server";

import { signIn } from "@/server/auth";

export const signInAction = async (callbackPath: string) => {
  await signIn("github", {
    redirect: true,
    redirectTo: callbackPath,
  });
};
