import { Link, useLocation } from "@tanstack/react-router";
import {
	LucideCompass,
	LucideHome,
	LucideMessageCircle,
	LucidePlus,
	LucideUser,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CreatePostDialog } from "../posts/CreatePostDialog";

const navLinks = [
	{
		label: "Home",
		href: "/",
		icon: LucideHome,
		badge: 0,
	},
	{
		label: "Explore",
		href: "/explore",
		icon: LucideCompass,
		badge: 0,
	},
	{
		label: "Create",
		href: "/create",
		icon: LucidePlus,
		badge: 0,
	},
	{
		label: "Messages",
		href: "/messages",
		icon: LucideMessageCircle,
		badge: 3,
	},
	{
		label: "Profile",
		href: "/profile",
		icon: LucideUser,
		badge: 0,
	},
];

export function BottomNavigation() {
	const location = useLocation();
	return (
		<div className="-translate-x-1/2 fixed bottom-4 left-1/2 z-50 h-[74px] w-full max-w-md rounded-full border bg-secondary/90 backdrop-blur supports-[backdrop-filter]:bg-secondary/70 md:hidden">
			<div className="mx-auto grid h-full max-w-md grid-cols-5">
				{navLinks.map((link, index) => {
					if (link.href === "/create") {
						return (
							<CreatePostDialog key={link.href}>
								<Button size="icon" className="m-auto rounded-full">
									<LucidePlus />
								</Button>
							</CreatePostDialog>
						);
					}
					const isActive = location.pathname === link.href;
					return (
						<Link
							key={link.href}
							to={link.href}
							className={cn(
								"group relative inline-flex flex-col items-center justify-center px-5 hover:bg-accent",
								navLinks.length === index + 1 && "rounded-e-full",
								index === 0 && "rounded-s-full",
							)}
						>
							<link.icon
								className={cn(
									"text-muted-foreground",
									isActive ? "text-primary" : "group-hover:text-primary",
								)}
							/>
							<span className="sr-only">Home</span>
							{link.badge > 0 && (
								<div className="absolute bottom-2 h-1 w-1 rounded-full bg-primary" />
							)}
						</Link>
					);
				})}
			</div>
		</div>
	);
}
