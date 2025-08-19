import type { TPost } from "@server/db/schema";
import { formatDistanceToNow } from "date-fns";
import {
	LucideArchive,
	LucideBookmark,
	LucideDelete,
	LucideEdit,
	LucideHeart,
	LucideLoader2,
	LucideMessageCircle,
	LucideMoreHorizontal,
	LucideShare,
} from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import type { ReactNode } from "react";
import { useDeletePost } from "@/services/posts";

function PostActionMenu({
	children,
	post,
}: {
	children: ReactNode;
	post: TPost;
}) {
	const deletePost = useDeletePost();
	const handleDelete = async (event: Event) => {
		event.preventDefault();
		await deletePost.mutateAsync({
			values: {
				postId: post.id,
			},
		});
	};
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem>
					<LucideArchive />
					Archive
				</DropdownMenuItem>
				<DropdownMenuItem>
					<LucideEdit />
					Edit
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem variant="destructive" onSelect={handleDelete}>
					{deletePost.isPending ? (
						<LucideLoader2 className="animate-spin" />
					) : (
						<LucideDelete />
					)}
					Delete
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

export function PostCard({ post }: { post: TPost }) {
	return (
		<div className="mx-auto w-full rounded-lg p-4 transition-colors hover:bg-card/20">
			<div className="space-y-3">
				{/* Header */}
				<div className="flex items-start gap-3">
					<Avatar className="h-10 w-10">
						<AvatarImage src={post.author.image || undefined} />
						<AvatarFallback className="bg-muted text-muted-foreground">
							{post.author.name.charAt(0)}
						</AvatarFallback>
					</Avatar>
					<div className="flex-1 space-y-1">
						<div className="flex items-center gap-2">
							<h3 className="font-semibold text-foreground text-sm">
								{post.author.name}
							</h3>
							<span className="text-muted-foreground text-xs">
								{formatDistanceToNow(post.createdAt)}
							</span>
						</div>
						<p className="text-muted-foreground text-sm leading-relaxed">
							{post.content}
						</p>
					</div>
					<PostActionMenu post={post}>
						<Button
							size="icon"
							variant="ghost"
							className="text-muted-foreground hover:text-foreground"
						>
							<LucideMoreHorizontal className="h-4 w-4" />
						</Button>
					</PostActionMenu>
				</div>

				{/* Action buttons */}
				<div className="flex items-center gap-6 pt-2">
					<button
						type="button"
						className="group flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
					>
						<div className="rounded-full p-2 transition-colors group-hover:bg-muted/50">
							<LucideHeart className="h-4 w-4" />
						</div>
						<span className="font-medium text-sm">23</span>
					</button>

					<button
						type="button"
						className="group flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
					>
						<div className="rounded-full p-2 transition-colors group-hover:bg-muted/50">
							<LucideMessageCircle className="h-4 w-4" />
						</div>
						<span className="font-medium text-sm">5</span>
					</button>

					<button
						type="button"
						className="group flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
					>
						<div className="rounded-full p-2 transition-colors group-hover:bg-muted/50">
							<LucideShare className="h-4 w-4" />
						</div>
						<span className="font-medium text-sm">2</span>
					</button>

					<button
						type="button"
						className="group ml-auto flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
					>
						<div className="rounded-full p-2 transition-colors group-hover:bg-muted/50">
							<LucideBookmark className="h-4 w-4" />
						</div>
						<span className="font-medium text-sm">10</span>
					</button>
				</div>
			</div>
		</div>
	);
}
