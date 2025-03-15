import NextAuth from "next-auth";
import authConfig from "@/auth.config";
import { db } from "./db";
import { usersTable } from "./db/schemas";
import { eq, or } from "drizzle-orm";

export const { auth, handlers, signIn, signOut } = NextAuth({
  session: { strategy: "jwt" },
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "github" && user.id) {
        const conditions = [eq(usersTable.githubId, user.id)];
        if (user.email) conditions.push(eq(usersTable.email, user.email));
        const existingUser = await db
          .select()
          .from(usersTable)
          .where(or(...conditions));
        if (existingUser.length === 0) {
          await db.insert(usersTable).values({
            avatar: user.image,
            githubId: user.id,
            email: user.email,
            username: user.id,
          });
        }
        return true;
      }
      return false;
    },
  },
  ...authConfig,
});
