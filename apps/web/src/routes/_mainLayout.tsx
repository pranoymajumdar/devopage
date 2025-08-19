import { createFileRoute, Outlet } from "@tanstack/react-router";
import { BottomNavigation } from "@/components/layout/BottomTab";
import { Sidebar } from "@/components/layout/sidebar";

export const Route = createFileRoute("/_mainLayout")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="flex h-screen overflow-hidden">
			<div className="hidden md:flex md:w-64 lg:w-72">
				<Sidebar />
			</div>

			<main className="flex-1 overflow-y-auto bg-background">
				<div className="mx-auto max-w-7xl">
					<Outlet />
				</div>
			</main>

			<BottomNavigation />
		</div>
	);
}
