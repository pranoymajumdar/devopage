"use client";

import type { ReactNode } from "react";
import { useRouter } from "next/navigation";
import type { Profile } from "@prisma/client";
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
import { signOut } from "@/lib/auth-client";

type Props = {
  children: ReactNode;
  profile: Profile;
};

export const UserDropdown = ({ children, profile }: Props) => {
  const router = useRouter();

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
            await signOut({
              fetchOptions: {
                onSuccess: () => {
                  router.push("/");
                  router.refresh();
                  toast.success("Successfully logged out.");
                },
                onError: () => {
                  toast.error("Failed to log out. Please try again.");
                },
              },
            });
          }}
        >
          <LucideLogOut className="mr-2 h-4 w-4" />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
