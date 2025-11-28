# Chore: Update Module Pages Background Color

## Chore Description
Change the background color of all module pages from the current `#F5F3F0` to `#F5F3F1`. This is a subtle color adjustment (one hex digit difference) that affects the main background color used across all pages in the site.

## Relevant Files
Use these files to resolve the chore:

- `assets/css/partials/_variables.css` - **PRIMARY FILE**: Contains the `--color-bg` CSS variable that defines the background color. This is the single source of truth for the background color used across all pages.
- `assets/css/partials/_reset.css` - Applies `var(--color-bg)` to the `body` element. No changes needed, but documents where the variable is used.
- `assets/css/partials/_layout.css` - Uses `var(--color-bg)` for `.section` backgrounds. No changes needed, but documents where the variable is used.
- `app/client/index.html` - Main modular page that loads all modules dynamically.
- `app/client/about.html` - Standalone about page.
- `app/client/privacy.html` - Standalone privacy policy page.
- `app/client/esl.html` - Standalone ESL professionals page.
- `app/client/support.html` - Standalone support page.

All the HTML pages use the same CSS stylesheet (`assets/css/styles.css` which imports the partials), so changing the single CSS variable will affect all pages.

## Step by Step Tasks
IMPORTANT: Execute every step in order, top to bottom.

### Step 1: Update the CSS variable
- Open `assets/css/partials/_variables.css`
- Locate the `--color-bg` variable on line 8 (inside the `:root` block)
- Change the value from `#F5F3F0` to `#F5F3F1`

**Before:**
```css
--color-bg:           #F5F3F0;
```

**After:**
```css
--color-bg:           #F5F3F1;
```

### Step 2: Rebuild the production CSS
- Run the build script to regenerate the concatenated production CSS file
- This updates `assets/css/dist/styles.css` with the new background color

### Step 3: Validate the chore is complete
- Start the development server and visually verify the background color
- Run the build script to ensure no errors occur

## Validation Commands
Execute every command to validate the chore is complete with zero regressions.

- `./scripts/build.sh` - Build production CSS and HTML to verify no build errors. This concatenates all CSS partials into `assets/css/dist/styles.css` and validates the build succeeds.
- `grep -n "#F5F3F1" assets/css/partials/_variables.css` - Verify the new color value is present in the source CSS.
- `grep -n "#F5F3F1" assets/css/dist/styles.css` - Verify the new color value is present in the built production CSS.
- `grep -c "#F5F3F0" assets/css/partials/_variables.css` - Verify the old color value is no longer present (should return 0).

## Notes
- This is a minimal, single-variable change. The CSS architecture uses CSS variables effectively, so only one file needs modification.
- The color difference between `#F5F3F0` and `#F5F3F1` is extremely subtle (RGB values: 245,243,240 → 245,243,241) - only the blue channel increases by 1.
- The dark mode background (`#2A2826`) is not affected by this change.
- All module pages (index, about, privacy, esl, support) will automatically pick up this change since they all reference the same CSS files.

## Report

### Summary
- Updated `--color-bg` CSS variable from `#F5F3F0` to `#F5F3F1` in `assets/css/partials/_variables.css`
- Ran `./scripts/build.sh` to regenerate production CSS in `assets/css/dist/styles.css`
- Verified new color value present in both source and dist CSS files
- Build completed with all SEO validation checks passing

### Git Diff Stats
```
 assets/css/dist/styles.css         | 2 +-
 assets/css/partials/_variables.css | 2 +-
 2 files changed, 2 insertions(+), 2 deletions(-)
```

