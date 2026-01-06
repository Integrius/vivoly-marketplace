# Image Implementation Examples - Vivoly Marketplace

**Quick Reference Guide for Developers**

This document provides copy-paste ready code examples for implementing images across the Vivoly marketplace website.

---

## Table of Contents

1. [Homepage Hero Background](#1-homepage-hero-background)
2. [Integrius Dashboard Screenshot](#2-integrius-dashboard-screenshot)
3. [Blog Post Featured Images](#3-blog-post-featured-images)
4. [Service Card Thumbnails](#4-service-card-thumbnails)
5. [Icon Replacements](#5-icon-replacements)
6. [Metadata Updates](#6-metadata-updates)
7. [Schema.org ImageObject](#7-schemaorg-imageobject)

---

## 1. Homepage Hero Background

### File Location
```
/public/images/hero/ai-network-background.webp
```

### Implementation in `/app/(marketplace)/page.tsx`

**Option A: Full Background with Opacity**

```tsx
// Replace the existing hero section with this:

{/* Hero Section */}
<section className="relative text-center py-20 overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0 opacity-5">
    <Image
      src="/images/hero/ai-network-background.webp"
      alt="Rede neural de Inteligência Artificial - Tecnologia Vivoly"
      fill
      className="object-cover"
      priority
      quality={85}
      sizes="100vw"
    />
  </div>

  {/* Content (existing) */}
  <div className="relative z-10">
    <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent leading-tight">
      Soluções de Inteligência Artificial que Transformam Negócios
    </h1>
    {/* Rest of existing hero content */}
  </div>
</section>
```

**Option B: Side-by-Side Layout (Hero Text + Image)**

```tsx
{/* Hero Section */}
<section className="py-20">
  <div className="grid lg:grid-cols-2 gap-12 items-center">
    {/* Left: Text Content */}
    <div>
      <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent leading-tight">
        Soluções de Inteligência Artificial que Transformam Negócios
      </h1>
      <p className="text-2xl text-muted-foreground mb-6 leading-relaxed">
        Desenvolvemos <strong>SaaS personalizados com IA</strong> que impulsionam resultados reais.
      </p>
      <div className="flex gap-4 flex-wrap">
        <Link href="/services" className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-all text-lg shadow-lg">
          Conheça Nossas Soluções
        </Link>
        <Link href="/contact" className="border-2 border-primary px-8 py-4 rounded-lg font-semibold hover:bg-accent transition-all text-lg">
          Solicite uma Análise Gratuita
        </Link>
      </div>
    </div>

    {/* Right: Hero Image */}
    <div className="relative h-[500px] rounded-card overflow-hidden card-shadow-lg">
      <Image
        src="/images/hero/ai-network-background.webp"
        alt="Dashboard de Inteligência Artificial - Vivoly SaaS Solutions"
        fill
        className="object-cover"
        priority
        quality={90}
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
    </div>
  </div>
</section>
```

---

## 2. Integrius Dashboard Screenshot

### File Location
```
/public/images/products/integrius-dashboard.webp
```

### Implementation in `/app/(marketplace)/page.tsx`

Find the "Nosso Case de Sucesso: Integrius CRM" section and add this BEFORE the metrics:

```tsx
<div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-8 rounded-card border-2 border-primary/20">
  <h3 className="text-2xl font-bold mb-4 text-center">
    Nosso Case de Sucesso: Integrius CRM
  </h3>

  {/* ADD THIS: Dashboard Screenshot */}
  <div className="mb-6">
    <div className="relative rounded-card overflow-hidden border-2 border-primary/30 card-shadow-lg bg-white">
      <Image
        src="/images/products/integrius-dashboard.webp"
        alt="Dashboard Integrius CRM - Sistema inteligente de gestão imobiliária com IA"
        width={1200}
        height={800}
        className="w-full h-auto"
        quality={85}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1000px"
      />
    </div>
    <p className="text-sm text-muted-foreground text-center mt-3 italic">
      Interface do Integrius CRM - Análise preditiva e automação inteligente de leads
    </p>
  </div>

  <p className="text-center text-muted-foreground mb-6 leading-relaxed max-w-2xl mx-auto">
    Sistema SaaS completo para gestão imobiliária, 100% desenvolvido com Inteligência Artificial.
    Automatização de processos, análise preditiva de mercado e gestão inteligente de leads que
    aumenta conversões em até 40%.
  </p>

  {/* Existing metrics section */}
  <div className="flex justify-center gap-6 flex-wrap text-sm">
    {/* ... existing metrics ... */}
  </div>
</div>
```

---

## 3. Blog Post Featured Images

### File Locations
```
/public/images/blog/ia-transforma-gestao.webp
/public/images/blog/crm-inteligente-vs-tradicional.webp
/public/images/blog/automacao-pmes.webp
```

### Step 1: Update Blog Post Data

Edit `/lib/blog-posts.ts` and add `image` field to interface and data:

```typescript
// Add image field to BlogPost interface
export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  category: string;
  tags: string[];
  readTime: string;
  featured: boolean;
  image?: string; // ADD THIS LINE
}

// Update each blog post object
export const blogPosts: BlogPost[] = [
  {
    slug: "como-ia-transforma-gestao-empresarial",
    title: "Como a Inteligência Artificial Está Transformando a Gestão Empresarial em 2026",
    // ... existing fields ...
    image: "/images/blog/ia-transforma-gestao.webp", // ADD THIS
  },
  {
    slug: "crm-inteligente-vs-tradicional",
    title: "CRM Inteligente vs CRM Tradicional: 5 Diferenças Que Impactam Seus Resultados",
    // ... existing fields ...
    image: "/images/blog/crm-inteligente-vs-tradicional.webp", // ADD THIS
  },
  {
    slug: "automacao-inteligente-pequenas-empresas",
    title: "Automação Inteligente para Pequenas Empresas: Guia Prático 2026",
    // ... existing fields ...
    image: "/images/blog/automacao-pmes.webp", // ADD THIS
  },
];
```

### Step 2: Update Blog Listing Page

Edit `/app/(marketplace)/blog/page.tsx` - update the article mapping:

```tsx
{blogPosts.map((post) => (
  <article
    key={post.slug}
    className="border border-border rounded-card overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-200 group"
  >
    {/* ADD THIS: Featured Image */}
    {post.image && (
      <Link href={`/blog/${post.slug}`}>
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px"
            quality={80}
          />
        </div>
      </Link>
    )}

    {/* Existing Post Content */}
    <div className="p-6">
      {/* Post Header */}
      <div className="mb-4">
        <Link href={`/blog/${post.slug}`}>
          <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
            {post.title}
          </h3>
        </Link>
        {/* ... rest of existing content ... */}
      </div>
    </div>
  </article>
))}
```

### Step 3: Update Individual Blog Post Page

Edit `/app/(marketplace)/blog/[slug]/page.tsx` - add image at the top:

```tsx
export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <article className="max-w-4xl mx-auto">
          {/* ADD THIS: Featured Image */}
          {post.image && (
            <div className="relative h-96 w-full rounded-card overflow-hidden mb-8 card-shadow-lg">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
                quality={90}
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            </div>
          )}

          {/* Existing Header */}
          <header className="mb-8">
            {/* ... existing header content ... */}
          </header>

          {/* Rest of article */}
        </article>
      </div>
    </div>
  );
}
```

### Step 4: Add Open Graph Images to Metadata

Edit `/app/(marketplace)/blog/[slug]/page.tsx` - update generateMetadata:

```typescript
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getBlogPost(params.slug);

  if (!post) {
    return {
      title: 'Artigo não encontrado',
    };
  }

  return {
    title: `${post.title} | Blog Vivoly`,
    description: post.description,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author],
      images: post.image ? [
        {
          url: `https://vivoly.com.br${post.image}`,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: post.image ? [`https://vivoly.com.br${post.image}`] : [],
    },
  };
}
```

---

## 4. Service Card Thumbnails

### File Locations
```
/public/images/services/saas-development.webp
/public/images/services/intelligent-automation.webp
/public/images/services/custom-solutions.webp
```

### Update Homepage Featured Services

Edit `/app/(marketplace)/page.tsx` - update featured services mapping:

```tsx
{featuredServices && featuredServices.length > 0 ? (
  featuredServices.map((service) => (
    <Link
      key={service.id}
      href={`/services/${service.slug}`}
      className="border-[3px] border-primary rounded-card p-6 card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-200 group card-folded overflow-hidden"
    >
      {/* ADD THIS: Service Thumbnail */}
      {service.metadata?.image && (
        <div className="relative h-48 rounded-card overflow-hidden mb-4 -mx-6 -mt-6">
          <Image
            src={service.metadata.image}
            alt={`${service.title} - ${service.description?.substring(0, 100)}`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
            quality={80}
          />
        </div>
      )}

      {/* Featured Badge */}
      {service.featured && (
        <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-medium z-10">
          ⭐ Destaque
        </div>
      )}

      {/* Rest of existing card content */}
    </Link>
  ))
) : (
  // Update fallback cards too
  [
    {
      title: "Desenvolvimento SaaS",
      description: "Criação de soluções SaaS completas com IA integrada",
      icon: "💻",
      image: "/images/services/saas-development.webp", // ADD THIS
    },
    // ... other services with images
  ].map((service, index) => (
    <div key={index} className="...">
      {/* ADD THIS: Service Image */}
      <div className="relative h-48 rounded-card overflow-hidden mb-4 -mx-6 -mt-6">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </div>
      {/* Rest of card */}
    </div>
  ))
)}
```

---

## 5. Icon Replacements

### File Locations
```
/public/images/icons/expertise-ai.svg
/public/images/icons/results-proven.svg
/public/images/icons/innovation-continuous.svg
/public/images/icons/quality-commitment.svg
```

### Replace Emoji Icons with SVG/Lucide Icons

Edit `/app/(marketplace)/page.tsx` - "Por Que Escolher a Vivoly?" section:

**Option A: Using Custom SVG Icons**

```tsx
<div className="grid md:grid-cols-2 gap-8 mb-8">
  <div className="bg-white p-6 rounded-card card-shadow">
    <div className="flex items-center gap-3 mb-3">
      <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
        <Image
          src="/images/icons/expertise-ai.svg"
          alt="Expertise em IA"
          width={24}
          height={24}
          className="w-6 h-6"
        />
      </div>
      <h3 className="text-xl font-bold text-primary">
        Expertise Especializada
      </h3>
    </div>
    <p className="text-muted-foreground leading-relaxed">
      Desde o início de 2025, nossa equipe dedica estudos aprofundados em Inteligência Artificial,
      desenvolvendo soluções que combinam inovação tecnológica com aplicações práticas de negócio.
    </p>
  </div>

  {/* Repeat for other 3 cards */}
</div>
```

**Option B: Using Lucide React Icons (Already Installed)**

```tsx
import { Target, TrendingUp, Rocket, Shield } from 'lucide-react';

<div className="grid md:grid-cols-2 gap-8 mb-8">
  <div className="bg-white p-6 rounded-card card-shadow">
    <div className="flex items-center gap-3 mb-3">
      <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
        <Target className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-xl font-bold text-primary">
        Expertise Especializada
      </h3>
    </div>
    <p className="text-muted-foreground leading-relaxed">
      Desde o início de 2025, nossa equipe dedica estudos aprofundados em Inteligência Artificial...
    </p>
  </div>

  <div className="bg-white p-6 rounded-card card-shadow">
    <div className="flex items-center gap-3 mb-3">
      <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
        <TrendingUp className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-xl font-bold text-primary">
        Resultados Comprovados
      </h3>
    </div>
    <p className="text-muted-foreground leading-relaxed">
      O Integrius, nosso CRM imobiliário com IA, demonstra nossa capacidade...
    </p>
  </div>

  <div className="bg-white p-6 rounded-card card-shadow">
    <div className="flex items-center gap-3 mb-3">
      <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
        <Rocket className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-xl font-bold text-primary">
        Inovação Constante
      </h3>
    </div>
    <p className="text-muted-foreground leading-relaxed">
      Múltiplos projetos em desenvolvimento e estudo garantem que estamos sempre na vanguarda...
    </p>
  </div>

  <div className="bg-white p-6 rounded-card card-shadow">
    <div className="flex items-center gap-3 mb-3">
      <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
        <Shield className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-xl font-bold text-primary">
        Compromisso com a Qualidade
      </h3>
    </div>
    <p className="text-muted-foreground leading-relaxed">
      Seguimos rigorosas diretrizes de tecnologia, confiabilidade e seriedade...
    </p>
  </div>
</div>
```

---

## 6. Metadata Updates

### Global Open Graph Image

Edit `/app/layout.tsx` to add default OG image:

```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vivoly - SaaS com Inteligência Artificial | Soluções Personalizadas",
  description: "Desenvolvemos SaaS personalizados com IA que transformam negócios...",
  keywords: [
    "Inteligência Artificial",
    // ... existing keywords
  ],
  metadataBase: new URL('https://vivoly.com.br'),
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://vivoly.com.br',
    siteName: 'Vivoly',
    title: 'Vivoly - SaaS com Inteligência Artificial',
    description: 'Desenvolvemos SaaS personalizados com IA que transformam negócios.',
    images: [
      {
        url: '/images/og/vivoly-og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Vivoly - Soluções SaaS com Inteligência Artificial',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@vivoly', // Update if you have Twitter
    creator: '@vivoly',
    title: 'Vivoly - SaaS com Inteligência Artificial',
    description: 'Desenvolvemos SaaS personalizados com IA que transformam negócios.',
    images: ['/images/og/vivoly-twitter-card.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
```

### Create Default OG Images

You need 2 default images:
- `/public/images/og/vivoly-og-default.jpg` (1200x630px)
- `/public/images/og/vivoly-twitter-card.jpg` (1200x630px)

**Design Requirements:**
- Vivoly logo
- Tagline: "SaaS com Inteligência Artificial"
- Emerald/Teal gradient background
- Clean, professional design

---

## 7. Schema.org ImageObject

### Update StructuredData Component

Edit `/components/StructuredData.tsx` to add ImageObject schema:

```tsx
// Add to existing structured data

const imageObject = {
  "@type": "ImageObject",
  "@id": "https://vivoly.com.br/images/products/integrius-dashboard.webp",
  "url": "https://vivoly.com.br/images/products/integrius-dashboard.webp",
  "contentUrl": "https://vivoly.com.br/images/products/integrius-dashboard.webp",
  "width": "1200",
  "height": "800",
  "caption": "Dashboard Integrius CRM - Sistema inteligente de gestão imobiliária com IA",
  "inLanguage": "pt-BR",
  "representativeOfPage": true,
};

// Add to SoftwareApplication schema
const softwareApplicationSchema = {
  "@type": "SoftwareApplication",
  "name": "Integrius CRM",
  // ... existing fields ...
  "image": imageObject, // ADD THIS
  "screenshot": imageObject, // ADD THIS
  // ... rest of schema
};
```

### Blog Post ImageObject

In `/app/(marketplace)/blog/[slug]/page.tsx`, add to StructuredData:

```tsx
// Create blog post specific structured data
const blogPostSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": post.title,
  "description": post.description,
  "image": post.image ? {
    "@type": "ImageObject",
    "url": `https://vivoly.com.br${post.image}`,
    "width": "1200",
    "height": "630",
    "caption": post.title,
  } : undefined,
  "author": {
    "@type": "Organization",
    "name": "Vivoly AI Team",
  },
  "publisher": {
    "@type": "Organization",
    "name": "Vivoly",
    "logo": {
      "@type": "ImageObject",
      "url": "https://vivoly.com.br/logo.png",
      "width": "150",
      "height": "40",
    }
  },
  "datePublished": post.publishedAt,
  "dateModified": post.updatedAt || post.publishedAt,
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `https://vivoly.com.br/blog/${post.slug}`,
  }
};

// Add to page
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostSchema) }}
/>
```

---

## Quick Testing Checklist

After implementing images, test:

### Visual Testing
- [ ] Images load correctly on desktop
- [ ] Images load correctly on mobile
- [ ] Images maintain aspect ratio
- [ ] No layout shift (CLS) when images load
- [ ] Hover effects work smoothly

### Performance Testing
- [ ] Run Lighthouse audit (target: 90+ performance)
- [ ] Check LCP (target: < 2.5s)
- [ ] Verify lazy loading works
- [ ] Confirm WebP format is served

### SEO Testing
- [ ] All images have descriptive alt text
- [ ] Open Graph images show correctly (use https://www.opengraph.xyz/)
- [ ] Twitter Card images preview correctly
- [ ] Google can index images (Search Console)

### Accessibility Testing
- [ ] Screen readers read alt text correctly
- [ ] Images don't break keyboard navigation
- [ ] Color contrast is sufficient on text overlays

---

## Common Issues & Solutions

### Issue: Images Not Loading

**Solution 1: Check file paths**
```tsx
// Correct
<Image src="/images/hero/background.webp" />

// Incorrect
<Image src="images/hero/background.webp" />  // Missing leading slash
<Image src="/public/images/hero/background.webp" />  // Don't include 'public'
```

**Solution 2: Verify file exists**
```bash
ls -la /home/hans/vivolyMKTP/public/images/hero/
```

### Issue: Layout Shift (CLS)

**Solution: Always specify width and height**
```tsx
// For fixed dimensions
<Image
  src="/image.jpg"
  width={1200}
  height={800}
  alt="..."
/>

// For fill layout
<div className="relative h-64">
  <Image
    src="/image.jpg"
    fill
    alt="..."
  />
</div>
```

### Issue: Blurry Images

**Solution: Increase quality and use correct sizes**
```tsx
<Image
  src="/image.webp"
  quality={85}  // Increase from default 75
  sizes="(max-width: 768px) 100vw, 1200px"  // Proper responsive sizes
  alt="..."
/>
```

### Issue: Slow Image Loading

**Solution: Use priority for above-fold images**
```tsx
// Hero image (above fold)
<Image src="/hero.jpg" priority alt="..." />

// Below fold images (lazy load automatically)
<Image src="/blog.jpg" alt="..." />
```

---

## Import Statement for All Examples

Add this to the top of any file using Image component:

```tsx
import Image from 'next/image';
```

For Lucide icons:
```tsx
import { Target, TrendingUp, Rocket, Shield, Calendar, Clock, User, Tag } from 'lucide-react';
```

---

**Document Status:** Ready for Copy-Paste Implementation
**Compatibility:** Next.js 14+ with App Router
**Last Updated:** 2026-01-06

---

*End of Implementation Examples*
