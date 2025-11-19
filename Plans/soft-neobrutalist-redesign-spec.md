# Specification: Soft Neobrutalist Redesign for OTO Website
> Match the website aesthetic to the macOS app - chunky structure with warm, approachable colors

## High-Level Objective

Redesign the OTO website to visually align with the macOS app's aesthetic: neobrutalist structure (chunky borders, colorful shadows, bold layout) combined with the app's warm, soft color palette (beige backgrounds, soft blue accents, coral touches). Create a design that feels distinctly "OTO" - friendly, approachable, yet structured and confident. Users should feel visual consistency between the app and the website.

**Target Aesthetic**: "If the macOS app and neobrutalist design had a baby" - structured playfulness with warm sophistication.

## Mid-Level Objective

1. **Warm Color System**: Beige/neutral base (#F5F3F0) with soft blue primary (#8CAAC8), coral accents (#D28C82)
2. **Chunky Structure**: 2-3px borders like neobrutalist, but in soft colors not harsh black
3. **Soft Colorful Shadows**: Offset shadows using muted accent colors (0 4px 0 0 rgba(140,170,200,0.4))
4. **Friendly Radius**: 10-14px corners (matches app's native feel)
5. **Gentle Animations**: Smooth transitions (300ms) with slight bounce, not aggressive
6. **Comfortable Spacing**: 8px grid with generous padding (matches app's breathing room)
7. **Native macOS Vibes**: System font stack, familiar patterns, comfortable data presentation

## Implementation Notes

### Design Philosophy Shift
- **FROM**: Current warm organic (too soft, lacks structure)
- **TO**: Structured warmth (defined edges, clear hierarchy, but still welcoming)
- **Personality**: "Confident but gentle" - like the app: capable but never intimidating

### Core Soft Neobrutalist Principles
1. **Structured warmth**: Clear borders and shadows, but in soft colors
2. **Comfortable precision**: Perfect alignment with generous breathing room
3. **Depth through soft layers**: Cards float with muted colored shadows
4. **Warm but organized**: Soft palette with clear visual hierarchy
5. **Native but distinctive**: Feels macOS-native but memorable

### Key Technical Constraints
- Maintain HTML structure and semantics
- Preserve all accessibility features
- Keep mobile responsiveness
- Maintain JavaScript functionality
- Support dark mode (warm dark variant)

### Color System Rules

**Light Mode (Default) - Matches App**
```
Base Colors (Warm Neutrals):
--color-bg:           #F5F3F0  (warm beige, matches app background)
--color-surface:      #FEFCF9  (slightly lighter for cards)
--color-surface-alt:  #EEE9E3  (subtle contrast areas)
--color-text-primary: #2A2A2A  (warm black)
--color-text-secondary: rgba(42,42,42,0.65)  (softer gray)

Primary Accents (Soft & Muted):
--color-blue:         #8CAAC8  (soft blue - PRIMARY, matches app accent)
--color-blue-light:   #A8BDD4  (lighter variant for hover)
--color-coral:        #D28C82  (soft coral - SECONDARY, warm energy)
--color-coral-light:  #E4A89F  (lighter variant)
--color-mint:         #9BC4B5  (soft mint - SUCCESS, calm positive)
--color-lavender:     #B8A8C8  (soft lavender - TERTIARY, gentle variety)
--color-peach:        #E8B89A  (soft peach - ATTENTION, warm highlight)

Accent Usage Rules:
- Blue (#8CAAC8): Primary CTA, links, main features, navigation (MATCHES APP)
- Coral (#D28C82): Secondary CTA, energy moments, pricing badges
- Mint (#9BC4B5): Success states, checkmarks, positive indicators
- Lavender (#B8A8C8): Premium features, variety accents
- Peach (#E8B89A): Highlights, attention items (softer than red)

Borders (Chunky but Soft):
--border-primary:     2px solid rgba(140,170,200,0.4)  (soft blue)
--border-accent:      3px solid rgba(140,170,200,0.5)  (thicker blue)
--border-coral:       2px solid rgba(210,140,130,0.4)  (soft coral)
--border-neutral:     2px solid rgba(42,42,42,0.1)     (very soft gray)

Shadows (Soft Colored Offset):
--shadow-blue:        0 4px 0 0 rgba(140,170,200,0.3)
--shadow-blue-hover:  0 8px 0 0 rgba(140,170,200,0.35)
--shadow-coral:       0 4px 0 0 rgba(210,140,130,0.3)
--shadow-coral-hover: 0 8px 0 0 rgba(210,140,130,0.35)
--shadow-mint:        0 4px 0 0 rgba(155,196,181,0.3)
--shadow-neutral:     0 4px 0 0 rgba(42,42,42,0.08)
--shadow-neutral-hover: 0 8px 0 0 rgba(42,42,42,0.12)

Additional Soft Shadows (for depth):
--shadow-soft-glow:   0 4px 12px rgba(140,170,200,0.15)  (soft blue glow)
--shadow-mixed:       0 0 0 2px rgba(140,170,200,0.2),
                      0 4px 0 0 rgba(140,170,200,0.25),
                      0 4px 12px rgba(140,170,200,0.1)   (layered depth)
```

**Dark Mode (Warm Dark)**
```
Base Colors (Warm Dark):
--color-bg:           #2A2826  (warm dark brown, not pure black)
--color-surface:      #36322E  (lighter warm dark)
--color-surface-alt:  #1F1D1B  (darker variant)
--color-text-primary: #F5F3F0  (warm white)
--color-text-secondary: rgba(245,243,240,0.65)

Primary Accents (Slightly Brighter but Still Soft):
--color-blue:         #A8BDD4  (lighter soft blue for visibility)
--color-coral:        #E4A89F  (lighter coral)
--color-mint:         #B5D9CC  (lighter mint)
--color-lavender:     #C8B8D4  (lighter lavender)
--color-peach:        #F5CAB0  (lighter peach)

Borders & Shadows: Keep same structure, slightly higher opacity for visibility
```

### Typography Transformation

**Font Stack (Matches App)**
```
Primary: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif
Heading: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif
Mono:    "SF Mono", "Monaco", "Cascadia Code", monospace
```

**Font Sizes (Comfortable Scale)**
```
Hero:        clamp(2.5rem, 7vw, 5.5rem)   /* 40-88px */
Display:     clamp(2rem, 5vw, 4rem)       /* 32-64px */
H1:          clamp(1.75rem, 4vw, 3rem)    /* 28-48px */
H2:          clamp(1.5rem, 3.5vw, 2.25rem) /* 24-36px */
H3:          1.25rem                       /* 20px */
Body:        1.0625rem                     /* 17px - matches app */
Small:       0.9375rem                     /* 15px */
Micro:       0.8125rem                     /* 13px */
```

**Font Weights (Apple System Range)**
```
Light:       300  (subtle de-emphasis, large text)
Regular:     400  (body text - PRIMARY)
Medium:      500  (slight emphasis)
SemiBold:    600  (subheadings, buttons)
Bold:        700  (headings - PRIMARY)
```

**Letter Spacing (Apple-like)**
```
Hero:        -0.015em  (slightly tight)
Headings:    -0.01em   (comfortable tight)
Body:        0         (normal - Apple default)
Small/Caps:  0.02em    (slight spacing for legibility)
```

**Line Heights (Generous)**
```
Hero:        1.1   (tight but readable)
Headings:    1.2   (comfortable)
Body:        1.5   (generous - Apple default)
Small:       1.4   (comfortable compact)
```

### Spacing System (8px Grid)

**Base Unit**: 8px (matches app's comfortable spacing)

```
--space-1:   8px
--space-2:   16px
--space-3:   24px
--space-4:   32px
--space-5:   40px
--space-6:   48px
--space-8:   64px
--space-10:  80px
--space-12:  96px
--space-16:  128px
```

### Border System

**Chunky but Soft**

```
Cards:           2px solid rgba(140,170,200,0.4)
Cards Hover:     3px solid rgba(140,170,200,0.5)
Focus:           3px solid rgba(140,170,200,0.7)
Sections:        2px solid rgba(42,42,42,0.08)
Inputs:          2px solid rgba(42,42,42,0.12)
Input Focus:     3px solid rgba(140,170,200,0.6)
```

**Border Radius (Friendly Native)**
```
Small:      8px
Default:    10px
Medium:     12px
Large:      14px
XLarge:     16px
```

### Shadow System (Soft Colored Offsets)

**Signature Soft Neobrutalist Shadows**

```
Card Default (soft blue):
  border: 2px solid rgba(140,170,200,0.4);
  box-shadow: 0 4px 0 0 rgba(140,170,200,0.3);
  /* Soft offset shadow, barely visible */

Card Hover (lifts gently):
  transform: translateY(-4px);
  border: 3px solid rgba(140,170,200,0.5);
  box-shadow: 0 8px 0 0 rgba(140,170,200,0.35);
  /* Shadow doubles, border thickens slightly */

Card Mixed Depth (layered):
  box-shadow:
    0 0 0 2px rgba(140,170,200,0.2),      /* Soft border glow */
    0 4px 0 0 rgba(140,170,200,0.25),     /* Offset shadow */
    0 4px 12px 0 rgba(140,170,200,0.1);   /* Soft blur glow */
  /* Creates soft depth without harshness */

Button Default:
  border: 2px solid currentColor;
  box-shadow: 0 4px 0 0 currentColor;
  /* Shadow matches button color at 100% */

Button Hover (gentle lift):
  transform: translateY(-2px);
  box-shadow: 0 6px 0 0 currentColor;

Button Active (subtle press):
  transform: translateY(1px);
  box-shadow: 0 3px 0 0 currentColor;
```

### Animation System (Smooth & Gentle)

**Apple-Inspired Smooth Transitions**

```
Duration:   300ms (comfortable, noticeable but not slow)
Easing:     cubic-bezier(0.25, 0.46, 0.45, 0.94) /* easeOutQuad - smooth Apple-like */
Alt Easing: cubic-bezier(0.34, 1.26, 0.64, 1) /* subtle bounce overshoot */

Hover Lift (gentle):
  transition: transform 300ms ease-out,
              box-shadow 300ms ease-out,
              border-color 300ms ease;
  transform: translateY(-4px);

Press Down (subtle):
  transition: transform 150ms ease-out,
              box-shadow 150ms ease-out;
  transform: translateY(1px);

Fade & Grow (cards appearing):
  transition: opacity 400ms ease-out,
              transform 400ms ease-out;
  transform: scale(1) translateY(0);
```

---

## Context

### Beginning Context
Files exist:
- index.html (799 lines)
- assets/css/styles.css (1879 lines)
- assets/js/main.js

### Ending Context
Files will be modified:
- assets/css/styles.css - Complete soft neobrutalist redesign

Files to create:
- Plans/soft-neobrutalist-redesign-spec.md (this file)

---

## Low-Level Tasks

### Task 1: Establish Warm Neobrutalist Color System
```prompt
Create warm, soft color palette matching the macOS app aesthetic.

FILE TO UPDATE: assets/css/styles.css (lines 40-140)

REPLACE all color variables:

:root {
  /* Base (Warm Neutrals - matches app) */
  --color-bg:           #F5F3F0;
  --color-surface:      #FEFCF9;
  --color-surface-alt:  #EEE9E3;
  --color-text-primary: #2A2A2A;
  --color-text-secondary: rgba(42,42,42,0.65);
  --color-text-tertiary: rgba(42,42,42,0.4);

  /* Primary Accents (Soft & Muted) */
  --color-blue:         #8CAAC8;  /* Matches app primary */
  --color-blue-light:   #A8BDD4;
  --color-coral:        #D28C82;
  --color-coral-light:  #E4A89F;
  --color-mint:         #9BC4B5;
  --color-lavender:     #B8A8C8;
  --color-peach:        #E8B89A;

  /* Semantic */
  --color-primary:      var(--color-blue);
  --color-secondary:    var(--color-coral);
  --color-success:      var(--color-mint);
  --color-attention:    var(--color-peach);

  /* Borders (Chunky but Soft) */
  --border-width:       2px;
  --border-width-thick: 3px;
  --border-blue:        2px solid rgba(140,170,200,0.4);
  --border-blue-thick:  3px solid rgba(140,170,200,0.5);
  --border-coral:       2px solid rgba(210,140,130,0.4);
  --border-neutral:     2px solid rgba(42,42,42,0.1);

  /* Shadows (Soft Colored Offset) */
  --shadow-blue:        0 4px 0 0 rgba(140,170,200,0.3);
  --shadow-blue-hover:  0 8px 0 0 rgba(140,170,200,0.35);
  --shadow-coral:       0 4px 0 0 rgba(210,140,130,0.3);
  --shadow-coral-hover: 0 8px 0 0 rgba(210,140,130,0.35);
  --shadow-mint:        0 4px 0 0 rgba(155,196,181,0.3);
  --shadow-neutral:     0 4px 0 0 rgba(42,42,42,0.08);
  --shadow-neutral-hover: 0 8px 0 0 rgba(42,42,42,0.12);

  /* Mixed shadow for depth */
  --shadow-mixed-blue:  0 0 0 2px rgba(140,170,200,0.2),
                        0 4px 0 0 rgba(140,170,200,0.25),
                        0 4px 12px 0 rgba(140,170,200,0.1);

  /* Radius (Friendly Native) */
  --radius-sm:          8px;
  --radius-md:          10px;
  --radius-lg:          12px;
  --radius-xl:          14px;
  --radius-2xl:         16px;

  /* Spacing (8px Grid) */
  --space-1:  8px;
  --space-2:  16px;
  --space-3:  24px;
  --space-4:  32px;
  --space-5:  40px;
  --space-6:  48px;
  --space-8:  64px;
  --space-12: 96px;
  --space-16: 128px;

  /* Typography */
  --font-primary: -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif;
  --font-heading: -apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif;
  --font-mono:    "SF Mono", Monaco, monospace;

  /* Animations (Smooth Apple-like) */
  --ease-smooth: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --ease-bounce: cubic-bezier(0.34, 1.26, 0.64, 1);
  --duration-fast: 150ms;
  --duration-medium: 300ms;
  --duration-slow: 400ms;
}

@media (prefers-color-scheme: dark) {
  :root {
    /* Warm dark palette */
    --color-bg:           #2A2826;
    --color-surface:      #36322E;
    --color-surface-alt:  #1F1D1B;
    --color-text-primary: #F5F3F0;
    --color-text-secondary: rgba(245,243,240,0.65);
    --color-text-tertiary: rgba(245,243,240,0.4);

    /* Lighter accents for visibility */
    --color-blue:         #A8BDD4;
    --color-blue-light:   #C0D4E8;
    --color-coral:        #E4A89F;
    --color-coral-light:  #F0C4BA;
    --color-mint:         #B5D9CC;
    --color-lavender:     #C8B8D4;
    --color-peach:        #F5CAB0;

    /* Adjusted borders for dark mode */
    --border-blue:        2px solid rgba(168,189,212,0.4);
    --border-blue-thick:  3px solid rgba(168,189,212,0.5);
    --border-neutral:     2px solid rgba(245,243,240,0.15);

    /* Adjusted shadows */
    --shadow-blue:        0 4px 0 0 rgba(168,189,212,0.25);
    --shadow-blue-hover:  0 8px 0 0 rgba(168,189,212,0.3);
  }
}
```

### Task 2: Soft Neobrutalist Typography
```prompt
Implement Apple-native typography with comfortable sizing.

FILE TO UPDATE: assets/css/styles.css

UPDATE body and typography:

body {
  margin: 0;
  background: var(--color-bg);
  color: var(--color-text-primary);
  font-family: var(--font-primary);
  font-size: 17px; /* Matches app */
  line-height: 1.5;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
  letter-spacing: -0.01em;
}

h1 { font-size: clamp(1.75rem, 4vw, 3rem); }
h2 { font-size: clamp(1.5rem, 3.5vw, 2.25rem); }
h3 { font-size: 1.25rem; }

.hero__title {
  font-family: var(--font-heading);
  font-size: clamp(2.5rem, 7vw, 5.5rem);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.015em;
  margin: 0 0 var(--space-3);
  color: var(--color-text-primary);
}

.hero__lead {
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.5;
  max-width: 600px;
  margin: 0 0 var(--space-6);
  color: var(--color-text-secondary);
}

/* Section headers */
.section__header h2 {
  font-family: var(--font-heading);
  font-size: clamp(1.5rem, 3.5vw, 2.25rem);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.01em;
}

.section__lead {
  font-size: 1.0625rem;
  font-weight: 400;
  line-height: 1.5;
  color: var(--color-text-secondary);
}
```

### Task 3: Soft Colored Shadow Cards
```prompt
Create cards with chunky soft borders and muted colored shadows.

FILE TO UPDATE: assets/css/styles.css

REPLACE all card styles:

.organic-card,
.feature-card,
.value-card,
.guarantee-card {
  background: var(--color-surface);
  border: var(--border-blue);
  border-radius: var(--radius-lg);
  padding: var(--space-5);
  box-shadow: var(--shadow-blue);
  transition: transform var(--duration-medium) var(--ease-smooth),
              box-shadow var(--duration-medium) var(--ease-smooth),
              border-color var(--duration-medium) ease;
}

.organic-card:hover,
.feature-card:hover {
  transform: translateY(-4px);
  border: var(--border-blue-thick);
  box-shadow: var(--shadow-blue-hover);
}

/* Alternate colors for variety (still soft) */
.feature-card:nth-child(4n+1) {
  border-color: rgba(140,170,200,0.4);
  box-shadow: var(--shadow-blue);
}

.feature-card:nth-child(4n+1):hover {
  border-color: rgba(140,170,200,0.5);
  box-shadow: var(--shadow-blue-hover);
}

.feature-card:nth-child(4n+2) {
  border-color: rgba(210,140,130,0.4);
  box-shadow: var(--shadow-coral);
}

.feature-card:nth-child(4n+2):hover {
  border-color: rgba(210,140,130,0.5);
  box-shadow: var(--shadow-coral-hover);
}

.feature-card:nth-child(4n+3) {
  border-color: rgba(155,196,181,0.4);
  box-shadow: var(--shadow-mint);
}

.feature-card:nth-child(4n+3):hover {
  border-color: rgba(155,196,181,0.5);
  box-shadow: 0 8px 0 0 rgba(155,196,181,0.35);
}

.feature-card:nth-child(4n+4) {
  border-color: rgba(184,168,200,0.4);
  box-shadow: 0 4px 0 0 rgba(184,168,200,0.3);
}

.feature-card:nth-child(4n+4):hover {
  border-color: rgba(184,168,200,0.5);
  box-shadow: 0 8px 0 0 rgba(184,168,200,0.35);
}

/* Remove old pseudo-elements */
.organic-card::before,
.organic-card::after,
.feature-card::before,
.feature-card::after {
  display: none;
}
```

### Task 4: Gentle Chunky Buttons
```prompt
Create soft neobrutalist buttons with app-matching colors.

FILE TO UPDATE: assets/css/styles.css (lines 700-709)

REPLACE all button styles:

.warm-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-1);
  padding: var(--space-2) var(--space-5);
  border: 2px solid currentColor;
  border-radius: var(--radius-md);
  background: var(--color-bg);
  color: var(--color-text-primary);
  font-family: var(--font-primary);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 0 0 currentColor;
  transition: transform var(--duration-fast) var(--ease-smooth),
              box-shadow var(--duration-fast) var(--ease-smooth);
}

.warm-button.primary {
  background: var(--color-blue);
  color: #FFFFFF;
  border-color: var(--color-blue);
  box-shadow: var(--shadow-blue);
}

.warm-button.primary:hover {
  background: var(--color-blue-light);
  border-color: var(--color-blue-light);
  transform: translateY(-2px);
  box-shadow: 0 6px 0 0 rgba(140,170,200,0.35);
}

.warm-button.primary:active {
  transform: translateY(1px);
  box-shadow: 0 3px 0 0 rgba(140,170,200,0.3);
}

.warm-button.secondary {
  background: var(--color-coral);
  color: #FFFFFF;
  border-color: var(--color-coral);
  box-shadow: var(--shadow-coral);
}

.warm-button.secondary:hover {
  background: var(--color-coral-light);
  border-color: var(--color-coral-light);
  transform: translateY(-2px);
  box-shadow: 0 6px 0 0 rgba(210,140,130,0.35);
}

.warm-button.secondary:active {
  transform: translateY(1px);
  box-shadow: 0 3px 0 0 rgba(210,140,130,0.3);
}

.warm-button:focus-visible {
  outline: 3px solid rgba(140,170,200,0.5);
  outline-offset: 2px;
}

.warm-button.large {
  padding: var(--space-3) var(--space-6);
  font-size: 1.125rem;
  box-shadow: 0 6px 0 0 currentColor;
}

.warm-button.large:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 0 0 currentColor;
}

.warm-button.large:active {
  transform: translateY(2px);
  box-shadow: 0 4px 0 0 currentColor;
}
```

### Task 5: Warm Structured Hero
```prompt
Create hero section with soft neobrutalist styling.

FILE TO UPDATE: assets/css/styles.css (lines 179-212)

REPLACE hero styling:

.hero {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-8);
  max-width: 1400px;
  margin: 0 auto;
  padding: var(--space-12) var(--space-6);
  background: var(--color-bg);
}

@media (min-width: 960px) {
  .hero {
    grid-template-columns: 1.2fr 1fr;
    gap: var(--space-12);
  }
}

.hero__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero__title {
  font-family: var(--font-heading);
  font-size: clamp(2.5rem, 7vw, 5.5rem);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.015em;
  margin: 0 0 var(--space-3);
  color: var(--color-text-primary);
}

.hero__lead {
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.5;
  max-width: 560px;
  margin: 0 0 var(--space-6);
  color: var(--color-text-secondary);
}

.hero__actions {
  display: flex;
  gap: var(--space-3);
  flex-wrap: wrap;
  margin-bottom: var(--space-4);
}

/* Trust line with soft indicator */
.trust-line {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: 0.9375rem;
  color: var(--color-text-secondary);
}

.trust-line::before {
  content: "✓";
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background: var(--color-mint);
  color: white;
  border-radius: 50%;
  font-weight: 700;
  font-size: 0.75rem;
}

/* Hero visual with soft blue border */
.hero__visual {
  display: flex;
  align-items: center;
  justify-content: center;
  border: var(--border-blue-thick);
  border-radius: var(--radius-2xl);
  background: var(--color-surface);
  box-shadow: var(--shadow-blue);
  overflow: hidden;
  transition: transform var(--duration-medium) var(--ease-smooth),
              box-shadow var(--duration-medium) var(--ease-smooth);
}

.hero__visual:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-blue-hover);
}
```

### Task 6: Comfortable Section Layouts
```prompt
Create sections with warm backgrounds and soft borders.

FILE TO UPDATE: assets/css/styles.css (lines 173-176)

UPDATE section styling:

.section {
  max-width: 100%;
  margin: 0;
  padding: var(--space-12) var(--space-6);
  background: var(--color-bg);
  border-top: 2px solid rgba(42,42,42,0.06);
}

.section--alt {
  background: var(--color-surface-alt);
  border-top: var(--border-blue);
  border-bottom: var(--border-blue);
  position: relative;
}

/* Optional: Soft gradient accent stripe */
.section--alt::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg,
    rgba(140,170,200,0.5),
    rgba(184,168,200,0.5),
    rgba(210,140,130,0.5),
    rgba(155,196,181,0.5)
  );
  opacity: 0.5;
}

.section__header {
  max-width: 1200px;
  margin: 0 auto var(--space-8);
  text-align: center;
}

.section__header h2 {
  position: relative;
  display: inline-block;
  padding-bottom: var(--space-2);
}

/* Optional: Soft underline on headers */
.section__header h2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--color-coral);
  border-radius: 2px;
  opacity: 0.5;
}

.section__lead {
  font-size: 1.0625rem;
  line-height: 1.5;
  color: var(--color-text-secondary);
  max-width: 640px;
  margin: var(--space-3) auto 0;
}
```

### Task 7: Soft Colorful Feature Cards
```prompt
Style feature cards with varied soft accent borders and icons.

FILE TO UPDATE: assets/css/styles.css

UPDATE feature card styling:

.feature-card {
  background: var(--color-surface);
  border: var(--border-neutral);
  border-radius: var(--radius-lg);
  padding: var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  box-shadow: var(--shadow-neutral);
  transition: transform var(--duration-medium) var(--ease-smooth),
              box-shadow var(--duration-medium) var(--ease-smooth),
              border-color var(--duration-medium) ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-neutral-hover);
}

/* Soft colorful icons */
.feature-card__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md);
  font-size: 24px;
  border: 2px solid currentColor;
  box-shadow: 0 3px 0 0 currentColor;
}

/* Soft color palette for icons */
.feature-card:nth-child(6n+1) .feature-card__icon {
  background: var(--color-blue);
  color: white;
  border-color: var(--color-blue);
}

.feature-card:nth-child(6n+2) .feature-card__icon {
  background: var(--color-coral);
  color: white;
  border-color: var(--color-coral);
}

.feature-card:nth-child(6n+3) .feature-card__icon {
  background: var(--color-mint);
  color: white;
  border-color: var(--color-mint);
}

.feature-card:nth-child(6n+4) .feature-card__icon {
  background: var(--color-lavender);
  color: white;
  border-color: var(--color-lavender);
}

.feature-card:nth-child(6n+5) .feature-card__icon {
  background: var(--color-peach);
  color: var(--color-text-primary);
  border-color: var(--color-peach);
}

.feature-card:nth-child(6n+6) .feature-card__icon {
  background: var(--color-blue-light);
  color: white;
  border-color: var(--color-blue-light);
}

/* Hover: Border matches icon color softly */
.feature-card:nth-child(6n+1):hover {
  border-color: rgba(140,170,200,0.4);
  box-shadow: var(--shadow-blue);
}

.feature-card:nth-child(6n+2):hover {
  border-color: rgba(210,140,130,0.4);
  box-shadow: var(--shadow-coral);
}

.feature-card:nth-child(6n+3):hover {
  border-color: rgba(155,196,181,0.4);
  box-shadow: var(--shadow-mint);
}

.feature-card__header {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.feature-card h3 {
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0;
}

.feature-card__desc {
  font-size: 0.9375rem;
  line-height: 1.5;
  color: var(--color-text-secondary);
  margin: 0;
}
```

### Task 8: Warm Pricing Section
```prompt
Create pricing with soft colorful accents matching app aesthetic.

FILE TO UPDATE: assets/css/styles.css (lines 892-1168)

REPLACE pricing section:

.pricing-box {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-8);
  padding: var(--space-8);
  margin: 0 auto;
  max-width: 1200px;
  background: var(--color-surface-alt);
  border: var(--border-blue-thick);
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-mixed-blue);
}

@media (min-width: 960px) {
  .pricing-box {
    grid-template-columns: 1fr 1.5fr 1fr;
    align-items: center;
  }
}

.pricing-benefits {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: var(--space-2);
  font-size: 1rem;
}

.pricing-benefits li {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) 0;
}

.pricing-benefits li::before {
  content: "✓";
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: var(--color-mint);
  color: white;
  border-radius: 50%;
  font-weight: 700;
  font-size: 0.875rem;
  flex-shrink: 0;
  box-shadow: 0 2px 0 0 rgba(155,196,181,0.4);
}

.pricing-card {
  position: relative;
  background: var(--color-surface);
  border: var(--border-coral);
  border-radius: var(--radius-2xl);
  padding: var(--space-8) var(--space-6);
  text-align: center;
  box-shadow: var(--shadow-coral);
}

/* Soft badge */
.pricing-card__badge {
  position: absolute;
  top: calc(var(--space-3) * -1);
  left: 50%;
  transform: translateX(-50%);
  background: var(--color-peach);
  color: var(--color-text-primary);
  padding: var(--space-1) var(--space-4);
  border-radius: var(--radius-md);
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  border: 2px solid var(--color-text-primary);
  box-shadow: 0 3px 0 0 rgba(42,42,42,0.15);
}

/* Soft ribbon */
.pricing-card__ribbon {
  position: absolute;
  top: var(--space-4);
  right: var(--space-4);
  background: var(--color-lavender);
  color: white;
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-md);
  border: 2px solid rgba(184,168,200,0.5);
  box-shadow: 0 3px 0 0 rgba(184,168,200,0.3);
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.02em;
  font-size: 0.75rem;
}

.pricing-card__ribbon-title {
  display: block;
  font-size: 0.75rem;
}

.pricing-card__ribbon-subtitle {
  display: block;
  font-size: 1rem;
}

.pricing-card__label {
  margin: var(--space-6) 0 var(--space-2);
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  color: var(--color-text-secondary);
}

.pricing-card__price {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
  margin: 0 0 var(--space-4);
}

.pricing-card__price-original {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-text-secondary);
  text-decoration: line-through;
  text-decoration-thickness: 2px;
  text-decoration-color: var(--color-coral);
}

.pricing-card__price-current {
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.015em;
  color: var(--color-text-primary);
}

.pricing-card__actions {
  margin: var(--space-4) 0;
}

.pricing-card__cta {
  min-width: 280px;
}

.pricing-card__note {
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  margin: var(--space-3) 0 0;
}

/* Soft savings card */
.savings-card {
  border: var(--border-blue);
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  padding: var(--space-4);
  margin: var(--space-6) auto 0;
  text-align: center;
  box-shadow: var(--shadow-blue);
}

.savings-card-headline {
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-blue);
  margin-bottom: var(--space-2);
}

.savings-card-breakdown {
  font-size: 0.9375rem;
  color: var(--color-text-secondary);
}

.savings-card-highlight {
  color: var(--color-coral);
  font-weight: 700;
}
```

### Task 9: Gentle Navigation
```prompt
Create soft navigation with app-matching blue accent.

FILE TO UPDATE: assets/css/styles.css (lines 158-170)

UPDATE navigation:

.site-header {
  position: sticky;
  top: 0;
  background: var(--color-bg);
  border-bottom: var(--border-blue);
  z-index: 50;
  box-shadow: 0 2px 0 0 rgba(140,170,200,0.15);
  backdrop-filter: blur(20px) saturate(180%);
  background: rgba(245,243,240,0.95);
}

@media (prefers-color-scheme: dark) {
  .site-header {
    background: rgba(42,40,38,0.95);
  }
}

.nav {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-3) var(--space-6);
}

.nav__brand .logo-text {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text-primary);
}

.nav__list {
  list-style: none;
  display: flex;
  gap: var(--space-4);
  margin: 0;
  padding: 0;
}

.nav__list a {
  font-size: 0.9375rem;
  font-weight: 500;
  padding: var(--space-1) var(--space-2);
  color: var(--color-text-primary);
  border-radius: var(--radius-sm);
  border: 2px solid transparent;
  transition: all var(--duration-medium) var(--ease-smooth);
}

.nav__list a:hover {
  border-color: rgba(140,170,200,0.3);
  background: rgba(140,170,200,0.1);
  transform: translateY(-1px);
}

.nav__list a.active {
  border-color: var(--color-blue);
  background: rgba(140,170,200,0.15);
  color: var(--color-blue);
}

.nav__list a:focus-visible {
  outline: 2px solid var(--color-blue);
  outline-offset: 2px;
}
```

### Task 10: Soft FAQ Accordion
```prompt
Style FAQ with gentle borders and smooth interactions.

FILE TO UPDATE: assets/css/styles.css (lines 787-794)

REPLACE FAQ styling:

.faq {
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  gap: var(--space-3);
}

.faq-item {
  background: var(--color-surface);
  border: var(--border-neutral);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-neutral);
  transition: transform var(--duration-medium) var(--ease-smooth),
              box-shadow var(--duration-medium) var(--ease-smooth),
              border-color var(--duration-medium) ease;
}

.faq-item:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-neutral-hover);
  border-color: rgba(140,170,200,0.3);
}

.faq-toggle {
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: var(--space-4);
  font-family: var(--font-primary);
  font-size: 1.0625rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-text-primary);
  transition: color var(--duration-medium) ease;
}

.faq-toggle:hover {
  color: var(--color-blue);
}

.faq-toggle::after {
  content: "+";
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: rgba(140,170,200,0.15);
  color: var(--color-blue);
  border-radius: 50%;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  border: 2px solid rgba(140,170,200,0.3);
  transition: transform var(--duration-medium) var(--ease-bounce),
              background-color var(--duration-medium) ease,
              border-color var(--duration-medium) ease;
}

.faq-toggle[aria-expanded="true"]::after {
  content: "−";
  transform: rotate(180deg);
  background: var(--color-blue);
  color: white;
  border-color: var(--color-blue);
}

.faq-panel {
  padding: 0 var(--space-4) var(--space-4);
  font-size: 0.9375rem;
  line-height: 1.5;
  color: var(--color-text-secondary);
  border-top: 2px solid rgba(42,42,42,0.06);
  margin-top: var(--space-2);
}

.faq-panel p {
  margin: var(--space-2) 0 0;
}

.faq-panel[hidden] {
  display: none;
}
```

### Task 11: Smooth Animation System
```prompt
Implement gentle Apple-like animations.

FILE TO UPDATE: assets/css/styles.css

UPDATE animation system:

:root {
  --ease-smooth: cubic-bezier(0.25, 0.46, 0.45, 0.94); /* Apple ease-out */
  --ease-bounce: cubic-bezier(0.34, 1.26, 0.64, 1); /* Subtle bounce */
  --duration-fast: 150ms;
  --duration-medium: 300ms;
  --duration-slow: 400ms;
}

/* Apply smooth transitions globally */
* {
  transition-timing-function: var(--ease-smooth);
}

/* Reduce motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    transition-delay: 0ms !important;
  }

  :root {
    --ease-smooth: ease;
    --ease-bounce: ease;
  }
}

/* Reveal animations (soft fade up) */
.reveal {
  opacity: 0;
  transform: translateY(24px);
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
  transition: opacity var(--duration-slow) var(--ease-smooth),
              transform var(--duration-slow) var(--ease-smooth);
}
```

### Task 12: Soft Video Wrapper
```prompt
Style video demo with warm blue border and soft shadow.

FILE TO UPDATE: assets/css/styles.css (lines 560-663)

UPDATE video wrapper:

.video-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  aspect-ratio: 16 / 10;
  border: var(--border-blue-thick);
  border-radius: var(--radius-2xl);
  background: var(--color-surface);
  box-shadow: var(--shadow-mixed-blue);
  overflow: hidden;
  transition: transform var(--duration-medium) var(--ease-smooth),
              box-shadow var(--duration-medium) var(--ease-smooth),
              border-color var(--duration-medium) ease;
}

.video-wrapper:hover {
  transform: translateY(-4px);
  box-shadow:
    0 0 0 2px rgba(140,170,200,0.25),
    0 8px 0 0 rgba(140,170,200,0.35),
    0 8px 16px 0 rgba(140,170,200,0.15);
  border-color: rgba(184,168,200,0.5);
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
  transition: opacity var(--duration-medium) var(--ease-smooth);
}

.demo-slideshow .slide-layer.visible {
  opacity: 1;
}

/* Soft controls */
.slideshow-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 3;
  width: 44px;
  height: 44px;
  border: 2px solid rgba(140,170,200,0.4);
  border-radius: var(--radius-md);
  background: rgba(245,243,240,0.95);
  color: var(--color-blue);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 3px 0 0 rgba(140,170,200,0.25);
  backdrop-filter: blur(10px);
  transition: transform var(--duration-fast) var(--ease-smooth),
              box-shadow var(--duration-fast) var(--ease-smooth),
              border-color var(--duration-fast) ease;
}

.slideshow-control:hover {
  transform: translateY(calc(-50% - 2px));
  box-shadow: 0 5px 0 0 rgba(140,170,200,0.3);
  border-color: var(--color-blue);
}

.slideshow-control:active {
  transform: translateY(calc(-50% + 1px));
  box-shadow: 0 2px 0 0 rgba(140,170,200,0.25);
}

.slideshow-control.prev { left: var(--space-3); }
.slideshow-control.next { right: var(--space-3); }

@media (prefers-color-scheme: dark) {
  .slideshow-control {
    background: rgba(54,50,46,0.95);
    color: var(--color-blue);
  }
}
```

### Task 13: Warm Screenshot Gallery
```prompt
Add soft varied borders to screenshot cards.

FILE TO UPDATE: assets/css/styles.css (lines 551-556)

UPDATE screenshot gallery:

.screenshot-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-6);
  max-width: 1200px;
  margin: 0 auto;
}

.screenshot-card {
  background: var(--color-surface);
  border: var(--border-neutral);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-neutral);
  cursor: pointer;
  transition: transform var(--duration-medium) var(--ease-smooth),
              box-shadow var(--duration-medium) var(--ease-smooth),
              border-color var(--duration-medium) ease;
}

.screenshot-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-neutral-hover);
}

/* Vary border colors softly */
.screenshot-card:nth-child(4n+1) {
  border-color: rgba(140,170,200,0.3);
}

.screenshot-card:nth-child(4n+1):hover {
  border-color: rgba(140,170,200,0.5);
  box-shadow: var(--shadow-blue);
}

.screenshot-card:nth-child(4n+2) {
  border-color: rgba(210,140,130,0.3);
}

.screenshot-card:nth-child(4n+2):hover {
  border-color: rgba(210,140,130,0.5);
  box-shadow: var(--shadow-coral);
}

.screenshot-card:nth-child(4n+3) {
  border-color: rgba(155,196,181,0.3);
}

.screenshot-card:nth-child(4n+3):hover {
  border-color: rgba(155,196,181,0.5);
  box-shadow: var(--shadow-mint);
}

.screenshot-card:nth-child(4n+4) {
  border-color: rgba(184,168,200,0.3);
}

.screenshot-card:nth-child(4n+4):hover {
  border-color: rgba(184,168,200,0.5);
  box-shadow: 0 8px 0 0 rgba(184,168,200,0.3);
}

.screenshot-card picture {
  display: block;
  background: var(--color-surface);
  border-bottom: 2px solid rgba(42,42,42,0.06);
}

.screenshot-card img {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 5/4;
  object-fit: cover;
  transition: transform var(--duration-medium) var(--ease-smooth);
}

.screenshot-card:hover img {
  transform: scale(1.03);
}

.screenshot-card figcaption {
  padding: var(--space-3);
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  text-align: center;
}
```

### Task 14: Soft Input Fields
```prompt
Style form inputs with gentle focus states.

FILE TO UPDATE: assets/css/styles.css

ADD input styling:

input[type="text"],
input[type="email"],
textarea,
.language-search-input {
  width: 100%;
  padding: var(--space-2) var(--space-3);
  font-family: var(--font-primary);
  font-size: 1rem;
  background: var(--color-surface);
  border: var(--border-neutral);
  border-radius: var(--radius-md);
  color: var(--color-text-primary);
  outline: none;
  box-shadow: var(--shadow-neutral);
  transition: border-color var(--duration-medium) ease,
              box-shadow var(--duration-medium) var(--ease-smooth),
              transform var(--duration-medium) var(--ease-smooth);
}

input:focus,
textarea:focus {
  border: var(--border-blue-thick);
  transform: translateY(-2px);
  box-shadow: var(--shadow-blue);
  padding: calc(var(--space-2) - 1px) calc(var(--space-3) - 1px);
}

input::placeholder,
textarea::placeholder {
  color: var(--color-text-tertiary);
}
```

### Task 15: Warm Guarantee Cards
```prompt
Add soft colorful styling to guarantee section.

FILE TO UPDATE: assets/css/styles.css (lines 1206-1309)

UPDATE guarantee cards:

.guarantee-layout {
  display: grid;
  gap: var(--space-8);
  max-width: 1200px;
  margin: 0 auto;
}

.guarantee-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: var(--space-6);
}

.guarantee-card {
  background: var(--color-surface);
  border: var(--border-neutral);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  box-shadow: var(--shadow-neutral);
  transition: transform var(--duration-medium) var(--ease-smooth),
              box-shadow var(--duration-medium) var(--ease-smooth),
              border-color var(--duration-medium) ease;
}

.guarantee-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-neutral-hover);
}

.reality-card {
  border-color: rgba(210,140,130,0.4);
  box-shadow: var(--shadow-coral);
}

.reality-card:hover {
  box-shadow: var(--shadow-coral-hover);
  border-color: rgba(210,140,130,0.5);
}

.promise-card {
  border-color: rgba(155,196,181,0.4);
  box-shadow: var(--shadow-mint);
}

.promise-card:hover {
  box-shadow: 0 8px 0 0 rgba(155,196,181,0.35);
  border-color: rgba(155,196,181,0.5);
}

/* Soft colorful icon */
.card-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: var(--radius-lg);
  margin-bottom: var(--space-4);
  border: 2px solid currentColor;
  box-shadow: 0 3px 0 0 currentColor;
}

.reality-card .card-icon {
  background: var(--color-coral);
  color: white;
  border-color: var(--color-coral);
}

.promise-card .card-icon {
  background: var(--color-mint);
  color: white;
  border-color: var(--color-mint);
}

.card-icon i {
  font-size: 28px;
}

.card-header {
  margin: 0 0 var(--space-3);
  font-size: 1.25rem;
  font-weight: 700;
}

.card-body {
  margin: 0;
  font-size: 1rem;
  line-height: 1.5;
  color: var(--color-text-secondary);
}

.guarantee-refund {
  background: var(--color-surface);
  border: var(--border-blue-thick);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  box-shadow: var(--shadow-blue);
}
```

### Task 16: Comfortable Footer
```prompt
Create warm, friendly footer.

FILE TO UPDATE: assets/css/styles.css (lines 798-800)

UPDATE footer:

.site-footer {
  text-align: center;
  padding: var(--space-12) var(--space-6);
  border-top: var(--border-blue);
  background: var(--color-surface-alt);
  box-shadow: inset 0 2px 0 0 rgba(140,170,200,0.15);
}

.site-footer p {
  margin: 0;
  font-size: 0.9375rem;
  color: var(--color-text-secondary);
  font-weight: 400;
}
```

### Task 17: Sticky Buy Bar with Soft Blue
```prompt
Style mobile sticky bar with warm app colors.

FILE TO UPDATE: assets/css/styles.css (lines 1694-1728)

UPDATE sticky buy bar:

.sticky-buy {
  position: fixed;
  left: 0;
  right: 0;
  bottom: -120px;
  display: flex;
  justify-content: center;
  gap: var(--space-3);
  align-items: center;
  background: rgba(245,243,240,0.95);
  backdrop-filter: blur(20px) saturate(180%);
  border-top: var(--border-blue);
  padding: var(--space-3) var(--space-4);
  z-index: 60;
  box-shadow: 0 -2px 0 0 rgba(140,170,200,0.15);
  transition: bottom var(--duration-medium) var(--ease-smooth);
}

@media (prefers-color-scheme: dark) {
  .sticky-buy {
    background: rgba(42,40,38,0.95);
  }
}

.sticky-buy.is-visible {
  bottom: 0;
}

.sticky-buy__price {
  font-weight: 600;
  font-size: 1.125rem;
  color: var(--color-text-primary);
}

.sticky-buy__cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-2) var(--space-5);
  border-radius: var(--radius-md);
  background: var(--color-blue);
  color: white;
  font-weight: 600;
  font-size: 1rem;
  border: 2px solid var(--color-blue);
  box-shadow: var(--shadow-blue);
  text-decoration: none;
  transition: transform var(--duration-fast) var(--ease-smooth),
              box-shadow var(--duration-fast) var(--ease-smooth),
              background var(--duration-fast) ease;
}

.sticky-buy__cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 0 0 rgba(140,170,200,0.35);
  background: var(--color-blue-light);
}

.sticky-buy__cta:active {
  transform: translateY(1px);
  box-shadow: 0 3px 0 0 rgba(140,170,200,0.3);
}
```

### Task 18: Remove Old Decorative Elements
```prompt
Clean up old warm organic design elements.

FILE TO UPDATE: assets/css/styles.css

REMOVE or set display:none:

1. body::before (old gradient overlay) - DELETE
2. All old .tint-*::before elements - DELETE
3. Old .organic-card gradient overlays - DELETE
4. Screenshot pulse animations - DELETE
5. Old soft shadow definitions - DELETE

Keep only new soft neobrutalist elements.
```

### Task 19: Test Soft Neobrutalist Implementation
```prompt
Verify soft neobrutalist redesign matches app aesthetic.

TESTING CHECKLIST:

VISUAL MATCH TO APP:
□ Warm beige background (#F5F3F0) matches app
□ Soft blue accent (#8CAAC8) matches app primary
□ Coral accent (#D28C82) present for variety
□ Friendly 10-14px radius matches app feel
□ Comfortable spacing (8px grid) matches app
□ SF Pro system fonts match app

NEOBRUTALIST STRUCTURE:
□ Chunky 2-3px borders visible
□ Soft colored offset shadows (0 4px 0 0)
□ Cards lift 4px on hover with shadow doubling
□ Clear visual hierarchy through structure
□ Layered depth with soft shadows

COLOR USAGE:
□ Blue (#8CAAC8): Primary features, navigation, CTAs
□ Coral (#D28C82): Secondary accents, pricing
□ Mint (#9BC4B5): Success indicators
□ Lavender (#B8A8C8): Tertiary variety
□ Peach (#E8B89A): Attention highlights
□ All colors muted/soft (not vibrant)

ANIMATION QUALITY:
□ Smooth 300ms transitions (Apple-like)
□ Gentle lifts (2-4px) not aggressive
□ Slight bounce on hover (subtle)
□ Smooth ease-out timing
□ Comfortable, not jarring

TYPOGRAPHY:
□ SF Pro system font stack
□ 17px body text (matches app)
□ 400/700 primary weights
□ Comfortable line heights (1.5 body)
□ Generous sizing overall

PERSONALITY:
□ Feels "structured but warm"
□ Confident but gentle
□ Approachable not intimidating
□ Matches app's friendly capability
□ Visual consistency with macOS app

FUNCTIONAL:
□ All interactions smooth
□ Focus states visible (soft blue)
□ Touch targets adequate
□ Forms comfortable to use
□ Navigation clear

DARK MODE:
□ Warm dark backgrounds (not pure black)
□ Accents remain soft but visible
□ Shadows adjusted for visibility
□ Maintains warm character

ACCESSIBILITY:
□ Color contrast passes WCAG AA
□ Focus outlines visible
□ Keyboard navigation works
□ Reduced motion respected
□ Screen reader compatible

RESPONSIVE:
□ Mobile: Structure maintains, comfortable
□ Tablet: Layout adapts gracefully
□ Desktop: Full aesthetic visible
□ Spacing comfortable at all sizes
```

---

## Expected Outcomes

After completing all tasks:

1. **Visual Consistency**: Website matches macOS app aesthetic perfectly
2. **Structured Warmth**: Neobrutalist structure with warm, soft colors
3. **Soft Colored Shadows**: Chunky borders and offset shadows in muted accent colors
4. **Friendly Precision**: Perfect alignment with comfortable, generous spacing
5. **Gentle Animations**: Smooth 300ms lifts with subtle bounce
6. **Comfortable Spacing**: 8px grid creates breathing room like the app
7. **Native macOS Vibes**: SF Pro fonts, familiar patterns, system-like feel
8. **Approachable Structure**: Clear hierarchy that's welcoming not intimidating
9. **App-Website Harmony**: Users feel visual continuity between touchpoints
10. **Memorable But Familiar**: Distinctive neobrutalist structure with recognizable OTO warmth

The redesign maintains:
- All HTML structure
- Full accessibility
- Mobile responsiveness
- JavaScript functionality
- Dark mode support (warm dark variant)

But transforms aesthetic to:
- "Structured warmth" over "organic flow"
- "Confident gentleness" over "tentative softness"
- "Visual consistency" over "website vs app disconnect"
- "Memorable structure" over "forgettable generic"
- "OTO personality" over "generic SaaS"

**Target Feeling**: "This website feels exactly like the app I just used - warm, capable, and distinctly OTO."
