import type { TAuthUser } from "@server/lib/auth";
import {
	LucideImage,
	LucideLoader2,
	LucideSend,
	LucideSmile,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { useCreatePost } from "@/services/posts";
import { useForm } from "@tanstack/react-form";
import { createPostSchema } from "@devopage/shared";
import { ApiError } from "@/lib/api";
import { toast } from "sonner";
import { Link } from "@tanstack/react-router";

export function PostCreationHeader({ user }: { user: TAuthUser }) {
	const createPost = useCreatePost();
	const form = useForm({
		defaultValues: {
			content: "",
		},
		validators: {
			onChange: createPostSchema,
			onMount: createPostSchema,
		},
		onSubmit: async ({ value }) => {
			try {
				const newPost = await createPost.mutateAsync({ values: value });
				form.reset();
				toast.success("Post created successfully.", {
					action: <Link to="/post/id">view</Link>,
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
						<AvatarImage src={user.image || undefined} />
						<AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
					</Avatar>
					<form.Field name="content">
						{(field) => (
							<textarea
								id={field.name}
								name={field.name}
								value={field.state.value}
								onBlur={field.handleBlur}
								onChange={(e) => {
									field.handleChange(e.target.value);
								}}
								className="w-full resize-none outline-none placeholder:text-muted-foreground"
								placeholder="What's happening?"
								rows={3}
							/>
						)}
					</form.Field>
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
