import { createTRPCRouter, publicProcedure } from "@src/server/api/trpc";
import z from "zod";

export const ocvRouter = createTRPCRouter({
  getExperience: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.oCV_experience.findMany();
  }),

  getEducation: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.oCV_education.findMany({
      orderBy: { startDate: "asc" },
    });
  }),

  getSkills: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.oCV_skills.findMany();
  }),

  getQualifications: publicProcedure
    .input(z.object({ educationID: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.oCV_qualifications.findMany({
        where: {
          placeID: {
            equals: input.educationID,
          },
        },
      });
    }),
});
