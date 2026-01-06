# Vivoly Marketplace - Image Directory Structure

**Visual Reference for Image Organization**

This document shows the complete file structure for all images in the Vivoly marketplace.

---

## Complete Directory Tree

```
public/
├── logo.png                                    [EXISTS - Vivoly logo 150x40]
└── images/
    ├── hero/
    │   ├── ai-network-background.webp         [1920x1080 - Abstract AI background]
    │   └── ai-dashboard-concept.webp          [1920x1080 - Alternative hero]
    │
    ├── products/
    │   └── integrius-dashboard.webp           [1200x800 - CRM screenshot]
    │
    ├── blog/
    │   ├── ia-transforma-gestao.webp          [1200x630 - Featured image #1]
    │   ├── crm-inteligente-vs-tradicional.webp [1200x630 - Featured image #2]
    │   ├── automacao-pmes.webp                [1200x630 - Featured image #3]
    │   └── default-blog-post.webp             [1200x630 - Fallback placeholder]
    │
    ├── services/
    │   ├── saas-development.webp              [600x400 - Service card]
    │   ├── intelligent-automation.webp        [600x400 - Service card]
    │   ├── custom-solutions.webp              [600x400 - Service card]
    │   └── default-service.webp               [600x400 - Fallback placeholder]
    │
    ├── icons/
    │   ├── expertise-ai.svg                   [120x120 - Why choose icon]
    │   ├── results-proven.svg                 [120x120 - Why choose icon]
    │   ├── innovation-continuous.svg          [120x120 - Why choose icon]
    │   ├── quality-commitment.svg             [120x120 - Why choose icon]
    │   ├── step-meeting.svg                   [80x80 - Process step 1]
    │   ├── step-proposal.svg                  [80x80 - Process step 2]
    │   ├── step-development.svg               [80x80 - Process step 3]
    │   └── step-delivery.svg                  [80x80 - Process step 4]
    │
    ├── about/
    │   └── vivoly-team.webp                   [1920x800 - Team/office photo]
    │
    ├── contact/
    │   └── support-illustration.svg           [800x800 - Contact illustration]
    │
    └── og/
        ├── vivoly-og-default.jpg              [1200x630 - Default OG image]
        └── vivoly-twitter-card.jpg            [1200x630 - Twitter card]
```

---

## File Naming Convention

### Format
```
[category]-[description]-[keywords].extension
```

### Examples
```
✅ GOOD:
- blog-ia-transforma-gestao.webp
- service-saas-development.webp
- icon-expertise-ai.svg
- integrius-dashboard-screenshot.webp

❌ BAD:
- image1.jpg
- IMG_0001.png
- screenshot.webp
- ai.jpg
```

---

## Image Specifications by Category

### Hero Images
- **Format:** WebP (with PNG/JPG fallback)
- **Size:** 1920x1080px (16:9)
- **Quality:** 85%
- **Compression:** Medium-High
- **Purpose:** Large background images
- **Count:** 2 images

### Product Screenshots
- **Format:** WebP
- **Size:** 1200x800px (3:2)
- **Quality:** 85-90%
- **Compression:** Low-Medium (preserve details)
- **Purpose:** Showcase actual products
- **Count:** 1 image (Integrius)

### Blog Featured Images
- **Format:** WebP
- **Size:** 1200x630px (Open Graph ratio)
- **Quality:** 80-85%
- **Compression:** Medium
- **Purpose:** SEO, social sharing, engagement
- **Count:** 3 featured + 1 default = 4 images

### Service Card Thumbnails
- **Format:** WebP
- **Size:** 600x400px (3:2)
- **Quality:** 80%
- **Compression:** Medium
- **Purpose:** Visual service identification
- **Count:** 3 featured + 1 default = 4 images

### Icons
- **Format:** SVG (vector) preferred
- **Size:** 80x80px to 120x120px
- **Quality:** Lossless
- **Compression:** N/A (vector)
- **Purpose:** UI elements, visual hierarchy
- **Count:** 8 icons

### About Page
- **Format:** WebP
- **Size:** 1920x800px (banner)
- **Quality:** 85%
- **Compression:** Medium
- **Purpose:** Team/office authenticity
- **Count:** 1 image

### Contact Page
- **Format:** SVG or PNG
- **Size:** 800x800px (square)
- **Quality:** High
- **Compression:** Low
- **Purpose:** Friendly, approachable tone
- **Count:** 1 illustration

### Open Graph / Social
- **Format:** JPG (better social media compatibility)
- **Size:** 1200x630px (exact)
- **Quality:** 85%
- **Compression:** Medium
- **Purpose:** Social media sharing preview
- **Count:** 2 images

---

## Total Image Count

| Category | Priority | Count | Total Size (est.) |
|----------|----------|-------|-------------------|
| Hero | High | 2 | 600 KB |
| Products | High | 1 | 250 KB |
| Blog | High | 4 | 800 KB |
| Services | Medium | 4 | 400 KB |
| Icons | Medium | 8 | 80 KB |
| About | Low | 1 | 300 KB |
| Contact | Low | 1 | 50 KB |
| OG/Social | Medium | 2 | 300 KB |
| **TOTAL** | - | **23 images** | **~2.8 MB** |

---

## File Size Guidelines

### Target File Sizes (After Compression)

```
Hero backgrounds:      200-300 KB each
Product screenshots:   200-300 KB each
Blog featured images:  150-250 KB each
Service thumbnails:    80-120 KB each
Icons (SVG):          5-15 KB each
Icons (PNG):          20-40 KB each
About page:           250-350 KB
Contact illustration: 30-60 KB (SVG)
OG images:            120-180 KB each
```

### Total Bandwidth Impact

**Initial Page Load (Homepage):**
- Hero background: ~250 KB
- Logo: ~15 KB
- 3 service thumbnails: ~300 KB (lazy loaded)
- Icons: ~40 KB (if using SVG from Lucide, 0 KB)
- **Total:** ~600 KB for images on homepage

**Blog Page:**
- 3 featured images: ~600 KB (lazy loaded)
- **Total:** ~600 KB

**Performance Target:**
- LCP (Largest Contentful Paint): < 2.5s
- Total Page Weight: < 2 MB (including all assets)

---

## Image Creation Priority Order

### Phase 1: Critical (Week 1)
```
1. ✅ /images/hero/ai-network-background.webp
2. ✅ /images/products/integrius-dashboard.webp
3. ✅ /images/blog/ia-transforma-gestao.webp
4. ✅ /images/blog/crm-inteligente-vs-tradicional.webp
5. ✅ /images/blog/automacao-pmes.webp
```

### Phase 2: High Priority (Week 2)
```
6. ✅ /images/services/saas-development.webp
7. ✅ /images/services/intelligent-automation.webp
8. ✅ /images/services/custom-solutions.webp
9. ✅ /images/og/vivoly-og-default.jpg
```

### Phase 3: Medium Priority (Week 3)
```
10. ✅ /images/icons/expertise-ai.svg (OR use Lucide)
11. ✅ /images/icons/results-proven.svg
12. ✅ /images/icons/innovation-continuous.svg
13. ✅ /images/icons/quality-commitment.svg
14. ✅ /images/about/vivoly-team.webp
```

### Phase 4: Low Priority (Week 4)
```
15. ✅ /images/contact/support-illustration.svg
16. ✅ /images/blog/default-blog-post.webp
17. ✅ /images/services/default-service.webp
18. ✅ /images/icons/step-*.svg (4 icons)
19. ✅ /images/og/vivoly-twitter-card.jpg
20. ✅ /images/hero/ai-dashboard-concept.webp (alternative)
```

---

## Quick Reference: Where Each Image Appears

### Homepage (/)
```
✓ /images/hero/ai-network-background.webp       → Hero section background
✓ /images/products/integrius-dashboard.webp     → Case study section
✓ /images/services/*.webp (3)                   → Featured services cards
✓ /images/icons/expertise-ai.svg (4)            → Why choose Vivoly section
```

### Services Page (/services)
```
✓ /images/services/*.webp                       → Service grid cards
```

### Service Detail Page (/services/[slug])
```
✓ /images/services/[service-name].webp          → Hero banner
✓ /images/icons/step-*.svg (4)                  → Process steps
```

### Blog Listing (/blog)
```
✓ /images/blog/[article-slug].webp (3)          → Article cards
```

### Blog Post (/blog/[slug])
```
✓ /images/blog/[article-slug].webp              → Featured image at top
```

### About Page (/about)
```
✓ /images/about/vivoly-team.webp                → Hero section
```

### Contact Page (/contact)
```
✓ /images/contact/support-illustration.svg      → Beside contact form
```

### Social Media Sharing (All Pages)
```
✓ /images/og/vivoly-og-default.jpg              → Default OG image
✓ /images/og/vivoly-twitter-card.jpg            → Twitter card
✓ /images/blog/[article].webp                   → Blog-specific OG images
```

---

## Responsive Image Strategy

### Breakpoints Used

```css
/* Mobile */
@media (max-width: 640px) {
  /* Load 400px wide images */
}

/* Tablet */
@media (max-width: 1024px) {
  /* Load 800px wide images */
}

/* Desktop */
@media (min-width: 1025px) {
  /* Load full resolution images */
}
```

### Next.js Image Sizes Prop

```tsx
// For hero images (full width)
sizes="100vw"

// For blog cards (responsive grid)
sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px"

// For service cards (3-column grid)
sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
```

---

## Backup & Version Control

### Git LFS (Large File Storage)

If images are large (>1 MB each), consider Git LFS:

```bash
# Install Git LFS
git lfs install

# Track image files
git lfs track "public/images/**/*.webp"
git lfs track "public/images/**/*.jpg"
git lfs track "public/images/**/*.png"

# Commit .gitattributes
git add .gitattributes
git commit -m "Configure Git LFS for images"
```

### Alternative: External CDN

For production, consider using Cloudflare Images or similar:
- Upload images to Cloudflare Images
- Get optimized URLs
- Update image paths in code
- Benefit: Automatic format conversion, resizing, global CDN

---

## Maintenance Schedule

### Monthly
- [ ] Check for broken image links
- [ ] Review image load times in Analytics
- [ ] Update blog post images for new articles

### Quarterly
- [ ] Run Lighthouse audit
- [ ] Re-compress images if needed
- [ ] Update product screenshots (if UI changed)
- [ ] Review and optimize largest images

### Yearly
- [ ] Full image audit
- [ ] Replace outdated stock photos
- [ ] Update brand imagery if rebrand
- [ ] Review SEO performance of image alt text

---

## Command Line Quick Reference

### Create Directory Structure
```bash
cd /home/hans/vivolyMKTP
mkdir -p public/images/{hero,products,blog,services,icons,about,contact,og}
```

### Check Image Sizes
```bash
du -h public/images/**/*.{webp,jpg,png,svg}
```

### Find Large Images (>500KB)
```bash
find public/images -type f -size +500k -exec ls -lh {} \;
```

### Convert PNG to WebP
```bash
# Using cwebp (install: apt-get install webp)
cwebp -q 80 input.png -o output.webp
```

### Batch Convert All PNGs
```bash
for file in public/images/**/*.png; do
  cwebp -q 80 "$file" -o "${file%.png}.webp"
done
```

### Optimize JPGs in Place
```bash
# Using jpegoptim (install: apt-get install jpegoptim)
jpegoptim --max=85 public/images/**/*.jpg
```

---

## Checklist Before Going Live

### Image Quality Check
- [ ] All images are compressed (file sizes reasonable)
- [ ] All images are in WebP format (or appropriate format)
- [ ] All images have correct dimensions
- [ ] No pixelated or low-quality images

### SEO Check
- [ ] All images have descriptive alt text
- [ ] All images follow naming convention
- [ ] Open Graph images are 1200x630px exactly
- [ ] Image sitemap created and submitted

### Performance Check
- [ ] Hero image uses `priority` prop
- [ ] Below-fold images use lazy loading
- [ ] All images specify width/height (prevent CLS)
- [ ] Lighthouse performance score > 90

### Accessibility Check
- [ ] All decorative images have empty alt (`alt=""`)
- [ ] All meaningful images have descriptive alt text
- [ ] Text on images has sufficient contrast
- [ ] Images don't flash or blink

---

## Support & Resources

### Image Directories Created
```bash
✅ /public/images/hero/
✅ /public/images/products/
✅ /public/images/blog/
✅ /public/images/services/
✅ /public/images/icons/
✅ /public/images/about/
✅ /public/images/contact/
✅ /public/images/og/
```

### Related Documentation
- `IMAGE_STRATEGY.md` - Complete image strategy (this file's parent)
- `IMAGE_IMPLEMENTATION_EXAMPLES.md` - Code examples for implementation
- `AI_IMAGE_GENERATION_PROMPTS.md` - Prompts for AI image generation

### External Tools
- **TinyPNG:** https://tinypng.com (compression)
- **Squoosh:** https://squoosh.app (format conversion)
- **Leonardo.ai:** https://leonardo.ai (AI generation)
- **Unsplash:** https://unsplash.com (stock photos)
- **Flaticon:** https://flaticon.com (icons)

---

**Document Status:** Directory Structure Created & Ready
**Last Updated:** 2026-01-06
**Total Images Required:** 23
**Estimated Total Size:** ~2.8 MB (compressed)

---

*End of Image Directory Structure*
