"use client";

import type { ComponentType, ReactNode } from "react";
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

import { cn } from "@/lib/utils";

import { UserDropdown } from "./user-dropdown";

type NavItemBase = {
  label: string;
  icon: LucideIcon;
};

type NavItemWithHref = NavItemBase & {
  href: string;
  wrapperComponent?: never; // Prevents wrapperComponent when href is present
};

type NavItemWithWrapper = NavItemBase & {
  href?: never; // Prevents href when wrapperComponent is present
  wrapperComponent: ComponentType<{ children: ReactNode }>;
};

type NavItemProps = NavItemWithHref | NavItemWithWrapper;

const NavItem = ({ label, icon: Icon, href, wrapperComponent: WrapperComponent }: NavItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  const baseClasses = cn(
    "relative flex flex-col items-center justify-center w-full",
    "transition-colors duration-200",
  );
  const content = (
    <>
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
    </>
  );

  return WrapperComponent ? (
    <WrapperComponent>
      <span className={baseClasses}>{content}</span>
    </WrapperComponent>
  ) : (
    <Link className={baseClasses} href={href}>
      {content}
    </Link>
  );
};

export const BottomNav = () => {
  return (
    <div className="bg-background/80 fixed right-0 bottom-0 left-0 z-50 block border-t backdrop-blur-md md:hidden">
      <nav className="mx-auto flex h-20 max-w-md items-center justify-between px-2">
        <NavItem label="Home" icon={LucideHome} href="/" />
        <NavItem label="Search" icon={LucideSearch} href="/search" />
        <NavItem label="Explore" icon={LucideSparkles} href="/explore" />
        <NavItem label="Notifications" icon={LucideBell} href="/notifications" />
        <NavItem label="Profile" icon={LucideUser} wrapperComponent={UserDropdown} />
      </nav>
    </div>
  );
};
