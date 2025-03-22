import { pgTable, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).primaryKey(),
  avatar: varchar({ length: 255 }).notNull().unique(),
});
