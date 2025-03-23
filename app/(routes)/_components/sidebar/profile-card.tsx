import { fetchProfile } from "@/server/utility";
import type { User } from "better-auth";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { UserDropdown } from "../user-dropdown";

type ProfileCardProps = { user: User };

export const ProfileCard = async ({ user }: ProfileCardProps) => {
  const profile = await fetchProfile(user);
  console.error("[PROFILE-CARD] the profile in possibly null! create a card.")
  return (
    <UserDropdown profile={profile!}>
      <button className="hover:bg-secondary/30 active:bg-secondary/60 flex w-full items-center gap-x-2 rounded-lg border px-3 py-2">
        <Avatar>
          <AvatarImage src={user.image || ""} alt={user.name || ""} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-start gap-y-0.5 overflow-hidden">
          <span className="text-sm font-medium">{user.name}</span>
          <span className="text-muted-foreground text-xs font-medium">{user.email}</span>
        </div>
      </button>
    </UserDropdown>
  );
};
