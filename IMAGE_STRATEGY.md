# Vivoly Marketplace - Comprehensive Image Strategy

**Document Version:** 1.0
**Date:** 2026-01-06
**Author:** FRONTEND_DEV + DESIGN Agent
**Status:** Implementation Ready

---

## Executive Summary

This document provides a complete image strategy for the Vivoly marketplace website, identifying 18 strategic image placements across all pages. The strategy focuses on:

- Enhancing user experience and visual engagement
- Improving SEO through optimized alt text and file naming
- Conveying professionalism and technical expertise
- Supporting conversion goals
- Maintaining brand consistency with the Emerald Fresh color palette

**Current State:** Only logo.png exists
**Priority:** HIGH - Images are critical for professional appearance and SEO

---

## Table of Contents

1. [Priority Image Placements](#priority-image-placements)
2. [Page-by-Page Image Strategy](#page-by-page-image-strategy)
3. [Technical Implementation Guide](#technical-implementation-guide)
4. [Image Sources and Resources](#image-sources-and-resources)
5. [SEO Best Practices](#seo-best-practices)
6. [Brand Consistency Guidelines](#brand-consistency-guidelines)
7. [Performance Optimization](#performance-optimization)
8. [Implementation Checklist](#implementation-checklist)

---

## Priority Image Placements

### Priority 1 (Critical - Implement First)

1. **Homepage Hero Background/Illustration** - Maximum visual impact
2. **Integrius CRM Dashboard Screenshot** - Social proof and credibility
3. **Blog Featured Article Images** (3) - SEO and engagement
4. **Service Category Icons** - Visual navigation and clarity

### Priority 2 (High - Implement Second)

5. **About Page Team/Office Photo** - Trust and authenticity
6. **Homepage "Why Choose Vivoly" Section Icons** - Visual hierarchy
7. **Service Detail Page Hero Images** - Page-specific identity
8. **Blog Listing Thumbnails** - Visual consistency

### Priority 3 (Medium - Implement Third)

9. **Process/Timeline Illustrations** - Clarity and professionalism
10. **Technology Stack Icons** - Technical credibility
11. **Client Testimonial Photos** (Future) - Social proof
12. **Contact Page Illustration** - Friendly and approachable

---

## Page-by-Page Image Strategy

### 1. Homepage (/)

#### 1.1 Hero Section Background/Illustration

**Location:** Behind or beside the H1 headline
**Image Type:** Abstract AI/tech illustration or gradient background
**Dimensions:** 1920x1080px (16:9 ratio)
**File Format:** WebP (with PNG fallback)
**Purpose:** Create immediate visual impact and set professional tone

**Content Recommendation:**
- Abstract neural network visualization
- Geometric shapes with emerald/teal gradient overlay
- Futuristic dashboard interface mockup
- AI brain/circuit board illustration

**Alt Text Example:**
```
"Inteligência Artificial transformando gestão empresarial - Vivoly SaaS Solutions"
```

**File Naming:**
```
vivoly-hero-ai-transformation.webp
```

**Implementation:**
```tsx
<div className="relative py-20">
  <div className="absolute inset-0 opacity-10">
    <Image
      src="/images/hero-ai-neural-network.webp"
      alt="Inteligência Artificial transformando gestão empresarial - Vivoly SaaS Solutions"
      fill
      className="object-cover"
      priority
      quality={90}
      sizes="100vw"
    />
  </div>
  <div className="relative z-10">
    {/* Existing hero content */}
  </div>
</div>
```

#### 1.2 Integrius CRM Dashboard Screenshot

**Location:** "Case de Sucesso: Integrius CRM" section
**Image Type:** Product screenshot/mockup
**Dimensions:** 1200x800px (3:2 ratio)
**File Format:** WebP with PNG fallback
**Purpose:** Social proof, demonstrate product quality

**Content Recommendation:**
- Clean dashboard screenshot showing:
  - Lead management interface
  - Analytics graphs (emerald color scheme)
  - Modern, professional UI
- Add subtle device frame (laptop/desktop mockup)
- Ensure text in screenshot is readable

**Alt Text Example:**
```
"Integrius CRM dashboard - Sistema inteligente de gestão imobiliária com IA"
```

**File Naming:**
```
integrius-crm-dashboard-screenshot.webp
```

**Implementation:**
```tsx
<div className="mb-6">
  <div className="relative rounded-card overflow-hidden border border-primary/20 card-shadow-lg">
    <Image
      src="/images/integrius-crm-dashboard-screenshot.webp"
      alt="Integrius CRM dashboard - Sistema inteligente de gestão imobiliária com IA"
      width={1200}
      height={800}
      className="w-full h-auto"
      quality={85}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
    />
  </div>
  <p className="text-sm text-muted-foreground text-center mt-3 italic">
    Dashboard do Integrius CRM - Interface intuitiva com análise preditiva de leads
  </p>
</div>
```

#### 1.3 "Why Choose Vivoly" Section Icons

**Location:** Four cards in "Por Que Escolher a Vivoly?" section
**Image Type:** Illustrated icons (replace emojis)
**Dimensions:** 120x120px (square)
**File Format:** SVG (vector) or PNG
**Purpose:** Professional appearance, visual consistency

**Content Recommendation:**
- **Expertise:** Target/bullseye with AI circuit pattern
- **Results:** Upward growth arrow with checkmarks
- **Innovation:** Rocket/lightbulb with tech elements
- **Quality:** Shield/badge with stars

**Alt Text Examples:**
```
"Expertise em IA - Vivoly especializada desde 2025"
"Resultados comprovados - CRM com 40% mais conversões"
"Inovação constante - Desenvolvimento contínuo de soluções IA"
"Compromisso com qualidade - Tecnologia confiável e escalável"
```

**File Naming:**
```
icon-expertise-ai.svg
icon-results-proven.svg
icon-innovation-continuous.svg
icon-quality-commitment.svg
```

**Implementation:**
```tsx
<div className="bg-white p-6 rounded-card card-shadow">
  <div className="mb-4 flex justify-center">
    <Image
      src="/images/icons/icon-expertise-ai.svg"
      alt="Expertise em IA - Vivoly especializada desde 2025"
      width={80}
      height={80}
      className="w-20 h-20"
    />
  </div>
  <h3 className="text-xl font-bold mb-3 text-primary text-center">
    Expertise Especializada
  </h3>
  {/* Existing content */}
</div>
```

#### 1.4 Featured Services Thumbnails

**Location:** "Serviços em Destaque" cards
**Image Type:** Conceptual illustrations
**Dimensions:** 600x400px (3:2 ratio)
**File Format:** WebP with PNG fallback
**Purpose:** Visual differentiation, engagement

**Content Recommendation:**
- **SaaS Development:** Code editor with AI elements, cloud icons
- **Intelligent Automation:** Robotic arm, gears, automation flow
- **Custom Solutions:** Puzzle pieces, customization tools

**Alt Text Examples:**
```
"Desenvolvimento SaaS com Inteligência Artificial - Soluções personalizadas"
"Automação Inteligente - Processos otimizados com IA"
"Soluções Personalizadas - Software sob medida para seu negócio"
```

**File Naming:**
```
service-saas-development.webp
service-intelligent-automation.webp
service-custom-solutions.webp
```

---

### 2. Services Page (/services)

#### 2.1 Service Card Thumbnails

**Location:** Each service card in grid
**Image Type:** Category-specific illustrations
**Dimensions:** 600x400px (3:2 ratio)
**File Format:** WebP
**Purpose:** Visual identification, improve engagement

**Content Recommendation:**
- Match service category with relevant imagery
- Consistent style across all service images
- Use emerald accent colors

**Implementation:**
```tsx
<Link href={`/services/${service.slug}`}>
  <div className="relative h-48 rounded-t-card overflow-hidden mb-4">
    <Image
      src={service.metadata?.image || '/images/services/default-service.webp'}
      alt={`${service.title} - ${service.description?.substring(0, 100)}`}
      fill
      className="object-cover group-hover:scale-105 transition-transform duration-300"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  </div>
  {/* Existing card content */}
</Link>
```

---

### 3. Service Detail Page (/services/[slug])

#### 3.1 Service Hero Image

**Location:** Below breadcrumb, above H1
**Image Type:** Full-width banner
**Dimensions:** 1920x600px (banner ratio)
**File Format:** WebP
**Purpose:** Page identity, visual hierarchy

**Content Recommendation:**
- Service-specific visuals
- Overlay with gradient for text readability
- High-quality, professional imagery

**Alt Text Example:**
```
"Desenvolvimento SaaS Personalizado com IA - Vivoly Solutions"
```

**File Naming:**
```
service-hero-saas-development.webp
```

#### 3.2 Process Step Icons

**Location:** "Como Funciona" section (4 steps)
**Image Type:** Illustrated icons
**Dimensions:** 80x80px
**File Format:** SVG
**Purpose:** Visual clarity, professional appearance

**Content Recommendation:**
- Step 1: Handshake/meeting icon
- Step 2: Document/proposal icon
- Step 3: Gear/development icon
- Step 4: Rocket/delivery icon

**Alt Text Examples:**
```
"Passo 1 - Reunião inicial de análise"
"Passo 2 - Proposta personalizada sob medida"
"Passo 3 - Desenvolvimento com acompanhamento"
"Passo 4 - Entrega e suporte contínuo"
```

---

### 4. Blog Pages (/blog)

#### 4.1 Blog Post Featured Images

**Location:** Blog listing page and individual post pages
**Image Type:** Featured hero images
**Dimensions:** 1200x630px (Open Graph ratio)
**File Format:** WebP
**Purpose:** SEO (Open Graph), visual engagement, social sharing

**Content for Each Article:**

**Article 1: "Como a IA Está Transformando a Gestão Empresarial"**
- Business person with holographic AI interface
- Dashboard with analytics and graphs
- Corporate office with tech elements

**Alt Text:**
```
"Inteligência Artificial transformando gestão empresarial - Guia completo 2026"
```

**File Naming:**
```
blog-ia-transforma-gestao-empresarial.webp
```

**Article 2: "CRM Inteligente vs CRM Tradicional"**
- Split screen comparison visual
- Modern vs traditional interface comparison
- AI-powered CRM dashboard

**Alt Text:**
```
"Comparação CRM Inteligente vs Tradicional - Diferenças e resultados"
```

**File Naming:**
```
blog-crm-inteligente-vs-tradicional.webp
```

**Article 3: "Automação Inteligente para Pequenas Empresas"**
- Small business owner with digital automation tools
- Workflow automation diagram
- Modern small business with tech

**Alt Text:**
```
"Automação Inteligente para PMEs - Guia prático de implementação 2026"
```

**File Naming:**
```
blog-automacao-inteligente-pmes.webp
```

**Implementation:**
```tsx
{/* Blog Listing Page */}
<article className="border border-border rounded-card overflow-hidden">
  <Link href={`/blog/${post.slug}`}>
    <div className="relative h-64 w-full">
      <Image
        src={post.image || '/images/blog/default-blog-post.webp'}
        alt={post.title}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-300"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px"
      />
    </div>
  </Link>
  <div className="p-6">
    {/* Existing content */}
  </div>
</article>

{/* Individual Blog Post Page */}
<article className="max-w-4xl mx-auto">
  <div className="relative h-96 w-full rounded-card overflow-hidden mb-8">
    <Image
      src={post.image || '/images/blog/default-blog-post.webp'}
      alt={post.title}
      fill
      className="object-cover"
      priority
      quality={90}
      sizes="(max-width: 768px) 100vw, 1200px"
    />
  </div>
  {/* Article content */}
</article>
```

#### 4.2 Blog Sidebar Category/Tag Icons

**Location:** Sidebar category section
**Image Type:** Small icons
**Dimensions:** 32x32px
**File Format:** SVG
**Purpose:** Visual organization

**Content Recommendation:**
- Gestão Empresarial: Briefcase icon
- CRM e Vendas: Chart icon
- Automação: Robot icon

---

### 5. About Page (/about)

#### 5.1 Team/Office Hero Image

**Location:** Top of about page
**Image Type:** Professional team/office photo
**Dimensions:** 1920x800px
**File Format:** WebP
**Purpose:** Authenticity, trust building

**Content Recommendation:**
- Professional team photo (if available)
- OR modern office space with tech elements
- OR abstract representation of collaboration

**Alt Text Example:**
```
"Equipe Vivoly - Especialistas em desenvolvimento SaaS com Inteligência Artificial"
```

**File Naming:**
```
about-vivoly-team.webp
```

#### 5.2 Mission/Vision/Values Icons

**Location:** Mission, vision, values section
**Image Type:** Conceptual icons
**Dimensions:** 100x100px
**File Format:** SVG
**Purpose:** Visual communication of values

**Content Recommendation:**
- Mission: Compass icon
- Vision: Telescope/eye icon
- Values: Heart/handshake icon

---

### 6. Contact Page (/contact)

#### 6.1 Contact Page Illustration

**Location:** Beside or above contact form
**Image Type:** Friendly illustration
**Dimensions:** 800x800px (square)
**File Format:** SVG or PNG
**Purpose:** Approachable, friendly tone

**Content Recommendation:**
- Person with headset (customer support)
- Envelope with tech elements
- Communication/chat illustration

**Alt Text Example:**
```
"Entre em contato com Vivoly - Suporte especializado em soluções IA"
```

**File Naming:**
```
contact-illustration-support.svg
```

---

### 7. Footer (All Pages)

#### 7.1 Social Media Icons (Future)

**Location:** Footer social links
**Image Type:** Icon set
**Dimensions:** 24x24px
**File Format:** SVG
**Purpose:** Social proof, brand presence

**Content Recommendation:**
- LinkedIn icon
- GitHub icon (if applicable)
- Twitter/X icon
- Instagram icon

---

## Technical Implementation Guide

### Next.js Image Component Setup

```tsx
import Image from 'next/image';

// Example: Optimized hero image with fallback
<div className="relative w-full h-[600px]">
  <Image
    src="/images/hero-ai-transformation.webp"
    alt="Inteligência Artificial transformando gestão empresarial"
    fill
    priority // Use only for above-the-fold images
    quality={85} // 85 is good balance
    placeholder="blur" // Add blur placeholder
    blurDataURL="data:image/svg+xml;base64,..." // Base64 blur placeholder
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
    className="object-cover"
  />
</div>
```

### Responsive Image Srcsets

```tsx
// For blog post images with multiple sizes
<Image
  src="/images/blog/article-featured.webp"
  alt="Blog post title"
  width={1200}
  height={630}
  srcSet="/images/blog/article-featured-400.webp 400w,
          /images/blog/article-featured-800.webp 800w,
          /images/blog/article-featured-1200.webp 1200w"
  sizes="(max-width: 640px) 400px,
         (max-width: 1024px) 800px,
         1200px"
  className="rounded-card"
/>
```

### Lazy Loading Strategy

```tsx
// Above-the-fold images (hero, first visible content)
<Image src="..." priority />

// Below-the-fold images (automatically lazy loaded)
<Image src="..." loading="lazy" />

// Very far below fold (native lazy loading)
<img src="..." loading="lazy" alt="..." />
```

### Image Optimization Script

Add to `package.json`:
```json
{
  "scripts": {
    "optimize-images": "next-image-loader optimize"
  }
}
```

### Placeholder Generation

```bash
# Generate blur placeholders for images
npm install plaiceholder
```

```tsx
// In getStaticProps or server component
import { getPlaiceholder } from 'plaiceholder';

const { base64 } = await getPlaiceholder('/images/hero.jpg');

// Use in Image component
<Image
  src="/images/hero.jpg"
  placeholder="blur"
  blurDataURL={base64}
  alt="..."
/>
```

---

## Image Sources and Resources

### Free Stock Photo Websites

#### 1. Unsplash (Recommended)
- **URL:** https://unsplash.com
- **License:** Free for commercial use
- **Best for:** High-quality tech, business, AI imagery
- **Search terms:**
  - "artificial intelligence"
  - "business technology"
  - "modern office"
  - "dashboard interface"
  - "automation"

#### 2. Pexels
- **URL:** https://www.pexels.com
- **License:** Free for commercial use
- **Best for:** Diverse stock photos, video clips
- **Search terms:**
  - "AI technology"
  - "software development"
  - "team collaboration"

#### 3. Pixabay
- **URL:** https://pixabay.com
- **License:** Free for commercial use
- **Best for:** Illustrations, vectors, photos

#### 4. Freepik (Free + Premium)
- **URL:** https://www.freepik.com
- **License:** Free with attribution (or premium)
- **Best for:** Illustrations, vectors, icons
- **Note:** Check license for each asset

### AI Image Generation Tools

#### 1. Leonardo.ai (Recommended)
- **URL:** https://leonardo.ai
- **Price:** Free tier available (150 credits/day)
- **Best for:** Custom tech illustrations, abstract AI visuals
- **Style recommendation:** "Professional tech illustration, emerald green accent, modern, clean"

#### 2. Midjourney
- **URL:** https://midjourney.com
- **Price:** $10/month basic plan
- **Best for:** High-quality artistic images
- **Prompt example:**
  ```
  "modern AI dashboard interface, emerald green and teal color scheme,
   clean professional design, business intelligence, --ar 16:9 --style modern"
  ```

#### 3. DALL-E 3
- **URL:** https://openai.com/dall-e-3
- **Price:** $20/month (ChatGPT Plus)
- **Best for:** Precise concept visualization

#### 4. Stable Diffusion (Free)
- **URL:** https://stablediffusionweb.com
- **Price:** Free
- **Best for:** Custom generation with control

### Icon Libraries

#### 1. Lucide Icons (Already Installed)
- **Package:** `lucide-react`
- **Usage:** Already in project
- **Best for:** UI icons (Calendar, Clock, User, etc.)

```tsx
import { Rocket, Target, Shield, Lightbulb } from 'lucide-react';

<Rocket className="w-12 h-12 text-primary" />
```

#### 2. Heroicons
- **URL:** https://heroicons.com
- **License:** MIT (free)
- **Best for:** Comprehensive icon set

#### 3. Flaticon
- **URL:** https://www.flaticon.com
- **License:** Free with attribution (or premium)
- **Best for:** Custom themed icon sets

#### 4. Hugeicons
- **URL:** https://www.hugeicons.com
- **License:** Free + Premium
- **Best for:** Modern, consistent icon sets

### Illustration Resources

#### 1. Undraw
- **URL:** https://undraw.co
- **License:** Free, open-source
- **Best for:** Customizable illustrations (can change colors to emerald)
- **Perfect for:** Contact page, about page, error pages

#### 2. Storyset
- **URL:** https://storyset.com
- **License:** Free with attribution
- **Best for:** Animated and static illustrations
- **Perfect for:** Process diagrams, concept illustrations

#### 3. Blush
- **URL:** https://blush.design
- **License:** Free + Premium
- **Best for:** Unique, artistic illustrations

### Screenshot/Mockup Tools

#### 1. Shots.so
- **URL:** https://shots.so
- **Best for:** Beautiful device mockups (Mac, iPhone)
- **Use case:** Integrius CRM screenshots

#### 2. Screely
- **URL:** https://screely.com
- **Best for:** Browser mockups with custom backgrounds

#### 3. Mockuphone
- **URL:** https://mockuphone.com
- **Best for:** Mobile device mockups

---

## SEO Best Practices

### Alt Text Guidelines

#### Structure:
```
[Primary Keyword] - [Secondary Context] - [Brand]
```

#### Examples:

**Good Alt Text:**
```html
alt="CRM com Inteligência Artificial - Dashboard Integrius para gestão imobiliária - Vivoly"
```

**Bad Alt Text:**
```html
alt="image1.jpg"
alt="dashboard"
alt="CRM AI ML SaaS Dashboard Vivoly Brazil"  <!-- Keyword stuffing -->
```

#### Rules:
1. **Length:** 125-150 characters max
2. **Keywords:** Include 1-2 target keywords naturally
3. **Context:** Describe what the image shows
4. **Brand:** Include "Vivoly" when relevant
5. **No keyword stuffing:** Write naturally
6. **Decorative images:** Use empty alt (`alt=""`)

### File Naming Convention

#### Structure:
```
[category]-[description]-[keywords].webp
```

#### Examples:

```
blog-crm-inteligente-gestao.webp
service-hero-saas-development.webp
icon-automation-ai.svg
homepage-integrius-dashboard-screenshot.webp
about-team-vivoly-specialists.webp
```

#### Rules:
1. Use **lowercase** only
2. Use **hyphens** (not underscores or spaces)
3. Include **relevant keywords**
4. Be **descriptive** but concise
5. Include **category prefix** (blog, service, icon, etc.)

### Schema.org ImageObject Markup

Add to blog posts and key pages:

```tsx
// components/StructuredData.tsx - Add ImageObject

const imageObject = {
  "@type": "ImageObject",
  "@id": `${baseUrl}/images/blog/article-image.webp`,
  "url": `${baseUrl}/images/blog/article-image.webp`,
  "width": "1200",
  "height": "630",
  "caption": "Alt text description",
  "inLanguage": "pt-BR",
  "license": "https://creativecommons.org/licenses/by/4.0/" // If applicable
};

// Include in BlogPosting schema
{
  "@type": "BlogPosting",
  "image": imageObject,
  // ... other properties
}
```

### Open Graph Image Tags

```tsx
// app/layout.tsx or page-specific metadata

export const metadata: Metadata = {
  openGraph: {
    images: [
      {
        url: '/images/og-default-vivoly.jpg',
        width: 1200,
        height: 630,
        alt: 'Vivoly - SaaS com Inteligência Artificial',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/twitter-card-vivoly.jpg'],
  },
};
```

### Image Sitemap

Create `/public/sitemap-images.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>https://vivoly.com.br/</loc>
    <image:image>
      <image:loc>https://vivoly.com.br/images/hero-ai-transformation.webp</image:loc>
      <image:title>Inteligência Artificial transformando negócios</image:title>
      <image:caption>Soluções SaaS personalizadas com IA - Vivoly</image:caption>
    </image:image>
  </url>
  <!-- Add more URLs with images -->
</urlset>
```

---

## Brand Consistency Guidelines

### Color Palette Integration

**Primary Colors (Emerald Fresh):**
- Primary: `#10B981` (Emerald)
- Secondary: `#14B8A6` (Teal)

**Usage in Images:**

1. **Overlays and Filters:**
   - Use 10-20% emerald overlay on photos
   - Apply gradient overlays: `from-emerald-600 to-teal-600`

2. **Icons and Illustrations:**
   - Primary elements: Emerald (#10B981)
   - Accents: Teal (#14B8A6)
   - Neutrals: Grays for balance

3. **Backgrounds:**
   - White/light gray base
   - Emerald accents for highlights
   - Gradient CTAs: emerald to teal

### Style Guide

#### Photography Style:
- **Tone:** Professional, modern, clean
- **Subjects:** Technology, business, collaboration
- **Lighting:** Bright, natural light preferred
- **Composition:** Clean, uncluttered, focused
- **Avoid:** Overly staged, dated stock photos, clipart

#### Illustration Style:
- **Type:** Modern, flat design or subtle gradients
- **Colors:** Emerald primary, teal accent, gray neutrals
- **Details:** Clean lines, not overly complex
- **Avoid:** Cartoonish, childish, overly busy

#### Icon Style:
- **Type:** Outline or filled (be consistent)
- **Weight:** Medium stroke weight (2px)
- **Size:** 24x24px base unit (scale proportionally)
- **Color:** Primary color or neutral gray

### Image Treatment Examples

#### Hero Image with Overlay:
```tsx
<div className="relative">
  <Image src="/hero.jpg" alt="..." />
  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/80 to-teal-600/80" />
  <div className="relative z-10">
    {/* Content */}
  </div>
</div>
```

#### Card Image with Emerald Border:
```tsx
<div className="border-2 border-primary rounded-card overflow-hidden">
  <Image src="/service.jpg" alt="..." />
</div>
```

#### Icon with Brand Color:
```tsx
<div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center">
  <Image src="/icon.svg" alt="..." className="w-8 h-8 text-primary" />
</div>
```

---

## Performance Optimization

### Image Formats

**Use WebP with PNG/JPG Fallback:**

```tsx
<picture>
  <source srcSet="/image.webp" type="image/webp" />
  <source srcSet="/image.jpg" type="image/jpeg" />
  <img src="/image.jpg" alt="..." />
</picture>
```

**Format Selection:**
- **WebP:** Primary format (70-85% quality)
- **AVIF:** Future consideration (better compression)
- **PNG:** Logos, icons with transparency
- **SVG:** Icons, simple illustrations
- **JPG:** Fallback for photos

### Compression Guidelines

**Quality Settings:**
- **Hero images:** 85% quality
- **Content images:** 80% quality
- **Thumbnails:** 75% quality
- **Background images:** 70% quality

**Tools:**
- **TinyPNG:** https://tinypng.com (automatic compression)
- **Squoosh:** https://squoosh.app (manual control)
- **ImageOptim (Mac):** https://imageoptim.com

### Responsive Images

**Breakpoints:**
```tsx
sizes="(max-width: 640px) 100vw,    // Mobile
       (max-width: 1024px) 80vw,    // Tablet
       (max-width: 1280px) 60vw,    // Small desktop
       1200px"                       // Large desktop
```

**Generate Multiple Sizes:**
```bash
# Create 400px, 800px, 1200px versions
convert hero.jpg -resize 400x hero-400.jpg
convert hero.jpg -resize 800x hero-800.jpg
convert hero.jpg -resize 1200x hero-1200.jpg
```

### Lazy Loading Strategy

**Priority Levels:**

1. **Priority (Above Fold):**
   - Homepage hero image
   - Logo
   - First visible service cards

2. **Eager (Near Fold):**
   - Content just below fold

3. **Lazy (Below Fold):**
   - Blog post images
   - Footer images
   - Distant service cards

### Performance Metrics

**Target Metrics:**
- **LCP (Largest Contentful Paint):** < 2.5s
- **CLS (Cumulative Layout Shift):** < 0.1
- **Image Load Time:** < 1s for hero images

**Tips to Achieve:**
1. Use `priority` for above-fold images
2. Specify width/height to prevent CLS
3. Use blur placeholders
4. Implement lazy loading
5. Serve WebP format
6. Use CDN (Cloudflare)

---

## Implementation Checklist

### Phase 1: Critical Images (Week 1)

- [ ] **Homepage Hero Background/Illustration**
  - [ ] Source or generate image
  - [ ] Optimize to WebP
  - [ ] Add to `/public/images/hero/`
  - [ ] Implement in page.tsx
  - [ ] Test on mobile/desktop

- [ ] **Integrius Dashboard Screenshot**
  - [ ] Create or obtain screenshot
  - [ ] Add device mockup
  - [ ] Optimize and save
  - [ ] Implement in homepage
  - [ ] Add Schema.org ImageObject

- [ ] **Blog Featured Images (3)**
  - [ ] Generate/source 3 images
  - [ ] Optimize for 1200x630px
  - [ ] Add to blog-posts.ts data
  - [ ] Implement in blog pages
  - [ ] Add Open Graph tags

- [ ] **Service Category Icons (4)**
  - [ ] Create or source SVG icons
  - [ ] Apply emerald color scheme
  - [ ] Replace emoji icons in homepage
  - [ ] Test visual consistency

### Phase 2: High Priority Images (Week 2)

- [ ] **Service Card Thumbnails**
  - [ ] Create 6-8 service images
  - [ ] Add to service metadata in database
  - [ ] Implement in service cards
  - [ ] Test grid layout

- [ ] **Service Detail Hero Images**
  - [ ] Create banner images for each service
  - [ ] Implement in [slug]/page.tsx
  - [ ] Test responsive behavior

- [ ] **Process Step Icons**
  - [ ] Design 4 step icons
  - [ ] Implement in service detail page
  - [ ] Ensure consistent style

- [ ] **About Page Hero**
  - [ ] Source team/office photo or illustration
  - [ ] Optimize and implement
  - [ ] Test visual impact

### Phase 3: Medium Priority (Week 3)

- [ ] **Contact Page Illustration**
  - [ ] Find or create friendly illustration
  - [ ] Implement beside form
  - [ ] Test mobile layout

- [ ] **Technology Stack Icons**
  - [ ] Source Next.js, Supabase, Tailwind logos
  - [ ] Create icon grid section
  - [ ] Add to about/services page

- [ ] **Additional Blog Images**
  - [ ] Create default blog placeholder
  - [ ] Add inline article images
  - [ ] Test Open Graph sharing

- [ ] **SEO Optimizations**
  - [ ] Create image sitemap
  - [ ] Add ImageObject schema to all images
  - [ ] Verify alt text on all images
  - [ ] Test Google Image Search

### Phase 4: Polish & Testing (Week 4)

- [ ] **Performance Testing**
  - [ ] Run Lighthouse audit
  - [ ] Check LCP, CLS metrics
  - [ ] Optimize slow images
  - [ ] Verify lazy loading

- [ ] **Cross-Browser Testing**
  - [ ] Test Chrome, Firefox, Safari
  - [ ] Verify WebP fallbacks work
  - [ ] Check mobile rendering

- [ ] **Accessibility Testing**
  - [ ] Verify all alt text is descriptive
  - [ ] Check color contrast on overlays
  - [ ] Test screen reader compatibility

- [ ] **SEO Verification**
  - [ ] Submit image sitemap to Google
  - [ ] Verify Open Graph images on social media
  - [ ] Check image search indexing

---

## Quick Start: First 3 Images to Add

If you want to start immediately with maximum impact:

### 1. Homepage Hero Background (30 minutes)

**Option A: Use Free Stock Photo**
1. Go to https://unsplash.com
2. Search "artificial intelligence network"
3. Download high-res (1920x1080)
4. Compress with TinyPNG
5. Convert to WebP with Squoosh
6. Save as `/public/images/hero/ai-network-background.webp`

**Option B: Generate with AI (15 minutes)**
1. Use Leonardo.ai (free account)
2. Prompt: "abstract neural network, emerald green and teal gradient, modern tech, clean, professional, 16:9"
3. Download and optimize
4. Save to `/public/images/hero/`

**Implementation:**
```tsx
// app/(marketplace)/page.tsx
<section className="relative text-center py-20 overflow-hidden">
  <div className="absolute inset-0 opacity-5">
    <Image
      src="/images/hero/ai-network-background.webp"
      alt="Rede neural de Inteligência Artificial"
      fill
      className="object-cover"
      priority
      quality={85}
    />
  </div>
  <div className="relative z-10">
    <h1 className="text-6xl font-bold mb-6...">
      {/* Existing content */}
    </h1>
  </div>
</section>
```

### 2. Integrius CRM Dashboard Screenshot (1 hour)

**If you have access to Integrius:**
1. Open Integrius CRM
2. Navigate to main dashboard
3. Take full-page screenshot (1920x1080)
4. Use Shots.so to add Mac mockup
5. Optimize to WebP
6. Save as `/public/images/products/integrius-dashboard.webp`

**If you don't have access:**
1. Create mockup in Figma/Sketch
2. Or use placeholder dashboard image from Unsplash
3. Search "modern CRM dashboard"
4. Add text overlay: "Integrius CRM - Preview"

**Implementation:**
```tsx
// In the Integrius case study section
<div className="mb-6">
  <div className="relative rounded-card overflow-hidden border-2 border-primary/20">
    <Image
      src="/images/products/integrius-dashboard.webp"
      alt="Dashboard Integrius CRM - Sistema de gestão imobiliária com IA"
      width={1200}
      height={800}
      className="w-full h-auto"
      quality={85}
    />
  </div>
</div>
```

### 3. Blog Post Featured Images (1 hour total)

**Using Leonardo.ai (Free):**

**Image 1 - IA Transformando Gestão:**
1. Prompt: "professional business person using holographic AI interface, modern office, emerald green accents, corporate, technology, 16:9 aspect ratio"
2. Download best result
3. Optimize with TinyPNG + convert to WebP
4. Save as `/public/images/blog/ia-transforma-gestao.webp`

**Image 2 - CRM Comparison:**
1. Prompt: "split screen comparison, modern AI dashboard vs traditional software, emerald green modern side, gray traditional side, professional, 16:9"
2. Download and optimize
3. Save as `/public/images/blog/crm-inteligente-vs-tradicional.webp`

**Image 3 - Automação PMEs:**
1. Prompt: "small business owner with digital automation tools, friendly, modern office, emerald green accents, technology, 16:9"
2. Download and optimize
3. Save as `/public/images/blog/automacao-pmes.webp`

**Implementation:**
```tsx
// lib/blog-posts.ts - Add image field to each post

export const blogPosts: BlogPost[] = [
  {
    slug: "como-ia-transforma-gestao-empresarial",
    // ... existing fields
    image: "/images/blog/ia-transforma-gestao.webp",
  },
  {
    slug: "crm-inteligente-vs-tradicional",
    // ... existing fields
    image: "/images/blog/crm-inteligente-vs-tradicional.webp",
  },
  {
    slug: "automacao-inteligente-pequenas-empresas",
    // ... existing fields
    image: "/images/blog/automacao-pmes.webp",
  },
];
```

```tsx
// app/(marketplace)/blog/page.tsx - Add image to cards

<article key={post.slug}>
  <Link href={`/blog/${post.slug}`}>
    <div className="relative h-64 w-full rounded-t-card overflow-hidden mb-4">
      <Image
        src={post.image || '/images/blog/default-placeholder.webp'}
        alt={post.title}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-300"
        sizes="(max-width: 768px) 100vw, 700px"
      />
    </div>
  </Link>
  {/* Existing content */}
</article>
```

---

## Maintenance & Updates

### Monthly Image Audit

- [ ] Review image performance in Google Analytics
- [ ] Check for broken image links
- [ ] Update outdated screenshots (if applicable)
- [ ] Add new images for new blog posts

### Quarterly Optimization

- [ ] Run Lighthouse audits
- [ ] Re-compress images if needed
- [ ] Update alt text for SEO improvements
- [ ] Review and update image sitemap

### Ongoing Best Practices

1. **New Blog Posts:** Always include featured image (1200x630px)
2. **New Services:** Create custom thumbnail and hero image
3. **Product Updates:** Update screenshots quarterly
4. **Social Sharing:** Test Open Graph images before publishing

---

## Support Resources

### Image Optimization Tools

- **TinyPNG:** https://tinypng.com
- **Squoosh:** https://squoosh.app
- **ImageOptim:** https://imageoptim.com
- **Cloudinary:** https://cloudinary.com (advanced CDN)

### Design Tools

- **Figma:** https://figma.com (mockups, designs)
- **Canva:** https://canva.com (quick graphics)
- **Photopea:** https://photopea.com (free Photoshop alternative)

### Testing Tools

- **Google Lighthouse:** Built into Chrome DevTools
- **PageSpeed Insights:** https://pagespeed.web.dev
- **WebPageTest:** https://webpagetest.org

---

## Summary & Next Steps

### Estimated Implementation Time

- **Phase 1 (Critical):** 10-12 hours
- **Phase 2 (High Priority):** 8-10 hours
- **Phase 3 (Medium Priority):** 6-8 hours
- **Phase 4 (Testing & Polish):** 4-6 hours
- **Total:** ~30-35 hours

### ROI of Image Investment

**SEO Benefits:**
- Improved Google Image Search rankings
- Better Open Graph engagement (social media)
- Enhanced user experience (lower bounce rate)
- Increased time on page

**Conversion Benefits:**
- More professional appearance = higher trust
- Visual content increases engagement by 94%
- Product screenshots increase conversion by 35%

**Brand Benefits:**
- Consistent visual identity
- Professional credibility
- Memorable brand presence

### Immediate Action Items

1. **Download this document** for reference
2. **Create image directory structure:**
   ```bash
   mkdir -p public/images/{hero,services,blog,products,icons,about,contact}
   ```
3. **Start with Quick Start section** (3 images, 2-3 hours)
4. **Follow Phase 1 checklist** for maximum impact
5. **Track progress** using implementation checklist

---

## Contact & Questions

For implementation support or questions about this image strategy:

- **Review this document** thoroughly first
- **Check resources section** for tools and tutorials
- **Test implementations** on staging before production
- **Monitor performance** with Lighthouse after deployment

---

**Document Status:** Ready for Implementation
**Next Review:** After Phase 1 completion
**Owner:** FRONTEND_DEV Agent

---

*End of Image Strategy Document*
