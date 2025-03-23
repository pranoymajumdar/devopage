"use client";

import type { Profile } from "@prisma/client";
import { LucideBell, LucideHome, LucideSearch, LucideSparkles, LucideUser } from "lucide-react";

import { NavItem } from "./nav-item";
import { UserDropdown } from "./user-dropdown";

type Props = {
  profile: Profile | null;
};

const navItems = [
  { label: "Home", icon: LucideHome, href: "/" },
  { label: "Search", icon: LucideSearch, href: "/search" },
  { label: "Explore", icon: LucideSparkles, href: "/explore" },
  { label: "Notifications", icon: LucideBell, href: "/notifications" },
];

export const BottomNav = ({ profile }: Props) => {
  return (
    <div className="bg-background/80 sticky right-0 bottom-0 left-0 z-50 block border-t backdrop-blur-md md:hidden">
      <nav className="mx-auto flex h-20 max-w-md items-center justify-between px-2">
        {navItems.map((item) => (
          <NavItem key={item.href} label={item.label} icon={item.icon} href={item.href} />
        ))}

        {profile && (
          <UserDropdown profile={profile}>
            <button className="relative flex w-full flex-col items-center justify-center transition-colors duration-200">
              <div className="relative">
                <div className="text-muted-foreground relative flex items-center justify-center rounded-lg p-1.5">
                  <LucideUser className="h-5.5 w-5.5" strokeWidth={2} />
                </div>
              </div>
              <span className="text-muted-foreground mt-1 text-[10px] font-medium">Profile</span>
            </button>
          </UserDropdown>
        )}
      </nav>
    </div>
  );
};
