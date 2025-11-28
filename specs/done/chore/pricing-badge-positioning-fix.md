# Bug: Pricing Section Badge Positioning and Spacing

## Bug Description
The two badges on the pricing CTA card have poor spacing and positioning:
1. The "Founder's Pricing" badge needs to be anchored so its vertical center sits on the card's top border (half on beige background, half on white card)
2. The "Founder's Pricing" badge needs to be horizontally centered on the card
3. The "Limited time 50% off" ribbon needs to be moved up approximately 30 pixels from the pricing text
4. The one-time payment prices (old $30 and current $15) need to be increased in size to fill empty space and reduce the visual gap

**Expected behavior**: Badges should be positioned according to the reference image with proper vertical anchoring and spacing
**Actual behavior**: Badges are currently not properly centered or spaced, creating awkward white space gaps

## Problem Statement
The pricing card badge positioning system needs to be adjusted to:
- Anchor the "Founder's Pricing" badge at the card's top border with vertical center alignment
- Center the "Founder's Pricing" badge horizontally on the card
- Reposition the "Limited time 50% off" ribbon closer to the pricing numbers (30px gap)
- Increase font sizes of the price text to fill space more effectively

## Solution Statement
Modify the CSS for `.pricing-card__badge` and `.pricing-card__ribbon` to:
1. Change `.pricing-card__badge` positioning from `transform: translate(-50%, -50%)` to `transform: translate(-50%, 0)` so the vertical center anchors on the border
2. Adjust `.pricing-card__ribbon` top spacing from `var(--space-6)` to a calculated value that positions it 30px above the price
3. Increase `.pricing-card__price-original` font-size from `1.5rem` to `2rem`
4. Increase `.pricing-card__price-current` font-size from `clamp(3rem, 8vw, 5rem)` to `clamp(4rem, 10vw, 6rem)`

## Steps to Reproduce
1. Open the website in a browser
2. Navigate to the pricing section
3. Observe the "Founder's Pricing" badge positioning - it's not centered on the border
4. Observe the "Limited time 50% off" ribbon - it has too much space below it
5. Observe the price numbers - they appear small with excessive white space

## Root Cause Analysis
The current CSS positioning for badges uses:
- `.pricing-card__badge` with `top: 0` and `transform: translate(-50%, -50%)` which centers the badge above the border rather than anchoring its vertical center on the border
- `.pricing-card__ribbon` with `top: var(--space-6)` (48px) which creates too much distance from the pricing text below
- Font sizes for prices that are too conservative, leaving excessive white space in the card

The transform translation of -50% on the Y-axis moves the entire badge up by half its height, placing it fully above the border line rather than straddling it.

## Relevant Files

### Files to modify:

**assets/css/styles.css** (lines 1166-1246)
- Contains `.pricing-card__badge` styling (lines 1166-1183) - needs positioning adjustment to anchor vertical center on border
- Contains `.pricing-card__ribbon` styling (lines 1186-1213) - needs top position adjustment to reduce spacing
- Contains `.pricing-card__price-original` styling (lines 1231-1238) - needs font-size increase
- Contains `.pricing-card__price-current` styling (lines 1240-1246) - needs font-size increase

## Step by Step Tasks

### 1. Adjust "Founder's Pricing" badge vertical positioning
- Update `.pricing-card__badge` in `assets/css/styles.css` line 1170
- Change `transform: translate(-50%, -50%)` to `transform: translate(-50%, 0)`
- This will anchor the vertical center of the badge on the card's top border

### 2. Reposition "Limited time 50% off" ribbon
- Update `.pricing-card__ribbon` in `assets/css/styles.css` line 1188
- Change `top: var(--space-6)` to `top: calc(var(--space-6) + 30px)` to move it closer to pricing
- OR better yet, change to `top: 80px` for more precise control based on the reference image

### 3. Increase old price font size
- Update `.pricing-card__price-original` in `assets/css/styles.css` line 1232
- Change `font-size: 1.5rem` to `font-size: 2rem`
- This will make the strikethrough price more prominent and fill space

### 4. Increase current price font size
- Update `.pricing-card__price-current` in `assets/css/styles.css` line 1241
- Change `font-size: clamp(3rem, 8vw, 5rem)` to `clamp(4rem, 10vw, 6rem)`
- This will make the $15 price larger and reduce empty space

### 5. Test responsive behavior
- Test the changes at various viewport widths (mobile, tablet, desktop)
- Ensure badges don't overlap on mobile devices
- Verify pricing text scales appropriately on smaller screens

### 6. Run validation commands
- Execute all validation commands below to ensure no regressions
- Visually inspect the pricing section at multiple breakpoints
- Compare with the reference image to verify proper positioning

## Validation Commands
Execute every command to validate the bug is fixed with zero regressions.

- `open http://localhost:8080` - Open the local development server
- `python3 -m http.server 8080` - Start local server if not running
- Manual visual inspection: Navigate to pricing section and verify:
  1. "Founder's Pricing" badge is centered horizontally with its vertical center on the coral border
  2. "Limited time 50% off" ribbon is approximately 30px above the price text
  3. Price numbers ($30 and $15) are larger and fill the space better
  4. Layout looks correct at mobile (375px), tablet (768px), and desktop (1440px) widths
- Compare final result with reference image provided by user

## Notes
- The key insight is that `transform: translate(-50%, -50%)` centers the element above the anchor point, but we want the vertical CENTER of the badge to BE the anchor point
- Changing to `transform: translate(-50%, 0)` keeps horizontal centering while making the top edge of the badge align with `top: 0`, which effectively centers the badge on the border
- The ribbon positioning may need fine-tuning based on actual card height and padding
- Font size increases should maintain readability and not break the card layout on mobile
- Consider testing with different browser zoom levels to ensure consistent appearance
