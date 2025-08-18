import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_mainLayout/bookmarks")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/_mainLayout/bookmarks"!</div>;
}
