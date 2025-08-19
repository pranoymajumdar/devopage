import { Link } from "@tanstack/react-router";

import { LucideAlertCircle, LucideMoreHorizontal } from "lucide-react";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button, buttonVariants } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { authClient } from "@/lib/auth-client";
import { UserMenu } from "../UserMenu";

export function SidebarFooter() {
	const { data: getSession, isPending, error } = authClient.useSession();
	if (isPending) {
		return (
			<div className="flex h-auto w-full items-center justify-start gap-3 px-3 py-2">
				<Skeleton className="h-8 w-8 rounded-full" />
				<div className="flex flex-1 flex-col items-start space-y-2 text-left">
					<Skeleton className="h-2.5 w-[150px]" />
					<Skeleton className="h-2 w-[100px]" />
				</div>
				<LucideMoreHorizontal className="h-4 w-4 text-muted-foreground" />
			</div>
		);
	}
	if (error) {
		return (
			<Alert variant="destructive">
				<LucideAlertCircle className="h-4 w-4" />
				<AlertTitle className="text-sm">Unable to load data</AlertTitle>
			</Alert>
		);
	}
	if (!getSession?.user) {
		return (
			<div className="px-2 py-3">
				<Link
					to="/auth"
					className={buttonVariants({
						className: "w-full",
					})}
				>
					Sign In
				</Link>
			</div>
		);
	}

	const { user } = getSession;
	return (
		<UserMenu user={user}>
			<Button
				variant="ghost"
				className="h-auto w-full justify-start gap-3 px-3 py-2 hover:bg-accent"
			>
				<Avatar className="h-8 w-8">
					{user.image ? (
						<AvatarImage src={user.image} />
					) : (
						<AvatarFallback>CN</AvatarFallback>
					)}
				</Avatar>
				<div className="flex flex-1 flex-col items-start text-left">
					<span className="font-medium text-sm">{user.name}</span>
					<span className="text-muted-foreground text-xs">{user.email}</span>
				</div>
				<LucideMoreHorizontal className="h-4 w-4 text-muted-foreground" />
			</Button>
		</UserMenu>
	);
}
