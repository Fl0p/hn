import { createServerSideHelpers } from "@trpc/react-query/server";
import superjson from "superjson";
import { appRouter } from "~/server/api/root";
import { createInnerTRPCContext } from "~/server/api/trpc";

export const prefetchHelper = createServerSideHelpers({
  router: appRouter,
  ctx: createInnerTRPCContext({}),
  transformer: superjson, // optional - adds superjson serialization
});

type getPrefetchHelperArgs = {
  auth: Parameters<typeof createInnerTRPCContext>[number]["auth"];
};
export const getPrefetchHelper = ({ auth }: getPrefetchHelperArgs) => {
  const prefetchHelper = createServerSideHelpers({
    router: appRouter,
    ctx: createInnerTRPCContext({ auth }),
    transformer: superjson, // optional - adds superjson serialization
  });
  return prefetchHelper;
};
