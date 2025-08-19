import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";
import { PostCard, PostCardSkeleton } from "@/components/posts/PostCard";
import { usePosts } from "@/services/posts";

export const Route = createFileRoute("/_mainLayout/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="mx-auto max-w-4xl space-y-6 px-4 py-6">
      <Suspense
        fallback={Array.from({ length: 10 }, (_, __) => (
          <PostCardSkeleton key={new Date().toISOString()} />
        ))}
      >
        <PostList />
      </Suspense>
    </main>
  );
}

function PostList() {
  const { data: posts } = usePosts();

  return posts.map((post) => <PostCard key={post.id} post={post} />);
}
