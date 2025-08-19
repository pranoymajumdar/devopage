import type { TPost } from "@server/db/schema";
import { Link } from "@tanstack/react-router";
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
import type { ReactNode } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useDeletePost } from "@/services/posts";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button, buttonVariants } from "../ui/button";
import { Skeleton } from "../ui/skeleton";

function PostActionMenu({ children, post }: { children: ReactNode; post: TPost }) {
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
        <DropdownMenuItem onClick={(e) => e.stopPropagation()}>
          <LucideArchive />
          Archive
        </DropdownMenuItem>
        <DropdownMenuItem onClick={(e) => e.stopPropagation()}>
          <LucideEdit />
          Edit
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          variant="destructive"
          onSelect={handleDelete}
          onClick={(e) => e.stopPropagation()}
        >
          {deletePost.isPending ? <LucideLoader2 className="animate-spin" /> : <LucideDelete />}
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function PostCardSkeleton() {
  return (
    <div className="mx-auto w-full rounded-lg bg-card/20 p-4">
      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <Skeleton className="h-10 w-10 rounded-full" />

          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-3 w-12" />
            </div>
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>

          <Skeleton className="h-8 w-8 rounded-md" />
        </div>

        <div className="flex items-center gap-6 pt-2">
          <Skeleton className="h-7 w-7 rounded-md" />
          <Skeleton className="h-7 w-7 rounded-md" />
          <Skeleton className="h-7 w-7 rounded-md" />
          <Skeleton className="ml-auto h-7 w-7 rounded-md" />
        </div>
      </div>
    </div>
  );
}

export function PostCard({ post }: { post: TPost }) {
  return (
    <Link
      to="/post/$postId"
      params={{ postId: post.id }}
      id={post.id}
      className="mx-auto block w-full rounded-lg p-4 transition-colors hover:bg-card dark:hover:bg-card/20"
    >
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
              <Link
                to="/profile/$userId"
                params={{ userId: post.authorId }}
                className={cn(
                  buttonVariants({ variant: "link", size: "sm" }),
                  "m-0 cursor-pointer p-0",
                )}
              >
                {post.author.name}
              </Link>
              <span className="text-muted-foreground text-xs">
                {formatDistanceToNow(post.createdAt)}
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">{post.content}</p>
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
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
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
    </Link>
  );
}
