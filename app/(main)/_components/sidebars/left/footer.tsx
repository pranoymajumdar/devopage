"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { UserDropdown } from "../../user-dropdown";

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 w-[250px] p-4">
      <UserDropdown>
        <Button
          variant="outline"
          className="w-full flex items-center justify-start gap-2 py-6 px-2 hover:bg-accent"
        >
          <Avatar className="h-8 w-8">
            <AvatarImage src="/avatar.png" alt="User" />
            <AvatarFallback>UN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-start">
            <span className="text-sm font-medium">Username</span>
            <span className="text-xs text-muted-foreground">@username</span>
          </div>
        </Button>
      </UserDropdown>
    </div>
  );
};

export default Footer;
