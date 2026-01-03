# Supabase Setup Guide - Vivoly Marketplace

**Quick guide to configure Supabase for the project**

---

## Step 1: Access Supabase Dashboard

1. Go to https://supabase.com/dashboard
2. Sign in with your account
3. Click "New Project"

---

## Step 2: Create the Project

Fill in the project details:

- **Project Name:** `vivoly-marketplace` (or your preferred name)
- **Database Password:** Generate a strong password and save it securely
- **Region:** Choose the closest region to your users
- **Pricing Plan:** Free tier is sufficient to start

Click **"Create new project"**

⏱️ Wait 2-3 minutes while Supabase provisions your database

---

## Step 3: Get Your API Credentials

Once the project is ready:

1. Go to **Project Settings** (gear icon) → **API**
2. You'll find these important values:

### Copy These Values:

```
Project URL:
https://xxxxxxxxxxxxx.supabase.co

anon public key:
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

service_role key (secret):
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

---

## Step 4: Configure Environment Variables

1. In your project root, copy the example file:
```bash
cp .env.example .env.local
```

2. Edit `.env.local` and paste your credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...your-anon-key
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...your-service-role-key
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

⚠️ **IMPORTANT:** Never commit `.env.local` to git!

---

## Step 5: Run the Database Schema

1. Go to your Supabase Dashboard
2. Click on **"SQL Editor"** in the left sidebar
3. Click **"New Query"**
4. Copy the entire contents of `supabase/init-schema.sql`
5. Paste it into the SQL editor
6. Click **"Run"** or press `Ctrl/Cmd + Enter`

✅ You should see: "Success. No rows returned"

---

## Step 6: Verify the Setup

### Check Tables Created:

1. Go to **Table Editor** in the Supabase dashboard
2. You should see these tables:
   - ✅ profiles
   - ✅ categories
   - ✅ services
   - ✅ service_requests

### Check Seed Data:

1. Click on the **categories** table
2. You should see 5 categories already inserted
3. Click on the **services** table
4. You should see 5 sample services

---

## Step 7: Test the Connection

Run the development server:

```bash
npm run dev
```

Open http://localhost:3000

The homepage should load without errors. Check the browser console for any Supabase connection errors.

---

## Step 8: (Optional) Generate TypeScript Types

To get better type safety:

```bash
# Install Supabase CLI if you haven't
npm install -D supabase

# Link to your project
npx supabase link --project-ref your-project-ref

# Generate types
npx supabase gen types typescript --linked > types/database.ts
```

Your project ref can be found in Project Settings → General

---

## Database Structure Overview

### Tables:

**profiles**
- Extends Supabase auth.users
- Stores user role (admin, client, viewer)

**categories**
- Service categories
- 5 categories pre-loaded

**services**
- AI service listings
- 5 sample services included
- Can be draft, published, or archived

**service_requests**
- Contact/inquiry forms from clients
- Linked to services

### Row Level Security (RLS):

✅ All tables have RLS enabled
✅ Public can view published content
✅ Anyone can submit service requests
✅ Admins have full access

---

## Creating Your First Admin User

### Option 1: Via Supabase Dashboard

1. Go to **Authentication** → **Users**
2. Click **"Add User"**
3. Enter email and password
4. Click **"Create User"**
5. Go to **Table Editor** → **profiles**
6. Find the new user and set `role` to `'admin'`

### Option 2: Via SQL

```sql
-- First, create the auth user in Authentication tab
-- Then run this SQL to set them as admin:

UPDATE public.profiles
SET role = 'admin'
WHERE email = 'your-admin-email@example.com';
```

---

## Common Issues & Solutions

### Issue: "relation public.profiles does not exist"

**Solution:** Run the init-schema.sql script again

### Issue: "permission denied for table profiles"

**Solution:** Check RLS policies are enabled. Re-run the schema script.

### Issue: Can't insert data

**Solution:** Check if RLS policies allow the operation. Admins have full access.

### Issue: Connection timeout

**Solution:**
- Check if your IP is allowed (Supabase allows all by default)
- Verify the Project URL is correct
- Check if the project is paused (free tier pauses after inactivity)

---

## Next Steps After Setup

1. ✅ Environment variables configured
2. ✅ Database schema created
3. ✅ Seed data loaded
4. ✅ RLS policies active
5. ✅ Connection tested

Now you can:
- Start building features
- Create the admin dashboard
- Add authentication flows
- Implement service request forms

---

## Useful Supabase Dashboard Links

- **Table Editor:** View and edit data
- **SQL Editor:** Run custom queries
- **Authentication:** Manage users
- **Storage:** Upload files/images (for future use)
- **API Docs:** Auto-generated API documentation
- **Logs:** Debug queries and errors

---

## Security Checklist

- [x] `.env.local` is in `.gitignore`
- [x] Service role key is kept secret
- [x] RLS is enabled on all tables
- [x] Public access is restricted to published content
- [x] Admin role is properly secured

---

## Need Help?

- **Supabase Docs:** https://supabase.com/docs
- **SQL Reference:** https://supabase.com/docs/guides/database
- **RLS Guide:** https://supabase.com/docs/guides/auth/row-level-security

---

**Setup created by:** DATABASE_ADMIN Agent
**Last updated:** 2026-01-03
**Project:** Vivoly Marketplace
