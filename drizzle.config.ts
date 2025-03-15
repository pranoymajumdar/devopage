import dotenv from 'dotenv';
import { defineConfig } from "drizzle-kit";

dotenv.config({path: '.env.local'})
dotenv.config()

console.log(process.env.DATABASE_URL)
export default defineConfig({
  out: "./server/db/migrations",
  schema: "./server/db/schemas/index.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});