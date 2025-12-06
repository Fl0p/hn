# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an AI Assistant for Administrative Decision-Making built with the T3 Stack. The system supports adjudicators in public administration with administrative case management, document analysis, and decision generation.

**Tech Stack:**
- Next.js 15 (Pages Router) with TypeScript
- tRPC v11 for type-safe API layer
- Prisma ORM with PostgreSQL
- React 19 with Tailwind CSS v4
- Radix UI + shadcn/ui components
- React Query (via tRPC) for data fetching
- Dify Platform for AI orchestration (per architecture docs)

## Development Commands

```bash
# Development
pnpm dev              # Start dev server with Turbo (localhost:3000)

# Database
pnpm db:push          # Push schema changes to database
pnpm db:generate      # Generate Prisma client and run migrations
pnpm db:migrate       # Deploy migrations to production
pnpm db:studio        # Open Prisma Studio

# Code Quality
pnpm typecheck        # Run TypeScript type checking
pnpm lint             # Run ESLint
pnpm lint:fix         # Fix ESLint issues automatically
pnpm format:check     # Check code formatting with Prettier
pnpm format:write     # Format code with Prettier
pnpm check            # Run both lint and typecheck

# Build & Deploy
pnpm build            # Build production bundle
pnpm start            # Start production server
pnpm preview          # Build and start in preview mode
```

## Architecture

### tRPC API Structure

The API layer uses tRPC for end-to-end type safety:

- **Router Definition**: `src/server/api/root.ts` - Main app router that combines all sub-routers
- **Router Modules**: `src/server/api/routers/` - Individual routers (e.g., `post.ts`)
- **tRPC Setup**: `src/server/api/trpc.ts` - Context, procedures, and middleware configuration
- **API Endpoint**: `src/pages/api/trpc/[trpc].ts` - Next.js API route handler
- **Client Setup**: `src/utils/api.ts` - tRPC client configuration for frontend

**Key tRPC Patterns:**
- Use `publicProcedure` from `~/server/api/trpc` for creating endpoints
- Input validation with Zod schemas
- Access database via `ctx.db` in procedures
- Development timing middleware adds 100-500ms artificial delay to catch waterfalls

### Database Layer

- **Schema**: `prisma/schema.prisma` - Database models and relationships
- **Client**: `src/server/db.ts` - Singleton Prisma client instance
- **Generated Client**: `generated/prisma/` - Custom output location for Prisma client

**Note**: Prisma client is generated to `generated/prisma/` instead of the default `node_modules/.prisma/client`

### Frontend Structure

- **Pages**: `src/pages/` - Next.js pages using Pages Router
  - `index.tsx` - Main dashboard/landing page
  - `_app.tsx` - App wrapper with tRPC provider
  - `api/` - API routes (tRPC handler)

- **Components**: `src/components/`
  - `ui/` - Base UI components (shadcn/ui)
  - `upload-pdf/` - PDF upload component (max 40MB)
  - `sprite-holder/` - Icon/sprite management

- **Utils**: `src/utils/` - Shared utilities and helpers

### Path Aliases

The project uses `~/*` path alias:
```typescript
import { api } from "~/utils/api";
import { db } from "~/server/db";
```

## Environment Variables

Required environment variables (defined in `src/env.js` using `@t3-oss/env-nextjs`):

```bash
DATABASE_URL=        # PostgreSQL connection string
NODE_ENV=            # development | test | production
```

Environment validation can be skipped with `SKIP_ENV_VALIDATION=true` (useful for Docker builds).

## AI Integration Architecture

See `docs/architecture.md` for comprehensive system architecture including:

- **Dify Platform**: AI workflow orchestration with built-in RAG capabilities
- **Knowledge Base**: Historical decisions (~300), legal regulations, court decisions (CBOSA)
- **AI Workflows**: Document analysis, decision generation, similar case search, risk assessment
- **Database Schema**: Cases, Documents, Decisions, Analysis, AuditLog, User models (planned)

**Current Status**: Project appears to be in early development with basic tRPC scaffolding. The comprehensive AI features described in architecture docs are planned but not yet implemented.

## Database Workflow

After modifying `prisma/schema.prisma`:

1. **Development**: `pnpm db:push` - Quick schema sync without migrations
2. **Generate Client**: Automatically runs via `postinstall` hook, or manually with `pnpm db:generate`
3. **Production**: `pnpm db:migrate` - Deploy migration files

## Code Conventions

- **TypeScript**: Strict mode enabled with `noUncheckedIndexedAccess`
- **Imports**: Use `~/*` path alias for all internal imports
- **API Layer**: All backend logic goes through tRPC routers
- **Validation**: Use Zod for input validation at API boundaries
- **Styling**: Tailwind CSS v4 with utility-first approach
- **Components**: Use shadcn/ui patterns for consistency

## Adding New Features

### New tRPC Router

1. Create router file in `src/server/api/routers/[name].ts`
2. Export router using `createTRPCRouter` and `publicProcedure`
3. Add router to `src/server/api/root.ts` in `appRouter`

Example:
```typescript
// src/server/api/routers/case.ts
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const caseRouter = createTRPCRouter({
  list: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.case.findMany();
  }),
});

// src/server/api/root.ts
export const appRouter = createTRPCRouter({
  post: postRouter,
  case: caseRouter, // Add new router here
});
```

### New Database Model

1. Add model to `prisma/schema.prisma`
2. Run `pnpm db:push` (dev) or create migration with `pnpm db:generate`
3. Use via `ctx.db.[modelName]` in tRPC procedures

## Known Configuration

- **PDF Upload**: Maximum file size is 40MB
- **Port**: Development server runs on default Next.js port (3000)
- **Package Manager**: pnpm (v10.24.0) - use pnpm for all operations
