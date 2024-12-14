import { integer, pgTable, varchar } from 'drizzle-orm/pg-core';

export const usersTable = pgTable('users', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  username: varchar({ length: 10 }).notNull().unique(),
  name: varchar({ length: 100 }).notNull(),
  email: varchar({ length: 100 }).notNull().unique(),
});
