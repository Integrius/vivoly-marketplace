-- Vivoly Marketplace - Supabase Database Schema
-- Created: 2026-01-03
-- Description: Complete database schema with RLS policies

-- ============================================================================
-- EXTENSIONS
-- ============================================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================================================
-- TABLES
-- ============================================================================

-- Profiles table (extends Supabase auth.users)
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  role TEXT DEFAULT 'viewer' CHECK (role IN ('admin', 'client', 'viewer')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Categories table
CREATE TABLE IF NOT EXISTS public.categories (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  icon TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Services table
CREATE TABLE IF NOT EXISTS public.services (
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
CREATE TABLE IF NOT EXISTS public.service_requests (
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

-- ============================================================================
-- INDEXES
-- ============================================================================

CREATE INDEX IF NOT EXISTS idx_services_category ON public.services(category_id);
CREATE INDEX IF NOT EXISTS idx_services_status ON public.services(status);
CREATE INDEX IF NOT EXISTS idx_services_featured ON public.services(featured);
CREATE INDEX IF NOT EXISTS idx_service_requests_status ON public.service_requests(status);

-- ============================================================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================================================

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.service_requests ENABLE ROW LEVEL SECURITY;

-- ============================================================================
-- RLS POLICIES - PROFILES
-- ============================================================================

-- Public profiles are viewable by everyone
CREATE POLICY "Public profiles are viewable by everyone"
  ON public.profiles FOR SELECT
  USING (true);

-- Users can update their own profile
CREATE POLICY "Users can update own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id);

-- Admins can do everything
CREATE POLICY "Admins can do everything on profiles"
  ON public.profiles FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- ============================================================================
-- RLS POLICIES - CATEGORIES
-- ============================================================================

-- Categories are viewable by everyone
CREATE POLICY "Categories are viewable by everyone"
  ON public.categories FOR SELECT
  USING (true);

-- Only admins can manage categories
CREATE POLICY "Admins can manage categories"
  ON public.categories FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- ============================================================================
-- RLS POLICIES - SERVICES
-- ============================================================================

-- Published services are viewable by everyone
CREATE POLICY "Published services are viewable by everyone"
  ON public.services FOR SELECT
  USING (status = 'published' OR auth.role() = 'authenticated');

-- Only admins can manage services
CREATE POLICY "Admins can manage services"
  ON public.services FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- ============================================================================
-- RLS POLICIES - SERVICE REQUESTS
-- ============================================================================

-- Anyone can create service requests (important for public contact forms)
CREATE POLICY "Anyone can create service requests"
  ON public.service_requests FOR INSERT
  WITH CHECK (true);

-- Users can view their own requests
CREATE POLICY "Users can view own requests"
  ON public.service_requests FOR SELECT
  USING (
    auth.jwt()->>'email' = client_email
    OR EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Admins can manage all requests
CREATE POLICY "Admins can manage all requests"
  ON public.service_requests FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- ============================================================================
-- FUNCTIONS
-- ============================================================================

-- Function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- ============================================================================
-- TRIGGERS
-- ============================================================================

-- Trigger for profiles updated_at
CREATE TRIGGER set_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

-- Trigger for services updated_at
CREATE TRIGGER set_services_updated_at
  BEFORE UPDATE ON public.services
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

-- Trigger for service_requests updated_at
CREATE TRIGGER set_service_requests_updated_at
  BEFORE UPDATE ON public.service_requests
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

-- ============================================================================
-- SEED DATA
-- ============================================================================

-- Insert initial categories
INSERT INTO public.categories (name, slug, description, icon) VALUES
  ('Desenvolvimento SaaS', 'saas-development', 'Criação de soluções SaaS completas com IA integrada', '💻'),
  ('Consultoria em IA', 'ai-consulting', 'Estratégia e implementação de soluções de Inteligência Artificial', '🧠'),
  ('Soluções Personalizadas', 'custom-solutions', 'Desenvolvimento de soluções específicas baseadas em IA', '⚙️'),
  ('Automação Inteligente', 'intelligent-automation', 'Automatização de processos com IA', '🤖'),
  ('Análise de Dados', 'data-analysis', 'Análise avançada de dados com Machine Learning', '📊')
ON CONFLICT (slug) DO NOTHING;

-- Insert sample services
INSERT INTO public.services (title, slug, description, category_id, featured, status, metadata) VALUES
  (
    'SaaS de CRM com IA',
    'saas-crm-ai',
    'Sistema completo de CRM com inteligência artificial para previsão de vendas e automação de atendimento',
    (SELECT id FROM public.categories WHERE slug = 'saas-development'),
    true,
    'published',
    '{"price_range": "custom", "delivery_time": "3-6 months", "features": ["AI-powered sales forecasting", "Automated customer support", "Integration with major platforms"]}'
  ),
  (
    'Consultoria em Estratégia de IA',
    'consultoria-estrategia-ai',
    'Avaliação e planejamento de implementação de soluções de IA para seu negócio',
    (SELECT id FROM public.categories WHERE slug = 'ai-consulting'),
    true,
    'published',
    '{"price_range": "$5,000 - $15,000", "delivery_time": "4-8 weeks", "features": ["Current state assessment", "AI roadmap creation", "Technology recommendations"]}'
  ),
  (
    'Chatbot Inteligente Personalizado',
    'chatbot-inteligente',
    'Desenvolvimento de chatbot com processamento de linguagem natural customizado para seu negócio',
    (SELECT id FROM public.categories WHERE slug = 'custom-solutions'),
    true,
    'published',
    '{"price_range": "$10,000 - $30,000", "delivery_time": "6-12 weeks", "features": ["Natural language processing", "Multi-platform integration", "Custom training on your data"]}'
  ),
  (
    'Automação de Processos com ML',
    'automacao-processos-ml',
    'Identificação e automação de processos repetitivos usando Machine Learning',
    (SELECT id FROM public.categories WHERE slug = 'intelligent-automation'),
    false,
    'published',
    '{"price_range": "custom", "delivery_time": "8-16 weeks", "features": ["Process analysis", "ML model development", "Integration and deployment"]}'
  ),
  (
    'Dashboard Analytics com IA',
    'dashboard-analytics-ai',
    'Criação de dashboards analíticos com insights automáticos gerados por IA',
    (SELECT id FROM public.categories WHERE slug = 'data-analysis'),
    false,
    'published',
    '{"price_range": "$8,000 - $25,000", "delivery_time": "4-10 weeks", "features": ["Automated insights", "Predictive analytics", "Real-time data processing"]}'
  )
ON CONFLICT (slug) DO NOTHING;

-- ============================================================================
-- VIEWS (Optional - for easier querying)
-- ============================================================================

-- View for published services with category info
CREATE OR REPLACE VIEW public.published_services AS
SELECT
  s.*,
  c.name as category_name,
  c.icon as category_icon
FROM public.services s
LEFT JOIN public.categories c ON s.category_id = c.id
WHERE s.status = 'published';

-- ============================================================================
-- GRANTS (Ensure proper permissions)
-- ============================================================================

-- Grant usage on schema
GRANT USAGE ON SCHEMA public TO anon, authenticated;

-- Grant access to tables
GRANT ALL ON public.profiles TO authenticated;
GRANT SELECT ON public.profiles TO anon;

GRANT SELECT ON public.categories TO anon, authenticated;
GRANT ALL ON public.categories TO authenticated;

GRANT SELECT ON public.services TO anon, authenticated;
GRANT ALL ON public.services TO authenticated;

GRANT INSERT ON public.service_requests TO anon, authenticated;
GRANT SELECT, UPDATE ON public.service_requests TO authenticated;

-- Grant access to view
GRANT SELECT ON public.published_services TO anon, authenticated;

-- ============================================================================
-- COMPLETED
-- ============================================================================

-- Schema setup complete
-- Remember to:
-- 1. Update your .env.local with Supabase credentials
-- 2. Generate TypeScript types: npx supabase gen types typescript --local > types/database.ts
-- 3. Test the connection in your Next.js app
