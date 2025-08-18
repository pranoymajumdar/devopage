import { SidebarFooter } from "./footer";
import { SidebarHeader } from "./header";
import { SidebarNavigation } from "./nav";

export function Sidebar() {
	return (
		<aside className="flex h-screen w-full flex-col overflow-y-scroll border-r bg-background">
			<SidebarHeader />
			<SidebarNavigation />
			<div className="border-t p-2">
				<SidebarFooter />
			</div>
		</aside>
	);
}
