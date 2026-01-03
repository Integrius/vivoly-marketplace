# Vivoly Marketplace - Quick Start Guide

**Get up and running in 5 minutes**

---

## Prerequisites

Before starting, ensure you have:

- [ ] Node.js 18+ installed (`node --version`)
- [ ] npm/yarn/pnpm installed
- [ ] Git installed
- [ ] Code editor (VS Code recommended)
- [ ] Supabase account (free tier: https://supabase.com)
- [ ] GitHub account

---

## Step 1: Project Setup

### Create Next.js Application

```bash
# Navigate to project directory
cd "/home/hans/Vivoly Mktplc"

# Initialize Next.js with TypeScript
npx create-next-app@latest . --typescript --tailwind --app --no-src-dir --import-alias "@/*"

# Follow prompts:
# - TypeScript: Yes
# - ESLint: Yes
# - Tailwind CSS: Yes
# - App Router: Yes
# - Import alias: Yes (@/*)
```

### Install Dependencies

```bash
# Supabase
npm install @supabase/supabase-js @supabase/ssr

# UI Components
npm install @radix-ui/react-slot class-variance-authority clsx tailwind-merge lucide-react

# Forms & Validation
npm install react-hook-form @hookform/resolvers zod

# Development tools
npm install -D @types/node @types/react @types/react-dom
```

---

## Step 2: Supabase Setup

### Create Supabase Project

1. Go to https://supabase.com/dashboard
2. Click "New Project"
3. Fill in details:
   - **Name:** vivoly-marketplace
   - **Database Password:** [generate strong password]
   - **Region:** [closest to your users]
4. Click "Create new project"
5. Wait 2-3 minutes for setup

### Get API Keys

1. Go to Project Settings → API
2. Copy these values:
   - **Project URL:** `https://xxxxx.supabase.co`
   - **anon/public key:** `eyJhbGc...`
   - **service_role key:** `eyJhbGc...` (keep secret!)

### Configure Environment

```bash
# Copy example env file
cp .env.example .env.local

# Edit .env.local and add your Supabase credentials
```

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

---

## Step 3: Database Schema

### Create Initial Tables

1. Go to Supabase Dashboard → SQL Editor
2. Create new query
3. Copy and paste this schema:

```sql
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users table (extends Supabase auth.users)
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  role TEXT DEFAULT 'viewer' CHECK (role IN ('admin', 'client', 'viewer')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Categories table
CREATE TABLE public.categories (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  icon TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Services table
CREATE TABLE public.services (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  category_id UUID REFERENCES public.categories(id) ON DELETE SET NULL,
  featured BOOLEAN DEFAULT FALSE,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Service requests table
CREATE TABLE public.service_requests (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  service_id UUID REFERENCES public.services(id) ON DELETE CASCADE,
  client_name TEXT NOT NULL,
  client_email TEXT NOT NULL,
  company_name TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'in_progress', 'completed', 'cancelled')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Row Level Security (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.service_requests ENABLE ROW LEVEL SECURITY;

-- Policies for profiles
CREATE POLICY "Public profiles are viewable by everyone"
  ON public.profiles FOR SELECT
  USING (true);

CREATE POLICY "Users can update own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id);

-- Policies for categories (public read)
CREATE POLICY "Categories are viewable by everyone"
  ON public.categories FOR SELECT
  USING (true);

-- Policies for services
CREATE POLICY "Published services are viewable by everyone"
  ON public.services FOR SELECT
  USING (status = 'published' OR auth.role() = 'authenticated');

-- Policies for service_requests
CREATE POLICY "Anyone can create service requests"
  ON public.service_requests FOR INSERT
  WITH CHECK (true);

-- Seed some initial data
INSERT INTO public.categories (name, slug, description, icon) VALUES
  ('SaaS Development', 'saas-development', 'Custom SaaS solutions powered by AI', 'code'),
  ('AI Consulting', 'ai-consulting', 'Expert AI strategy and implementation', 'brain'),
  ('Custom Solutions', 'custom-solutions', 'Tailored AI solutions for your needs', 'settings');
```

4. Run the query

---

## Step 4: Run Development Server

```bash
# Start the development server
npm run dev
```

Open http://localhost:3000 in your browser.

---

## Step 5: Project Structure

Your project now has this structure:

```
vivoly-marketplace/
├── .claude/              # Agent system config
├── app/                  # Next.js app (to be organized)
├── components/           # React components (to be created)
├── lib/                  # Utilities (to be created)
├── public/               # Static files
├── docs/                 # Documentation
├── .env.local           # Local environment (not in git)
├── .env.example         # Environment template
├── CLAUDE.md            # Project management
├── README.md            # Project readme
└── package.json         # Dependencies
```

---

## Step 6: Setup Supabase Client

Create Supabase client utilities:

```bash
# Create lib directory
mkdir -p lib/supabase

# Files will be created by FRONTEND_DEV agent
```

---

## Next Steps

Now that the foundation is set up, the agent system will handle:

1. **@FRONTEND_DEV**: Create Supabase client, setup app structure
2. **@BACKEND_DEV**: Create API routes and server actions
3. **@FRONTEND_DEV**: Build homepage and service pages
4. **@DATABASE_ADMIN**: Optimize and add more tables as needed

---

## Useful Commands

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run ESLint

# Database (with Supabase CLI - optional)
npx supabase login
npx supabase init
npx supabase db pull     # Pull remote schema
npx supabase gen types typescript --local > types/database.ts
```

---

## Common Issues

### Port already in use
```bash
# Kill process on port 3000
npx kill-port 3000
```

### Supabase connection issues
- Check if API keys are correct in `.env.local`
- Verify project URL format: `https://xxx.supabase.co`
- Ensure no trailing slashes

### Build errors
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

---

## Agent Invocation Examples

Once the base setup is complete, you can invoke agents:

```
@FRONTEND_DEV: Create the homepage hero section
@BACKEND_DEV: Setup authentication with Supabase
@DATABASE_ADMIN: Add a showcases table to the database
```

---

## Resources

- **Next.js Docs:** https://nextjs.org/docs
- **Supabase Docs:** https://supabase.com/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **shadcn/ui:** https://ui.shadcn.com

---

**Ready to build!** 🚀

For detailed task tracking, see [CLAUDE.md](CLAUDE.md)
For agent system details, see [.claude/README.md](.claude/README.md)
