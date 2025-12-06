# Hello World - Next.js + TypeScript + Prisma + PostgreSQL

Simple monorepo project with Next.js, React, TypeScript, Prisma, and PostgreSQL.

## Stack

- **Frontend**: Next.js 14 + React + TypeScript
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL (Docker)
- **ORM**: Prisma
- **Package Manager**: Yarn

## Getting Started

### 1. Install dependencies

```bash
yarn install
```

### 2. Start PostgreSQL in Docker

```bash
yarn db:up
```

### 3. Run database migrations

```bash
yarn db:migrate
```

### 4. Start development server

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn db:up` - Start PostgreSQL container
- `yarn db:down` - Stop PostgreSQL container
- `yarn db:migrate` - Run Prisma migrations
- `yarn db:studio` - Open Prisma Studio (database GUI)
- `yarn db:generate` - Generate Prisma Client

## API Endpoints

### GET /api/users
Get all users

### POST /api/users
Create a new user

Request body:
```json
{
  "email": "user@example.com",
  "name": "John Doe"
}
```

## Database

PostgreSQL runs in Docker on `localhost:5432`

- **Database**: hn_dev
- **User**: postgres
- **Password**: postgres

## Project Structure

```
.
├── app/
│   ├── api/
│   │   └── users/
│   │       └── route.ts      # API routes
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Home page
│   └── globals.css           # Global styles
├── lib/
│   └── prisma.ts             # Prisma client
├── prisma/
│   └── schema.prisma         # Database schema
├── docker-compose.yml        # PostgreSQL container
└── package.json
```

