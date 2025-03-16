import { headers } from "next/headers";
import { auth } from "@/server/auth";

import Logo from "@/components/logo";

import LoginButton from "./login-button";
import { SidebarRoutes } from "./sidebar-routes";
import UserButton from "./user-button";

const Sidebar = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return (
    <aside className="bg-background flex h-full flex-col overflow-y-auto border-r shadow-sm">
      <div className="p-6">
        <Logo size="sm" />
      </div>
      <SidebarRoutes />
      <div className="mt-auto px-3 py-6">{session?.user ? <UserButton /> : <LoginButton />}</div>
    </aside>
  );
};
export default Sidebar;
