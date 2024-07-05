import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const projects = pgTable("projects", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  date: timestamp("date", { withTimezone: true }),
  image: text("image").notNull(),
  tech: text("tech").array().notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});
