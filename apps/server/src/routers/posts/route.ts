import { createPostSchema } from "@devopage/shared";
import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { db } from "@/db";
import { postsTable } from "@/db/schema";

export const postsRoutes = new Hono()
	.get("/all", async (c) => {
		return c.json({
			data: await db.query.postsTable.findMany({}),
		});
	})
	.post("/", zValidator("json", createPostSchema), async (c) => {
		const { content } = c.req.valid("json");
		const user = c.get("user");
		if (!user) {
			return c.json({
				success: false,
				error: "You need to signed in.",
			});
		}
		const [newPost] = await db
			.insert(postsTable)
			.values({
				authorId: user.id,
				content,
			})
			.returning();
		return c.json({
			success: true,
			data: newPost,
		});
	});
