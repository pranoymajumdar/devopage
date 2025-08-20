import { Hono } from "hono";
import { postsRoutes } from "./posts/route";

export const routes = new Hono();

routes.route("/posts", postsRoutes);
