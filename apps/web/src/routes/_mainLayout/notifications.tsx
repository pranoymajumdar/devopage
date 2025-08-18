import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_mainLayout/notifications")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/_mainLayout/notifications"!</div>;
}
