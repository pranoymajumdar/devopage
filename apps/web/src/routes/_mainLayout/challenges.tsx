import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_mainLayout/challenges")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/_mainLayout/challenges"!</div>;
}
