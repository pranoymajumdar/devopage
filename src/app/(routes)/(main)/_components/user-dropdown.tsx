"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSession } from "@/lib/auth/client";
import {
  LucideLogOut,
  LucideMoon,
  LucideSettings,
  LucideUser,
} from "lucide-react";
import type { ReactNode } from "react";

export function UserDropdown({ children }: { children: ReactNode }) {
  const { data: sessionData, isPending } = useSession();
  if (isPending) {
    return (
      <div className="flex items-center gap-2 px-3 py-2">
        <div className="bg-muted h-8 w-8 animate-pulse rounded-full" />
        <div className="flex flex-col gap-2">
          <span className="bg-muted h-2 w-32 animate-pulse rounded-md" />
          <span className="bg-muted h-2 w-16 animate-pulse rounded-md" />
        </div>
      </div>
    );
  }

  if (!sessionData) {
    return <Button className="w-full">Login</Button>;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-[230px]">
        <DropdownMenuItem className="gap-2">
          <LucideUser className="h-4 w-4" />
          <span>Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="gap-2">
          <LucideSettings className="h-4 w-4" />
          <span>Settings</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="gap-2">
          <LucideMoon className="h-4 w-4" />
          <span>Dark Mode</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-destructive focus:text-destructive gap-2">
          <LucideLogOut className="h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
