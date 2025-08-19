import z from "zod";

export const createPostSchema = z.object({
	content: z.string().min(10).max(280),
});
export const deletePostSchema = z.object({
	postId: z.uuid(),
});
export type TCreatePostSchema = z.infer<typeof createPostSchema>;
export type TDeletePostSchema = z.infer<typeof deletePostSchema>;
