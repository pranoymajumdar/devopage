"use client";
import {
  LucideActivity,
  LucideBell,
  LucideBookmark,
  LucideHome,
  LucideSearch,
} from "lucide-react";
import { SidebarItem } from "./sidebar-item";
import { TSidebarItem } from "../types";

const routes: TSidebarItem[] = [
  {
    icon: LucideHome,
    label: "Home",
    href: "/",
  },
  {
    icon: LucideSearch,
    label: "Search",
    href: "/search",
  },
  {
    icon: LucideBell,
    label: "Notifications",
    href: "/notifications",
  },
  {
    icon: LucideBookmark,
    label: "Bookmark",
    href: "/bookmark",
  },
  {
    icon: LucideActivity,
    label: "Recent Activity",
    href: "/recent-activity",
  },
];

export const SidebarRoutes = () => {
  return (
    <div className="flex flex-col w-fulls">
      {routes.map(({ label, href, icon }) => (
        <SidebarItem key={href} label={label} href={href} icon={icon} />
      ))}
    </div>
  );
};
