import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";
import { PostCard, PostCardSkeleton } from "@/components/posts/PostCard";
import { usePosts } from "@/services/posts";

export const Route = createFileRoute("/_mainLayout/")({
  component: RouteComponent,
  errorComponent: ({ error }) => (
    <div className="p-4 text-red-500">
      <h2>Something went wrong!</h2>
      <pre>{error.message}</pre>
    </div>
  ),
});

function RouteComponent() {
  return (
    <main className="mx-auto max-w-4xl space-y-6 px-4 py-6">
      <Suspense
        fallback={Array.from({ length: 10 }, (_, k) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: Skeletons are static, order won't change
          <PostCardSkeleton key={k} />
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
