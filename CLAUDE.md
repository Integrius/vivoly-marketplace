# Vivoly Marketplace - AI Services Platform

**Project Control & Management File**
**Domain:** vivoly.com.br
**Status:** 🚀 Initial Setup
**Last Updated:** 2026-01-03

---

## 📋 Project Overview

Marketplace platform to showcase and deliver AI-based services, focusing on:
- SaaS creation and development
- Custom AI solution evaluation and implementation
- Service presentation and management

### Technology Stack

**Frontend:**
- Next.js (Latest - App Router)
- React Server Components
- TypeScript
- Tailwind CSS
- shadcn/ui components

**Backend:**
- Next.js API Routes / Server Actions
- Serverless Functions (Render.com)
- TypeScript

**Database:**
- Supabase (PostgreSQL)
- Supabase Auth
- Real-time subscriptions

**Infrastructure:**
- Hosting: Render.com
- DNS: Cloudflare
- Version Control: GitHub
- Domain: vivoly.com.br

---

## 🤖 Agent System Architecture

### Primary Agents

#### 1. **PROJECT_MANAGER** (Coordinator Agent)
- **Role:** Overall project coordination and decision making
- **Responsibilities:**
  - Task prioritization and delegation
  - Progress tracking
  - Stakeholder communication
  - Timeline management
  - Risk assessment

#### 2. **ARCHITECT** (System Design Agent)
- **Role:** Technical architecture and design decisions
- **Responsibilities:**
  - System architecture design
  - Technology selection
  - Database schema design
  - API design
  - Scalability planning
  - Security architecture

#### 3. **FRONTEND_DEV** (Frontend Development Agent)
- **Role:** Frontend implementation
- **Responsibilities:**
  - Next.js application development
  - UI/UX implementation
  - Component development
  - State management
  - Performance optimization
  - Responsive design

#### 4. **BACKEND_DEV** (Backend Development Agent)
- **Role:** Backend and API development
- **Responsibilities:**
  - API development
  - Server-side logic
  - Database integration
  - Authentication/Authorization
  - Third-party integrations

#### 5. **DATABASE_ADMIN** (Database Management Agent)
- **Role:** Database design and management
- **Responsibilities:**
  - Schema design and migrations
  - Query optimization
  - Data modeling
  - Backup strategies
  - Performance tuning

#### 6. **DEVOPS** (Infrastructure Agent)
- **Role:** Deployment and infrastructure
- **Responsibilities:**
  - Render.com deployment
  - Environment configuration
  - CI/CD pipeline
  - Cloudflare DNS setup
  - Monitoring and logging

#### 7. **QA_TESTER** (Quality Assurance Agent)
- **Role:** Testing and quality control
- **Responsibilities:**
  - Test strategy
  - Automated testing
  - Manual testing
  - Bug tracking
  - Performance testing

---

## 📁 Project Structure

```
vivoly-marketplace/
├── .github/
│   └── workflows/          # CI/CD workflows
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── (auth)/       # Auth routes group
│   │   ├── (marketplace)/ # Public marketplace
│   │   ├── (dashboard)/  # Admin dashboard
│   │   ├── api/          # API routes
│   │   └── layout.tsx
│   ├── components/
│   │   ├── ui/           # shadcn/ui components
│   │   ├── marketplace/  # Marketplace components
│   │   ├── dashboard/    # Dashboard components
│   │   └── shared/       # Shared components
│   ├── lib/
│   │   ├── supabase/     # Supabase client & helpers
│   │   ├── utils/        # Utility functions
│   │   └── hooks/        # Custom React hooks
│   ├── types/            # TypeScript types
│   └── styles/           # Global styles
├── public/               # Static assets
├── supabase/
│   ├── migrations/       # Database migrations
│   └── seed.sql          # Seed data
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── docs/
│   ├── architecture/
│   ├── api/
│   └── deployment/
├── .env.example
├── .env.local
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── CLAUDE.md            # This file
```

---

## 🎯 Development Phases

### Phase 1: Foundation (Current)
- [x] Project structure definition
- [x] CLAUDE.md creation
- [ ] Repository setup on GitHub
- [ ] Initial Next.js project setup
- [ ] Supabase project creation
- [ ] Environment configuration
- [ ] Basic authentication setup

### Phase 2: Core Features
- [ ] Database schema design
- [ ] User authentication & authorization
- [ ] Service listing system
- [ ] Service detail pages
- [ ] Admin dashboard foundation
- [ ] Basic UI/UX implementation

### Phase 3: Marketplace Features
- [ ] Service categorization
- [ ] Search and filtering
- [ ] Service request system
- [ ] Contact forms
- [ ] Quote management
- [ ] Service showcases

### Phase 4: Advanced Features
- [ ] AI service integration demos
- [ ] Blog/Content system
- [ ] Analytics dashboard
- [ ] Email notifications
- [ ] Payment integration (if needed)
- [ ] Review/Rating system

### Phase 5: Deployment & Launch
- [ ] Render.com deployment
- [ ] Cloudflare DNS configuration
- [ ] SSL setup
- [ ] Performance optimization
- [ ] SEO optimization
- [ ] Production testing
- [ ] Launch

---

## 🗃️ Database Schema (Initial)

### Tables Structure

**users**
- id (uuid, PK)
- email (text, unique)
- full_name (text)
- role (enum: admin, client, viewer)
- created_at (timestamp)
- updated_at (timestamp)

**services**
- id (uuid, PK)
- title (text)
- slug (text, unique)
- description (text)
- category_id (uuid, FK)
- featured (boolean)
- status (enum: draft, published, archived)
- metadata (jsonb)
- created_at (timestamp)
- updated_at (timestamp)

**categories**
- id (uuid, PK)
- name (text)
- slug (text, unique)
- description (text)
- icon (text)
- created_at (timestamp)

**service_requests**
- id (uuid, PK)
- service_id (uuid, FK)
- client_name (text)
- client_email (text)
- company_name (text)
- message (text)
- status (enum: pending, contacted, in_progress, completed, cancelled)
- created_at (timestamp)
- updated_at (timestamp)

**showcases**
- id (uuid, PK)
- service_id (uuid, FK)
- title (text)
- description (text)
- image_url (text)
- demo_url (text)
- order (integer)
- created_at (timestamp)

---

## 🔐 Environment Variables

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# App
NEXT_PUBLIC_APP_URL=https://vivoly.com.br
NODE_ENV=production

# Email (if needed)
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASSWORD=

# Analytics (optional)
NEXT_PUBLIC_GA_ID=
```

---

## 🚀 Deployment Configuration

### Render.com Setup
- Service Type: Web Service
- Environment: Node
- Build Command: `npm run build`
- Start Command: `npm start`
- Auto-Deploy: Yes (from main branch)

### Cloudflare DNS
- Domain: vivoly.com.br
- SSL/TLS: Full (strict)
- Caching: Standard
- CDN: Enabled

---

## 📝 Agent Task Assignment

### Current Sprint Tasks

**ARCHITECT:**
- [ ] Finalize database schema
- [ ] Design API structure
- [ ] Create system architecture diagram

**FRONTEND_DEV:**
- [ ] Setup Next.js project
- [ ] Configure Tailwind CSS & shadcn/ui
- [ ] Create layout components
- [ ] Implement homepage structure

**BACKEND_DEV:**
- [ ] Setup Supabase client
- [ ] Create authentication helpers
- [ ] Setup API route structure

**DATABASE_ADMIN:**
- [ ] Create Supabase project
- [ ] Write initial migrations
- [ ] Setup Row Level Security policies

**DEVOPS:**
- [ ] Create GitHub repository
- [ ] Setup Render.com project
- [ ] Configure environment variables
- [ ] Create deployment workflow

---

## 📊 Project Metrics

**Current Status:**
- Progress: 10%
- Phase: Foundation
- Active Agents: 7
- Open Tasks: 15
- Blockers: 0

---

## 🔄 Change Log

### 2026-01-03
- Initial project structure defined
- CLAUDE.md created
- Agent system architecture designed
- Technology stack confirmed
- Database schema drafted

---

## 📌 Important Notes

1. **Code Quality Standards:**
   - TypeScript strict mode enabled
   - ESLint + Prettier configured
   - Git commit conventions (Conventional Commits)
   - Code review required for main branch

2. **Security Considerations:**
   - Environment variables never committed
   - Supabase RLS policies enforced
   - API rate limiting implemented
   - Input validation on all forms

3. **Performance Goals:**
   - Lighthouse score > 90
   - First Contentful Paint < 1.5s
   - Time to Interactive < 3.5s
   - Image optimization enabled

4. **Scalability:**
   - Serverless architecture
   - Database connection pooling
   - CDN for static assets
   - Optimistic UI updates

---

## 🆘 Quick Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript check

# Database
npx supabase migration new <name>  # Create migration
npx supabase db reset              # Reset local DB
npx supabase gen types typescript  # Generate types

# Deployment
git push origin main  # Auto-deploy to Render.com
```

---

## 📞 Agent Communication Protocol

**For Agent Invocation:**
```
@AGENT_NAME: [Task description]
Priority: [High/Medium/Low]
Dependencies: [Other agents/tasks]
Expected Outcome: [Clear deliverable]
```

**For Status Updates:**
```
Agent: [AGENT_NAME]
Status: [In Progress/Blocked/Completed]
Progress: [Percentage]
Notes: [Any relevant information]
```

---

**Project Manager Contact:** Project managed by Claude Agent System
**Repository:** [To be created]
**Documentation:** [docs/](docs/)

---

*This document is the single source of truth for the Vivoly Marketplace project. All agents should reference and update this file regularly.*
