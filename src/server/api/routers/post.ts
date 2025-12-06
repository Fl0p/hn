import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  getPostById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const post = await ctx.db.post.findUnique({
        where: { id: input.id },
      });

      return post ?? null;
    }),

  create: publicProcedure
    .input(
      z.object({
        name: z.string().min(1),
        initDate: z.string().min(1),
        caseNumber: z.string().min(1),
        partyType: z.string().min(1),
        initialPdfUrl: z.string().min(1),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.post.create({
        data: {
          name: input.name,
          initDate: input.initDate,
          caseNumber: input.caseNumber,
          partyType: input.partyType,
          initialPdf: {
            create: {
              url: input.initialPdfUrl,
            },
          },
        },
      });
    }),

  getAll: publicProcedure.query(async ({ ctx }) => {
    const posts = await ctx.db.post.findMany({
      orderBy: { createdAt: "asc" },
      take: 10,
    });

    return posts ?? null;
  }),
});
