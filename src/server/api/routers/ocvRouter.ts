import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const ocvRouter = createTRPCRouter({
  getExperience: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.experience.findMany({
      orderBy: (experience, { asc }) => [asc(experience.startDate)],
    });
  }),

  getEducation: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.education.findMany({
      orderBy: (education, { asc }) => [asc(education.startDate)],
      with: { qualifications: true },
    });
  }),

  getSkills: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.skills.findMany();
  }),
});
