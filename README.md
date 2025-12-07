# AI Assistant for Administrative Decision-Making

An intelligent system designed to support adjudicators in public administration with administrative case management, document analysis, and decision generation. Built with modern web technologies and AI orchestration capabilities.

## Overview

This application streamlines the administrative decision-making process by providing:

- **Case Management**: Comprehensive tracking of administrative cases with status monitoring
- **Document Processing**: Upload and manage multiple document types (initial submissions, conversations, prolongations, decisions)
- **AI-Powered Analysis**: Document analysis and decision generation via Dify Platform integration
- **Type-Safe API**: End-to-end type safety with tRPC
- **Modern UI**: Responsive interface built with React 19 and Tailwind CSS v4

## Tech Stack

### Core Framework
- **[Next.js 15](https://nextjs.org/)** - Full-stack React framework with Pages Router
- **[TypeScript 5.8](https://www.typescriptlang.org/)** - Type-safe development
- **[React 19](https://react.dev/)** - UI library

### API & Data Layer
- **[tRPC v11](https://trpc.io/)** - End-to-end typesafe API
- **[Prisma ORM](https://prisma.io/)** - Type-safe database access
- **[PostgreSQL](https://www.postgresql.org/)** - Primary database
- **[React Query](https://tanstack.com/query)** - Data fetching and caching (via tRPC)
- **[Zod](https://zod.dev/)** - Schema validation

### UI & Styling
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[shadcn/ui](https://ui.shadcn.com/)** - Re-usable component library
- **[Lucide React](https://lucide.dev/)** - Icon library
- **[React Dropzone](https://react-dropzone.js.org/)** - File upload component

### AI Integration
- **[Dify Platform](https://dify.ai/)** - AI workflow orchestration with built-in RAG capabilities

## Prerequisites

- **Node.js**: 20.x or later
- **pnpm**: 10.24.0 or later
- **PostgreSQL**: 16 or later
- **Git**: For version control

## Getting Started

### 1. Clone the Repository

```bash
git clone git@github.com:Fl0p/hn.git
cd hn
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Environment Setup

Create a `.env` file in the project root:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/database_name"

# Node Environment
NODE_ENV="development"

# Optional: Skip environment validation (useful for Docker builds)
# SKIP_ENV_VALIDATION=true
```

### 4. Database Setup

```bash
# Push schema to database (development)
pnpm db:push

# Or create and run migrations (production)
pnpm db:generate
pnpm db:migrate
```

### 5. Run Development Server

```bash
pnpm dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Development Commands

### Development
```bash
pnpm dev              # Start dev server with Turbo (localhost:3000)
pnpm build            # Build production bundle
pnpm start            # Start production server
pnpm preview          # Build and start in preview mode
```

### Database
```bash
pnpm db:push          # Push schema changes to database (dev)
pnpm db:generate      # Generate Prisma client and create migrations
pnpm db:migrate       # Deploy migrations to production
pnpm db:studio        # Open Prisma Studio GUI
pnpm db:seed          # Seed database with initial data
```

### Code Quality
```bash
pnpm typecheck        # Run TypeScript type checking
pnpm lint             # Run ESLint
pnpm lint:fix         # Fix ESLint issues automatically
pnpm format:check     # Check code formatting with Prettier
pnpm format:write     # Format code with Prettier
pnpm check            # Run both lint and typecheck
```

## Project Structure

```
hn/
├── docs/                    # Documentation
│   └── architecture.md      # System architecture documentation
├── prisma/
│   ├── schema.prisma        # Database schema
│   └── seed.ts              # Database seeding script
├── src/
│   ├── components/          # React components
│   │   ├── ui/              # Base UI components (shadcn/ui)
│   │   ├── upload-pdf/      # PDF upload component
│   │   └── sprite-holder/   # Icon/sprite management
│   ├── lib/                 # Shared library code
│   │   └── utils.ts         # Utility functions
│   ├── pages/               # Next.js pages (Pages Router)
│   │   ├── api/             # API routes
│   │   │   ├── trpc/        # tRPC endpoint
│   │   │   └── upload.ts    # File upload endpoint
│   │   ├── _app.tsx         # App wrapper with providers
│   │   └── index.tsx        # Main dashboard
│   ├── server/
│   │   ├── api/
│   │   │   ├── routers/     # tRPC routers
│   │   │   │   ├── post.ts  # Case/post operations
│   │   │   │   └── dify.ts  # AI/Dify integration
│   │   │   ├── root.ts      # Main app router
│   │   │   └── trpc.ts      # tRPC configuration
│   │   └── db.ts            # Database client
│   ├── styles/              # Global styles
│   └── utils/               # Shared utilities
├── generated/               # Generated code (Prisma client)
├── .env                     # Environment variables (not in git)
├── CLAUDE.md                # AI assistant guidance
├── package.json             # Dependencies and scripts
└── README.md                # This file
```

## Database Schema

The application uses the following main models:

- **Post**: Represents an administrative case/matter (Sprava)
  - Contains case metadata (number, party type, dates)
  - Tracks case status through submission lifecycle
  - Links to various document types

- **InitialPdf**: Initial submission document (one per case)
- **ConversationPdf**: Correspondence and communication documents
- **ProlongatedPdf**: Extension/prolongation documents
- **DecisionPdf**: Final decision documents

### Case Status Flow

```
INITIALIZED → ANALYZED → IN_PROGRESS → PROLONGATED → DECISION_MADE → COMPLETED
```

## API Structure

The application uses tRPC for type-safe API routes:

### tRPC Routers

- **`post`**: Case/post management operations (CRUD)
- **`dify`**: AI integration for document analysis and decision generation

### API Endpoints

- **tRPC**: `/api/trpc/[trpc]` - Main tRPC handler
- **Upload**: `/api/upload` - File upload endpoint (max 40MB)

## Path Aliases

The project uses the `~/*` path alias for cleaner imports:

```typescript
import { api } from "~/utils/api"
import { db } from "~/server/db"
import { Button } from "~/components/ui/button"
```

## Features

### Current Implementation

- Case/Post management with CRUD operations
- PDF document upload and storage (max 40MB)
- Document categorization (initial, conversation, prolongation, decision)
- Case status tracking
- Type-safe API with tRPC
- Responsive UI with Tailwind CSS

### Planned Features

See [docs/architecture.md](./docs/architecture.md) for comprehensive details on planned AI features:

- Document analysis and summarization
- AI-powered decision generation
- Similar case search with RAG
- Risk assessment and compliance checking
- Knowledge base integration (historical decisions, legal regulations)
- Audit logging and compliance reporting

## AI Integration (Dify Platform)

The system is designed to integrate with [Dify](https://dify.ai/) for AI orchestration:

- **Document Analysis**: Automated summarization and key fact extraction
- **Decision Generation**: AI-assisted draft generation with legal precedent search
- **Similar Case Search**: Semantic search across historical decisions
- **Risk Assessment**: Automated compliance and risk scoring

For detailed architecture, see [docs/architecture.md](./docs/architecture.md).

## Code Conventions

- **TypeScript**: Strict mode enabled with `noUncheckedIndexedAccess`
- **Imports**: Use `~/*` path alias for all internal imports
- **API Layer**: All backend logic goes through tRPC routers
- **Validation**: Use Zod for input validation at API boundaries
- **Styling**: Tailwind CSS v4 with utility-first approach
- **Components**: Follow shadcn/ui patterns for consistency

## Contributing

### Adding a New Feature

1. **Create tRPC Router**
   - Add router file in `src/server/api/routers/[name].ts`
   - Export router using `createTRPCRouter` and `publicProcedure`
   - Register in `src/server/api/root.ts`

2. **Update Database Schema**
   - Modify `prisma/schema.prisma`
   - Run `pnpm db:push` (dev) or `pnpm db:generate` (prod)

3. **Create UI Components**
   - Add components in `src/components/`
   - Follow shadcn/ui patterns
   - Use Tailwind CSS for styling

## Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `DATABASE_URL` | PostgreSQL connection string | Yes | - |
| `NODE_ENV` | Environment mode | Yes | development |
| `SKIP_ENV_VALIDATION` | Skip env validation | No | false |

## Deployment

The application can be deployed to various platforms:

- **[Vercel](https://vercel.com/)** - Recommended for Next.js apps
- **[Docker](https://www.docker.com/)** - Containerized deployment
- **Traditional VPS** - Using PM2 or similar process managers

See the [T3 Stack deployment guides](https://create.t3.gg/en/deployment/vercel) for detailed instructions.

## Performance Targets

- **Document upload**: < 2s
- **Dashboard load**: < 1s
- **Database queries**: < 500ms
- **API response time**: < 300ms

## Security

- **Input validation**: Zod schemas on all API inputs
- **File upload restrictions**: Max 40MB, PDF files only
- **Environment variables**: Validated using @t3-oss/env-nextjs
- **Database**: Parameterized queries via Prisma (SQL injection protection)
- **Type safety**: End-to-end type checking with TypeScript and tRPC

## License

[Add your license here]

## Built With

This project was bootstrapped with [create-t3-app](https://create.t3.gg/).

## Resources

- [T3 Stack Documentation](https://create.t3.gg/)
- [Next.js Documentation](https://nextjs.org/docs)
- [tRPC Documentation](https://trpc.io/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Dify Documentation](https://docs.dify.ai/)

## Support

For questions and support:
- Check the [documentation](./docs/)
- Review [architecture.md](./docs/architecture.md) for system design
- Consult [CLAUDE.md](./CLAUDE.md) for development guidelines
