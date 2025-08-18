import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_mainLayout/trending")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/_mainLayout/trending"!</div>;
}
