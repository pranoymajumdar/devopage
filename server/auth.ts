import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { createAuthMiddleware } from "better-auth/api";

import { generateRandomUsername } from "./generateUsername";
import { prisma } from "./prisma";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
  },
  hooks: {
    after: createAuthMiddleware(async (ctx) => {
      const session = ctx.context.newSession;
      if (session) {
        const existingProfile = await prisma.profile.findFirst({
          where: { userId: session.user.id },
        });
        if (!existingProfile) {
          await prisma.profile.create({
            data: {
              userId: session.user.id,
              username: await generateRandomUsername(),
            },
          });
        }
      }
    }),
  },
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    },
  },
});
