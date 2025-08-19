import { createFileRoute } from "@tanstack/react-router";
import { PostCard } from "@/components/posts/PostCard";
import { usePosts } from "@/services/posts";

export const Route = createFileRoute("/_mainLayout/")({
	component: RouteComponent,
});

function RouteComponent() {
	const { data: posts } = usePosts();

	return (
		<main className="mx-auto max-w-4xl px-4 py-6">
			{posts?.map((post) => (
				<PostCard key={post.id} post={post} />
			))}
		</main>
	);
}
