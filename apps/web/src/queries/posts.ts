import { queryOptions } from "@tanstack/react-query";
import { hc } from "@/lib/hc";

export function postsQueryOptions() {
	return queryOptions({
		queryKey: ["posts"],
		queryFn: hc.posts.all.$get,
	});
}
