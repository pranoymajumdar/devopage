import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const globalForDb = globalThis as unknown as {
  conn?: Pool;
};

if (!globalForDb.conn && process.env.NODE_ENV !== "production") {
  globalForDb.conn = new Pool({
    connectionString: process.env.DATABASE_URL,
  });
}

const conn =
  process.env.NODE_ENV !== "production"
    ? globalForDb.conn!
    : new Pool({
        connectionString: process.env.DATABASE_URL,
      });

export const db = drizzle(conn, {
  logger: true,
});
