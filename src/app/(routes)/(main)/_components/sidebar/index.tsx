"use client";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import {
  LucideCode2,
  LucidePlus,
  LucideHome,
  LucideCompass,
  LucideFlame,
  LucideTrophy,
  LucideMessageSquare,
  LucideBell,
  LucideBookmark,
  LucideMoreHorizontal,
  LucideSettings,
  LucideHelpCircle,
  LucideLogOut,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { UserDropdown } from "../user-dropdown";

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

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="bg-background flex h-screen w-full flex-col border-r">
      {/* Header */}
      <div className="p-4">
        <div className="mb-6 flex items-center gap-2 px-2">
          <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-lg">
            <LucideCode2 className="text-primary-foreground h-4 w-4" />
          </div>
          <span className="text-lg font-semibold">Devopage</span>
        </div>

        <Button className="w-full">
          <LucidePlus className="mr-2 h-4 w-4" />
          Create Post
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2">
        <ul className="space-y-0.5">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
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

      {/* User Menu Footer */}
      <div className="border-t p-2">
        <UserDropdown>
          <Button
            variant="ghost"
            className="hover:bg-accent h-auto w-full justify-start gap-3 px-3 py-2"
          >
            <Avatar className="h-8 w-8">
              <div className="bg-primary text-primary-foreground flex h-full w-full items-center justify-center text-sm font-medium">
                JD
              </div>
            </Avatar>
            <div className="flex flex-1 flex-col items-start text-left">
              <span className="text-sm font-medium">John Doe</span>
              <span className="text-muted-foreground text-xs">@johndoe</span>
            </div>
            <LucideMoreHorizontal className="text-muted-foreground h-4 w-4" />
          </Button>
        </UserDropdown>
      </div>
    </aside>
  );
}
