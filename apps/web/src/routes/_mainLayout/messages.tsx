import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_mainLayout/messages")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/_mainLayout/messages"!</div>;
}
