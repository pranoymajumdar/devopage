"use client";

import { cn } from "@/lib/utils";
import {
  type LucideIcon,
  LucideHome,
  LucideCompass,
  LucideFlame,
  LucideTrophy,
  LucideMessageSquare,
  LucideBell,
  LucideBookmark,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const pathName = usePathname();
  return (
    <nav className="flex-1 px-2">
      <ul className="space-y-0.5">
        {navItems.map((item) => {
          const isActive = pathName === item.href;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "relative flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
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
                      "flex h-5 min-w-[20px] items-center justify-center rounded-full px-1.5 text-xs font-medium",
                      isActive
                        ? "bg-background text-foreground"
                        : "bg-destructive text-destructive-foreground",
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
