import { SidebarHeader } from "./header";
import { SidebarNavigation } from "./nav";
import { SidebarFooter } from "./footer";

export function Sidebar() {
  return (
    <aside className="bg-background flex h-screen w-full flex-col overflow-y-scroll border-r">
      <SidebarHeader />
      <SidebarNavigation />
      <SidebarFooter />
    </aside>
  );
}
