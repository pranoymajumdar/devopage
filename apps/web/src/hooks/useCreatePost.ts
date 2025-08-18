import type { TApiResponse, TCreatePostSchema } from "@devopage/shared";
import type { TNewPost } from "@server/db/schema";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/api";
import { fetchPostsOptions } from "@/queries/posts";

export function useCreatePost() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async ({ values }: { values: TCreatePostSchema }) => {
			const res = await api.post<TApiResponse<TNewPost>>("/posts", values);
			return res.data;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: fetchPostsOptions().queryKey,
			});
		},
	});
}
