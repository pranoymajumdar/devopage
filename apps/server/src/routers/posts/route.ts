import { createPostSchema, deletePostSchema } from "@devopage/shared";
import { zValidator } from "@hono/zod-validator";
import { and, eq } from "drizzle-orm";
import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import { StatusCodes } from "http-status-codes";
import { db } from "@/db";
import { postsTable } from "@/db/schema";
import { requireUser } from "@/utils/requireUser";

export const postsRoutes = new Hono();

postsRoutes.get("/all", async (c) => {
  return c.json(await db.query.postsTable.findMany({ with: { author: true } }));
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
  return c.json(newPost);
});

postsRoutes.delete("/", zValidator("json", deletePostSchema), async (c) => {
  const { postId } = c.req.valid("json");
  const user = requireUser(c);
  const condition = and(eq(postsTable.id, postId), eq(postsTable.authorId, user.id));
  const findPost = await db.query.postsTable.findFirst({
    where: () => condition,
  });

  if (!findPost) {
    throw new HTTPException(StatusCodes.BAD_REQUEST, {
      message: "Post not found or you don't have permission to delete it.",
    });
  }

  await db.delete(postsTable).where(condition);

  return c.json(`${postId} has been deleted.`);
});
