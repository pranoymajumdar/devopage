import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_mainLayout/explore")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/_mainLayout/explore"!</div>;
}
