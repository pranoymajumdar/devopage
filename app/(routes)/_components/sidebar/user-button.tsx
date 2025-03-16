"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSession } from "@/lib/auth-client";

import { UserDropdown } from "../user-dropdown";

const UserButton = () => {
  const { data: session } = useSession();
  if (!session?.user) return null;
  return (
    <UserDropdown>
      <button className="hover:bg-secondary/30 active:bg-secondary/60 flex w-full items-center gap-x-2 rounded-lg border px-3 py-2">
        <Avatar>
          <AvatarImage src={session.user.image || ""} alt={session.user.name || ""} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-start gap-y-0.5 overflow-hidden">
          <span className="text-sm font-medium">{session.user.name}</span>
          <span className="text-muted-foreground text-xs font-medium">{session.user.email}</span>
        </div>
      </button>
    </UserDropdown>
  );
};

export default UserButton;
