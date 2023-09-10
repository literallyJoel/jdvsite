import { ocvRouter } from "@src/server/api/routers/ocv";
import { createTRPCRouter } from "@src/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  ocv: ocvRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
