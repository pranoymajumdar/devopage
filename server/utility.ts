import { Profile } from "@prisma/client";
import { User } from "better-auth";

import { prisma } from "./prisma";

export const fetchProfile = async (
  user: User,
  includeUser: boolean = false,
): Promise<Profile | null> => {
  const profile = await prisma.profile.findFirst({
    where: {
      userId: user.id,
    },
    include: {
      user: includeUser,
    },
  });

  return profile;
};
