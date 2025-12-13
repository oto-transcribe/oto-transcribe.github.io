# Chore: Remove Em Dash from Origin Story Text

## Chore Description
Remove the em dash (—) from the origin story quote: "Every transcription app I tried had the same problems: bloated features I didn't need, "free" tiers designed to frustrate me, and expensive monthly subscriptions — all for something that ran on my own hardware using open-source models."

The em dash ` — ` (with surrounding spaces) should be removed entirely, resulting in: "...expensive monthly subscriptions, all for something that ran on my own hardware using open-source models."

A comma will be added after "subscriptions" to maintain proper sentence flow.

## Relevant Files
Use these files to resolve the chore:

- `app/client/about.html` - Contains the origin story quote on line 82. This is the standalone about page.
- `app/client/index.html` - Contains the text in JSON-LD structured data (articleBody) on line 243. This is the main index shell that includes structured SEO data.
- `app/client/modules/about.html` - Contains the origin story quote on line 13. This is the modular about section loaded dynamically.
- `app/client/modules/why.html` - Contains the origin story quote on line 46. This is the "Why I Built OTO" section module.
- `app/client/old-website/index.html` - Contains the origin story quote on line 444. This is the archived pre-modular website (historical reference).

## Step by Step Tasks
IMPORTANT: Execute every step in order, top to bottom.

### 1. Update the About Module
- Open `app/client/modules/about.html`
- Find line 13 containing the em dash text
- Replace ` — ` with `, ` (comma followed by space) to maintain sentence flow
- Result: "...expensive monthly subscriptions, all for something..."

### 2. Update the Why Module
- Open `app/client/modules/why.html`
- Find line 46 containing the em dash text
- Replace ` — ` with `, ` (comma followed by space)
- Result: "...expensive monthly subscriptions, all for something..."

### 3. Update the Standalone About Page
- Open `app/client/about.html`
- Find line 82 containing the em dash text
- Replace ` — ` with `, ` (comma followed by space)
- Result: "...expensive monthly subscriptions, all for something..."

### 4. Update the Index Shell JSON-LD
- Open `app/client/index.html`
- Find line 243 containing the articleBody JSON-LD structured data
- Replace ` — ` with `, ` (comma followed by space)
- Result: "...expensive monthly subscriptions, all for something..."

### 5. Update the Archived Website (Optional)
- Open `app/client/old-website/index.html`
- Find line 444 containing the em dash text
- Replace ` — ` with `, ` (comma followed by space)
- Note: This file is a historical archive. Consider whether maintaining historical accuracy is preferred over consistency.

### 6. Rebuild Production Files
- Run `./scripts/build.sh` to regenerate the production `index.html` and CSS files
- This ensures the root `index.html` reflects the module changes

### 7. Run Validation Commands
- Start the dev server and verify changes on affected pages
- Confirm the em dash is removed from all instances

## Validation Commands
Execute every command to validate the chore is complete with zero regressions.

- `grep -r " — " app/client/` - Should return NO matches (confirms em dash removal)
- `grep -c "subscriptions, all" app/client/about.html` - Should return 1
- `grep -c "subscriptions, all" app/client/index.html` - Should return 1
- `grep -c "subscriptions, all" app/client/modules/about.html` - Should return 1
- `grep -c "subscriptions, all" app/client/modules/why.html` - Should return 1
- `./scripts/build.sh` - Rebuild production files without errors
- `python3 -m http.server 8080 --directory app/client &` - Start dev server
- Open http://localhost:8080 in browser and visually confirm the about/why sections display correctly

## Notes
- The em dash ` — ` is being replaced with `, ` (comma + space) rather than being completely removed to maintain proper sentence grammar and readability.
- The `old-website/` directory is meant as a historical archive. Updating it ensures consistency but breaks historical accuracy—discuss with stakeholder if preserving history is important.
- After updating the module files, the production `index.html` in the root needs to be rebuilt using `./scripts/build.sh` and committed.
- The root `index.html` and `index.html.new` are auto-generated and should not be edited directly—changes will be overwritten by the build process.

