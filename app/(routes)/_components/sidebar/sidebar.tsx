import { auth } from "@/auth";
import Logo from "@/components/logo";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SidebarRoutes } from "./sidebar-routes";
import { UserDropdown } from "../user-dropdown";
import { SignInButton } from "@/components/auth/sign-in-button";

const Sidebar = async () => {
  const session = await auth();
  return (
    <aside className="h-full border-r flex flex-col overflow-y-auto shadow-sm bg-background">
      <div className="p-6">
        <Logo size="sm" />
      </div>
      <SidebarRoutes />
      <div className="py-6 px-3 mt-auto">
        {session?.user ? (
          <UserDropdown>
            <button className="flex items-center gap-x-2 hover:bg-secondary/30 active:bg-secondary/60 px-3 py-2 rounded-lg border w-full">
              <Avatar>
                <AvatarImage
                  src={session?.user?.image || ""}
                  alt={session?.user?.name || ""}
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start gap-y-0.5">
                <span className="text-sm font-medium">
                  {session?.user?.name}
                </span>
                <span className="text-xs font-medium text-muted-foreground">
                  {session?.user?.email}
                </span>
              </div>
            </button>
          </UserDropdown>
        ) : (
          <SignInButton
            className={cn(buttonVariants({ className: "w-full", size: "lg" }))}
          >
            Login
          </SignInButton>
        )}
      </div>
    </aside>
  );
};
export default Sidebar;