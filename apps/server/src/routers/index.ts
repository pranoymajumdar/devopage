import { Hono } from "hono";
import { postsRoutes } from "./posts/route";

export const routes = new Hono().route("/posts", postsRoutes);
