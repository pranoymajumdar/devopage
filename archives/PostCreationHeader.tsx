import { createPostSchema } from "@devopage/shared";
import type { TAuthUser } from "@server/lib/auth";
import { useForm } from "@tanstack/react-form";
import { Link, useNavigate } from "@tanstack/react-router";
import {
	LucideImage,
	LucideLoader2,
	LucideSend,
	LucideSmile,
} from "lucide-react";
import { toast } from "sonner";
import { ApiError } from "@/lib/api";
import { cn } from "@/lib/utils";
import { useCreatePost } from "@/services/posts";
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "../apps/web/src/components/ui/avatar";
import { Button, buttonVariants } from "../apps/web/src/components/ui/button";

export function PostCreationHeader({ user }: { user?: TAuthUser }) {
	const createPost = useCreatePost();
	const navigate = useNavigate();
	const form = useForm({
		defaultValues: {
			content: "",
		},
		validators: {
			onChange: createPostSchema,
		},
		onSubmit: async ({ value }) => {
			try {
				if (!user) {
					return navigate({
						to: "/auth",
					});
				}
				const newPost = await createPost.mutateAsync({ values: value });
				form.reset();
				toast.success("Post created successfully.", {
					action: (
						<Link
							to="/post/$postId"
							params={{
								postId: newPost.id,
							}}
							className={cn(
								buttonVariants({ size: "sm", variant: "outline" }),
								"ml-auto",
							)}
						>
							view
						</Link>
					),
					closeButton: true,
					dismissible: true,
				});
			} catch (err) {
				if (err instanceof ApiError) {
					return toast.error(err.message);
				}
			}
		},
	});
	return (
		<div className="h-36 rounded-lg border bg-card px-4 py-3">
			<form
				onSubmit={(e) => {
					e.preventDefault();
					e.stopPropagation();
					form.handleSubmit();
				}}
				className="space-y-4"
			>
				<div className="flex items-start gap-4">
					<Avatar className="h-12 w-12">
						<AvatarImage src={user?.image || undefined} />
						<AvatarFallback>{user?.name.charAt(0) || "U"}</AvatarFallback>
					</Avatar>
					<form.Field name="content">
						{(field) => (
							<textarea
								id={field.name}
								name={field.name}
								value={field.state.value}
								onBlur={field.handleBlur}
								maxLength={280}
								minLength={10}
								onChange={(e) => {
									field.handleChange(e.target.value);
								}}
								className="w-full resize-none outline-none placeholder:text-muted-foreground"
								placeholder="What's happening?"
								rows={3}
							/>
						)}
					</form.Field>

					<form.Subscribe>
						{(state) => {
							const contentLength = state.values.content?.length || 0;
							const isNearLimit = contentLength > 250;
							const isOverLimit = contentLength > 280;

							return contentLength > 0 ? (
								<div className="flex justify-end">
									<span
										className={cn(
											"text-xs",
											isOverLimit
												? "text-red-500"
												: isNearLimit
													? "text-yellow-500"
													: "text-muted-foreground",
										)}
									>
										{contentLength}/280
									</span>
								</div>
							) : null;
						}}
					</form.Subscribe>
				</div>

				<div className="flex">
					<div className="flex items-center px-4">
						<Button size="icon" variant="ghost">
							<LucideImage />
						</Button>

						<Button size="icon" variant="ghost">
							<LucideSmile />
						</Button>
					</div>
					<form.Subscribe>
						{(state) => (
							<Button
								type="submit"
								disabled={!state.canSubmit || state.isSubmitting}
								className="ml-auto"
								variant="ghost"
							>
								{state.isSubmitting ? (
									<LucideLoader2 className="animate-spin" />
								) : (
									<LucideSend />
								)}
								{state.isSubmitting ? "Posting" : "Post"}
							</Button>
						)}
					</form.Subscribe>
				</div>
			</form>
		</div>
	);
}
