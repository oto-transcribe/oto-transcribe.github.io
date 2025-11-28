# Specification: Brutalist Precision Redesign for OTO Website
> Transform OTO into an uncompromising, ultra-minimal brutalist interface that signals technical excellence

## High-Level Objective

Redesign the OTO website using brutalist design principles - zero decoration, pure function, maximum contrast, perfect alignment. Strip away all warmth and friendliness to create a tool that speaks to power users, developers, and people who value technical precision over marketing polish. The aesthetic should scream "built by engineers who care about craft."

**Target Aesthetic**: Think Linear, Arc Browser, Raycast - tools that don't apologize for being technical.

## Mid-Level Objective

1. **Monochrome System**: Establish pure black/white color system with single neon accent (electric green #00FF00)
2. **Zero-Radius Architecture**: Remove ALL border radius - every element is a perfect rectangle
3. **Grid Obsession**: Implement strict 4px grid system with visible grid influence
4. **Typography Dominance**: MASSIVE type scale, negative letter spacing, hard hierarchy
5. **Instant Interactions**: Remove all animations or make them <50ms (instant state changes)
6. **Minimal Decoration**: No shadows (or 1px hard shadows only), no gradients, no tints
7. **Hard Borders Everywhere**: 1px solid black borders define all sections and components

## Implementation Notes

### Design Philosophy Shift
- **FROM**: "Warm, approachable, friendly"
- **TO**: "Uncompromising, technical, precise"
- **Personality**: "We don't need to convince you. Either you get it or you don't."

### Core Brutalist Principles
1. **Truth to materials**: HTML/CSS shows through, no faking depth
2. **Function over form**: Every element has purpose, zero decoration
3. **Honesty**: No hiding the grid, no smoothing the edges
4. **Legibility through contrast**: Maximum readability via stark B&W
5. **Anti-commercial**: Feels like documentation, not marketing

### Key Technical Constraints
- Maintain HTML structure (semantic markup)
- Preserve accessibility (ARIA, keyboard nav, screen readers)
- Keep responsive breakpoints
- Maintain JavaScript functionality
- Support dark mode (inverted: white background, black text)

### Color System Rules

**Light Mode (Default)**
```
Background:        #FFFFFF (pure white)
Surface:           #FAFAFA (barely-there gray for subtle hierarchy)
Text Primary:      #000000 (pure black)
Text Secondary:    #666666 (medium gray)
Borders:           #000000 (black lines everywhere)
Accent:            #00FF00 (neon green - use sparingly)
Error:             #FF0000 (pure red)
Success:           #00FF00 (matches accent)
Code/Mono:         #0F0F0F (near-black background for code blocks)
```

**Dark Mode (Inverted)**
```
Background:        #000000 (pure black)
Surface:           #0A0A0A (barely-there for hierarchy)
Text Primary:      #FFFFFF (pure white)
Text Secondary:    #999999 (light gray)
Borders:           #FFFFFF (white lines)
Accent:            #00FF00 (neon green stays same)
Error:             #FF0000 (pure red)
Success:           #00FF00 (matches accent)
Code/Mono:         #F5F5F5 (light background for code)
```

### Typography Transformation

**Font Stack**
```
Primary: "Inter", -apple-system, BlinkMacSystemFont, sans-serif
Mono:    "Berkeley Mono", "SF Mono", "Fira Code", monospace
```

**Font Sizes (Massive Scale)**
```
Hero:        clamp(3rem, 10vw, 8rem)     /* 48-128px */
Display:     clamp(2.5rem, 8vw, 6rem)    /* 40-96px */
H1:          clamp(2rem, 6vw, 4.5rem)    /* 32-72px */
H2:          clamp(1.5rem, 4vw, 3rem)    /* 24-48px */
H3:          1.25rem                      /* 20px */
Body:        1rem                         /* 16px */
Small:       0.875rem                     /* 14px */
Micro:       0.75rem                      /* 12px */
```

**Font Weights (Strict Binary)**
```
Regular:     400 (body text, labels)
Bold:        700 (headings, emphasis)
NO 100, 300, 500, 600 - only 400 and 700
```

**Letter Spacing (Tight)**
```
Hero/Display:    -0.04em  (very tight)
Headings:        -0.02em  (tight)
Body:            0        (normal)
Uppercase:       0.1em    (spaced caps for labels)
```

**Line Heights (Compressed)**
```
Headings:   1.0  (super tight)
Body:       1.3  (tighter than normal 1.5)
Small:      1.4  (readable but compact)
```

### Spacing System (4px Grid)

**Base Unit**: 4px (all spacing is multiple of 4)

```
--space-1:   4px
--space-2:   8px
--space-3:   12px
--space-4:   16px
--space-5:   20px
--space-6:   24px
--space-8:   32px
--space-10:  40px
--space-12:  48px
--space-16:  64px
--space-20:  80px
--space-24:  96px
--space-32:  128px
```

**Application**
- Padding: Only use multiples of 4px
- Margins: Only use multiples of 4px
- Gaps: Only use multiples of 4px
- All elements snap to 4px grid

### Border System

**All borders are 1px solid black (light mode) or white (dark mode)**

```
Standard:      1px solid #000000
Hover:         2px solid #000000 (thicker on interaction)
Focus:         2px solid #00FF00 (accent for focus states)
Dividers:      1px solid #000000
```

**No Border Radius**
```
ALL border-radius: 0 !important
```

### Shadow System

**Rule: No shadows OR minimal hard shadows only**

```
Option 1 (Preferred): No shadows at all
  box-shadow: none;

Option 2 (If needed): Hard offset shadow
  box-shadow: 2px 2px 0 0 #000000;  /* Hard right/down */

Hover shadow:
  box-shadow: 4px 4px 0 0 #000000;  /* Doubles on hover */
```

### Animation System

**Rule: Instant or near-instant (≤50ms)**

```
Fast:       50ms linear
Instant:    0ms (no transition)
```

**Allowed Animations**
- Border color change (50ms)
- Background color change (50ms)
- Opacity fade (50ms)

**Forbidden**
- Transform (no lifting, sliding, scaling)
- Complex easing (only linear)
- Long durations (>50ms)
- Decorative animations (pulse, wave, etc.)

---

## Context

### Beginning Context
Files exist:
- index.html (799 lines)
- assets/css/styles.css (1879 lines)
- assets/js/main.js

### Ending Context
Files will be modified:
- assets/css/styles.css - Complete brutalist redesign
- May need minor HTML class adjustments

Files to create:
- Plans/brutalist-redesign-spec.md (this file)

---

## Low-Level Tasks

### Task 1: Establish Brutalist Color System
```prompt
Replace entire color system with pure black/white/neon green palette.

FILE TO UPDATE: assets/css/styles.css (lines 40-140)

REPLACE all color variables:

:root {
  /* Pure monochrome */
  --color-bg:               #FFFFFF;
  --color-surface:          #FAFAFA;
  --color-text-primary:     #000000;
  --color-text-secondary:   #666666;
  --color-border:           #000000;
  --color-accent:           #00FF00;
  --color-error:            #FF0000;
  --color-success:          #00FF00;

  /* Typography */
  --font-primary: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: "Berkeley Mono", "SF Mono", "Fira Code", monospace;

  /* Spacing (4px grid) */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;
  --space-24: 96px;

  /* Borders */
  --border-width: 1px;
  --border-color: var(--color-border);
  --border-style: solid;

  /* Radius (ZERO) */
  --radius: 0;

  /* Shadows (NONE or HARD) */
  --shadow-none: none;
  --shadow-hard: 2px 2px 0 0 var(--color-border);

  /* Animation (INSTANT) */
  --transition-instant: 0ms;
  --transition-fast: 50ms linear;
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-bg:               #000000;
    --color-surface:          #0A0A0A;
    --color-text-primary:     #FFFFFF;
    --color-text-secondary:   #999999;
    --color-border:           #FFFFFF;
    /* Accent stays same */
  }
}

REMOVE all warm color variables (beige, bronze, coral, etc.)
```

### Task 2: Zero All Border Radius
```prompt
Remove ALL border radius throughout the entire stylesheet.

FILE TO UPDATE: assets/css/styles.css

GLOBAL RULE (add at top after reset):
* {
  border-radius: 0 !important;
}

FIND AND REPLACE:
- border-radius: 20px  →  border-radius: 0
- border-radius: 18px  →  border-radius: 0
- border-radius: 16px  →  border-radius: 0
- border-radius: 12px  →  border-radius: 0
- border-radius: 50%   →  border-radius: 0
- border-radius: 999px →  border-radius: 0
- border-radius: var(--radius-*) → border-radius: 0

DELETE all radius variables from :root
```

### Task 3: Implement Brutalist Typography
```prompt
Establish massive, tight typography system with binary font weights.

FILE TO UPDATE: assets/css/styles.css (lines 144-145 and all typography)

UPDATE body:
body {
  margin: 0;
  background: var(--color-bg);
  color: var(--color-text-primary);
  font-family: var(--font-primary);
  font-size: 16px;
  line-height: 1.3;
  font-weight: 400;
  letter-spacing: 0;
  -webkit-font-smoothing: antialiased;
}

UPDATE heading scales:
h1, h2, h3, h4, h5, h6 {
  font-weight: 700;
  line-height: 1.0;
  margin: 0;
}

h1 { font-size: clamp(2rem, 6vw, 4.5rem); letter-spacing: -0.04em; }
h2 { font-size: clamp(1.5rem, 4vw, 3rem); letter-spacing: -0.02em; }
h3 { font-size: 1.25rem; letter-spacing: -0.01em; }

.hero__title {
  font-size: clamp(3rem, 10vw, 8rem);
  font-weight: 700;
  line-height: 1.0;
  letter-spacing: -0.04em;
  margin: 0 0 var(--space-4);
  text-transform: uppercase; /* Brutalist caps */
}

UPDATE all font-weight references:
- font-weight: 100 → 400
- font-weight: 300 → 400
- font-weight: 500 → 700
- font-weight: 600 → 700
- font-weight: 650 → 700

Only use: 400 (regular) or 700 (bold)
```

### Task 4: Remove All Shadows
```prompt
Remove or replace all shadows with hard offset shadows.

FILE TO UPDATE: assets/css/styles.css

OPTION 1 (Preferred): Remove all shadows
FIND: box-shadow:
REPLACE: box-shadow: none;

OPTION 2 (If depth needed): Hard shadows only
.card, .organic-card, .feature-card {
  box-shadow: 2px 2px 0 0 var(--color-border);
}

.card:hover {
  box-shadow: 4px 4px 0 0 var(--color-border);
}

REMOVE all soft shadows:
- Delete all rgba shadow definitions
- Delete all multi-layer shadows
- Delete all blur values (>0)
```

### Task 5: Implement Hard Border System
```prompt
Add 1px solid black borders to all major elements.

FILE TO UPDATE: assets/css/styles.css

ADD borders to:

/* Sections */
.section {
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  padding: var(--space-16) var(--space-6);
}

/* Cards */
.organic-card,
.feature-card,
.pricing-card {
  border: 1px solid var(--color-border);
  background: var(--color-bg);
  padding: var(--space-6);
}

/* Buttons */
.warm-button {
  border: 2px solid var(--color-border);
  background: var(--color-bg);
  color: var(--color-text-primary);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: var(--space-3) var(--space-6);
  transition: var(--transition-fast);
}

.warm-button.primary {
  background: var(--color-text-primary);
  color: var(--color-bg);
  border-color: var(--color-text-primary);
}

.warm-button:hover {
  border-width: 3px; /* Thicker on hover */
  padding: calc(var(--space-3) - 1px) calc(var(--space-6) - 1px); /* Compensate */
}

/* Navigation */
.site-header {
  border-bottom: 1px solid var(--color-border);
  background: var(--color-bg);
}

/* FAQ Items */
.faq-item {
  border-bottom: 1px solid var(--color-border);
}

/* Input Fields */
input, textarea {
  border: 1px solid var(--color-border);
  background: var(--color-bg);
  color: var(--color-text-primary);
}

input:focus, textarea:focus {
  border-color: var(--color-accent);
  border-width: 2px;
  outline: none;
}
```

### Task 6: Remove All Background Gradients
```prompt
Remove every gradient in the stylesheet.

FILE TO UPDATE: assets/css/styles.css

REMOVE OR REPLACE:
1. body::before radial gradients (lines 146-149)
   → DELETE entire body::before block

2. .section--alt gradient backgrounds
   → background: var(--color-surface); (solid)

3. .pricing-box gradient
   → background: var(--color-bg);
   → border: 1px solid var(--color-border);

4. All linear-gradient() and radial-gradient()
   → Replace with solid colors

5. .accent-gradient class
   → color: var(--color-text-primary); (no gradient text)

FIND: linear-gradient
FIND: radial-gradient
REPLACE all with solid colors or DELETE
```

### Task 7: Instant Animation System
```prompt
Remove all animations or make them instant (≤50ms).

FILE TO UPDATE: assets/css/styles.css

GLOBAL ANIMATION OVERRIDE:
* {
  transition-duration: 50ms !important;
  transition-timing-function: linear !important;
}

UPDATE specific transitions:
- transition: all 300ms → transition: all 50ms linear
- transition: opacity 600ms → transition: opacity 50ms linear
- animation-duration: 1800ms → DELETE animation

ALLOWED transitions:
- border-color: 50ms linear
- background-color: 50ms linear
- opacity: 50ms linear
- color: 50ms linear

FORBIDDEN transitions:
- transform: * (no movement, no scale)
- box-shadow: * (shadows don't animate)
- All durations >50ms

REMOVE entirely:
- @keyframes wave
- @keyframes pulse
- @keyframes breathe
- .reveal animations (make instant or remove)
```

### Task 8: Brutalist Hero Section
```prompt
Redesign hero as stark, typography-first statement.

FILE TO UPDATE: assets/css/styles.css (lines 179-212)

REPLACE hero styling:

.hero {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-8);
  max-width: 100%;
  margin: 0;
  padding: var(--space-16) var(--space-6);
  border-bottom: 1px solid var(--color-border);
  background: var(--color-bg);
  text-align: left; /* Left-aligned for brutalism */
}

.hero__content {
  max-width: 1200px;
  margin: 0;
}

.hero__title {
  font-size: clamp(3rem, 10vw, 8rem);
  font-weight: 700;
  line-height: 1.0;
  letter-spacing: -0.04em;
  margin: 0 0 var(--space-4);
  text-transform: uppercase;
  color: var(--color-text-primary);
}

.hero__lead {
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.3;
  max-width: 600px;
  margin: 0 0 var(--space-8);
  color: var(--color-text-secondary);
}

/* Hide decorative elements */
.hero__transformation,
.trust-line {
  display: none;
}

.hero__actions {
  display: flex;
  gap: var(--space-4);
  margin: 0;
}

/* Remove hero visual on mobile, keep on desktop */
.hero__visual {
  border: 1px solid var(--color-border);
  background: var(--color-surface);
}

@media (min-width: 960px) {
  .hero {
    grid-template-columns: 1.2fr 1fr;
    gap: var(--space-12);
  }
}
```

### Task 9: Brutalist Cards
```prompt
Transform all cards to bordered rectangles with zero decoration.

FILE TO UPDATE: assets/css/styles.css

REPLACE all card styles:

.organic-card,
.feature-card,
.value-card,
.screenshot-card,
.guarantee-card {
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  padding: var(--space-6);
  transition: border-color 50ms linear;
}

.organic-card:hover,
.feature-card:hover {
  border-color: var(--color-accent);
}

/* Remove all pseudo-elements */
.organic-card::before,
.organic-card::after,
.feature-card::before,
.feature-card::after {
  display: none;
}

/* Flat feature cards */
.feature-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.feature-card__icon {
  display: inline-flex;
  width: 24px;
  height: 24px;
  color: var(--color-text-primary);
  background: none;
}

.feature-card__header {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  border-bottom: 1px solid var(--color-border);
  padding-bottom: var(--space-2);
  margin-bottom: var(--space-2);
}

.feature-card h3 {
  font-size: 1rem;
  font-weight: 700;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.feature-card__desc {
  font-size: 0.875rem;
  line-height: 1.4;
  color: var(--color-text-secondary);
  margin: 0;
}

/* Remove all tint classes */
.tint-accuracy,
.tint-privacy,
.tint-speed,
.tint-languages,
.tint-dictionary,
.tint-hotkeys,
.tint-replacements,
.tint-files,
.tint-compat {
  /* All same styling, no color differentiation */
}
```

### Task 10: Brutalist Buttons
```prompt
Create stark, high-contrast, uppercase buttons.

FILE TO UPDATE: assets/css/styles.css (lines 700-709)

REPLACE all button styles:

.warm-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-6);
  border: 2px solid var(--color-border);
  background: var(--color-bg);
  color: var(--color-text-primary);
  font-family: var(--font-primary);
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  transition: border-color 50ms linear, background-color 50ms linear;
}

.warm-button.primary {
  background: var(--color-text-primary);
  color: var(--color-bg);
  border-color: var(--color-text-primary);
}

.warm-button.secondary {
  background: var(--color-bg);
  color: var(--color-text-primary);
  border-color: var(--color-border);
}

.warm-button:hover {
  border-color: var(--color-accent);
}

.warm-button.primary:hover {
  background: var(--color-accent);
  border-color: var(--color-accent);
  color: var(--color-text-primary);
}

.warm-button:active {
  transform: none; /* No movement */
}

.warm-button:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}

/* Remove large variant */
.warm-button.large {
  padding: var(--space-4) var(--space-8);
  font-size: 1rem;
}
```

### Task 11: Hard-Edged Navigation
```prompt
Create stark, bordered navigation with no blur effects.

FILE TO UPDATE: assets/css/styles.css (lines 158-170, 854-857)

REPLACE navigation styles:

.site-header {
  position: sticky;
  top: 0;
  background: var(--color-bg);
  border-bottom: 1px solid var(--color-border);
  z-index: 50;
  backdrop-filter: none; /* Remove blur */
}

.nav {
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-4) var(--space-6);
}

.nav__brand .logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 0;
  color: var(--color-text-primary);
  text-transform: uppercase;
}

.nav__list {
  list-style: none;
  display: flex;
  gap: var(--space-6);
  margin: 0;
  padding: 0;
}

.nav__list a {
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: var(--space-1) 0;
  color: var(--color-text-primary);
  border-bottom: 2px solid transparent;
  transition: border-color 50ms linear;
}

.nav__list a:hover,
.nav__list a:focus-visible {
  border-bottom-color: var(--color-accent);
}

.nav__list a.active {
  border-bottom-color: var(--color-text-primary);
}

/* Remove animated underline gradient */
.nav__list a::after {
  display: none;
}
```

### Task 12: Brutalist Pricing Section
```prompt
Create stark, table-like pricing with hard borders.

FILE TO UPDATE: assets/css/styles.css (lines 892-1168)

REPLACE entire pricing section:

.pricing-box {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-8);
  padding: var(--space-12) var(--space-6);
  margin: 0 auto;
  max-width: 1200px;
  border: 1px solid var(--color-border);
  background: var(--color-bg);
}

@media (min-width: 960px) {
  .pricing-box {
    grid-template-columns: 1fr 1.5fr 1fr;
    align-items: start;
  }
}

.pricing-benefits {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: var(--space-2);
  font-size: 0.875rem;
}

.pricing-benefits li {
  padding: var(--space-2) 0;
  border-bottom: 1px solid var(--color-border);
  font-weight: 400;
}

.pricing-benefits li:last-child {
  border-bottom: none;
}

.pricing-benefits li::before {
  content: "→ ";
  color: var(--color-accent);
  font-weight: 700;
}

.pricing-card {
  position: relative;
  background: var(--color-bg);
  border: 2px solid var(--color-border);
  padding: var(--space-8);
  text-align: center;
}

/* Remove ribbon entirely */
.pricing-card__ribbon,
.pricing-card::after {
  display: none;
}

/* Minimal badge */
.pricing-card__badge {
  position: absolute;
  top: calc(var(--space-2) * -1);
  left: var(--space-4);
  background: var(--color-accent);
  color: var(--color-text-primary);
  padding: var(--space-1) var(--space-3);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border: 2px solid var(--color-text-primary);
}

.pricing-card__label {
  margin: 0 0 var(--space-2);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 700;
}

.pricing-card__price {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-3);
  margin: var(--space-4) 0;
}

.pricing-card__price-original {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text-secondary);
  text-decoration: line-through;
  text-decoration-thickness: 2px;
}

.pricing-card__price-current {
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 700;
  line-height: 1.0;
  letter-spacing: -0.02em;
  color: var(--color-text-primary);
}

.pricing-card__actions {
  margin: var(--space-6) 0 var(--space-4);
}

.pricing-card__note {
  font-size: 0.75rem;
  color: var(--color-text-secondary);
  margin: 0;
}

/* Flat savings card */
.savings-card {
  border: 1px solid var(--color-border);
  background: var(--color-bg);
  padding: var(--space-4);
  margin: var(--space-6) auto 0;
  text-align: center;
}

.savings-card-headline {
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: var(--space-2);
}

.savings-card-breakdown {
  font-size: 0.75rem;
  color: var(--color-text-secondary);
}

.savings-card-highlight {
  color: var(--color-error);
  font-weight: 700;
}
```

### Task 13: List-Based FAQ
```prompt
Transform FAQ into brutalist list with hard dividers.

FILE TO UPDATE: assets/css/styles.css (lines 787-794)

REPLACE FAQ styling:

.faq {
  max-width: 1000px;
  margin: 0 auto;
  border: 1px solid var(--color-border);
  background: var(--color-bg);
}

.faq-item {
  border-bottom: 1px solid var(--color-border);
  background: transparent;
}

.faq-item:last-child {
  border-bottom: none;
}

.faq-item:hover {
  background: var(--color-surface);
}

.faq-toggle {
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: var(--space-4);
  font-family: var(--font-primary);
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-text-primary);
  transition: color 50ms linear;
}

.faq-toggle:hover {
  color: var(--color-accent);
}

.faq-toggle::after {
  content: "+";
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  transition: transform 50ms linear;
}

.faq-toggle[aria-expanded="true"]::after {
  content: "−"; /* Minus sign */
  transform: none;
}

.faq-panel {
  padding: 0 var(--space-4) var(--space-4);
  font-size: 0.875rem;
  line-height: 1.4;
  color: var(--color-text-secondary);
  border-top: 1px solid var(--color-border);
  transition: none;
}

.faq-panel p {
  margin: var(--space-3) 0 0;
}

.faq-panel[hidden] {
  display: none;
}
```

### Task 14: Hard-Edged Video Wrapper
```prompt
Make video/demo container stark and rectangular.

FILE TO UPDATE: assets/css/styles.css (lines 560-663)

REPLACE video wrapper:

.video-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  aspect-ratio: 16 / 10;
  border: 2px solid var(--color-border);
  background: var(--color-surface);
  transition: border-color 50ms linear;
}

.video-wrapper:hover {
  border-color: var(--color-accent);
}

.video-wrapper:focus-within {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}

.demo-slideshow {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  background: var(--color-surface);
}

.demo-slideshow .slide-layer {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  opacity: 0;
  transition: opacity 50ms linear;
}

.demo-slideshow .slide-layer.visible {
  opacity: 1;
}

/* Hard-edged controls */
.slideshow-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 3;
  width: 40px;
  height: 40px;
  border: 2px solid var(--color-border);
  background: var(--color-bg);
  color: var(--color-text-primary);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  transition: border-color 50ms linear;
}

.slideshow-control:hover {
  border-color: var(--color-accent);
}

.slideshow-control.prev { left: var(--space-3); }
.slideshow-control.next { right: var(--space-3); }
```

### Task 15: Monospaced Code Blocks
```prompt
Style any code/technical elements with monospace font and dark backgrounds.

FILE TO UPDATE: assets/css/styles.css

ADD new styles:

code,
pre,
.mono,
.code-block {
  font-family: var(--font-mono);
  font-size: 0.875rem;
  letter-spacing: 0;
}

code {
  background: #0F0F0F;
  color: var(--color-accent);
  padding: 2px 6px;
  border: 1px solid var(--color-border);
}

pre {
  background: #0F0F0F;
  color: #FFFFFF;
  padding: var(--space-4);
  border: 1px solid var(--color-border);
  overflow-x: auto;
  line-height: 1.4;
}

/* Technical specs in mono */
.trust-line,
.micro {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

@media (prefers-color-scheme: dark) {
  code {
    background: #F5F5F5;
    color: var(--color-text-primary);
  }

  pre {
    background: #F5F5F5;
    color: #000000;
  }
}
```

### Task 16: Grid-Based Sections
```prompt
Make section layouts strict and grid-aligned.

FILE TO UPDATE: assets/css/styles.css (lines 173-176)

REPLACE section styling:

.section {
  max-width: 100%;
  margin: 0;
  padding: var(--space-16) var(--space-6);
  border-top: 1px solid var(--color-border);
  background: var(--color-bg);
}

.section--alt {
  background: var(--color-surface);
  border-top: 2px solid var(--color-border); /* Thicker */
  border-bottom: 2px solid var(--color-border);
}

.section__header {
  max-width: 1200px;
  margin: 0 auto var(--space-12);
  text-align: left; /* Left-aligned for brutalism */
}

.section__header h2 {
  font-size: clamp(2rem, 6vw, 4rem);
  font-weight: 700;
  line-height: 1.0;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  margin: 0 0 var(--space-4);
  border-bottom: 2px solid var(--color-border);
  padding-bottom: var(--space-2);
}

.section__lead {
  font-size: 1rem;
  font-weight: 400;
  color: var(--color-text-secondary);
  line-height: 1.3;
  max-width: 600px;
  margin: 0;
}

/* Grid-based feature layout */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-4);
  max-width: 1200px;
  margin: 0 auto;
}

.bottleneck-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: var(--space-6);
  max-width: 1200px;
  margin: 0 auto;
}
```

### Task 17: Brutalist Footer
```prompt
Create minimal, technical footer.

FILE TO UPDATE: assets/css/styles.css (lines 798-800)

REPLACE footer:

.site-footer {
  text-align: center;
  padding: var(--space-12) var(--space-6);
  border-top: 2px solid var(--color-border);
  background: var(--color-bg);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.site-footer p {
  margin: 0;
  color: var(--color-text-secondary);
}

/* Technical readout style */
.site-footer::before {
  content: "[ ";
  color: var(--color-border);
}

.site-footer::after {
  content: " ]";
  color: var(--color-border);
}
```

### Task 18: Remove Decorative Elements
```prompt
Remove all decorative pseudo-elements and overlays.

FILE TO UPDATE: assets/css/styles.css

DELETE or set to display:none:

1. body::before (gradient overlay) - DELETE
2. All .tint-*::before (color overlays) - DELETE
3. .organic-card::before (gradient) - DELETE
4. .promise-card::before (gradient) - DELETE
5. .screenshot-card picture::before - DELETE
6. .screenshot-card figcaption::before (pulse) - DELETE
7. .pricing-card::after (inner glow) - DELETE
8. All ::after decorative elements - DELETE

KEEP only functional ::after elements:
- .faq-toggle::after (expand indicator)
- .policy-toggle::after (expand indicator)
- .nav__list a::after (optional underline)
```

### Task 19: Stark Screenshot Gallery
```prompt
Make screenshot grid minimal with hard borders.

FILE TO UPDATE: assets/css/styles.css (lines 551-556, 1457-1531)

REPLACE gallery styling:

.screenshot-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-6);
  max-width: 1200px;
  margin: 0 auto;
}

.screenshot-card {
  border: 1px solid var(--color-border);
  background: var(--color-bg);
  padding: 0;
  cursor: pointer;
  transition: border-color 50ms linear;
}

.screenshot-card:hover {
  border-color: var(--color-accent);
}

.screenshot-card picture {
  display: block;
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
}

.screenshot-card img {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 5/4;
  object-fit: cover;
  transition: none;
}

.screenshot-card figcaption {
  padding: var(--space-3);
  font-size: 0.75rem;
  font-family: var(--font-mono);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-secondary);
  text-align: left;
}

/* Remove all hover effects */
.screenshot-card:hover img {
  transform: none;
}

/* Remove lazy loading effects */
.lazy-image {
  opacity: 1;
  filter: none;
  transition: none;
}
```

### Task 20: Technical Language List
```prompt
Style language list as technical grid.

FILE TO UPDATE: assets/css/styles.css (lines 1324-1431)

UPDATE language list:

.language-list-container {
  margin-top: var(--space-4);
  padding: var(--space-4);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
}

.language-search {
  margin-bottom: var(--space-4);
}

.language-search-input {
  width: 100%;
  padding: var(--space-2) var(--space-3);
  font-size: 0.875rem;
  font-family: var(--font-mono);
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  color: var(--color-text-primary);
  outline: none;
  transition: border-color 50ms linear;
}

.language-search-input:focus {
  border-color: var(--color-accent);
}

.language-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: var(--space-1);
  max-height: 400px;
  overflow-y: auto;
}

.language-item {
  padding: var(--space-2);
  font-size: 0.75rem;
  font-family: var(--font-mono);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border: 1px solid var(--color-border);
  background: var(--color-bg);
  transition: background-color 50ms linear;
  cursor: default;
}

.language-item:hover {
  background: var(--color-surface);
  border-color: var(--color-accent);
}
```

### Task 21: Minimal Guarantee Cards
```prompt
Flatten guarantee section to stark boxes.

FILE TO UPDATE: assets/css/styles.css (lines 1206-1309)

REPLACE guarantee styling:

.guarantee-layout {
  display: grid;
  gap: var(--space-8);
  max-width: 1200px;
  margin: 0 auto;
}

.guarantee-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-6);
}

.guarantee-card {
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  padding: var(--space-6);
  transition: border-color 50ms linear;
}

.guarantee-card:hover {
  border-color: var(--color-accent);
}

/* Remove gradient overlay */
.promise-card::before {
  display: none;
}

/* Minimal icon */
.card-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: 2px solid var(--color-border);
  background: var(--color-bg);
  margin-bottom: var(--space-4);
}

.card-icon i {
  font-size: 16px;
  color: var(--color-text-primary);
}

.card-header {
  margin: 0 0 var(--space-3);
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.card-body {
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.4;
  color: var(--color-text-secondary);
}

.guarantee-refund {
  background: var(--color-surface);
  border: 2px solid var(--color-border);
  padding: var(--space-6);
}
```

### Task 22: Test Brutalist Implementation
```prompt
Verify the brutalist redesign meets all principles.

TESTING CHECKLIST:

VISUAL VERIFICATION:
□ Zero border radius on ALL elements
□ Pure black/white/neon green colors only
□ Hard 1px borders on all major elements
□ No shadows or only hard offset shadows (2px 2px 0 0)
□ No gradients anywhere
□ Monospace fonts for technical elements
□ Massive typography scale (hero at 3-8rem)
□ Binary font weights (400 and 700 only)
□ Tight letter spacing on headings (-0.04em)
□ Compressed line heights (1.0 headings, 1.3 body)

ANIMATION VERIFICATION:
□ All transitions ≤50ms
□ No transform animations (lift, slide, scale)
□ Only linear easing
□ Instant state changes (border color, bg color)
□ No decorative animations (pulse, wave, breathe)

LAYOUT VERIFICATION:
□ 4px grid system (all spacing multiples of 4)
□ Hard borders between sections
□ Left-aligned content (not centered)
□ Grid-based layouts (not organic flow)
□ No visual hierarchy through color (only through size/weight)

BRUTALIST PRINCIPLES:
□ Function over form (every element has purpose)
□ Truth to materials (HTML/CSS visible)
□ Honesty (no hiding structure)
□ Maximum contrast (readable at all sizes)
□ Anti-commercial aesthetic (feels like docs, not marketing)

TYPOGRAPHY:
□ Uppercase headings with tight tracking
□ Massive hero type (3-8rem)
□ Monospace for technical/code elements
□ Only 400 and 700 weights used
□ Clear hierarchy through size only

FUNCTIONAL VERIFICATION:
□ All interactive elements still work
□ Navigation functional
□ FAQ accordion expands/collapses
□ Forms still usable
□ Links clickable
□ Focus states visible (accent color border)

DARK MODE VERIFICATION:
□ Colors invert properly (black bg, white text)
□ Borders change to white
□ Accent stays neon green
□ Contrast maintained

ACCESSIBILITY:
□ Focus states visible (2px accent outline)
□ Text contrast ratios >7:1 (black on white)
□ Keyboard navigation works
□ Screen reader compatibility maintained

RESPONSIVE:
□ Mobile: Borders and grid maintain on small screens
□ Tablet: Layout adapts without breaking
□ Desktop: Full brutalist aesthetic visible
□ Touch targets adequate (≥44px)

PERFORMANCE:
□ No complex animations impacting performance
□ Fast load times (instant transitions help)
□ No layout shift (hard borders define space)
```

---

## Expected Outcomes

After completing all tasks:

1. **Pure Brutalism**: Absolutely zero decoration, every element is functional
2. **Monochrome Dominance**: Only black, white, and neon green (#00FF00)
3. **Hard Edges**: Not a single curved corner in the entire design
4. **Typography-First**: Massive, tight, bold headings create hierarchy
5. **Instant Feedback**: All interactions happen in ≤50ms
6. **Grid Discipline**: Everything snaps to 4px grid
7. **Technical Aesthetic**: Feels like developer documentation, not marketing
8. **Maximum Contrast**: Pure black on pure white for ultimate readability
9. **Anti-Commercial**: No attempt to "sell" - just facts and function
10. **Cult Appeal**: Users either immediately love the boldness or don't get it

The redesign maintains:
- All HTML structure
- Full accessibility
- Mobile responsiveness
- JavaScript functionality
- Dark mode support

But transforms aesthetic to:
- "Engineering excellence" over "user-friendly"
- "Uncompromising" over "approachable"
- "Technical" over "marketing"
- "Cult tool" over "mass appeal"
- "Function" over "form"
