"use client";

import { cn } from "@/lib/utils";
import {
  LucideBell,
  LucideHome,
  LucideIcon,
  LucideSearch,
  LucideStars,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

type NavItemProps = {
  label: string;
  icon: LucideIcon;
  href: string;
}

const NavItem = ({ label, icon: Icon, href }: NavItemProps) => {
  const pathName = usePathname();
  const isActive = pathName === href;

  return (
    <Link href={href}>
      <motion.div
        className={cn(
          "relative flex items-center gap-3 rounded-r-md p-3",
          "transition-colors duration-200",
          {
            "bg-accent text-accent-foreground": isActive,
            "text-muted-foreground hover:bg-accent/40 hover:text-accent-foreground rounded-l-md active:bg-accent":
              !isActive,
          }
        )}
      >
        {isActive && (
          <motion.div
            className="absolute left-0 w-0.5 h-full bg-foreground rounded-r-full"
            layoutId="activeIndicator"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
        <Icon className={cn("w-4 h-4", isActive && "text-foreground")} />
        <span className={cn(isActive && "text-foreground")}>{label}</span>
      </motion.div>
    </Link>
  );
};

const Navigation = () => {
  return (
    <nav className="flex flex-col gap-1 p-4">
      <NavItem label="Home" icon={LucideHome} href="/" />
      <NavItem label="Search" icon={LucideSearch} href="/search" />
      <NavItem label="Explore" icon={LucideStars} href="/explore" />
      <NavItem label="Notifications" icon={LucideBell} href="/notifications" />
    </nav>
  );
};

export default Navigation;
