import { createFileRoute } from "@tanstack/react-router";
import { ModeToggle } from "@/components/mode-toggle";

export const Route = createFileRoute("/_mainLayout/")({
	component: RouteComponent,
});

function RouteComponent() {
	return <ModeToggle />;
}
