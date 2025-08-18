import type { TPost } from "@server/db/schema";
import { queryOptions } from "@tanstack/react-query";
import { api } from "@/lib/api";

export function fetchPostsOptions() {
	return queryOptions({
		queryKey: ["posts"],
		queryFn: async () => await api.get<TPost[]>("/posts/all"),
		staleTime: 0,
	});
}
