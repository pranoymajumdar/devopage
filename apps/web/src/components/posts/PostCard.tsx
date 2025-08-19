import type { TPost } from "@server/db/schema";

export function PostCard({ post }: { post: TPost }) {
	return <div>{post.content}</div>;
}
