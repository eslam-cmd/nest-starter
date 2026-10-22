# NestJS Production API Starter

A robust, scalable, and production-ready backend starter template built with **NestJS (v11)** and **TypeScript**, pre-configured with enterprise-grade security, validation, authentication libraries, Prisma ORM, and interactive Swagger API documentation.

## 🚀 Tech Stack & Core Packages

- **Framework:** [NestJS v11](https://nestjs.com/) (TypeScript)
- **Database & ORM:** [Prisma ORM](https://www.prisma.io/) (`@prisma/client`, `prisma`) with initial `User` & `Role` schema
- **Authentication & Hashing:** `@nestjs/jwt`, `@nestjs/passport`, `passport-jwt`, `bcrypt`
- **Validation & Transformation:** `class-validator`, `class-transformer` (Strict global `ValidationPipe`)
- **Security & Rate Limiting:** `helmet`, `@nestjs/throttler` (Brute-force/DDoS protection), CORS
- **Performance:** `compression` (Gzip response compression)
- **API Documentation:** `@nestjs/swagger` (OpenAPI interactive UI at `/docs`)
- **Configuration:** `@nestjs/config` (Global `.env` management)

## 📁 Project Architecture

```text
├── prisma/
│   └── schema.prisma      # Database schema (User model & Role enum)
├── src/
│   ├── common/            # Global guards, filters, interceptors, decorators
│   ├── modules/           # Feature modules (Auth, Users, etc.)
│   ├── prisma/            # Global PrismaModule & PrismaService
│   ├── app.controller.ts  # Root health-check controller
│   ├── app.module.ts      # Root module (Config, Throttler, Prisma)
│   ├── app.service.ts     # Root service
│   └── main.ts            # Entry point (Helmet, Compression, Validation, Swagger)
├── .env.example           # Environment variables template
└── package.json
```

## 🛠️ Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env` and update your credentials:

```bash
cp .env.example .env
```

```env
PORT=4000
NODE_ENV=development
DATABASE_URL="postgresql://user:password@localhost:5432/mydb?schema=public"
JWT_SECRET="super-secret-key-change-in-production"
JWT_EXPIRES_IN="7d"
```

### 3. Database Setup (Prisma)

```bash
# Generate Prisma Client types
npx prisma generate

# Run migrations (when database is connected)
npx prisma migrate dev --name init
```

### 4. Run the Application

```bash
# Development (watch mode)
npm run start:dev

# Production build & start
npm run build
npm run start:prod
```

## 🔗 Endpoints & Documentation

- **API Base URL:** `http://localhost:4000/api`
- **Swagger UI Docs:** `http://localhost:4000/docs`

## 📜 Maintainer

Created by **Eslam Hadaya**