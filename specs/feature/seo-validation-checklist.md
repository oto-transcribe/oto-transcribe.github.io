# SEO Validation Checklist for OTO Transcribe

This document provides step-by-step validation procedures to verify all SEO optimizations are working correctly.

## Quick Reference - Validation URLs

### Schema.org Validation
- **Schema.org Validator**: https://validator.schema.org/#url=https%3A%2F%2Foto-transcribe.github.io%2F
- **Google Rich Results Test**: https://search.google.com/test/rich-results?url=https%3A%2F%2Foto-transcribe.github.io%2F

### Performance & Mobile
- **PageSpeed Insights**: https://pagespeed.web.dev/analysis?url=https%3A%2F%2Foto-transcribe.github.io%2F
- **Mobile-Friendly Test**: https://search.google.com/test/mobile-friendly?url=https%3A%2F%2Foto-transcribe.github.io%2F

### Social Media Validators
- **Twitter Card Validator**: https://cards-dev.twitter.com/validator
- **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/
- **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/

### Search Console & Analytics
- **Google Search Console**: https://search.google.com/search-console
- **Google Analytics 4**: https://analytics.google.com/

---

## Pre-Deployment Checklist

Run these checks **before** deploying to production:

### 1. File Existence
```bash
# Verify critical SEO files exist
ls -la robots.txt sitemap.xml
ls -la assets/img/og-cover.png assets/img/apple-touch-icon.png assets/img/favicon.png
```

**Expected Results:**
- ✅ robots.txt exists in root
- ✅ sitemap.xml exists in root
- ✅ og-cover.png exists (~65KB)
- ✅ apple-touch-icon.png exists (~20KB)
- ✅ favicon.png exists (~9KB)

### 2. Sitemap XML Validation
```bash
# Validate sitemap.xml XML syntax
xmllint --noout sitemap.xml
```

**Expected Result:**
- ✅ No XML syntax errors

### 3. Build Production Version
```bash
# Run build script with SEO validation
./scripts/build.sh
```

**Expected Results:**
- ✅ robots.txt exists
- ✅ sitemap.xml exists
- ✅ sitemap.xml is valid XML
- ✅ Found 4 Schema.org blocks
- ✅ og-cover.png exists
- ✅ apple-touch-icon.png exists
- ✅ favicon.png exists
- ✅ Build complete with ~48KB file size

### 4. Schema Count Verification
```bash
# Verify all 4 Schema blocks are present
grep -c 'application/ld+json' index.html.new
```

**Expected Result:**
- ✅ Returns: 4 (SoftwareApplication, FAQPage, Organization, BreadcrumbList)

### 5. Title Tag Verification
```bash
# Check optimized title tag
grep '<title>' index.html.new
```

**Expected Result:**
- ✅ `<title>Voice to Text for Mac - Private Offline Transcription | oto</title>`
- ✅ Length: 63 characters (optimal: 60-67)
- ✅ Includes keyword: "Voice to Text for Mac"

### 6. Meta Description Verification
```bash
# Check optimized meta description
grep 'meta name="description"' index.html.new
```

**Expected Result:**
- ✅ Contains: "Professional voice-to-text for Mac with 100+ languages"
- ✅ Includes pricing: "$30"
- ✅ Includes CTA: "Download now"
- ✅ Length: 155 characters (optimal: 150-160)

### 7. H1/H2 Optimization Check
```bash
# Verify hero subtitle and features H2
grep -A 1 'hero__title' index.html.new
grep 'featuresTitle' index.html.new
```

**Expected Results:**
- ✅ Hero has subtitle: "Professional voice-to-text transcription for Mac"
- ✅ Features H2: "Mac Transcription Features - Simply Powerful"

---

## Post-Deployment Checklist

Run these checks **after** deploying to GitHub Pages:

### 1. Live File Accessibility
```bash
# Verify files are accessible on live site
curl -I https://oto-transcribe.github.io/robots.txt
curl -I https://oto-transcribe.github.io/sitemap.xml
curl -I https://oto-transcribe.github.io/assets/img/og-cover.png
```

**Expected Results:**
- ✅ robots.txt returns 200 OK
- ✅ sitemap.xml returns 200 OK
- ✅ og-cover.png returns 200 OK

### 2. Google Indexing Check
Visit: https://www.google.com/search?q=site:oto-transcribe.github.io

**Expected Result:**
- ✅ Site appears in Google search results
- ✅ Title shows: "Voice to Text for Mac - Private Offline Transcription | oto"
- ✅ Description shows optimized meta description

### 3. Schema.org Validation
Visit: https://validator.schema.org/#url=https%3A%2F%2Foto-transcribe.github.io%2F

**Expected Results:**
- ✅ 0 Errors
- ✅ 0 Warnings
- ✅ Detects 4 schemas:
  1. SoftwareApplication
  2. FAQPage (with 4 questions)
  3. Organization
  4. BreadcrumbList (with 4 items)

### 4. Google Rich Results Test
Visit: https://search.google.com/test/rich-results?url=https%3A%2F%2Foto-transcribe.github.io%2F

**Expected Results:**
- ✅ Page is eligible for rich results
- ✅ FAQPage detected (may show FAQ rich snippet in search)
- ✅ SoftwareApplication detected
- ✅ No errors or warnings

### 5. Mobile-Friendly Test
Visit: https://search.google.com/test/mobile-friendly?url=https%3A%2F%2Foto-transcribe.github.io%2F

**Expected Result:**
- ✅ Page is mobile-friendly
- ✅ Text is readable without zooming
- ✅ Content sized to viewport

### 6. PageSpeed Insights Baseline
Visit: https://pagespeed.web.dev/analysis?url=https%3A%2F%2Foto-transcribe.github.io%2F

**Target Scores:**
- ✅ Performance: ≥90/100
- ✅ Accessibility: ≥90/100
- ✅ Best Practices: ≥90/100
- ✅ SEO: ≥90/100

**Core Web Vitals Targets:**
- ✅ LCP (Largest Contentful Paint): <2.5s
- ✅ FID (First Input Delay): <100ms
- ✅ CLS (Cumulative Layout Shift): <0.1

**Record Baseline Scores:**
- Performance: ___/100
- Accessibility: ___/100
- Best Practices: ___/100
- SEO: ___/100
- LCP: ___s
- CLS: ___

### 7. Twitter Card Validation
Visit: https://cards-dev.twitter.com/validator
Enter: https://oto-transcribe.github.io/

**Expected Results:**
- ✅ Card preview shows og-cover.png
- ✅ Title: "Voice to Text for Mac - Private Offline Transcription | oto"
- ✅ Description appears correctly
- ✅ Image displays at 1200x630px
- ✅ No errors

### 8. Facebook Sharing Debugger
Visit: https://developers.facebook.com/tools/debug/
Enter: https://oto-transcribe.github.io/

**Expected Results:**
- ✅ og:image loads correctly
- ✅ og:title matches expected title
- ✅ og:description appears
- ✅ No warnings about missing tags

### 9. LinkedIn Post Inspector
Visit: https://www.linkedin.com/post-inspector/
Enter: https://oto-transcribe.github.io/

**Expected Results:**
- ✅ Preview image displays (og-cover.png)
- ✅ Title and description render correctly
- ✅ No errors

---

## Google Search Console Setup

### Initial Setup (One-Time)

1. **Add Property**
   - Visit: https://search.google.com/search-console
   - Click "+ Add Property"
   - Enter: `https://oto-transcribe.github.io/`
   - Choose "URL prefix" method

2. **Verify Ownership**
   - Select "HTML tag" verification method
   - Copy the meta tag: `<meta name="google-site-verification" content="YOUR_CODE">`
   - Add to both `index.html` and `app/client/index.html` in `<head>`
   - Rebuild and deploy
   - Click "Verify" in Search Console

3. **Submit Sitemap**
   - In Search Console, go to "Sitemaps"
   - Enter: `https://oto-transcribe.github.io/sitemap.xml`
   - Click "Submit"
   - ✅ Verify status shows "Success"

### Ongoing Monitoring (Weekly)

**Coverage Report:**
- Navigate to: Coverage → Indexed pages
- ✅ Check "Valid" pages count
- ✅ Verify 0 errors
- ✅ Verify 0 warnings

**Performance Report:**
- Navigate to: Performance → Search results
- Track weekly:
  - Total clicks: ___
  - Total impressions: ___
  - Average CTR: ___%
  - Average position: ___

**Top Queries:**
- Monitor which search queries are driving traffic
- ✅ Verify target keywords appearing:
  - "voice to text mac"
  - "offline transcription"
  - "private transcription mac"

---

## Google Analytics 4 Setup

### Initial Setup (One-Time)

1. **Create GA4 Property**
   - Visit: https://analytics.google.com/
   - Click "Admin" → "Create Property"
   - Property name: "OTO Transcribe"
   - Select timezone and currency

2. **Get Measurement ID**
   - Navigate to: Admin → Data Streams
   - Click "Add stream" → "Web"
   - Enter: `https://oto-transcribe.github.io/`
   - Copy Measurement ID: `G-XXXXXXXXXX`

3. **Add Tracking Code**
   Add to both `index.html` and `app/client/index.html` in `<head>`:
   ```html
   <!-- Google tag (gtag.js) -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX', {
       'anonymize_ip': true,
       'cookie_flags': 'SameSite=None;Secure'
     });
   </script>
   ```

4. **Verify Data Collection**
   - Navigate to: Real-time → Overview
   - Visit site in separate browser
   - ✅ Verify real-time user appears

5. **Set Up Conversion Goals**
   - Navigate to: Admin → Events → Create event
   - Event name: `app_store_click`
   - Conversion: Mark as conversion
   - Track: Clicks on Mac App Store badge

### Ongoing Monitoring (Weekly)

**Acquisition Report:**
- Navigate to: Reports → Acquisition → Traffic acquisition
- Filter by: Medium = "organic"
- Track weekly organic search traffic:
  - Sessions: ___
  - Users: ___
  - New users: ___
  - Bounce rate: ___%

**Conversions:**
- Navigate to: Reports → Engagement → Conversions
- Track `app_store_click` events: ___

---

## Monthly SEO Health Checks

### Performance Audit
```bash
# Re-run PageSpeed Insights
# Compare scores to baseline
# Address any new issues or regressions
```

**Checklist:**
- [ ] PageSpeed Insights score ≥90/100
- [ ] No new accessibility issues
- [ ] Core Web Vitals passing
- [ ] No console errors on live site

### Indexing Status
**Search Console Coverage:**
- [ ] All pages indexed (0 errors)
- [ ] No new indexing warnings
- [ ] Sitemap status: Success

### Keyword Rankings
**Track positions for target keywords:**
1. "voice to text mac" - Position: ___
2. "offline transcription" - Position: ___
3. "private transcription mac" - Position: ___
4. "mac voice to text" - Position: ___
5. "transcription software no subscription" - Position: ___

### Traffic Metrics
**Google Analytics (vs. previous month):**
- Organic sessions: ___ (Change: __%)
- App Store clicks from organic: ___ (Change: __%)
- Average session duration: ___
- Bounce rate: ___%

### Schema Validation
- [ ] Re-run Google Rich Results Test
- [ ] Verify 0 errors in structured data
- [ ] Check FAQ eligible for rich snippets

---

## Troubleshooting Common Issues

### Issue: "Page not indexed" in Search Console
**Solution:**
1. Check robots.txt allows crawling: `curl https://oto-transcribe.github.io/robots.txt`
2. Verify sitemap submitted: Search Console → Sitemaps
3. Request indexing: Search Console → URL Inspection → Request Indexing
4. Wait 3-7 days for Google to crawl

### Issue: Schema validation errors
**Solution:**
1. Visit: https://validator.schema.org/
2. Review specific error messages
3. Fix JSON-LD syntax in `index.html` and `app/client/index.html`
4. Rebuild: `./scripts/build.sh`
5. Deploy and re-validate

### Issue: Social share image not showing
**Solution:**
1. Verify image accessible: `curl -I https://oto-transcribe.github.io/assets/img/og-cover.png`
2. Check file size <300KB: `ls -lh assets/img/og-cover.png`
3. Clear social media caches:
   - Facebook: https://developers.facebook.com/tools/debug/ → "Scrape Again"
   - Twitter: Wait 7 days for cache to expire
   - LinkedIn: https://www.linkedin.com/post-inspector/ → "Inspect"

### Issue: PageSpeed score dropped
**Solution:**
1. Run detailed audit: https://pagespeed.web.dev/
2. Common fixes:
   - Images too large: Re-run `./scripts/optimize-images.sh assets/img`
   - Render-blocking resources: Check preload directives in `<head>`
   - JavaScript issues: Review `assets/js/main.js`
3. Compare to baseline scores in this document

### Issue: No organic traffic after 30 days
**Solution:**
1. Verify indexing: `site:oto-transcribe.github.io` in Google
2. Check Search Console → Coverage for errors
3. Review keyword competition (may need content expansion)
4. Consider link building (submit to Product Hunt, directories)

---

## Success Metrics - 90 Day Goals

### SEO Score Targets
- **Baseline (pre-implementation):** 68/100
- **Target (90 days):** ≥85/100
- **Current score:** ___/100
- **Progress:** ___% to goal

### Traffic Targets
- **Baseline:** 0-50 organic sessions/month
- **Target:** 500-2,000 organic sessions/month
- **Current:** ___ sessions/month
- **Progress:** ___% to goal

### Keyword Rankings
**Goal: 5+ keywords in top 10**
- Current keywords in top 10: ___
- Current keywords in top 50: ___

### Authority Metrics
**Goal: Establish domain authority**
- Backlinks: ___ (Target: 100+)
- Referring domains: ___ (Target: 30+)

### Conversion Metrics
**Goal: Drive App Store visits**
- App Store clicks from organic: ___ (Target: 50-100/month)
- Estimated downloads from SEO: ___ (Target: 5-10/month)

---

## Documentation Updates

**Last Updated:** 2025-11-26
**Next Review:** 2025-12-26

**Change Log:**
- 2025-11-26: Initial SEO foundation implementation complete
  - Created robots.txt and sitemap.xml
  - Optimized title tags and meta descriptions
  - Added 4 Schema.org markup blocks (SoftwareApplication, FAQ, Organization, Breadcrumb)
  - Created social share images (og-cover.png, favicons)
  - Updated H1/H2 tags for keyword optimization
  - Enhanced build script with SEO validation checks
