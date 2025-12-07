import { TRPCError } from "@trpc/server";
import { SubmissionStatus } from "generated/prisma";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  getPostById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const post = await ctx.db.post.findUnique({
        where: { id: input.id },
        include: {
          initialPdf: true,
          conversationPdf: true,
          prolongationPdf: true,
          decisionPdf: true,
        },
      });

      return post ?? null;
    }),

  create: publicProcedure
    .input(
      z.object({
        name: z.string().min(1),
        initialPdfUrl: z.string().min(1),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.post.create({
        data: {
          name: input.name,
          initialPdf: {
            create: {
              url: input.initialPdfUrl,
            },
          },
        },
      });
    }),
  analyze: publicProcedure
    .input(
      z.object({
        id: z.string().min(1),
        name: z.string().min(1),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const response = await fetch(
        "https://dify.aimost.pl/v1/workflows/084fbfe1-3e34-48e1-a2cb-363f3759fbde/run",
        {
          method: "POST",
          headers: {
            accept: "*/*",
            "accept-language": "en-US,en;q=0.9,ru;q=0.8",
            "content-type": "application/json",
            origin: "https://dify.aimost.pl",
            priority: "u=1, i",
            referer: "https://dify.aimost.pl/workflow/v2TZZ8UyE4woHJDi",
            "sec-ch-ua": `"Not;A=Brand";v="99", "Google Chrome";v="139", "Chromium";v="139"`,
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "user-agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36",
            "x-app-code": "v2TZZ8UyE4woHJDi",
            "x-app-passport":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiI1YjFjOTdiYy1jMmZhLTQ1NWQtOWM5OS1mMmM2NThmOGI0ZTAiLCJzdWIiOiJXZWIgQVBJIFBhc3Nwb3J0IiwiYXBwX2lkIjoiNWIxYzk3YmMtYzJmYS00NTVkLTljOTktZjJjNjU4ZjhiNGUwIiwiYXBwX2NvZGUiOiJ2MlRaWjhVeUU0d29ISkRpIiwiZW5kX3VzZXJfaWQiOiJkNWJjMDZkZC0zY2JkLTRjNTEtOTU2MS1iZjcyYWI0YzNmZjgifQ.6_0gNA_V5-1sJ_vcjTEgxWAvB146lU7uPM4jyrCfP2Q",
            "x-csrf-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NjUwNjQ0ODIsInN1YiI6Ijc1ODFhN2FhLTNiYzgtNDAxMS1iNGU5LTJjNDY4MDA5ZmY0NSJ9.WwYGUR4f7oMJ0DYLNGQhs0dqEOvrblcRFvz4RE4ylZM",
            Authorization: "Bearer app-0X9jogpIR5hMetR8LGtpXQ2k",
          },
          body: JSON.stringify({
            inputs: {
              odwolanie: {
                type: "document",
                transfer_method: "local_file",
                url: "",
                upload_file_id: input.name,
              },
            },
            response_mode: "blocking",
            user: "user9@aimost.pl",
          }),
        },
      );
      const body = (await response.json()) as unknown as {
        task_id: string;
        workflow_run_id: string;
        data: {
          id: string;
          outputs: {
            data: {
              case_number: string;
              new_deadline: string;
              date: string;
              party_name: string;
            };
          };
        };
      };

      await ctx.db.post.update({
        where: { id: input.id },
        data: {
          status: SubmissionStatus.ANALYZED,
          caseNumber: body.data.outputs.data.case_number,
          initDate:
            body.data.outputs.data.new_deadline || body.data.outputs.data.date,
          partyType: body.data.outputs.data.party_name,
        },
      });
    }),

  prolongate: publicProcedure
    .input(
      z.object({
        id: z.string().min(1),
        name: z.string().min(1),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      console.log("🚀 ~ prolongate:publicProcedure ~ input:", input);
      const response = await fetch(
        "https://dify.aimost.pl/v1/workflows/9fe8bd15-5958-4b46-b300-723069f0748d/run",
        {
          method: "POST",
          headers: {
            Authorization: "Bearer app-JVtvQFDvY3m9lDxuV7CEKUSn",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            inputs: {
              odwolanie: {
                type: "document",
                transfer_method: "local_file",
                url: "",
                upload_file_id: input.name,
              },
            },
            response_mode: "blocking",
            user: "user9@aimost.pl",
          }),
        },
      );

      const body = (await response.json()) as unknown as {
        task_id: string;
        workflow_run_id: string;
        data: {
          id: string;
          outputs: {
            files: Array<{ url: string }>;
          };
        };
      };
      console.log(
        "🚀 ~ prolongate:publicProcedure ~ body:",
        JSON.stringify(body, null, 2),
      );

      const prolongatedPdfUrl = body.data.outputs.files
        .at(0)
        ?.url.replace("http://api:5001/", "https://dify.aimost.pl/");
      if (!prolongatedPdfUrl)
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Prolongated PDF URL not found",
        });
      const prolongatedPdf = await ctx.db.prolongatedPdf.create({
        data: {
          url: prolongatedPdfUrl,
          postId: input.id,
        },
      });
      await ctx.db.post.update({
        where: { id: input.id },
        data: {
          initDate: prolongatedPdf.createdAt.toISOString(),
          status: SubmissionStatus.PROLONGATED,
        },
      });
    }),
  makeDecision: publicProcedure
    .input(
      z.object({
        id: z.string().min(1),
        name: z.string().min(1),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const response = await fetch(
        "https://dify.aimost.pl/v1/workflows/b83b5592-2966-4f70-8701-c823d24eaf91/run",
        {
          method: "POST",
          headers: {
            accept: "*/*",
            "accept-language": "en-US,en;q=0.9,ru;q=0.8",
            "content-type": "application/json",
            origin: "https://dify.aimost.pl",
            priority: "u=1, i",
            referer: "https://dify.aimost.pl/workflow/Bnva3eofRRaZJnNM",
            "sec-ch-ua":
              '"Not;A=Brand";v="99", "Google Chrome";v="139", "Chromium";v="139"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "user-agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36",
            "x-app-code": "Bnva3eofRRaZJnNM",
            "x-app-passport":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiI0NzgzMDE0NS1hY2E5LTQ3YzAtYjI4Yi1hOTAxOWM4YTg2ODUiLCJzdWIiOiJXZWIgQVBJIFBhc3Nwb3J0IiwiYXBwX2lkIjoiNDc4MzAxNDUtYWNhOS00N2MwLWIyOGItYTkwMTljOGE4Njg1IiwiYXBwX2NvZGUiOiJCbnZhM2VvZlJSYVpKbk5NIiwiZW5kX3VzZXJfaWQiOiJmMmU4N2NkZC0xYzZiLTQwZDAtODg5Ny0zZmI0NmFhNmRiMjMifQ.9BqdADb3JqFx3PsUifEF3dp9RE5AnwQ7bYp4ahC85W4",
            "x-csrf-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NjUwNzYyNzcsInN1YiI6Ijc1ODFhN2FhLTNiYzgtNDAxMS1iNGU5LTJjNDY4MDA5ZmY0NSJ9.omeb6QXDm2xH96AcvoUQy0NAGPqkSYp6QwyF-272ryI",
            Authorization: "Bearer app-VE5dt7EtjbxVddCGt2Bvo7j7",
          },
          body: JSON.stringify({
            inputs: {
              odwolanie: {
                type: "document",
                transfer_method: "local_file",
                url: "",
                upload_file_id: input.name,
              },
            },
            response_mode: "blocking",
            user: "user9@aimost.pl",
          }),
        },
      );
      const body = (await response.json()) as unknown as {
        task_id: string;
        workflow_run_id: string;
        data: {
          id: string;
          outputs: {
            files: Array<{ url: string }>;
          };
        };
      };
      console.log(
        "🚀 ~ makeDecision:publicProcedure ~ body:",
        JSON.stringify(body, null, 2),
      );
      const decisionPdfUrl = body.data.outputs.files
        .at(0)
        ?.url.replace("http://api:5001/", "https://dify.aimost.pl/");
      if (!decisionPdfUrl)
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Prolongated PDF URL not found",
        });

      await ctx.db.decisionPdf.create({
        data: {
          url: decisionPdfUrl,
          postId: input.id,
        },
      });
      await ctx.db.post.update({
        where: { id: input.id },
        data: {
          status: SubmissionStatus.DECISION_MADE,
        },
      });
    }),

  getAll: publicProcedure.query(async ({ ctx }) => {
    const posts = await ctx.db.post.findMany({
      orderBy: { updatedAt: "asc" },
      take: 10,
    });

    return posts ?? null;
  }),
});
