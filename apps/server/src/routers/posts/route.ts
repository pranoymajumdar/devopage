import { createPostSchema } from "@devopage/shared";
import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import { db } from "@/db";
import { postsTable } from "@/db/schema";

export const postsRoutes = new Hono();

postsRoutes.get("/all", async (c) => {
	return c.json(await db.query.postsTable.findMany({ with: { author: true } }));
});

postsRoutes.post("/", zValidator("json", createPostSchema), async (c) => {
	const { content } = c.req.valid("json");
	const user = c.get("user");
	if (!user) {
		throw new HTTPException(401, { message: "UNAUTHORIZED" });
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
