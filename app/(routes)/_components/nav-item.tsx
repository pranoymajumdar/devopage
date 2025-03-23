"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type NavItemProps = {
  label: string;
  icon: LucideIcon;
  href: string;
};

// Animation configs extracted to reduce object creation in render cycles
const springTransition = { type: "spring", duration: 0.5 };

export const NavItem = ({ label, icon: Icon, href }: NavItemProps) => {
  const pathName = usePathname();
  const isActive = pathName === href || pathName.startsWith(href);
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
            transition={springTransition}
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
          transition={springTransition}
        />
      )}
    </Link>
  );
};
