"use client";

import type { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { LucideHelpCircle, LucideLogOut, LucideSettings, LucideUser } from "lucide-react";
import { toast } from "sonner";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import { useIsMounted } from "@/hooks/use-is-mounted";
import { useProfile } from "@/hooks/use-profile";
import { signOut } from "@/lib/auth-client";

type Props = {
  children: ReactNode;
};

const UserDropdownSkeleton = () => {
  return (
    <div className="bg-card flex items-center gap-4 rounded-lg border p-4">
      <Skeleton className="h-9 w-9 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-3 w-24" />
      </div>
    </div>
  );
};
export const UserDropdown = ({ children }: Props) => {
  const router = useRouter();
  const isMounted = useIsMounted();
  const { data: profile, isLoading, error } = useProfile();

  if (error) {
    toast.error("Failed to load profile. Please try again.");
    return null;
  }

  if (!isMounted || isLoading) return <UserDropdownSkeleton />;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-[220px] max-md:m-2" align="start">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onSelect={() => router.push(`/profile/${profile?.username}`)}
          disabled={!profile}
        >
          <LucideUser className="mr-2 h-4 w-4" />
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => router.push(`/profile/settings`)} disabled={!profile}>
          <LucideSettings className="mr-2 h-4 w-4" />
          Settings
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LucideHelpCircle className="mr-2 h-4 w-4" />
          Help & Support
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="text-red-600"
          onSelect={async () => {
            try {
              await signOut();
              router.refresh();
              toast.success("Successfully logged out.");
            } catch {
              toast.error("Failed to log out. Please try again.");
            }
          }}
        >
          <LucideLogOut className="mr-2 h-4 w-4" />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
