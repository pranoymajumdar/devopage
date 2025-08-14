import { Button, buttonVariants } from "@/components/ui/button";
import { Avatar } from "@radix-ui/react-avatar";
import { LucideMoreHorizontal } from "lucide-react";
import { UserDropdown } from "../user-dropdown";
import { auth } from "@/lib/auth/server";
import { headers } from "next/headers";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export async function SidebarFooter() {
  const sessionData = await auth.api.getSession({ headers: await headers() });

  if (!sessionData) {
    return (
      <div className="px-2 py-3">
        <Link
          href="/sign-in"
          className={buttonVariants({
            className: "w-full",
          })}
        >
          Sign In
        </Link>
      </div>
    );
  }

  return (
    <div className="border-t p-2">
      <UserDropdown user={sessionData.user}>
        <Button
          variant="ghost"
          className="hover:bg-accent h-auto w-full justify-start gap-3 px-3 py-2"
        >
          <Avatar className="h-8 w-8">
            {sessionData.user.image ? (
              <AvatarImage src={sessionData.user.image} />
            ) : (
              <AvatarFallback>CN</AvatarFallback>
            )}
          </Avatar>
          <div className="flex flex-1 flex-col items-start text-left">
            <span className="text-sm font-medium">{sessionData.user.name}</span>
            <span className="text-muted-foreground text-xs">@pranoy</span>
          </div>
          <LucideMoreHorizontal className="text-muted-foreground h-4 w-4" />
        </Button>
      </UserDropdown>
    </div>
  );
}
