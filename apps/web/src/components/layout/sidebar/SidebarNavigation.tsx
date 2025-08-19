import { Link, useLocation } from "@tanstack/react-router";
import {
	LucideBell,
	LucideBookmark,
	LucideCompass,
	LucideFlame,
	LucideHome,
	type LucideIcon,
	LucideMessageSquare,
	LucideTrophy,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
	label: string;
	href: string;
	icon: LucideIcon;
	badge?: number;
}

const navItems: NavItem[] = [
	{
		label: "Home",
		href: "/",
		icon: LucideHome,
	},
	{
		label: "Explore",
		href: "/explore",
		icon: LucideCompass,
	},
	{
		label: "Trending",
		href: "/trending",
		icon: LucideFlame,
	},
	{
		label: "Challenges",
		href: "/challenges",
		icon: LucideTrophy,
	},
	{
		label: "Messages",
		href: "/messages",
		icon: LucideMessageSquare,
		badge: 3,
	},
	{
		label: "Notifications",
		href: "/notifications",
		icon: LucideBell,
		badge: 7,
	},
	{
		label: "Bookmarks",
		href: "/bookmarks",
		icon: LucideBookmark,
	},
];

export function SidebarNavigation() {
	const location = useLocation();
	return (
		<nav className="flex-1 px-2">
			<ul className="space-y-0.5">
				{navItems.map((item) => {
					const isActive = location.pathname === item.href;

					return (
						<li key={item.href}>
							<Link
								to={item.href}
								href={item.href}
								className={cn(
									"relative flex items-center gap-3 rounded-md px-3 py-2 font-medium text-sm transition-colors",
									isActive
										? "bg-accent text-accent-foreground"
										: "text-muted-foreground hover:bg-accent/50 hover:text-foreground",
								)}
							>
								<item.icon className="h-4 w-4" />
								<span className="flex-1">{item.label}</span>
								{item.badge && (
									<span
										className={cn(
											"flex h-5 min-w-[20px] items-center justify-center rounded-full px-1.5 font-medium text-foreground text-xs",
											isActive ? "bg-background" : "bg-destructive",
										)}
									>
										{item.badge}
									</span>
								)}
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}
