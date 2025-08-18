import { relations } from "drizzle-orm";
import { pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import { type TUser, user } from "./auth";

export const postsTable = pgTable("posts", {
	id: uuid().primaryKey().defaultRandom(),
	authorId: text("author_id")
		.references(() => user.id)
		.notNull(),
	content: varchar({ length: 280 }).notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const postsRelations = relations(postsTable, ({ one }) => ({
	author: one(user, {
		fields: [postsTable.id],
		references: [user.id],
	}),
}));

export type TPost = typeof postsTable.$inferSelect & { author: TUser };
export type TNewPost = typeof postsTable.$inferSelect & { author: TUser };
