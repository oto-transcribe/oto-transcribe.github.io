# Specification: Neobrutalist Warmth Redesign for OTO Website
> Transform OTO into a bold, colorful, memorable design with personality - serious about function, fun to use

## High-Level Objective

Redesign the OTO website using neobrutalist principles - bold colors, thick borders, colorful shadows, chunky elements, and playful precision. Create a design that's instantly memorable, shareable on social media, and appeals to creators while maintaining professional credibility. Think Figma-meets-Vercel-meets-Stripe with more personality.

**Target Aesthetic**: Bold but approachable, colorful but organized, playful but precise, confident but welcoming.

## Mid-Level Objective

1. **Bold Color System**: Pure white/black base with vibrant primary accents (Blue #0066FF, Yellow #FFD000, Red #FF3366)
2. **Chunky Borders**: 2-3px solid borders in accent colors, not just gray
3. **Colored Shadows**: Offset shadows using accent colors (0 4px 0 0 #0066FF) that lift on hover
4. **Friendly Radius**: 8-12px corners (friendly but not pill-shaped)
5. **Bouncy Animations**: Spring-like transitions with slight overshoot (300ms)
6. **Generous Spacing**: 8px grid with comfortable padding, clear visual breathing room
7. **Layered Depth**: Cards visibly float above backgrounds with clear z-axis

## Implementation Notes

### Design Philosophy Shift
- **FROM**: "Warm, organic, subtle"
- **TO**: "Bold, confident, memorable"
- **Personality**: "We're serious about privacy and performance, but we're not boring"

### Core Neobrutalist Principles
1. **Bold over subtle**: Strong colors, thick borders, clear divisions
2. **Playful precision**: Perfect alignment but with personality
3. **Depth through layers**: Cards cast colored shadows, creating visual hierarchy
4. **Colorful but organized**: Accent colors guide eye, not random
5. **Confident not arrogant**: Welcoming energy, not intimidating

### Key Technical Constraints
- Maintain HTML structure and semantics
- Preserve all accessibility features
- Keep mobile responsiveness
- Maintain JavaScript functionality
- Support dark mode (with vibrant colors still present)

### Color System Rules

**Light Mode (Default)**
```
Base Colors:
--color-bg:           #FFFFFF  (pure white)
--color-surface:      #FAFAFA  (subtle off-white for cards)
--color-text-primary: #0A0A0A  (near-black)
--color-text-secondary: #666666  (medium gray)

Primary Accents (Bold):
--color-blue:         #0066FF  (vibrant blue - primary)
--color-yellow:       #FFD000  (bright yellow - energy)
--color-red:          #FF3366  (coral red - attention)
--color-green:        #00CC66  (fresh green - success)
--color-purple:       #8B5CF6  (rich purple - premium)

Accent Usage Rules:
- Blue: Primary CTA, links, focus states, main features
- Yellow: Secondary CTA, highlights, energy moments
- Red: Pricing badges, attention items, errors
- Green: Success states, checkmarks, positive indicators
- Purple: Premium features, special callouts

Borders:
--border-primary:     2px solid var(--color-blue)
--border-accent:      3px solid var(--color-yellow)
--border-neutral:     2px solid #E5E5E5

Shadows (Colored Offset):
--shadow-blue:        0 4px 0 0 var(--color-blue)
--shadow-yellow:      0 4px 0 0 var(--color-yellow)
--shadow-red:         0 4px 0 0 var(--color-red)
--shadow-neutral:     0 4px 0 0 #E5E5E5

Hover Shadows (Lift):
--shadow-blue-hover:  0 8px 0 0 var(--color-blue)
--shadow-yellow-hover: 0 8px 0 0 var(--color-yellow)
```

**Dark Mode**
```
Base Colors:
--color-bg:           #0A0A0A  (near-black)
--color-surface:      #1A1A1A  (dark gray)
--color-text-primary: #FAFAFA  (off-white)
--color-text-secondary: #999999  (light gray)

Primary Accents (Remain Vibrant):
--color-blue:         #3399FF  (lighter blue for dark bg)
--color-yellow:       #FFDD33  (slightly muted yellow)
--color-red:          #FF6699  (lighter coral)
--color-green:        #33DD88  (lighter green)
--color-purple:       #A78BFA  (lighter purple)

Borders & Shadows: Accents remain colorful in dark mode
```

### Typography Transformation

**Font Stack**
```
Primary: "DM Sans", "Plus Jakarta Sans", Inter, -apple-system, sans-serif
Accent:  "Space Grotesk", "DM Sans", sans-serif (headings)
Mono:    "Fira Code", "Berkeley Mono", "SF Mono", monospace
```

**Font Sizes (Bold Scale)**
```
Hero:        clamp(2.5rem, 8vw, 6rem)    /* 40-96px */
Display:     clamp(2rem, 6vw, 4.5rem)    /* 32-72px */
H1:          clamp(1.75rem, 5vw, 3.5rem) /* 28-56px */
H2:          clamp(1.5rem, 4vw, 2.5rem)  /* 24-40px */
H3:          1.25rem                      /* 20px */
Body:        1.0625rem                    /* 17px - slightly larger */
Small:       0.9375rem                    /* 15px */
Micro:       0.8125rem                    /* 13px */
```

**Font Weights (Varied)**
```
Light:       300  (subtle de-emphasis)
Regular:     400  (body text)
Medium:      500  (slight emphasis)
SemiBold:    600  (subheadings)
Bold:        700  (headings)
ExtraBold:   800  (hero text, special moments)
```

**Letter Spacing**
```
Hero:        -0.02em  (tight but not compressed)
Headings:    -0.01em  (slightly tight)
Body:        0        (normal)
Uppercase:   0.05em   (for labels/badges)
```

**Line Heights**
```
Hero:        1.1   (tight but readable)
Headings:    1.2   (comfortable)
Body:        1.5   (generous, readable)
Small:       1.4   (compact but clear)
```

### Spacing System (8px Grid)

**Base Unit**: 8px (comfortable, friendly spacing)

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

**Chunky, Colorful Borders**

```
Cards:         2px solid var(--color-blue)
Hover:         3px solid var(--color-blue) (thicker)
Focus:         3px solid var(--color-yellow)
Sections:      2px solid #E5E5E5
Inputs:        2px solid #E5E5E5
Input Focus:   3px solid var(--color-blue)
```

**Border Radius (Friendly)**
```
Small:      6px
Default:    8px
Medium:     12px
Large:      16px
```

### Shadow System (Colored Offsets)

**Signature Neobrutalist Shadows**

```
Card Default:
  box-shadow: 0 4px 0 0 var(--color-blue);
  /* Solid offset shadow below */

Card Hover (lifts up):
  transform: translateY(-4px);
  box-shadow: 0 8px 0 0 var(--color-blue);
  /* Shadow doubles, card moves up 4px */

Button Default:
  box-shadow: 0 4px 0 0 currentColor;
  /* Shadow matches button border color */

Button Hover:
  transform: translateY(-2px);
  box-shadow: 0 6px 0 0 currentColor;
  /* Lifts slightly */

Button Active (pressed):
  transform: translateY(2px);
  box-shadow: 0 2px 0 0 currentColor;
  /* Presses down */

Mixed Shadows (depth):
  box-shadow:
    0 0 0 2px var(--color-blue),        /* Border */
    0 4px 0 0 var(--color-blue),        /* Offset shadow */
    0 4px 12px 0 rgba(0,102,255,0.15); /* Soft glow */
```

### Animation System (Bouncy)

**Spring-Like Transitions**

```
Duration:   300ms (medium, noticeable)
Easing:     cubic-bezier(0.34, 1.56, 0.64, 1) /* Bounce overshoot */
Alt Easing: cubic-bezier(0.68, -0.55, 0.265, 1.55) /* Playful */

Hover Lift:
  transition: transform 300ms var(--ease-bounce),
              box-shadow 300ms var(--ease-bounce);
  transform: translateY(-4px);

Press Down:
  transition: transform 150ms ease-out,
              box-shadow 150ms ease-out;
  transform: translateY(2px);
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
- assets/css/styles.css - Complete neobrutalist redesign

Files to create:
- Plans/neobrutalist-redesign-spec.md (this file)

---

## Low-Level Tasks

### Task 1: Establish Neobrutalist Color System
```prompt
Create bold, vibrant color system with colorful shadows.

FILE TO UPDATE: assets/css/styles.css (lines 40-140)

REPLACE all color variables:

:root {
  /* Base (high contrast) */
  --color-bg:           #FFFFFF;
  --color-surface:      #FAFAFA;
  --color-text-primary: #0A0A0A;
  --color-text-secondary: #666666;

  /* Primary Accents (Bold) */
  --color-blue:         #0066FF;
  --color-yellow:       #FFD000;
  --color-red:          #FF3366;
  --color-green:        #00CC66;
  --color-purple:       #8B5CF6;

  /* Semantic */
  --color-primary:      var(--color-blue);
  --color-secondary:    var(--color-yellow);
  --color-error:        var(--color-red);
  --color-success:      var(--color-green);

  /* Borders (Chunky) */
  --border-width:       2px;
  --border-width-thick: 3px;
  --border-color:       #E5E5E5;

  /* Shadows (Colored Offset) */
  --shadow-blue:        0 4px 0 0 var(--color-blue);
  --shadow-blue-hover:  0 8px 0 0 var(--color-blue);
  --shadow-yellow:      0 4px 0 0 var(--color-yellow);
  --shadow-yellow-hover: 0 8px 0 0 var(--color-yellow);
  --shadow-red:         0 4px 0 0 var(--color-red);
  --shadow-neutral:     0 4px 0 0 #E5E5E5;
  --shadow-neutral-hover: 0 8px 0 0 #E5E5E5;

  /* Radius (Friendly) */
  --radius-sm:          6px;
  --radius-md:          8px;
  --radius-lg:          12px;
  --radius-xl:          16px;

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
  --font-primary: "DM Sans", "Plus Jakarta Sans", Inter, -apple-system, sans-serif;
  --font-heading: "Space Grotesk", "DM Sans", sans-serif;
  --font-mono:    "Fira Code", "Berkeley Mono", monospace;

  /* Animations */
  --ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-playful: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  --duration-fast: 150ms;
  --duration-medium: 300ms;
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-bg:           #0A0A0A;
    --color-surface:      #1A1A1A;
    --color-text-primary: #FAFAFA;
    --color-text-secondary: #999999;

    /* Lighter accents for dark mode */
    --color-blue:         #3399FF;
    --color-yellow:       #FFDD33;
    --color-red:          #FF6699;
    --color-green:        #33DD88;
    --color-purple:       #A78BFA;

    --border-color:       #333333;
  }
}
```

### Task 2: Implement Neobrutalist Typography
```prompt
Establish bold, varied typography with generous sizing.

FILE TO UPDATE: assets/css/styles.css

UPDATE body and base styles:

body {
  margin: 0;
  background: var(--color-bg);
  color: var(--color-text-primary);
  font-family: var(--font-primary);
  font-size: 17px;
  line-height: 1.5;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
  letter-spacing: -0.01em;
}

h1 { font-size: clamp(1.75rem, 5vw, 3.5rem); }
h2 { font-size: clamp(1.5rem, 4vw, 2.5rem); }
h3 { font-size: 1.25rem; }

.hero__title {
  font-family: var(--font-heading);
  font-size: clamp(2.5rem, 8vw, 6rem);
  font-weight: 800; /* Extra bold */
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin: 0 0 var(--space-3);
  color: var(--color-text-primary);
}

.hero__lead {
  font-size: 1.125rem; /* Larger body */
  font-weight: 400;
  line-height: 1.5;
  max-width: 640px;
  margin: 0 0 var(--space-6);
  color: var(--color-text-secondary);
}

/* Bold section headers */
.section__header h2 {
  font-family: var(--font-heading);
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.01em;
}
```

### Task 3: Create Colorful Shadow Cards
```prompt
Transform cards to use colored offset shadows with lift effect.

FILE TO UPDATE: assets/css/styles.css

REPLACE .organic-card and all card variants:

.organic-card,
.feature-card,
.value-card,
.guarantee-card {
  background: var(--color-surface);
  border: 2px solid var(--color-blue);
  border-radius: var(--radius-lg);
  padding: var(--space-4);
  box-shadow: var(--shadow-blue);
  transition: transform var(--duration-medium) var(--ease-bounce),
              box-shadow var(--duration-medium) var(--ease-bounce),
              border-color var(--duration-medium) var(--ease-bounce);
}

.organic-card:hover,
.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-blue-hover);
  border-color: var(--color-yellow);
}

/* Different accent colors for variety */
.feature-card:nth-child(3n+1) {
  border-color: var(--color-blue);
  box-shadow: var(--shadow-blue);
}

.feature-card:nth-child(3n+1):hover {
  box-shadow: var(--shadow-blue-hover);
  border-color: var(--color-purple);
}

.feature-card:nth-child(3n+2) {
  border-color: var(--color-yellow);
  box-shadow: var(--shadow-yellow);
}

.feature-card:nth-child(3n+2):hover {
  box-shadow: var(--shadow-yellow-hover);
  border-color: var(--color-red);
}

.feature-card:nth-child(3n+3) {
  border-color: var(--color-red);
  box-shadow: var(--shadow-red);
}

.feature-card:nth-child(3n+3):hover {
  box-shadow: 0 8px 0 0 var(--color-red);
  border-color: var(--color-green);
}

/* Remove old pseudo-elements */
.organic-card::before,
.organic-card::after {
  display: none;
}
```

### Task 4: Design Chunky Buttons
```prompt
Create bold, colorful buttons with press-down effect.

FILE TO UPDATE: assets/css/styles.css (lines 700-709)

REPLACE all button styles:

.warm-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-1);
  padding: var(--space-2) var(--space-4);
  border: 3px solid currentColor;
  border-radius: var(--radius-md);
  background: var(--color-bg);
  color: var(--color-text-primary);
  font-family: var(--font-primary);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 0 0 currentColor;
  transition: transform var(--duration-fast) ease-out,
              box-shadow var(--duration-fast) ease-out;
}

.warm-button.primary {
  background: var(--color-blue);
  color: #FFFFFF;
  border-color: var(--color-blue);
  box-shadow: 0 4px 0 0 var(--color-blue);
}

.warm-button.secondary {
  background: var(--color-yellow);
  color: var(--color-text-primary);
  border-color: var(--color-yellow);
  box-shadow: 0 4px 0 0 var(--color-yellow);
}

.warm-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 0 0 currentColor;
}

.warm-button:active {
  transform: translateY(2px);
  box-shadow: 0 2px 0 0 currentColor;
}

.warm-button:focus-visible {
  outline: 3px solid var(--color-yellow);
  outline-offset: 3px;
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
  transform: translateY(3px);
  box-shadow: 0 3px 0 0 currentColor;
}
```

### Task 5: Colorful Hero Section
```prompt
Create bold, layered hero with colored accents.

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
  font-size: clamp(2.5rem, 8vw, 6rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin: 0 0 var(--space-3);

  /* Optional: Gradient text on key word */
  background: linear-gradient(135deg, var(--color-blue), var(--color-purple));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  /* Or solid color if gradient too much */
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

/* Trust line with colored icon */
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
  background: var(--color-green);
  color: white;
  border-radius: 50%;
  font-weight: 700;
  font-size: 0.75rem;
}

/* Hero visual with colored border */
.hero__visual {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid var(--color-blue);
  border-radius: var(--radius-xl);
  background: var(--color-surface);
  box-shadow: var(--shadow-blue);
  overflow: hidden;
}
```

### Task 6: Layered Section Backgrounds
```prompt
Add subtle background colors and borders to sections.

FILE TO UPDATE: assets/css/styles.css (lines 173-176)

UPDATE section styling:

.section {
  max-width: 100%;
  margin: 0;
  padding: var(--space-12) var(--space-6);
  background: var(--color-bg);
  border-top: 2px solid var(--border-color);
}

.section--alt {
  background: var(--color-surface);
  border-top: 3px solid var(--color-blue);
  border-bottom: 3px solid var(--color-blue);
  position: relative;
}

/* Optional: Colored accent stripe */
.section--alt::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg,
    var(--color-blue),
    var(--color-purple),
    var(--color-red),
    var(--color-yellow)
  );
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

/* Optional: Colored underline on headers */
.section__header h2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--color-yellow);
  border-radius: 2px;
}

.section__lead {
  font-size: 1.0625rem;
  line-height: 1.5;
  color: var(--color-text-secondary);
  max-width: 640px;
  margin: var(--space-3) auto 0;
}
```

### Task 7: Vibrant Feature Cards
```prompt
Style feature cards with colorful icons and varied borders.

FILE TO UPDATE: assets/css/styles.css

UPDATE feature card styling:

.feature-card {
  background: var(--color-surface);
  border: 2px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  box-shadow: var(--shadow-neutral);
  transition: transform var(--duration-medium) var(--ease-bounce),
              box-shadow var(--duration-medium) var(--ease-bounce),
              border-color var(--duration-medium) ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-neutral-hover);
}

/* Colorful icons */
.feature-card__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md);
  font-size: 24px;
  border: 2px solid currentColor;
  box-shadow: 0 4px 0 0 currentColor;
}

/* Color coding with vibrant palette */
.feature-card:nth-child(5n+1) .feature-card__icon {
  background: var(--color-blue);
  color: white;
  border-color: var(--color-blue);
}

.feature-card:nth-child(5n+2) .feature-card__icon {
  background: var(--color-yellow);
  color: var(--color-text-primary);
  border-color: var(--color-yellow);
}

.feature-card:nth-child(5n+3) .feature-card__icon {
  background: var(--color-red);
  color: white;
  border-color: var(--color-red);
}

.feature-card:nth-child(5n+4) .feature-card__icon {
  background: var(--color-green);
  color: white;
  border-color: var(--color-green);
}

.feature-card:nth-child(5n+5) .feature-card__icon {
  background: var(--color-purple);
  color: white;
  border-color: var(--color-purple);
}

/* Hover: Border matches icon color */
.feature-card:nth-child(5n+1):hover { border-color: var(--color-blue); }
.feature-card:nth-child(5n+2):hover { border-color: var(--color-yellow); }
.feature-card:nth-child(5n+3):hover { border-color: var(--color-red); }
.feature-card:nth-child(5n+4):hover { border-color: var(--color-green); }
.feature-card:nth-child(5n+5):hover { border-color: var(--color-purple); }

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

### Task 8: Bold Pricing Section
```prompt
Create vibrant pricing card with colored shadows and badges.

FILE TO UPDATE: assets/css/styles.css (lines 892-1168)

REPLACE pricing section:

.pricing-box {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-8);
  padding: var(--space-8);
  margin: 0 auto;
  max-width: 1200px;
  background: var(--color-surface);
  border: 3px solid var(--color-blue);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-blue);
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
  background: var(--color-green);
  color: white;
  border-radius: 50%;
  font-weight: 700;
  font-size: 0.875rem;
  flex-shrink: 0;
}

.pricing-card {
  position: relative;
  background: white;
  border: 3px solid var(--color-yellow);
  border-radius: var(--radius-xl);
  padding: var(--space-8) var(--space-6);
  text-align: center;
  box-shadow: var(--shadow-yellow);
}

/* Bold badge */
.pricing-card__badge {
  position: absolute;
  top: calc(var(--space-3) * -1);
  left: 50%;
  transform: translateX(-50%);
  background: var(--color-red);
  color: white;
  padding: var(--space-1) var(--space-4);
  border-radius: var(--radius-md);
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border: 3px solid var(--color-text-primary);
  box-shadow: 0 4px 0 0 var(--color-text-primary);
}

/* Colorful ribbon */
.pricing-card__ribbon {
  position: absolute;
  top: var(--space-4);
  right: var(--space-4);
  background: var(--color-purple);
  color: white;
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-md);
  border: 2px solid var(--color-text-primary);
  box-shadow: 0 4px 0 0 var(--color-text-primary);
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.05em;
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
  letter-spacing: 0.05em;
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
  text-decoration-thickness: 3px;
  text-decoration-color: var(--color-red);
}

.pricing-card__price-current {
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.02em;
  color: var(--color-text-primary);
}

.pricing-card__actions {
  margin: var(--space-4) 0;
}

.pricing-card__cta {
  min-width: 280px;
  box-shadow: 0 6px 0 0 var(--color-blue);
}

.pricing-card__note {
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  margin: var(--space-3) 0 0;
}

/* Colorful savings card */
.savings-card {
  border: 3px solid var(--color-green);
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  padding: var(--space-4);
  margin: var(--space-6) auto 0;
  text-align: center;
  box-shadow: 0 4px 0 0 var(--color-green);
}

.savings-card-headline {
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-green);
  margin-bottom: var(--space-2);
}

.savings-card-breakdown {
  font-size: 0.9375rem;
  color: var(--color-text-secondary);
}

.savings-card-highlight {
  color: var(--color-red);
  font-weight: 700;
}
```

### Task 9: Playful Navigation
```prompt
Create colorful, interactive navigation.

FILE TO UPDATE: assets/css/styles.css (lines 158-170)

UPDATE navigation:

.site-header {
  position: sticky;
  top: 0;
  background: var(--color-bg);
  border-bottom: 3px solid var(--color-blue);
  z-index: 50;
  box-shadow: 0 4px 0 0 var(--color-blue);
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
  font-weight: 800;
  color: var(--color-text-primary);
  /* Optional gradient */
  background: linear-gradient(135deg, var(--color-blue), var(--color-purple));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
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
  font-weight: 600;
  padding: var(--space-1) var(--space-2);
  color: var(--color-text-primary);
  border-radius: var(--radius-sm);
  border: 2px solid transparent;
  transition: all var(--duration-medium) var(--ease-bounce);
}

.nav__list a:hover {
  border-color: var(--color-yellow);
  background: var(--color-yellow);
  transform: translateY(-2px);
}

.nav__list a.active {
  border-color: var(--color-blue);
  background: var(--color-blue);
  color: white;
}

.nav__list a:focus-visible {
  outline: 3px solid var(--color-yellow);
  outline-offset: 2px;
}
```

### Task 10: Colorful FAQ Accordion
```prompt
Style FAQ with vibrant borders and smooth animations.

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
  border: 2px solid var(--border-color);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-neutral);
  transition: transform var(--duration-medium) var(--ease-bounce),
              box-shadow var(--duration-medium) var(--ease-bounce),
              border-color var(--duration-medium) ease;
}

.faq-item:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-neutral-hover);
  border-color: var(--color-blue);
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
  background: var(--color-yellow);
  color: var(--color-text-primary);
  border-radius: 50%;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  border: 2px solid var(--color-text-primary);
  transition: transform var(--duration-medium) var(--ease-playful),
              background-color var(--duration-medium) ease;
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
  border-top: 2px solid var(--border-color);
  margin-top: var(--space-2);
}

.faq-panel p {
  margin: var(--space-2) 0 0;
}

.faq-panel[hidden] {
  display: none;
}
```

### Task 11: Bouncy Animation System
```prompt
Implement spring-like animations with overshoot.

FILE TO UPDATE: assets/css/styles.css

UPDATE animation variables and apply globally:

:root {
  --ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-playful: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  --duration-fast: 150ms;
  --duration-medium: 300ms;
  --duration-slow: 500ms;
}

/* Apply bouncy transitions to interactive elements */
.warm-button,
.organic-card,
.feature-card,
.screenshot-card,
.faq-item,
.nav__list a {
  transition: transform var(--duration-medium) var(--ease-bounce),
              box-shadow var(--duration-medium) var(--ease-bounce),
              border-color var(--duration-medium) ease,
              background-color var(--duration-medium) ease;
}

/* Reduce motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  * {
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
  }

  :root {
    --ease-bounce: ease;
    --ease-playful: ease;
  }
}
```

### Task 12: Colored Video Wrapper
```prompt
Style video demo with colorful border and shadow.

FILE TO UPDATE: assets/css/styles.css (lines 560-663)

UPDATE video wrapper:

.video-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  aspect-ratio: 16 / 10;
  border: 3px solid var(--color-blue);
  border-radius: var(--radius-xl);
  background: var(--color-surface);
  box-shadow: var(--shadow-blue);
  overflow: hidden;
  transition: transform var(--duration-medium) var(--ease-bounce),
              box-shadow var(--duration-medium) var(--ease-bounce),
              border-color var(--duration-medium) ease;
}

.video-wrapper:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-blue-hover);
  border-color: var(--color-purple);
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
  transition: opacity var(--duration-medium) ease;
}

.demo-slideshow .slide-layer.visible {
  opacity: 1;
}

/* Colorful controls */
.slideshow-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 3;
  width: 48px;
  height: 48px;
  border: 3px solid var(--color-yellow);
  border-radius: var(--radius-md);
  background: var(--color-yellow);
  color: var(--color-text-primary);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 4px 0 0 var(--color-yellow);
  transition: transform var(--duration-fast) ease-out,
              box-shadow var(--duration-fast) ease-out;
}

.slideshow-control:hover {
  transform: translateY(calc(-50% - 2px));
  box-shadow: 0 6px 0 0 var(--color-yellow);
}

.slideshow-control:active {
  transform: translateY(calc(-50% + 2px));
  box-shadow: 0 2px 0 0 var(--color-yellow);
}

.slideshow-control.prev { left: var(--space-3); }
.slideshow-control.next { right: var(--space-3); }
```

### Task 13: Vibrant Screenshot Gallery
```prompt
Add colorful borders to screenshot cards.

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
  border: 2px solid var(--border-color);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-neutral);
  cursor: pointer;
  transition: transform var(--duration-medium) var(--ease-bounce),
              box-shadow var(--duration-medium) var(--ease-bounce),
              border-color var(--duration-medium) ease;
}

.screenshot-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-neutral-hover);
}

/* Vary border colors */
.screenshot-card:nth-child(4n+1) { border-color: var(--color-blue); }
.screenshot-card:nth-child(4n+2) { border-color: var(--color-yellow); }
.screenshot-card:nth-child(4n+3) { border-color: var(--color-red); }
.screenshot-card:nth-child(4n+4) { border-color: var(--color-purple); }

.screenshot-card:nth-child(4n+1):hover {
  border-color: var(--color-purple);
  box-shadow: var(--shadow-blue-hover);
}
.screenshot-card:nth-child(4n+2):hover {
  border-color: var(--color-red);
  box-shadow: var(--shadow-yellow-hover);
}
.screenshot-card:nth-child(4n+3):hover {
  border-color: var(--color-green);
  box-shadow: 0 8px 0 0 var(--color-red);
}
.screenshot-card:nth-child(4n+4):hover {
  border-color: var(--color-blue);
  box-shadow: 0 8px 0 0 var(--color-purple);
}

.screenshot-card picture {
  display: block;
  background: var(--color-surface);
}

.screenshot-card img {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 5/4;
  object-fit: cover;
  transition: transform var(--duration-medium) var(--ease-bounce);
}

.screenshot-card:hover img {
  transform: scale(1.05);
}

.screenshot-card figcaption {
  padding: var(--space-3);
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  text-align: center;
  border-top: 2px solid var(--border-color);
}
```

### Task 14: Colorful Input Fields
```prompt
Style form inputs with colorful focus states.

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
  border: 2px solid var(--border-color);
  border-radius: var(--radius-md);
  color: var(--color-text-primary);
  outline: none;
  box-shadow: var(--shadow-neutral);
  transition: border-color var(--duration-medium) ease,
              box-shadow var(--duration-medium) var(--ease-bounce),
              transform var(--duration-medium) var(--ease-bounce);
}

input:focus,
textarea:focus {
  border-color: var(--color-blue);
  border-width: 3px;
  transform: translateY(-2px);
  box-shadow: 0 6px 0 0 var(--color-blue);
  padding: calc(var(--space-2) - 1px) calc(var(--space-3) - 1px); /* Compensate for thicker border */
}

input::placeholder,
textarea::placeholder {
  color: var(--color-text-secondary);
  opacity: 0.6;
}
```

### Task 15: Playful Guarantee Cards
```prompt
Add colorful styling to guarantee section.

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
  border: 2px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  box-shadow: var(--shadow-neutral);
  transition: transform var(--duration-medium) var(--ease-bounce),
              box-shadow var(--duration-medium) var(--ease-bounce),
              border-color var(--duration-medium) ease;
}

.guarantee-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-neutral-hover);
}

.reality-card {
  border-color: var(--color-red);
  box-shadow: var(--shadow-red);
}

.reality-card:hover {
  box-shadow: 0 8px 0 0 var(--color-red);
  border-color: var(--color-purple);
}

.promise-card {
  border-color: var(--color-green);
  box-shadow: 0 4px 0 0 var(--color-green);
}

.promise-card:hover {
  box-shadow: 0 8px 0 0 var(--color-green);
  border-color: var(--color-blue);
}

/* Colorful icon */
.card-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: var(--radius-lg);
  margin-bottom: var(--space-4);
  border: 3px solid currentColor;
  box-shadow: 0 4px 0 0 currentColor;
}

.reality-card .card-icon {
  background: var(--color-red);
  color: white;
  border-color: var(--color-red);
}

.promise-card .card-icon {
  background: var(--color-green);
  color: white;
  border-color: var(--color-green);
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
  border: 3px solid var(--color-blue);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  box-shadow: var(--shadow-blue);
}
```

### Task 16: Vibrant Footer
```prompt
Create colorful, friendly footer.

FILE TO UPDATE: assets/css/styles.css (lines 798-800)

UPDATE footer:

.site-footer {
  text-align: center;
  padding: var(--space-12) var(--space-6);
  border-top: 3px solid var(--color-blue);
  background: var(--color-surface);
  box-shadow: inset 0 4px 0 0 var(--color-blue);
}

.site-footer p {
  margin: 0;
  font-size: 0.9375rem;
  color: var(--color-text-secondary);
  font-weight: 500;
}

/* Optional: Colorful heart */
.site-footer::after {
  content: "❤️";
  display: inline-block;
  margin-left: var(--space-1);
  animation: heartbeat 1.5s ease-in-out infinite;
}

@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  25% { transform: scale(1.1); }
  50% { transform: scale(1); }
}
```

### Task 17: Sticky Buy Bar with Color
```prompt
Style mobile sticky bar with vibrant colors.

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
  background: var(--color-surface);
  border-top: 3px solid var(--color-blue);
  padding: var(--space-3) var(--space-4);
  z-index: 60;
  box-shadow: 0 -4px 0 0 var(--color-blue);
  transition: bottom var(--duration-medium) var(--ease-bounce);
}

.sticky-buy.is-visible {
  bottom: 0;
}

.sticky-buy__price {
  font-weight: 700;
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
  font-weight: 700;
  font-size: 1rem;
  border: 3px solid var(--color-blue);
  box-shadow: 0 4px 0 0 var(--color-blue);
  text-decoration: none;
  transition: transform var(--duration-fast) ease-out,
              box-shadow var(--duration-fast) ease-out;
}

.sticky-buy__cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 0 0 var(--color-blue);
}

.sticky-buy__cta:active {
  transform: translateY(2px);
  box-shadow: 0 2px 0 0 var(--color-blue);
}
```

### Task 18: Remove Old Decorative Elements
```prompt
Clean up old organic design pseudo-elements.

FILE TO UPDATE: assets/css/styles.css

REMOVE or set display:none:

1. body::before (warm gradient overlay) - DELETE
2. All .tint-*::before elements - DELETE
3. Old .organic-card::before gradient - DELETE
4. Screenshot pulse animation - DELETE
5. Old soft shadow definitions - DELETE

Keep only new colorful elements added in neobrutalist style.
```

### Task 19: Test Neobrutalist Implementation
```prompt
Verify neobrutalist redesign achieves bold, memorable aesthetic.

TESTING CHECKLIST:

VISUAL VERIFICATION:
□ Bold colors visible (blue, yellow, red, green, purple)
□ Chunky borders (2-3px) throughout
□ Colorful offset shadows (0 4px 0 0 [color])
□ Friendly border radius (8-12px)
□ Generous spacing (8px grid)
□ Cards lift on hover with colored shadows
□ Vibrant icons with colored backgrounds

COLOR USAGE:
□ Blue: Primary CTAs, main features, navigation accents
□ Yellow: Secondary CTAs, highlights, accents
□ Red: Pricing badges, attention items
□ Green: Success indicators, checkmarks
□ Purple: Premium callouts, variety
□ Colors consistent but not overwhelming

ANIMATION VERIFICATION:
□ Bouncy transitions (300ms with overshoot)
□ Cards lift 4px on hover
□ Shadows double on hover
□ Buttons press down on active
□ Smooth spring-like feel to interactions

LAYOUT VERIFICATION:
□ 8px grid system maintained
□ Comfortable padding throughout
□ Sections have clear borders/divisions
□ Cards float above backgrounds
□ Clear visual hierarchy through color + size

TYPOGRAPHY:
□ Bold headings (700-800 weight)
□ Slightly larger body text (17px)
□ Varied font weights (300-800)
□ Comfortable line heights (1.5 body)
□ DM Sans or similar friendly font

PERSONALITY CHECK:
□ Design feels approachable not intimidating
□ Colorful but organized
□ Playful but professional
□ Confident but welcoming
□ Memorable and shareable

FUNCTIONAL:
□ All interactions work smoothly
□ Focus states highly visible
□ Touch targets adequate (48px min)
□ Forms easy to use
□ Navigation clear

DARK MODE:
□ Colors remain vibrant (lighter variants)
□ Shadows still visible
□ Contrast maintained
□ Accents pop against dark bg

ACCESSIBILITY:
□ Color contrast ratios pass WCAG AA
□ Focus outlines visible (3px colored)
□ Keyboard navigation works
□ Reduced motion respected
□ Screen reader compatible

RESPONSIVE:
□ Mobile: Cards stack, maintain shadows
□ Tablet: Layout adapts gracefully
□ Desktop: Full vibrant aesthetic
□ All breakpoints maintain personality
```

---

## Expected Outcomes

After completing all tasks:

1. **Bold & Memorable**: Vibrant colors that stick in users' minds
2. **Playful Precision**: Perfect alignment with personality
3. **Colorful Shadows**: Signature offset shadows in accent colors
4. **Bouncy Interactions**: Spring-like animations with overshoot
5. **Friendly Forms**: Chunky borders (8-12px radius) not harsh rectangles
6. **Generous Spacing**: 8px grid creates breathing room
7. **Layered Depth**: Clear z-axis hierarchy with colored shadows
8. **Shareable Aesthetic**: Screenshots look great on social media
9. **Approachable Confidence**: Serious tool that's fun to use
10. **Creator Appeal**: Appeals to YouTubers, podcasters, content creators

The redesign maintains:
- All HTML structure
- Full accessibility
- Mobile responsiveness
- JavaScript functionality
- Dark mode support (with vibrant colors)

But transforms aesthetic to:
- "Bold but friendly" over "subtle and warm"
- "Memorable" over "generic"
- "Personality" over "corporate"
- "Creator tool" over "enterprise tool"
- "Fun but professional" over "serious and sterile"

**Target Feeling**: When users see OTO, they think "This looks fun to use, and they clearly care about design."
