"use server";

import { signIn } from "@/auth";

export const signInAction = async (callbackPath: string) => {
  await signIn("github", {
    redirect: true,
    redirectTo: callbackPath,
  });
};
