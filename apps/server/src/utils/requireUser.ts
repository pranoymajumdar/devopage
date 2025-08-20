import type { Context } from "hono";
import { HTTPException } from "hono/http-exception";
import { StatusCodes } from "http-status-codes";

export function requireUser(c: Context) {
  const user = c.get("user");
  if (!user) {
    throw new HTTPException(StatusCodes.UNAUTHORIZED, {
      message: "You need to sign in.",
    });
  }
  return user;
}
