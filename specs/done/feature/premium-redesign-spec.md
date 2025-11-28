# Specification: Premium UI Redesign for OTO Website
> Transform the OTO website from "Warm & Organic" to "Sleek, Modern, Minimal & Premium"

## High-Level Objective

Redesign the entire OTO website to embody a sleek, modern, minimal, and premium aesthetic that positions OTO as a professional-grade tool for serious users. The transformation should shift from approachable warmth to aspirational sophistication while maintaining the strong information architecture, accessibility standards, and Apple-native feel.

**Target Aesthetic**: Think Apple Pro products (MacBook Pro, Mac Studio) - confident, precise, powerful, refined.

## Mid-Level Objective

1. **Color System Transformation**: Replace warm beiges/bronzes with cool, desaturated grays and pure whites/blacks with a single premium blue accent
2. **Typography Refinement**: Tighten letter spacing, increase font weights, sharpen hierarchy, reduce line heights
3. **Spatial Precision**: Reduce border radii dramatically, tighten padding/spacing, implement strict 8px grid system
4. **Component Redesign**: Flatten all cards, sharpen buttons, simplify pricing presentation, minimize hero section
5. **Animation Streamlining**: Reduce all animation durations by 50%, eliminate decorative animations, simplify hover states
6. **Layout Architecture**: Implement fixed section heights, create sharp divisions, ensure perfect grid alignment

## Implementation Notes

### Design Philosophy Shift
- **FROM**: "Warm, Organic, & Native" - Friendly, approachable, cozy
- **TO**: "Sleek, Modern, Minimal, Premium" - Professional, confident, aspirational

### Key Technical Constraints
- Maintain all existing HTML structure and semantic markup
- Preserve accessibility features (ARIA, keyboard nav, focus states)
- Keep dark mode implementation (but with cool tones)
- Maintain mobile responsiveness and touch targets
- Preserve all existing JavaScript functionality
- Keep lazy loading and performance optimizations

### Color Transformation Rules

**Light Mode**
```
Current → New
#FEFCF9 (warm white) → #FFFFFF (pure white)
#F9F7F4 (beige) → #F5F5F7 (cool gray, Apple-style)
#EEE9E3 (warm content) → #FAFAFA (light gray)
#DAC7B0 (bronze accent) → #0071E3 (premium blue)
#8CAAC8 (light blue) → #0071E3 (unified accent)

Text:
rgba(0,0,0,0.85) → #0A0A0A (near-black, higher contrast)
rgba(0,0,0,0.5) → rgba(0,0,0,0.6) (slightly stronger)

Borders:
rgba(218,199,176,0.15) → rgba(0,0,0,0.12) (neutral, defined)
```

**Dark Mode**
```
Current → New
#272726 (warm dark) → #0A0A0A (pure black)
#1C1A18 (warm content) → #1A1A1A (cool dark)
#A08968 (bronze) → #0A84FF (bright blue, iOS-style)

Text:
rgba(255,255,255,0.85) → #FAFAFA (brighter)
```

### Typography Transformation Rules

**Font Weights**
```
Current → New
100 (Thin) → 400 (Regular) for body
300 (Light) → 500 (Medium) for emphasis
400 (Regular) → 600 (Semibold) for headings
```

**Letter Spacing**
```
Current → New
Hero: 0.3px → -0.02em (tighter)
Body: 0.3px → 0 (neutral)
Headings: -0.5px → -0.04em (much tighter)
Buttons: 0.3px → 0 (neutral)
```

**Line Heights**
```
Current → New
Body: 1.5 → 1.4
Headings: 1.05-1.2 → 1.1 (consistent)
```

### Spacing & Radius Transformation

**Border Radius**
```
Current → New
--radius-default: 20px → 8px
--radius-large: 24px → 12px
--radius-medium: 16px → 6px
--radius-small: 12px → 4px
--radius-stadium: 18px → 8px (no more pill shapes)
```

**Card Padding**
```
Current → New
clamp(1.75-2.5rem) → clamp(1-1.5rem)
clamp(34-70px) pricing → clamp(24-32px)
```

**Section Spacing**
```
Current → New
6rem top, 5rem bottom → 4rem top, 3rem bottom
```

**Grid Gap**
```
Current → New
clamp(1.5-2.5rem) → 1.5rem (fixed)
```

### Component-Specific Transformations

#### Hero Section
```
REMOVE:
- Gradient background overlay (body::before)
- Multiple text blocks with varied sizing
- Trust indicators with micro typography
- Generous padding and spacing

KEEP:
- Single bold headline
- One-sentence subheadline
- Single primary CTA
- Demo video/slideshow

CHANGES:
- Reduce hero__title font size by 20%
- Remove hero__transformation (redundant)
- Change app-store-badge to sharp-cornered button alternative
- Tighten all vertical spacing
```

#### Organic Cards
```
Current:
- 20px radius
- Soft shadows (0 1px 2px, 0 4px 12px at 4-6% opacity)
- Hover: 2px lift + gradient overlay
- Tinted backgrounds per feature

New:
- 8px radius (or 0px for ultra-premium)
- Sharp shadow (0 1px 3px rgba(0,0,0,0.15))
- Hover: No lift, only border color change
- Pure white background (no tints)
- 1px solid border at rgba(0,0,0,0.12)
```

#### Buttons
```
Current:
- 20px radius
- 300ms transition
- Soft hover lift (1px)
- Multiple styles

New:
- 6px radius
- 150ms transition
- No lift (flat)
- Sharp contrast (black on white, or blue filled)
- height: 40px (increased from 32px)
- font-weight: 600 (increased from 400)
```

#### Pricing Card
```
REMOVE:
- Pricing box gradient background
- Ribbon badge with decorative placement
- Large organic radius (36-40px)
- Soft shadows (32px blur)
- Decorative ::after pseudo-elements

KEEP:
- 3-column layout structure
- Benefits lists on sides
- Central pricing card

CHANGES:
- pricing-box: Remove gradient, use solid white with 1px border
- pricing-box radius: 40px → 12px
- pricing-card radius: 36px → 8px
- pricing-card padding: clamp(34-70px) → 24-32px
- pricing-card__badge: Remove or make minimal (pill shape → sharp rectangle)
- pricing-card__ribbon: Remove decorative styling
- pricing-card__price-current: Reduce size by 20%, increase weight to 700
- Remove savings-card or make minimal (flat, white, sharp corners)
```

#### FAQ Accordion
```
Current:
- 16px radius
- Plus icon rotation (45deg)
- Gentle hover with shadow
- Warm backgrounds

New:
- 0px radius (hairline dividers only)
- Chevron icon (no rotation, just up/down)
- Hover: Text color change only
- Transparent background
- 1px bottom border separators
```

#### Feature Cards Grid
```
Current:
- Multiple tint colors per feature
- Soft shadows and hover lifts
- Large icons with circular backgrounds
- Generous padding

New:
- Monochrome (white cards with subtle gray on hover)
- Flat (no shadows except minimal on hover)
- Smaller, sharper icons (remove circular backgrounds)
- Tighter padding: var(--spacing-lg) → var(--spacing-md)
- Remove all ::before tint overlays
```

### Animation Transformations

**Durations**
```
Current → New
300ms → 150ms (hover states)
600ms → 200ms (reveals)
1800ms → REMOVE (decorative waveform)
320ms → 150ms (card transitions)
```

**Easing**
```
Current → New
cubic-bezier(0.4,0,0.2,1) → ease-out
var(--transition-standard) → linear or ease-out
```

**Effects to Remove**
- Waveform breathing animation (lines 215-232)
- Organic card gradient overlay on hover (line 400-402)
- Screenshot blur-up lazy load effect (line 869)
- FAQ hover shadow increase (line 877)
- All ::before pseudo-element animations

**Effects to Keep (but faster)**
- Nav underline animation (150ms)
- Reveal animations (200ms fade only, no slide)
- Lazy image fade-in (200ms)

### Section-by-Section Changes

#### Navigation
```
CHANGES:
- Remove blur backdrop (line 158)
- Solid background: var(--color-primary-bg)
- Remove animated underline gradient (lines 855-857)
- Simple 2px solid underline on hover
- Active state: Solid blue underline
```

#### Made for Mac Section (Bottleneck Grid)
```
CHANGES:
- Remove special styling for bottleneck-grid cards (lines 1840-1879)
- Use standard minimal card styling
- Remove circular icon backgrounds
- Remove list item styling (no special bullets)
- Flatten to pure white cards with gray borders
```

#### Features Grid
```
CHANGES:
- Remove all .tint-* classes and effects (lines 356-397)
- Single monochrome card style for all
- Remove icon color-coding (lines 356-364)
- Unified icon style: 20px, gray, no background
- Remove ::before gradient overlays (lines 379-397)
```

#### Pricing Section
```
MAJOR REDESIGN:
- Remove entire pricing-box gradient (lines 892-918)
- Replace with minimal white container
- Remove pricing-card complex styling (lines 959-1168)
- Simplify to: white card, sharp corners, minimal shadow
- Remove ribbon completely or make minimal badge
- Flatten benefits lists (remove checkmarks or use minimal icons)
- Remove savings-card gradient and make flat (lines 1-36)
```

#### Why OTO Section
```
CHANGES:
- Remove .organic-card styling
- Use minimal white container with sharp corners
- Reduce padding
- Tighten line-height
- Remove special list styling
```

#### FAQ Section
```
MAJOR REDESIGN:
- Remove card backgrounds (line 788)
- Use hairline dividers (1px solid borders)
- Remove radius (16px → 0)
- Remove hover shadows
- Change toggle from + rotation to chevron up/down
- Flat, list-like appearance
```

#### Privacy/Policy Section
```
CHANGES:
- Remove .organic-card styling
- Flatten accordion items
- Remove decorative ::before checkmarks
- Use simple list styling
- Reduce padding throughout
```

## Context

### Beginning Context
Files exist:
- index.html (799 lines) - Complete website structure
- assets/css/styles.css (1879 lines) - Current warm, organic design system
- assets/js/main.js - All interactive functionality
- oto-docs/oto_style_guide.md - Current design system documentation

### Ending Context
Files will be modified:
- assets/css/styles.css - Completely redesigned with premium aesthetic
- (index.html may need minor class adjustments but should remain mostly unchanged)

Files to create:
- Plans/premium-redesign-spec.md (this file)

## Low-Level Tasks
> Ordered from start to finish

### Task 1: Update CSS Color Variables
```prompt
Transform all CSS color variables in assets/css/styles.css from warm, organic tones to cool, premium colors.

FILE TO UPDATE: assets/css/styles.css (lines 40-103)

CHANGES:
- Light mode background: #fefcf9 → #FFFFFF (pure white)
- Light mode content: #eee9e3 → #FAFAFA
- Light mode sidebar: #f9f7f4 → #F5F5F7
- Primary accent: #dac7b0 → #0071E3 (premium blue)
- Secondary accent: #8caac8 → #0071E3 (unified)
- Text primary: rgba(0,0,0,0.85) → #0A0A0A
- Border colors: rgba(218,199,176,0.15) → rgba(0,0,0,0.12)
- Shadow color: rgba(42,42,42,0.08) → rgba(0,0,0,0.15)

- Dark mode background: #272726 → #0A0A0A (pure black)
- Dark mode content: #1c1a18 → #1A1A1A
- Dark mode accent: #a08968 → #0A84FF (iOS blue)
- Dark mode text: rgba(255,255,255,0.85) → #FAFAFA

REMOVE:
- All gradient variables (lines 52-53)
- All tint-* variables (lines 93-102)
```

### Task 2: Update CSS Typography Variables
```prompt
Refine typography system in assets/css/styles.css for sharper, tighter, more premium text.

FILE TO UPDATE: assets/css/styles.css (lines 59-83)

CHANGES:
- Font weights: Update body font-weight:300 → font-weight:400 throughout
- Letter spacing: Remove positive spacing, use negative for headings
- Line heights: --line-height-body: 1.5 → 1.4
- Line heights: --line-height-title: 1.2 → 1.1

UPDATE all body text selectors:
- body { font-weight:300 } → { font-weight:400 }
- hero__lead, section__lead: font-weight:400 → font-weight:500
- All h2, h3: Add letter-spacing: -0.02em

REMOVE:
- Generous clamp() font sizes, use fixed responsive sizes
```

### Task 3: Update CSS Spacing & Radius Variables
```prompt
Dramatically reduce spacing and corner radii for premium, precise aesthetic.

FILE TO UPDATE: assets/css/styles.css (lines 61-65, 84-92)

CHANGES:
- --radius-default: 20px → 8px
- --radius-large: 24px → 12px
- --radius-medium: 16px → 6px
- --radius-small: 12px → 4px
- --radius-stadium: 18px → 8px

SECTION PADDING:
- .section: padding: 6rem 1.875rem 5rem → padding: 4rem 1.875rem 3rem

CARD PADDING:
- Find all clamp(1.75rem, ..., 2.5rem) → clamp(1rem, ..., 1.5rem)
```

### Task 4: Remove Background Gradients
```prompt
Remove all decorative background gradients and overlays for clean, flat premium look.

FILE TO UPDATE: assets/css/styles.css

REMOVE OR DISABLE:
- body::before { radial-gradient overlays } (lines 146-149) - Set opacity:0 or remove
- .section--alt gradient backgrounds (line 174) - Replace with solid background
- All .tint-*::before overlays (lines 379-397) - Remove entirely
- .organic-card::before gradient (line 400) - Remove
- .pricing-box gradient background (line 900) - Replace with solid white
```

### Task 5: Redesign Organic Cards
```prompt
Transform .organic-card from warm, soft cards to sharp, minimal, premium containers.

FILE TO UPDATE: assets/css/styles.css (lines 399-403, 860-863)

REPLACE entire .organic-card styling:
.organic-card {
  background: #FFFFFF;
  border: 1px solid rgba(0,0,0,0.12);
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
  transition: all 150ms ease-out;
  position: relative;
  overflow: hidden;
}

.organic-card:hover {
  border-color: #0071E3;
  box-shadow: 0 2px 8px rgba(0,0,0,0.12);
  transform: none; /* No lift */
}

/* Remove ::before pseudo-element */
.organic-card::before { display: none; }

DARK MODE:
@media (prefers-color-scheme: dark) {
  .organic-card {
    background: #1A1A1A;
    border-color: rgba(255,255,255,0.15);
  }
  .organic-card:hover {
    border-color: #0A84FF;
  }
}
```

### Task 6: Redesign Buttons
```prompt
Transform .warm-button from soft, organic buttons to sharp, high-contrast premium buttons.

FILE TO UPDATE: assets/css/styles.css (lines 700-709)

REPLACE entire .warm-button styling:
.warm-button {
  border: none;
  cursor: pointer;
  font: inherit;
  font-size: 15px;
  font-weight: 600;
  height: 40px;
  padding: 0 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 6px;
  position: relative;
  transition: all 150ms ease-out;
  background: transparent;
  color: var(--color-text-primary);
}

.warm-button.primary {
  background: #0A0A0A;
  color: #FFFFFF;
}

.warm-button.secondary {
  border: 1px solid rgba(0,0,0,0.2);
  background: transparent;
}

.warm-button.primary:hover {
  background: #0071E3;
}

.warm-button.secondary:hover {
  border-color: #0071E3;
  color: #0071E3;
}

.warm-button:active {
  transform: scale(0.98);
  transition-duration: 50ms;
}

DARK MODE:
@media (prefers-color-scheme: dark) {
  .warm-button.primary {
    background: #FAFAFA;
    color: #0A0A0A;
  }
  .warm-button.primary:hover {
    background: #0A84FF;
    color: #FFFFFF;
  }
}
```

### Task 7: Simplify Hero Section Styling
```prompt
Reduce hero section to minimal, bold statement with tight spacing.

FILE TO UPDATE: assets/css/styles.css (lines 179-212)

CHANGES:
.hero__title {
  font-size: clamp(2rem, 4.8vw, 3.2rem); /* Reduced from 4rem */
  font-weight: 600; /* Increased from 100 */
  line-height: 1.1; /* Slightly increased */
  letter-spacing: -0.03em; /* Tighter */
  margin: 0 0 16px; /* Reduced from 18px */
}

.hero__lead {
  font-size: 1.0625rem; /* Slightly reduced */
  font-weight: 400; /* Reduced from 400 but content changes */
  max-width: 36rem; /* Reduced from 44rem */
  margin: 12px auto 16px; /* Tighter */
  color: var(--color-text-secondary);
  line-height: 1.4; /* Reduced from 1.5 */
}

REMOVE:
.hero__transformation { display: none; } /* Remove entirely or comment out */

.trust-line {
  font-size: 12px; /* Reduced from micro default */
  margin-top: 8px;
  opacity: 0.5; /* More subtle */
}
```

### Task 8: Flatten Feature Cards
```prompt
Remove all tint colors, icon backgrounds, and special effects from feature cards.

FILE TO UPDATE: assets/css/styles.css

CHANGES:
.feature-card__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px; /* Reduced from 40px */
  height: 32px;
  border-radius: 0; /* Removed from 10px */
  color: #0071E3; /* Single accent color */
  background: transparent; /* Removed rgba(0,0,0,0.04) */
}

/* Remove icon size adjustments */
.feature-card__icon svg,
.feature-card__icon .ph {
  width: 20px; /* Reduced from 24px */
  height: 20px;
  font-size: 20px;
}

REMOVE entirely (comment out):
- Lines 356-364: .tint-* .feature-card__icon color-coding
- Lines 379-397: .tint-*::before pseudo-elements
- Lines 330-332: .tint-* emphasis styles

DARK MODE:
@media (prefers-color-scheme: dark) {
  .feature-card__icon {
    color: #0A84FF;
    background: transparent;
  }
}
```

### Task 9: Redesign Pricing Section
```prompt
Completely redesign pricing section for minimal, premium aesthetic.

FILE TO UPDATE: assets/css/styles.css (lines 892-1168)

REPLACE .pricing-box:
.pricing-box {
  position: relative;
  display: grid;
  gap: clamp(24px, 4vw, 48px);
  padding: clamp(32px, 5vw, 48px);
  margin: 0 auto;
  max-width: min(1100px, 92vw);
  border-radius: 12px; /* Reduced from 40px */
  background: #FFFFFF; /* Solid instead of gradient */
  border: 1px solid rgba(0,0,0,0.12);
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  justify-items: center;
  align-items: start;
}

REPLACE .pricing-card:
.pricing-card {
  position: relative;
  background: #FFFFFF;
  border-radius: 8px; /* Reduced from 36px */
  padding: 32px 40px 40px; /* Fixed, not clamp */
  border: 1px solid rgba(0,0,0,0.12);
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Remove or minimize ribbon */
.pricing-card__ribbon {
  display: none; /* Or redesign as minimal badge */
}

/* Simplify badge */
.pricing-card__badge {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #0071E3; /* Solid blue */
  color: #FFFFFF;
  padding: 6px 16px; /* Reduced */
  border-radius: 6px; /* Sharp instead of 999px */
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  box-shadow: 0 2px 8px rgba(0,113,227,0.3);
  z-index: 5;
}

/* Simplify price display */
.pricing-card__price-current {
  font-size: clamp(3rem, 8vw, 4rem); /* Reduced from 5.6rem */
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.03em;
  color: #0A0A0A;
  text-shadow: none; /* Remove shadow */
  font-family: var(--font-system);
}

/* Simplify strikethrough */
.pricing-card__price-original::after {
  background: #EF4444; /* Solid red */
  transform: rotate(-8deg); /* Less dramatic */
}

REMOVE:
- Lines 972-979: pricing-card::after inner glow
- Lines 1012-1014: pricing-card__ribbon::after
```

### Task 10: Flatten FAQ Accordion
```prompt
Transform FAQ from card-based to list-based with hairline dividers.

FILE TO UPDATE: assets/css/styles.css (lines 787-794)

REPLACE entire .faq styling:
.faq {
  max-width: 860px;
  margin: 0 auto;
  display: grid;
  gap: 0; /* No gap, use borders */
}

.faq-item {
  border: none;
  border-bottom: 1px solid rgba(0,0,0,0.12);
  border-radius: 0; /* Remove */
  background: transparent; /* Remove card bg */
  box-shadow: none;
  transition: none;
}

.faq-item:last-child {
  border-bottom: none;
}

.faq-item:hover {
  background: rgba(0,113,227,0.03); /* Subtle */
  border-color: rgba(0,0,0,0.12); /* Keep same */
  box-shadow: none;
}

.faq-toggle {
  width: 100%;
  text-align: left;
  background: none;
  border: 0;
  padding: 20px 0; /* Reduced from 18px 22px */
  font: inherit;
  font-size: 16px;
  font-weight: 600; /* Increased from 400 */
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  color: var(--color-text-primary);
}

.faq-toggle::after {
  content: "▼"; /* Keep chevron */
  font-size: 12px; /* Smaller */
  line-height: 1;
  transition: transform 150ms ease-out; /* Faster */
  color: rgba(0,0,0,0.4);
}

.faq-toggle:hover {
  color: #0071E3;
}

.faq-toggle[aria-expanded="true"]::after {
  transform: rotate(180deg);
  color: #0071E3;
}

.faq-panel {
  padding: 0 0 20px 0; /* Reduced */
  overflow: hidden;
  transition: all 150ms ease-out; /* Faster */
}

DARK MODE:
@media (prefers-color-scheme: dark) {
  .faq-item {
    border-bottom-color: rgba(255,255,255,0.15);
  }
  .faq-item:hover {
    background: rgba(10,132,255,0.05);
  }
}
```

### Task 11: Reduce Animation Durations
```prompt
Cut all animation durations in half for snappier, premium interactions.

FILE TO UPDATE: assets/css/styles.css

FIND AND REPLACE:
- transition: all 300ms → transition: all 150ms
- transition: all 320ms → transition: all 150ms
- transition: opacity 600ms → transition: opacity 200ms
- transition: transform 900ms → transition: transform 300ms
- animation-duration: 1800ms → animation-duration: 900ms (or remove)
- transition-duration: 700ms → transition-duration: 300ms

SPECIFIC LINES:
- Line 350: 260ms → 150ms
- Line 641: 200ms → 100ms
- Line 789: 300ms → 150ms
- Line 791: 300ms → 150ms
- Line 1238: 300ms → 150ms
- Line 1473: 300ms → 150ms

UPDATE easing:
- var(--transition-standard) → ease-out
```

### Task 12: Remove Decorative Animations
```prompt
Remove or disable all decorative animations (waveform, breathing, pulse).

FILE TO UPDATE: assets/css/styles.css

COMMENT OUT OR REMOVE:
- Lines 215-232: .waveform animation
- Lines 229-232: .waveform.dynamic states
- Lines 1536-1562: @keyframes waveform-neural
- Lines 1528-1531: @keyframes pulse

SET TO DISPLAY NONE:
.waveform { display: none; }

OR if keeping waveform for demo purposes, make it static:
.waveform .bar {
  animation: none;
  opacity: 0.3;
  transform: scaleY(0.5);
}
```

### Task 13: Update Navigation Styling
```prompt
Simplify navigation with solid background and sharp underlines.

FILE TO UPDATE: assets/css/styles.css (lines 158-170, 854-857)

CHANGES:
.site-header {
  position: sticky;
  top: 0;
  backdrop-filter: none; /* Remove blur */
  background: var(--color-primary-bg); /* Solid */
  border-bottom: 1px solid rgba(0,0,0,0.12);
  z-index: 50;
  transition: background-color 150ms ease-out; /* Faster */
}

.nav__list a::after {
  content: "";
  position: absolute;
  left: 0; /* Changed from 50% */
  bottom: -2px;
  width: 0;
  height: 2px;
  background: #0071E3; /* Solid blue, no gradient */
  border-radius: 0; /* Remove */
  transform: none; /* Remove translateX */
  transition: width 150ms ease-out; /* Faster */
}

.nav__list a:hover::after,
.nav__list a:focus-visible::after {
  width: 100%; /* Full width, not 60% */
}

.nav__list a.active::after {
  width: 100%; /* Full width, not 70% */
  background: #0071E3;
}
```

### Task 14: Update Video/Demo Styling
```prompt
Sharpen video wrapper with minimal shadows and sharp corners.

FILE TO UPDATE: assets/css/styles.css (lines 560-663)

CHANGES:
.video-wrapper {
  position: relative;
  border-radius: 8px; /* Reduced from 20px */
  overflow: hidden;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  aspect-ratio: 16 / 10;
  height: auto;
  min-height: clamp(360px, 40vw, 620px);
  max-height: 620px;
  border: 1px solid rgba(0,0,0,0.15); /* Stronger */
  box-shadow: 0 2px 8px rgba(0,0,0,0.12); /* Simplified */
  background: #FAFAFA; /* Subtle bg */
}

.video-wrapper:hover {
  transform: none; /* No lift */
  box-shadow: 0 4px 16px rgba(0,0,0,0.15);
  border-color: #0071E3;
  transition: all 150ms ease-out;
}

REMOVE:
- Lines 577-584: Complex multi-layer shadows
- Lines 655-663: Complex hover state
- Lines 666-673: Focus state (keep outline only)

SLIDESHOW CONTROLS:
.slideshow-control {
  width: 36px; /* Reduced from 44px */
  height: 36px;
  border-radius: 6px; /* Sharp instead of 50% circle */
  border: 1px solid rgba(0,0,0,0.15);
  background: #FFFFFF;
  /* ... rest same ... */
}
```

### Task 15: Update Screenshot Gallery
```prompt
Simplify screenshot cards with minimal styling and sharp corners.

FILE TO UPDATE: assets/css/styles.css (lines 551-556, 866-870, 1457-1531)

CHANGES:
.screenshot-card picture {
  display: block;
  border-radius: 8px; /* Reduced from 14px */
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1); /* Simplified */
  background: var(--color-content-bg);
}

.screenshot-card img {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 5/4;
  object-fit: cover;
  transform: none; /* Remove scale */
  transition: none; /* Remove hover scale */
  filter: none; /* Remove saturate */
}

.screenshot-card:hover img {
  transform: none; /* No zoom */
}

REMOVE:
- Lines 866-870: Complex hover transforms and filters
- Lines 1492-1507: ::before gradient overlay
- Lines 1517-1526: figcaption::before pulse animation
```

### Task 16: Simplify Policy/Privacy Section
```prompt
Flatten policy accordion to match FAQ styling.

FILE TO UPDATE: assets/css/styles.css (lines 406-522)

CHANGES:
Apply same minimal, list-based styling as FAQ:

.policy-accordion {
  margin: var(--spacing-xl) 0;
}

.policy-item {
  border-bottom: 1px solid rgba(0,0,0,0.12);
  border-radius: 0; /* Remove */
  background: transparent;
}

.policy-toggle {
  width: 100%;
  padding: 20px 0; /* Reduced */
  background: transparent;
  border: none;
  color: var(--color-text-primary);
  font-size: 1.125rem;
  font-weight: 600;
  text-align: left;
  cursor: pointer;
  position: relative;
  transition: color 150ms ease;
  font-family: inherit;
}

.policy-toggle::after {
  content: "▼";
  font-size: 12px; /* Smaller */
  transition: transform 150ms ease-out;
  color: rgba(0,0,0,0.4);
}

REMOVE:
- Lines 513-521: Special li::before checkmark styling
- Lines 504-511: Hover background effects
```

### Task 17: Update Savings Card
```prompt
Flatten savings card with minimal styling.

FILE TO UPDATE: assets/css/styles.css (lines 1-36)

REPLACE entire .savings-card:
.savings-card {
  width: min(calc(100% - 30px), max-content);
  margin: clamp(-46px, -7vw, -28px) auto 0;
  background: #FAFAFA; /* Subtle gray */
  border-radius: 8px; /* Reduced from 18px */
  box-shadow: 0 1px 3px rgba(0,0,0,0.08); /* Minimal */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: clamp(14px, 3vw, 18px) 15px; /* Reduced */
  position: relative;
  z-index: 3;
  border: 1px solid rgba(0,0,0,0.08);
}

.savings-card-headline {
  font-size: clamp(0.8rem, 1.6vw, 0.95rem);
  color: #0A0A0A; /* Black instead of green */
  font-weight: 600;
  margin-bottom: 4px;
}

.savings-card-breakdown {
  font-size: clamp(0.75rem, 1.4vw, 0.875rem);
  color: rgba(0,0,0,0.6);
}

.savings-card-highlight {
  color: #EF4444; /* Red for competitor price */
  font-weight: 600;
}

DARK MODE:
@media (prefers-color-scheme: dark) {
  .savings-card {
    background: #1A1A1A;
    border-color: rgba(255,255,255,0.15);
  }
  .savings-card-headline {
    color: #FAFAFA;
  }
  .savings-card-highlight {
    color: #EF4444;
  }
}
```

### Task 18: Update Guarantee Section Cards
```prompt
Flatten guarantee cards to match minimal card aesthetic.

FILE TO UPDATE: assets/css/styles.css (lines 1206-1309)

CHANGES:
.guarantee-card {
  background: #FFFFFF;
  border: 1px solid rgba(0,0,0,0.12);
  border-radius: 8px; /* Reduced from var(--radius-medium) */
  padding: 24px; /* Fixed instead of var */
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
  transition: border-color 150ms ease-out;
}

.guarantee-card:hover {
  transform: none; /* Remove lift */
  border-color: #0071E3;
  box-shadow: 0 2px 8px rgba(0,0,0,0.12);
}

/* Remove gradient overlay */
.promise-card::before {
  display: none;
}

/* Simplify icon */
.card-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px; /* Reduced from 48px */
  height: 40px;
  border-radius: 8px; /* Sharp instead of 12px */
  background: #0071E3; /* Solid instead of gradient */
  margin-bottom: var(--spacing-md);
}

.card-icon i {
  font-size: 20px; /* Reduced from 24px */
  color: white;
}
```

### Task 19: Remove ESL Section Special Styling
```prompt
Simplify ESL section to match overall minimal aesthetic.

FILE TO UPDATE: assets/css/styles.css (lines 1730-1839)

CHANGES:
.esl-content {
  padding: 1.5rem;
  max-width: 1000px;
  margin: 1rem auto;
  /* Keep basic structure */
}

.example-card {
  flex: 1;
  min-width: 280px;
  padding: 1rem;
  background: #FAFAFA; /* Simplified */
  border-radius: 8px; /* Reduced from 20px */
  border: 1px solid rgba(0,0,0,0.12); /* Standard instead of 2px colored */
}

.language-badge {
  display: inline-block;
  padding: 4px 12px; /* Reduced */
  background: #0071E3; /* Blue instead of var */
  color: #FFFFFF;
  border-radius: 6px; /* Sharp instead of 20px */
  font-weight: 600;
  font-size: 12px; /* Reduced */
}

.spoken-text, .english-text {
  padding: 0.5rem 0.75rem;
  background: #FFFFFF; /* Pure white */
  border-radius: 6px; /* Reduced from 12px */
  border: 1px solid rgba(0,0,0,0.08); /* Add border */
}
```

### Task 20: Update Sticky Buy Bar
```prompt
Sharpen sticky mobile buy bar for premium feel.

FILE TO UPDATE: assets/css/styles.css (lines 1694-1728)

CHANGES:
.sticky-buy {
  position: fixed;
  left: 0;
  right: 0;
  bottom: -120px;
  display: flex;
  justify-content: center;
  gap: 12px;
  align-items: center;
  background: var(--color-primary-bg); /* Solid, no glass */
  backdrop-filter: none; /* Remove blur */
  border-top: 1px solid rgba(0,0,0,0.12);
  padding: 12px 16px;
  z-index: 60;
  transition: bottom 150ms ease-out; /* Faster */
  box-shadow: 0 -2px 8px rgba(0,0,0,0.08); /* Top shadow */
}

.sticky-buy__cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px; /* Adjusted */
  border-radius: 6px; /* Sharp instead of 14px */
  background: #0A0A0A; /* Black */
  color: #FFFFFF;
  font-weight: 600; /* Reduced from 650 */
  font-size: 0.95rem;
  text-decoration: none;
  transition: background 150ms ease-out;
}

.sticky-buy__cta:hover {
  background: #0071E3;
}
```

### Task 21: Final Cleanup - Remove Unused Styles
```prompt
Remove or comment out all unused decorative CSS that no longer applies to premium design.

FILE TO UPDATE: assets/css/styles.css

REMOVE OR COMMENT OUT:
1. Lines 213-233: Waveform animations (unless demo requires)
2. Lines 356-397: All .tint-* color-coding classes
3. Lines 1311-1320: Roadmap special styling (if section is hidden)
4. Lines 1536-1562: Decorative keyframe animations
5. Lines 1564-1597: Lightbox (unless using for screenshots)
6. Lines 1613-1650: Neural Engine / Metal badges decorative styling

VERIFY REMOVAL:
- No references to removed classes in index.html
- Dark mode still works correctly
- Mobile responsive still functions
```

### Task 22: Test & Verify Redesign
```prompt
Test the complete redesign across browsers and devices to ensure premium aesthetic is achieved.

TESTING CHECKLIST:

VISUAL VERIFICATION:
□ All colors are cool/neutral (no warm beiges/bronzes)
□ All corners are sharp (8px or less radius)
□ All cards are flat with minimal shadows
□ All text is tighter (reduced line-height, negative letter-spacing on headings)
□ All animations are fast (150-200ms)
□ All buttons are high-contrast with sharp corners
□ Pricing section is minimal and clean
□ FAQ is list-based with hairlines
□ No decorative gradients or overlays visible

FUNCTIONAL VERIFICATION:
□ Navigation works correctly
□ Mobile menu opens/closes smoothly
□ FAQ accordion expands/collapses
□ Slideshow controls work
□ All links are clickable
□ Hover states work on all interactive elements
□ Focus states are visible for accessibility

RESPONSIVE VERIFICATION:
□ Mobile (320px-768px): All content readable, touch targets adequate
□ Tablet (768px-1024px): Layout adapts appropriately
□ Desktop (1024px+): Full layout displays correctly
□ 4K displays: Content doesn't stretch excessively

DARK MODE VERIFICATION:
□ Pure black background (#0A0A0A)
□ Blue accent (#0A84FF) displays correctly
□ All text is readable
□ Borders are visible
□ Cards have proper contrast

BROWSER TESTING:
□ Safari (macOS, iOS)
□ Chrome (macOS, Windows)
□ Firefox (macOS, Windows)
□ Edge (Windows)

PERFORMANCE:
□ Page loads in <3 seconds
□ Animations run at 60fps
□ No layout shift during load
□ Images load progressively
```

---

## Expected Outcomes

After completing all tasks:

1. **Visual Transformation**: Website will look sleek, modern, minimal, and premium - similar to Apple Pro product pages
2. **Color Shift**: From warm beiges/bronzes → cool grays/pure whites with premium blue accent
3. **Typography**: Tighter, sharper, more confident text hierarchy
4. **Spacing**: Precise 8px grid system with reduced padding throughout
5. **Components**: Flat cards with sharp corners, high-contrast buttons, minimal shadows
6. **Animations**: Fast, purposeful interactions (150-200ms) with no decorative motion
7. **Overall Feel**: Professional, aspirational, confidence-inspiring - "This is a serious tool for serious work"

The redesign maintains:
- All HTML structure and semantic markup
- Complete accessibility (ARIA, keyboard nav, focus management)
- Full mobile responsiveness
- Dark mode support (with cool tones)
- All JavaScript functionality
- Performance optimizations

But transforms the aesthetic from:
- "Friendly and approachable" → "Professional and premium"
- "Warm and cozy" → "Sleek and precise"
- "Organic and flowing" → "Architectural and structured"
- "Accessible to everyone" → "Aspirational for professionals"
