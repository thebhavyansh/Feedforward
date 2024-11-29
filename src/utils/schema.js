import { intersect } from "drizzle-orm/mysql-core";
import { char, integer, pgTable, varchar,json } from "drizzle-orm/pg-core";

export const datas = pgTable("datas", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull(),
  number:varchar({ length: 255 }).notNull(),
  position:varchar({ length: 255 }).notNull(),
  quanity:varchar({ length: 255 }).notNull(),
  status:varchar({ length: 255 }).notNull(),
});
export const admin = pgTable("admin", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull(),
  number:varchar({ length: 255 }).notNull(),
  position:varchar({ length: 255 }).notNull(),
});