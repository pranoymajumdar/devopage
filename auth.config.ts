import NextAuth, { NextAuthConfig } from "next-auth";
import GitHub from "next-auth/providers/github";
import { db } from "./server/db";
import { usersTable } from "./server/db/schemas";
import { eq } from "drizzle-orm";

// export const { handlers, signIn, signOut, auth } = NextAuth({
//   providers: [GitHub],
//   callbacks: {
//     async signIn({ user, account }) {
//       if (account?.provider === "github" && user.id) {
//         const existingUser = await db
//           .select()
//           .from(usersTable)
//           .where(eq(usersTable.githubId, user.id));

//         if (!existingUser) {
//           await db.insert(usersTable).values({
//             avatar: user.image,
//             githubId: user.id,
//             email: user.email,
//             username: user.id,
//           });
//         }
//       }
//       return true;
//     },
//   },
// });
export default { providers: [GitHub] } satisfies NextAuthConfig;
