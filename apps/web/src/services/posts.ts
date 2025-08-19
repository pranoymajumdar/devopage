import type { TCreatePostSchema, TDeletePostSchema } from "@devopage/shared";
import type { TNewPost, TPost } from "@server/db/schema";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/api";

const POSTS_QUERY_KEY = ["posts"] as const;

export function usePosts() {
	return useQuery({
		queryKey: POSTS_QUERY_KEY,
		queryFn: async () => {
			const res = await api.get<{ success: true; data: TPost[] }>("/posts/all");

			return res.data.data;
		},
	});
}

export function useCreatePost() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async ({ values }: { values: TCreatePostSchema }) => {
			const res = await api.post<{ success: true; data: TNewPost }>(
				"/posts",
				values,
			);

			return res.data.data;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: POSTS_QUERY_KEY,
			});
		},
	});
}

export function useDeletePost() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async ({ values }: { values: TDeletePostSchema }) => {
			const res = await api.delete<{ success: true; data: string }>("/posts", {
				data: values,
			});

			return res.data.data;
		},

		onSuccess: (_, { values }) => {
			queryClient.setQueryData<TPost[]>(POSTS_QUERY_KEY, (oldData) => {
				return oldData
					? oldData.filter((post) => post.id !== values.postId)
					: [];
			});
		},
	});
}
