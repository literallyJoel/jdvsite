import { relations } from "drizzle-orm";
import {
  pgTableCreator,
  serial,
  timestamp,
  varchar,
  text,
} from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `ocv_${name}`);

export const skills = createTable("skills", {
  id: serial("id").primaryKey(),
  skillName: varchar("skillName", { length: 256 }),
  image: varchar("image"),
  description: text("description"),
});

export const education = createTable("education", {
  id: serial("id").primaryKey().notNull(),
  placeName: varchar("placeName", { length: 256 }),
  educationLevel: varchar("educationLevel"),
  image: varchar("image"),
  startDate: timestamp("startDate"),
  endDate: timestamp("endDate"),
});

export const qualifications = createTable("qualifications", {
  id: serial("id").primaryKey(),
  educationId: serial("educationId").references(() => education.id),
  name: varchar("name", { length: 256 }),
  grade: varchar("grade"),
});

export const experience = createTable("experience", {
  id: serial("id").primaryKey(),
  placeName: varchar("placeName", { length: 256 }),
  jobTitle: varchar("jobTitle"),
  description: text("description"),
  image: varchar("image"),
  startDate: timestamp("startDate"),
  endDate: timestamp("endDate"),
});

export type experience = typeof experience.$inferSelect;
export type education = typeof education.$inferSelect & {
  qualifications: qualifications[];
};
export const educationRelations = relations(education, ({many}) =>({
  qualifications: many(qualifications),
}))
export const qualificationRelations = relations(qualifications, ({one}) => ({
  education: one(education, {
    fields: [qualifications.educationId],
    references: [education.id],
  }),
}));
export type skills = typeof skills.$inferSelect;
export type qualifications = typeof qualifications.$inferSelect;
