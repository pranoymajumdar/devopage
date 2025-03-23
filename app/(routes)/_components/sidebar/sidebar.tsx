import { headers } from "next/headers";
import { auth } from "@/server/auth";

import { Logo } from "@/components/logo";

import LoginButton from "./login-button";
import { ProfileCard } from "./profile-card";
import { SidebarRoutes } from "./sidebar-routes";

const Sidebar = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user || null;

  return (
    <aside className="bg-card/40 flex h-full flex-col overflow-y-auto border-r shadow-sm">
      <div className="p-6">
        <Logo size="sm" />
      </div>
      <SidebarRoutes />
      <div className="mt-auto px-3 py-6">
        {user ? <ProfileCard user={user} /> : <LoginButton />}
      </div>
    </aside>
  );
};
export default Sidebar;
