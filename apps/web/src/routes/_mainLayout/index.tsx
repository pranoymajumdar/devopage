import { createFileRoute } from "@tanstack/react-router";
import { PostCard } from "@/components/posts/PostCard";
import { PostCreationHeader } from "@/components/posts/PostCreationHeader";
import { authClient } from "@/lib/auth-client";
import { usePosts } from "@/services/posts";

export const Route = createFileRoute("/_mainLayout/")({
	component: RouteComponent,
});

function RouteComponent() {
	const { data: posts } = usePosts();
	const { data: getSession } = authClient.useSession();

	return (
		<main className="mx-auto max-w-4xl space-y-6 px-4 py-6">
			<section className="space-y-4">
				<h1 className="font-bold text-2xl">Home</h1>
				{getSession?.user && <PostCreationHeader user={getSession.user} />}
			</section>
			{posts?.map((post) => (
				<PostCard key={post.id} post={post} />
			))}
		</main>
	);
}
