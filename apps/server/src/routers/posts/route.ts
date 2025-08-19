import { createPostSchema, deletePostSchema } from "@devopage/shared";
import { zValidator } from "@hono/zod-validator";
import { and, eq } from "drizzle-orm";
import { Hono } from "hono";
import { StatusCodes } from "http-status-codes";
import { db } from "@/db";
import { postsTable } from "@/db/schema";
import { requireUser } from "@/utils/requireUser";

export const postsRoutes = new Hono();

postsRoutes.get("/all", async (c) => {
	return c.json({
		success: true,
		data: await db.query.postsTable.findMany({ with: { author: true } }),
	});
});

postsRoutes.post("/", zValidator("json", createPostSchema), async (c) => {
	const { content } = c.req.valid("json");
	const user = requireUser(c);

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

postsRoutes.delete("/", zValidator("json", deletePostSchema), async (c) => {
	const { postId } = c.req.valid("json");
	const user = requireUser(c);
	const condition = and(
		eq(postsTable.id, postId),
		eq(postsTable.authorId, user.id),
	);
	const findPost = await db.query.postsTable.findFirst({
		where: () => condition,
	});

	if (!findPost) {
		return c.json(
			{
				success: false,
				error: "Post not found or you don't have permission to delete it.",
			},
			StatusCodes.BAD_REQUEST,
		);
	}

	await db.delete(postsTable).where(condition);

	return c.json({
		success: true,
		data: `${postId} has been deleted.`,
	});
});
