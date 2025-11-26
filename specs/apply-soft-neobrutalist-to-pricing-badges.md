# Chore: Apply Soft Neobrutalist Design to Pricing Badges

## Chore Description
Apply the soft neobrutalist redesign aesthetic from the Plans/soft-neobrutalist-redesign-spec.md specifically to the two pricing card badges:
1. FOUNDER'S PRICING badge (top center, blue)
2. LIMITED TIME 50% OFF ribbon (centered below, peach/coral)

The badges need to match the warm, structured aesthetic with soft colored shadows, chunky borders, and the app's color palette while maintaining their current positioning.

## Relevant Files
Use these files to resolve the chore:

- `Plans/soft-neobrutalist-redesign-spec.md` - Contains the complete design system specification including:
  - Warm color palette matching the macOS app
  - Soft colored shadow system
  - Border styles (chunky but soft)
  - Typography specifications
- `assets/css/styles.css` - Contains current badge styles at:
  - Lines 1166-1181: `.pricing-card__badge` (FOUNDER'S PRICING)
  - Lines 1184-1211: `.pricing-card__ribbon` (LIMITED TIME 50% OFF)
  - Lines 1995-1998: Conflicting shimmer effect styles that need adjustment
- `index.html` - Contains badge HTML structure at lines 359-363

## Step by Step Tasks
IMPORTANT: Execute every step in order, top to bottom.

### 1. Update Color Variables for Badge System
- Add the soft neobrutalist color variables to the CSS if not already present
- Ensure we have access to:
  - `--color-blue: #8CAAC8` (soft blue for FOUNDER'S badge)
  - `--color-peach: #E8B89A` (soft peach for badge accent)
  - Peach gradient colors for LIMITED TIME ribbon: `#f6d5c7` to `#d9a99e`
  - Shadow colors for both badges

### 2. Update FOUNDER'S PRICING Badge Styles
- Apply soft blue background `#8CAAC8` (matches app primary)
- Keep white text color for contrast
- Update border to be chunky but soft (2-3px solid)
- Apply soft colored offset shadow: `0 4px 0 0 rgba(140,170,200,0.3)`
- Add hover state with gentle lift (-2px) and deeper shadow
- Ensure proper pill shape with `border-radius: 999px`
- Remove any conflicting border styles

### 3. Update LIMITED TIME 50% OFF Ribbon Styles
- Apply peach/coral gradient: `linear-gradient(145deg, #f6d5c7 0%, #d9a99e 100%)`
- Update text color to warm dark `#3d2522` for contrast
- Apply soft rounded corners with `border-radius: 16px`
- Add soft colored offset shadow: `0 4px 0 0 rgba(202, 139, 121, 0.35)`
- Remove old border styles, use gradient background only
- Add hover state with gentle lift and deeper shadow

### 4. Fix Conflicting Shimmer Effect Styles
- Remove `position: relative` from lines 1995-1998 that breaks absolute positioning
- Keep only `overflow: hidden` for the shimmer effect
- Ensure badges maintain proper absolute positioning

### 5. Add Smooth Animation Transitions
- Apply 300ms smooth transitions to both badges
- Use Apple-inspired easing: `cubic-bezier(0.25, 0.46, 0.45, 0.94)`
- Ensure hover states have gentle lift animations
- Add transform and box-shadow transitions

### 6. Test Visual Consistency
- Verify badges match the warm, soft aesthetic from the spec
- Ensure proper centering and positioning
- Check that hover states work smoothly
- Confirm colors match the app's warm palette
- Test that both badges have the structured but friendly appearance

### 7. Run Validation Commands
- Navigate to the site and visually verify the badges
- Test hover interactions
- Ensure no positioning issues
- Verify colors match specification

## Validation Commands
Execute every command to validate the chore is complete with zero regressions.

- Open `http://localhost:8080/#pricing` in browser
- Visually verify FOUNDER'S PRICING badge has soft blue background (#8CAAC8)
- Visually verify LIMITED TIME ribbon has peach gradient background
- Test hover states on both badges for smooth lift animation
- Verify badges are properly centered and positioned
- Check that text colors provide good contrast
- Ensure no CSS conflicts or console errors

## Notes
- The soft neobrutalist style emphasizes "structured warmth" - clear borders and shadows but in soft, muted colors
- Both badges should feel cohesive with the app's warm, approachable aesthetic
- The shadows should be colored offsets (not gray) to match the neobrutalist style
- Transitions should be smooth and gentle (300ms) not aggressive
- The overall feeling should be "confident but gentle" matching the macOS app