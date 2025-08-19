import { createPostSchema } from "@devopage/shared";
import { useForm } from "@tanstack/react-form";
import { LucideLoader2, LucidePlusCircle, LucideXCircle } from "lucide-react";
import { type ReactNode, useState } from "react";
import { useCreatePost } from "@/hooks/useCreatePost";
import { ApiError } from "@/lib/api";
import { Alert, AlertDescription } from "../ui/alert";
import { Button } from "../ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

export function CreatePostDialog({ children }: { children: ReactNode }) {
	const createPost = useCreatePost();
	const [isDialogOpen, setDialogOpen] = useState<boolean>(false);
	const [error, setError] = useState<string>();
	const form = useForm({
		defaultValues: {
			content: "",
		},
		validators: {
			onSubmit: createPostSchema,
		},
		onSubmit: async ({ value }) => {
			try {
				await createPost.mutateAsync({ values: value });
				form.reset();
				setDialogOpen(false);
			} catch (err) {
				if (err instanceof ApiError) {
					return setError(err.message);
				}
			}
		},
	});
	return (
		<Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
			<DialogTrigger asChild>{children}</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Create a new post</DialogTitle>
					<DialogDescription>
						lorem ispum da funk pesoba tomo.
					</DialogDescription>
				</DialogHeader>
				<div className="space-y-6">
					{error && (
						<Alert variant="destructive">
							<AlertDescription>{error}</AlertDescription>
						</Alert>
					)}

					<form
						onSubmit={(e) => {
							e.preventDefault();
							e.stopPropagation();
							form.handleSubmit();
						}}
						className="space-y-4"
					>
						<form.Field name="content">
							{(field) => (
								<div className="space-y-3">
									<Label htmlFor={field.name}>Content</Label>
									<Textarea
										id={field.name}
										name={field.name}
										value={field.state.value}
										onBlur={field.handleBlur}
										onChange={(e) => {
											field.handleChange(e.target.value);
											setError(undefined);
										}}
									/>
									{field.state.meta.errors.map((error) => (
										<p key={error?.message} className="text-red-500">
											{error?.message}
										</p>
									))}
								</div>
							)}
						</form.Field>

						<DialogFooter>
							<form.Subscribe>
								{(state) => (
									<>
										<DialogClose asChild>
											<Button
												variant="outline"
												disabled={!state.canSubmit || state.isSubmitting}
											>
												<LucideXCircle />
												Cancel
											</Button>
										</DialogClose>
										<Button
											type="submit"
											disabled={!state.canSubmit || state.isSubmitting}
										>
											{state.isSubmitting ? (
												<LucideLoader2 className="h-5 w-5 animate-spin" />
											) : (
												<LucidePlusCircle className="h-5 w-5" />
											)}
											{state.isSubmitting ? "Creating..." : "Create"}
										</Button>
									</>
								)}
							</form.Subscribe>
						</DialogFooter>
					</form>
				</div>
			</DialogContent>
		</Dialog>
	);
}
