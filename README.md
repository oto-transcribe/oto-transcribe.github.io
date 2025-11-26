# OTO Transcribe Website

Static promotional site for the OTO macOS voice-to-text application. Focus: privacy, local-first architecture, and Apple-inspired warm organic design.

## Tech Stack

- Pure static HTML/CSS/JS (no framework) for maximal performance
- Modular architecture with dynamic component loading
- System font stack (SF Pro on macOS) / graceful fallback
- Responsive & accessible (keyboard nav, reduced motion, prefers-color-scheme)

## Project Structure

```text
app/
├── client/              # Modular frontend application
│   ├── index.html       # Shell HTML that loads modules
│   ├── modules/         # Individual section modules
│   │   ├── header.html
│   │   ├── hero.html
│   │   ├── demo.html
│   │   ├── features.html
│   │   ├── pricing.html
│   │   ├── why.html
│   │   ├── roadmap.html
│   │   ├── faq.html
│   │   ├── privacy.html
│   │   └── footer.html
│   ├── js/
│   │   ├── module-loader.js  # Dynamic module loading system
│   │   └── app.js           # Main application logic
│   ├── config/
│   │   └── modules.json      # Module configuration
│   └── old-website/         # Archived pre-redesign website
│       ├── index.html       # Pre-modular monolithic version
│       └── css/
│           └── styles.css   # Original styles for archived site
└── server/              # Reserved for future server-side needs
    └── .gitkeep

assets/
├── css/styles.css       # Design system implementation
├── js/main.js           # Original interactivity (for production build)
└── img/                 # Images and assets

scripts/
├── dev-server.sh        # Development server
├── build.sh             # Production build script
└── optimize-images.sh   # Image optimization

index.html               # Production build output (auto-generated)
```

## Development Workflow

### Local Development

Start the development server to work with the modular architecture:

```bash
./scripts/dev-server.sh
```

This serves the `app/client/` directory at `http://localhost:8080`.

Or manually:
```bash
python3 -m http.server 8080 --directory app/client
open http://localhost:8080
```

### Making Changes

1. **Edit individual modules** in `app/client/modules/` for isolated changes
2. **Update module configuration** in `app/client/config/modules.json` if needed
3. **Modify styling** in `assets/css/styles.css`
4. **Update JavaScript** in `app/client/js/app.js`

**Benefits of modular structure:**
- Make changes to one section without affecting others
- Easy to navigate and understand
- Better for collaboration (different developers can work on different modules)
- Easier to test individual components

### Building for Production

When ready to deploy, build the production version:

```bash
./scripts/build.sh
```

This:
1. Assembles all modules into a single `index.html.new` file
2. Fixes asset paths for production
3. Outputs to the root directory

Then deploy:
```bash
mv index.html.new index.html
git add index.html
git commit -m "Build: Update production site"
git push origin main
```

### Creating New Modules

To add a new section to the website:

1. Create a new HTML file in `app/client/modules/` (e.g., `testimonials.html`)
2. Add the module to `app/client/config/modules.json`:
   ```json
   {
     "name": "testimonials",
     "path": "modules/testimonials.html",
     "target": "#module-testimonials",
     "priority": "lazy",
     "order": 11,
     "description": "Customer testimonials section"
   }
   ```
3. Add mounting point in `app/client/index.html`:
   ```html
   <div id="module-testimonials"></div>
   ```
4. Update `scripts/build.sh` to include the new module in production builds

## Image Optimization

Raw UI captures go in `assets/img/`.

Run the optimization script (creates `assets/img/optimized/` with stripped & compressed PNG + WebP):

```bash
chmod +x scripts/optimize-images.sh
./scripts/optimize-images.sh assets/img
```

Update `<source>` / `<img>` paths if you rename files. Target per-image size: 150–250KB (use pngquant quality 70–90, WebP ~q80).

## Deployment (GitHub Pages)

This repo name ends with `github.io`, so `main` root auto-publishes.

**Important:** GitHub Pages serves from the root `index.html`. The build script generates this file by assembling all modules.

After building and committing:

```bash
git push origin main
```

Visit: <https://oto-transcribe.github.io/>

## Customization Points

- Update App Store URL in module files (`hero.html`, `pricing.html`, `footer.html`)
- Modify feature cards in `app/client/modules/features.html`
- Adjust palette in `assets/css/styles.css` `:root` if native app colors evolve
- Update FAQ items in `app/client/modules/faq.html`
- Modify pricing in `app/client/modules/pricing.html`

## Architecture Benefits

### Modularity
- Each section is a self-contained HTML file
- Changes to one section don't risk breaking others
- Easy to find and update specific content

### Development Experience
- Run dev server to see changes immediately
- Module loader handles dynamic assembly
- Event delegation ensures all features work with dynamically loaded content

### Production Performance
- Build script creates single optimized HTML file
- No runtime module loading overhead in production
- Same performance as monolithic approach

## Accessibility & Performance

- Palette contrast targets WCAG AA (re-test if hues shift)
- Reduced motion respected (`prefers-reduced-motion`)
- Single render-blocking CSS file; JS is `defer`
- Semantic landmarks: header, nav, main, sections, footer
- Module loader is lightweight (<5KB)

## Module System Details

### Module Configuration

Modules are defined in `app/client/config/modules.json`:

- **name**: Unique identifier for the module
- **path**: Relative path to the HTML file
- **target**: DOM selector where module will be mounted
- **priority**: `critical` (loads first, in order) or `lazy` (loads concurrently)
- **order**: Loading sequence for critical modules

### Module Loader

The `ModuleLoader` class (`app/client/js/module-loader.js`) handles:
- Loading HTML modules via fetch API
- Respecting load order and priorities
- Mounting modules to specified DOM targets
- Error handling for missing modules
- Event dispatching for initialization hooks

## Archived Website

The previous version of the website (before the modular redesign) is preserved in `app/client/old-website/` for historical reference and design evolution tracking.

**Location:** `app/client/old-website/index.html`

**Contents:**
- Pre-modular monolithic HTML from commit 4b83dc9
- Original stylesheet (`css/styles.css`) that matches the archived design
- All asset paths relative to the archive location

The archived site includes a banner noting it's a historical snapshot and provides a link to the current version.

## Troubleshooting

### Modules not loading in development
- Check browser console for errors
- Verify `config/modules.json` is valid JSON
- Ensure all module files exist in `app/client/modules/`

### Asset paths broken
- In development: Use relative paths like `../../assets/`
- In production: Build script fixes paths to `assets/`

### Changes not visible
- Hard refresh the browser (Cmd+Shift+R or Ctrl+Shift+R)
- Clear browser cache
- Check that you're viewing the correct port (8080 for dev server)

## Optional Future Enhancements

- Add screenshot carousel (CSS scroll-snap or light JS)
- Include a Press / Media Kit section
- Self-hosted privacy-respecting analytics (e.g., Plausible / Umami) if policy allows
- Add Service Worker for offline caching (ensuring no telemetry)
- Implement hot module reloading for development
- Add module unit tests

---

Your voice. Your hardware. Your rules.
