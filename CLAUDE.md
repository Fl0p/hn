# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 14 application built with TypeScript, Prisma ORM, and PostgreSQL. It's a simple demonstration app showing user management with a full-stack setup including API routes, database integration, and server components.

## Development Commands

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Build for production
yarn build

# Start production server
yarn start

# Run linter
yarn lint
```

## Database Commands

```bash
# Start PostgreSQL database (Docker)
yarn db:up

# Stop database
yarn db:down

# Run Prisma migrations (creates/updates database schema)
yarn db:migrate

# Generate Prisma Client (run after schema changes)
yarn db:generate

# Open Prisma Studio (database GUI)
yarn db:studio
```

## Architecture

### Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict mode enabled)
- **Database**: PostgreSQL (via Docker)
- **ORM**: Prisma
- **Package Manager**: Yarn 4.11.0

### Project Structure
- `app/` - Next.js App Router directory
  - `app/page.tsx` - Home page (Server Component) that displays recent users
  - `app/layout.tsx` - Root layout with metadata
  - `app/api/users/route.ts` - REST API endpoints for user CRUD operations (GET, POST)
- `lib/prisma.ts` - Prisma Client singleton with development hot-reload prevention
- `prisma/schema.prisma` - Database schema definition
- `docker-compose.yml` - PostgreSQL container configuration

### Database Setup

The PostgreSQL database runs in Docker on port 5432:
- **Database name**: `hn_dev`
- **User/Password**: `postgres/postgres`
- **Connection**: Configured via `DATABASE_URL` in `.env`

On first setup, you need to:
1. Start the database: `yarn db:up`
2. Run migrations: `yarn db:migrate`
3. The Prisma Client is auto-generated after migrations

### Data Model

Currently has a single `User` model (prisma/schema.prisma:13-19):
- `id` - Auto-incrementing integer primary key
- `email` - Unique string (required)
- `name` - Optional string
- `createdAt` / `updatedAt` - Auto-managed timestamps

### API Routes

The app uses Next.js Route Handlers (app/api/users/route.ts):
- `GET /api/users` - Fetch all users (ordered by creation date)
- `POST /api/users` - Create new user (requires email, optional name)
  - Returns 409 on duplicate email (Prisma error code P2002)

### Prisma Integration

The Prisma Client is instantiated as a singleton in lib/prisma.ts:9 to prevent multiple instances during Next.js hot-reloading in development. This pattern stores the client on `globalThis` to persist across module reloads.

### Path Aliases

TypeScript is configured with `@/*` path alias (tsconfig.json:22-24) that maps to the project root, used throughout the codebase for imports like `@/lib/prisma`.

## Development Workflow

1. **Making schema changes**:
   - Edit `prisma/schema.prisma`
   - Run `yarn db:migrate` to create migration and apply changes
   - Prisma Client is automatically regenerated

2. **Adding API endpoints**:
   - Create route handlers in `app/api/[route]/route.ts`
   - Import `prisma` from `@/lib/prisma`
   - Use NextResponse for responses

3. **Creating pages**:
   - Add files to `app/` directory (App Router convention)
   - Use Server Components by default for database queries
   - Import `prisma` directly in Server Components
