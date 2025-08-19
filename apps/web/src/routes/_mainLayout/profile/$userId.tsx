import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_mainLayout/profile/$userId")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/_mainLayout/profile/$userId"!</div>;
}
