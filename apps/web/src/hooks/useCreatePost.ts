import { useMutation, useQueryClient } from "@tanstack/react-query";
import { hc } from "@/lib/hc";
import { postsQueryOptions } from "@/queries/posts";

export function useCreatePost() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: hc.posts.$post,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: postsQueryOptions().queryKey,
			});
		},
	});
}
