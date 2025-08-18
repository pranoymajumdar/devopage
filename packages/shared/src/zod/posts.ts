import z from "zod";

export const createPostSchema = z.object({
	content: z.string().min(10).max(280),
});

export type TCreatePostSchema = z.infer<typeof createPostSchema>;
