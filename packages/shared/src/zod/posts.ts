import z from "zod";
import { MAX_POST_CONTENT_SIZE, MIN_POST_CONTENT_SIZE } from "../constants";

export const createPostSchema = z.object({
  content: z.string().min(MIN_POST_CONTENT_SIZE).max(MAX_POST_CONTENT_SIZE),
});
export const deletePostSchema = z.object({
  postId: z.uuid(),
});
export type TCreatePostSchema = z.infer<typeof createPostSchema>;
export type TDeletePostSchema = z.infer<typeof deletePostSchema>;
