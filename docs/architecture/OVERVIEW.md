# Vivoly Marketplace - Architecture Overview

**Version:** 1.0.0
**Last Updated:** 2026-01-03
**Status:** Initial Design

---

## System Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Cloudflare (DNS + CDN)                   │
│                      vivoly.com.br                           │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                    Render.com (Hosting)                      │
│  ┌─────────────────────────────────────────────────────┐   │
│  │           Next.js Application (SSR/SSG)              │   │
│  │                                                       │   │
│  │  ┌──────────────┐  ┌──────────────┐  ┌───────────┐ │   │
│  │  │   Frontend   │  │  API Routes  │  │  Server   │ │   │
│  │  │  (React/TSX) │  │              │  │  Actions  │ │   │
│  │  └──────────────┘  └──────────────┘  └───────────┘ │   │
│  └─────────────────────────────────────────────────────┘   │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                   Supabase (Backend as a Service)            │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │  PostgreSQL  │  │     Auth     │  │   Storage    │     │
│  │   Database   │  │              │  │              │     │
│  └──────────────┘  └──────────────┘  └──────────────┘     │
│  ┌──────────────┐  ┌──────────────┐                        │
│  │   Realtime   │  │   Edge Fn    │                        │
│  │              │  │              │                        │
│  └──────────────┘  └──────────────┘                        │
└─────────────────────────────────────────────────────────────┘
```

---

## Technology Stack

### Frontend Layer

**Framework:** Next.js 15+ (App Router)
- Server Components for initial page loads
- Client Components for interactivity
- Streaming and Suspense for progressive loading
- Route Groups for logical organization

**UI Framework:** React 18+
- Server-side rendering (SSR)
- Static site generation (SSG)
- Incremental static regeneration (ISR)

**Styling:**
- Tailwind CSS 3+ (utility-first CSS)
- shadcn/ui (accessible component library)
- CSS Modules (component-scoped styles)

**State Management:**
- React Context (global app state)
- Zustand (client state, if needed)
- Server State via React Server Components

**Form Handling:**
- React Hook Form (form state)
- Zod (schema validation)

### Backend Layer

**API Layer:**
- Next.js API Routes (RESTful endpoints)
- Server Actions (form submissions, mutations)
- Route Handlers (custom endpoints)

**Authentication:**
- Supabase Auth (email/password, OAuth)
- JWT tokens
- Session management
- Row Level Security (RLS)

**Database:**
- PostgreSQL (via Supabase)
- Prisma (ORM - optional)
- Direct Supabase Client

### Infrastructure Layer

**Hosting:** Render.com
- Automatic deployments from GitHub
- Environment variable management
- Auto-scaling
- Health checks

**DNS & CDN:** Cloudflare
- DNS management for vivoly.com.br
- SSL/TLS certificates
- DDoS protection
- Static asset caching

**Database:** Supabase
- Managed PostgreSQL
- Automatic backups
- Real-time subscriptions
- Storage for files/images

---

## Application Architecture

### Directory Structure

```
src/
├── app/                          # Next.js App Router
│   ├── (auth)/                  # Auth route group
│   │   ├── login/
│   │   ├── signup/
│   │   └── layout.tsx
│   ├── (marketplace)/           # Public marketplace
│   │   ├── page.tsx            # Homepage
│   │   ├── services/
│   │   │   ├── page.tsx        # Services listing
│   │   │   └── [slug]/
│   │   │       └── page.tsx    # Service detail
│   │   ├── about/
│   │   └── contact/
│   ├── (dashboard)/             # Admin dashboard
│   │   ├── dashboard/
│   │   ├── services/
│   │   └── requests/
│   ├── api/                     # API Routes
│   │   ├── services/
│   │   ├── requests/
│   │   └── auth/
│   ├── layout.tsx               # Root layout
│   └── globals.css
├── components/
│   ├── ui/                      # shadcn/ui components
│   ├── marketplace/             # Public-facing components
│   │   ├── ServiceCard.tsx
│   │   ├── ServiceGrid.tsx
│   │   └── ContactForm.tsx
│   ├── dashboard/               # Admin components
│   └── shared/                  # Shared components
│       ├── Header.tsx
│       ├── Footer.tsx
│       └── Navigation.tsx
├── lib/
│   ├── supabase/
│   │   ├── client.ts           # Supabase client
│   │   ├── server.ts           # Server-side client
│   │   └── middleware.ts       # Auth middleware
│   ├── utils/
│   │   ├── validation.ts       # Zod schemas
│   │   └── helpers.ts
│   └── hooks/
│       ├── useAuth.ts
│       └── useServices.ts
└── types/
    ├── database.ts              # Database types
    ├── api.ts                   # API types
    └── index.ts
```

### Route Groups Strategy

**Public Routes** `(marketplace)`:
- No authentication required
- SEO optimized
- Static generation where possible

**Auth Routes** `(auth)`:
- Login, signup, password reset
- Redirects after authentication

**Protected Routes** `(dashboard)`:
- Requires authentication
- Admin/management interface
- Dynamic content

---

## Data Model

### Core Entities

```typescript
// User
interface User {
  id: string
  email: string
  full_name: string
  role: 'admin' | 'client' | 'viewer'
  created_at: Date
  updated_at: Date
}

// Service
interface Service {
  id: string
  title: string
  slug: string
  description: string
  category_id: string
  featured: boolean
  status: 'draft' | 'published' | 'archived'
  metadata: Record<string, any>
  created_at: Date
  updated_at: Date
}

// Category
interface Category {
  id: string
  name: string
  slug: string
  description: string
  icon: string
  created_at: Date
}

// ServiceRequest
interface ServiceRequest {
  id: string
  service_id: string
  client_name: string
  client_email: string
  company_name?: string
  message: string
  status: 'pending' | 'contacted' | 'in_progress' | 'completed' | 'cancelled'
  created_at: Date
  updated_at: Date
}
```

---

## Security Architecture

### Authentication Flow

```
User Login
    ↓
Supabase Auth
    ↓
JWT Token Generated
    ↓
Token stored in httpOnly cookie
    ↓
Middleware validates token
    ↓
Access granted/denied
```

### Row Level Security (RLS)

```sql
-- Example: Services table RLS
ALTER TABLE services ENABLE ROW LEVEL SECURITY;

-- Public can view published services
CREATE POLICY "Public services are viewable by everyone"
ON services FOR SELECT
USING (status = 'published');

-- Admins can do everything
CREATE POLICY "Admins can do everything"
ON services FOR ALL
USING (auth.role() = 'admin');
```

### Security Measures

1. **Environment Variables**
   - Never commit secrets
   - Use Render.com environment variables
   - Separate development and production

2. **Input Validation**
   - Zod schemas for all inputs
   - Server-side validation
   - XSS prevention

3. **SQL Injection Prevention**
   - Parameterized queries
   - Supabase client handles escaping
   - RLS policies

4. **CORS**
   - Configured for vivoly.com.br
   - API route protection

---

## Performance Strategy

### Optimization Techniques

1. **Static Generation (SSG)**
   - Homepage
   - Service listing pages
   - About/Contact pages

2. **Incremental Static Regeneration (ISR)**
   - Service detail pages
   - Revalidate every 60 seconds

3. **Server Components**
   - Default for all components
   - Reduce client-side JavaScript

4. **Image Optimization**
   - Next.js Image component
   - Supabase Storage for images
   - WebP format

5. **Code Splitting**
   - Dynamic imports
   - Route-based splitting
   - Component lazy loading

### Performance Targets

- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Lighthouse Score: > 90
- Core Web Vitals: All green

---

## Deployment Architecture

### CI/CD Pipeline

```
GitHub (main branch)
    ↓
Push/PR Merge
    ↓
GitHub Actions
    ↓
Run Tests
    ↓
Build Application
    ↓
Deploy to Render.com
    ↓
Health Check
    ↓
Live on vivoly.com.br
```

### Environments

1. **Development**
   - Local machine
   - localhost:3000
   - Development Supabase project

2. **Staging** (optional)
   - Render.com preview deployment
   - Testing before production

3. **Production**
   - Render.com main deployment
   - vivoly.com.br
   - Production Supabase project

---

## Scalability Considerations

### Horizontal Scaling
- Serverless architecture (Render.com)
- Auto-scaling based on traffic
- Stateless API design

### Database Scaling
- Supabase connection pooling
- Read replicas (if needed)
- Caching layer (Redis - future)

### CDN & Caching
- Cloudflare CDN
- Static asset caching
- API response caching

---

## Monitoring & Logging

### Monitoring Tools
- Render.com metrics
- Supabase dashboard
- Cloudflare analytics

### Logging Strategy
- Server-side logging
- Error tracking (Sentry - optional)
- Performance monitoring

---

## Future Enhancements

- [ ] Redis caching layer
- [ ] WebSocket real-time features
- [ ] GraphQL API (optional)
- [ ] Mobile app (React Native)
- [ ] Advanced analytics
- [ ] A/B testing infrastructure

---

**Document Owner:** ARCHITECT
**Reviewers:** PROJECT_MANAGER, DEVOPS
**Next Review:** After Phase 1 completion
