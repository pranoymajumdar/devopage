"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  LucideBell,
  LucideHome,
  LucideIcon,
  LucideSearch,
  LucideSparkles,
  LucideUser,
} from "lucide-react";

import { useSession } from "@/lib/auth-client";
import { cn } from "@/lib/utils";

type NavItemProps = {
  label: string;
  icon: LucideIcon;
  href: string;
};
const NavItem = ({ label, icon: Icon, href }: NavItemProps) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className="relative flex w-full flex-col items-center justify-center transition-colors duration-200"
    >
      <div className="relative">
        {isActive && (
          <motion.div
            layoutId="bottomNavIndicator"
            className="bg-primary/10 absolute -top-1 -right-1 -bottom-1 -left-1 rounded-lg"
            transition={{ type: "spring", duration: 0.5 }}
          />
        )}
        <div
          className={cn(
            "relative flex items-center justify-center rounded-lg p-1.5",
            isActive ? "text-primary" : "text-muted-foreground",
          )}
        >
          <Icon className="h-5.5 w-5.5" strokeWidth={isActive ? 2.5 : 2} />
        </div>
      </div>

      <span
        className={cn(
          "mt-1 text-[10px] font-medium",
          isActive ? "text-primary" : "text-muted-foreground",
        )}
      >
        {label}
      </span>

      {isActive && (
        <motion.div
          layoutId="bottomNavDot"
          className="bg-primary absolute -top-1 left-1/2 h-1 w-1 -translate-x-1/2 transform rounded-full"
          transition={{ type: "spring", duration: 0.5 }}
        />
      )}
    </Link>
  );
};
export const BottomNav = () => {
  const { data: session } = useSession();
  return (
    <div className="bg-background/80 sticky right-0 bottom-0 left-0 z-50 block border-t backdrop-blur-md md:hidden">
      <nav className="mx-auto flex h-20 max-w-md items-center justify-between px-2">
        <NavItem label="Home" icon={LucideHome} href="/" />
        <NavItem label="Search" icon={LucideSearch} href="/search" />
        <NavItem label="Explore" icon={LucideSparkles} href="/explore" />
        <NavItem label="Notifications" icon={LucideBell} href="/notifications" />
        {session?.user && <NavItem label="Profile" icon={LucideUser} href="/profile" />}
      </nav>
    </div>
  );
};
