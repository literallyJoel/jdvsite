import { createTRPCRouter, publicProcedure } from "@src/server/api/trpc";

export const ocvRouter = createTRPCRouter({
  getExperience: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.oCV_experience.findMany();
  }),

  getEducation: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.oCV_education.findMany({
      orderBy: { startDate: "desc" },
    });
  }),

  getSkills: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.oCV_skills.findMany();
  }),

  getQualifications: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.oCV_qualifications.findMany();
  }),
});
