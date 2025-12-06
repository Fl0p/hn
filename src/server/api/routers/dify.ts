import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { env } from "~/env";

export const difyRouter = createTRPCRouter({
  triggerFlow: publicProcedure
    .input(
      z.object({
        message: z.string().min(1),
        user: z.string().default("test-user"),
      }),
    )
    .mutation(async ({ input }) => {
      try {
        const url = `${env.DIFY_API_URL}/chat-messages`;
        
        console.log("=== Dify Request ===");
        console.log("URL:", url);
        console.log("API Key (first 10 chars):", env.DIFY_API_KEY.substring(0, 10) + "...");
        
        const requestBody = {
          inputs: {
            Input_Text: input.message,
          },
          query: input.message,
          response_mode: "blocking",
          conversation_id: "",
          user: input.user,
        };
        
        console.log("Request body:", JSON.stringify(requestBody, null, 2));
        
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${env.DIFY_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        });

        console.log("Response status:", response.status);
        console.log("Response statusText:", response.statusText);
        
        const responseText = await response.text();
        console.log("Response body:", responseText);

        if (!response.ok) {
          throw new Error(`Dify API error: ${response.status} ${response.statusText} - ${responseText}`);
        }

        const data: unknown = JSON.parse(responseText);
        return {
          success: true,
          data,
        };
      } catch (error) {
        console.error("=== Dify flow error ===");
        console.error("Error:", error);
        return {
          success: false,
          error: error instanceof Error ? error.message : "Unknown error",
        };
      }
    }),
});

