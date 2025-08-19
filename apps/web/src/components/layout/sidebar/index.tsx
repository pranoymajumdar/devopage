import { SidebarFooter } from "./SidebarFooter";
import { SidebarHeader } from "./SidebarHeader";
import { SidebarNavigation } from "./SidebarNavigation";

export function Sidebar() {
	return (
		<aside className="flex h-screen w-full flex-col overflow-y-hidden border-r bg-background">
			<SidebarHeader />
			<SidebarNavigation />
			<div className="border-t p-2">
				<SidebarFooter />
			</div>
		</aside>
	);
}
