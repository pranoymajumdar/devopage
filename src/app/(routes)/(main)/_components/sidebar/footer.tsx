import { Button } from "@/components/ui/button";
import { Avatar } from "@radix-ui/react-avatar";
import { LucideMoreHorizontal } from "lucide-react";
import { UserDropdown } from "../user-dropdown";

export function SidebarFooter() {
  return (
    <div className="border-t p-2">
      <UserDropdown>
        <Button
          variant="ghost"
          className="hover:bg-accent h-auto w-full justify-start gap-3 px-3 py-2"
        >
          <Avatar className="h-8 w-8">
            <div className="bg-primary text-primary-foreground flex h-full w-full items-center justify-center text-sm font-medium">
              JD
            </div>
          </Avatar>
          <div className="flex flex-1 flex-col items-start text-left">
            <span className="text-sm font-medium">John Doe</span>
            <span className="text-muted-foreground text-xs">@johndoe</span>
          </div>
          <LucideMoreHorizontal className="text-muted-foreground h-4 w-4" />
        </Button>
      </UserDropdown>
    </div>
  );
}
