import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { PostCard } from "@/components/posts/post-card";
import { fetchPostsOptions } from "@/queries/posts";

export const Route = createFileRoute("/_mainLayout/")({
	component: RouteComponent,
});

function RouteComponent() {
	const { data: posts } = useQuery(fetchPostsOptions());

	return (
		<main>
			{posts?.data?.map((post) => (
				<PostCard key={post.id} post={post} />
			))}
		</main>
	);
}
