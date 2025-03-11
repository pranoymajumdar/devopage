"use client";

import { cn } from "@/lib/utils";
import {
  LucideHome,
  LucideSearch,
  LucideSparkles,
  LucideBell,
  LucideIcon,
  LucideUser,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import type { ComponentType, ReactNode } from "react";
import { UserDropdown } from "../user-dropdown";

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

const NavItem = ({
  label,
  icon: Icon,
  href,
  wrapperComponent: WrapperComponent,
}: NavItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  const baseClasses = cn(
    "relative flex flex-col items-center justify-center w-full",
    "transition-colors duration-200"
  );
  const content = (
    <>
      <div className="relative">
        {isActive && (
          <motion.div
            layoutId="bottomNavIndicator"
            className="absolute -top-1 -left-1 -right-1 -bottom-1 bg-primary/10 rounded-lg"
            transition={{ type: "spring", duration: 0.5 }}
          />
        )}
        <div
          className={cn(
            "relative flex items-center justify-center p-1.5 rounded-lg",
            isActive ? "text-primary" : "text-muted-foreground"
          )}
        >
          <Icon className="w-5.5 h-5.5" strokeWidth={isActive ? 2.5 : 2} />
        </div>
      </div>

      <span
        className={cn(
          "text-[10px] mt-1 font-medium",
          isActive ? "text-primary" : "text-muted-foreground"
        )}
      >
        {label}
      </span>

      {isActive && (
        <motion.div
          layoutId="bottomNavDot"
          className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
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

const BottomNav = () => {
  return (
    <div className="block md:hidden fixed bottom-0 left-0 right-0 border-t bg-background/80 backdrop-blur-md z-50">
      <nav className="h-20 flex items-center justify-between px-2 mx-auto max-w-md">
        <NavItem label="Home" icon={LucideHome} href="/" />
        <NavItem label="Search" icon={LucideSearch} href="/search" />
        <NavItem label="Explore" icon={LucideSparkles} href="/explore" />
        <NavItem
          label="Notifications"
          icon={LucideBell}
          href="/notifications"
        />
        <NavItem
          label="Profile"
          icon={LucideUser}
          wrapperComponent={UserDropdown}
        />
      </nav>
    </div>
  );
};

export default BottomNav;
