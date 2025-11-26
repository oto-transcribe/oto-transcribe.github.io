# Chore: Update Pricing to Holiday Special

## Chore Description
Update the pricing section to reflect a holiday special promotion:
1. Change the discount from "50% off" to "100% off" (free)
2. Change the ribbon label from "Limited time" to "Holiday Special"
3. Change the discounted price from "$15" to "$0"
4. Update the aria-label to reflect the new free pricing

These changes will promote the app as completely free during the holiday period.

## Relevant Files
Use these files to resolve the chore:

- `index.html` (lines 361-370) - Contains the pricing card markup with:
  - Line 361: "Limited time" ribbon title that needs to change to "Holiday Special"
  - Line 362: "50% off" ribbon subtitle that needs to change to "100% off"
  - Line 365: aria-label pricing description
  - Line 367: "$15" price that needs to change to "$0"
  - Line 370: aria-label for download button with pricing

## Step by Step Tasks

### 1. Update Pricing Ribbon Titles
- Change line 361 from `<span class="pricing-card__ribbon-title">Limited time</span>` to `<span class="pricing-card__ribbon-title">Holiday Special</span>`
- Change line 362 from `<span class="pricing-card__ribbon-subtitle">50% off</span>` to `<span class="pricing-card__ribbon-subtitle">100% off</span>`

### 2. Update Price Display
- Change line 367 from `<span class="pricing-card__price-current">$15</span>` to `<span class="pricing-card__price-current">$0</span>`

### 3. Update Accessibility Labels
- Update line 365 aria-label from `aria-label="Discounted price $15, originally $30"` to `aria-label="Holiday special: free"`
- Update line 370 aria-label from `aria-label="Get oto on the Mac App Store for $15"` to `aria-label="Get oto on the Mac App Store free"`

## Validation Commands
Execute every command to validate the chore is complete with zero regressions.

- `grep -n "Holiday Special" index.html` - Verify ribbon title updated
- `grep -n "100% off" index.html` - Verify discount percentage updated
- `grep -n '\$0' index.html` - Verify price changed to $0
- `open http://localhost:8080/#pricing` - Visually verify pricing card displays "Holiday Special", "100% off", and "$0"

## Notes
- The original price ($30) reference in the aria-label has been removed since we're now offering the app completely free
- Both accessibility labels have been updated to reflect the free status
- The visual design (colors, animations) remains unchanged; only content and accessibility attributes are modified
