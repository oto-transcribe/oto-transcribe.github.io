# Feature: Website Modularization

## Feature Description
Transform the OTO Transcribe static website from a monolithic single-file structure (index.html with 799 lines) into a modern, modular architecture with separate components for each section. The new structure will follow best practices with an `app/` directory containing `client/` and potentially `server/` subdirectories, where each website section becomes its own contained HTML module that gets dynamically loaded. This will improve maintainability, enable isolated changes without risk of breaking other sections, and establish a scalable foundation for future features.

## User Story
As a developer maintaining the OTO Transcribe website
I want to work with modular, isolated components for each section
So that I can make changes confidently without worrying about breaking other parts of the site

## Problem Statement
The current website architecture presents several maintenance challenges:
- All content lives in a single 799-line index.html file, making it difficult to navigate and understand
- Changes to one section risk unintentionally affecting other sections
- No clear separation of concerns between different page sections
- Difficult to collaborate on different sections simultaneously
- Hard to test individual components in isolation
- No established pattern for adding new sections or features

## Solution Statement
Implement a modular architecture where:
- Create an `app/client/` directory structure following modern web development best practices
- Split the monolithic index.html into separate HTML modules for each section (hero, features, pricing, etc.)
- Implement a simple module loader system that assembles the page from individual components
- Maintain the static site benefits (performance, SEO) while gaining modularity
- Keep the existing design system and functionality intact during the refactoring

## Relevant Files
Use these files to implement the feature:

**Existing Files to Refactor:**
- `index.html` - Main monolithic file to be split into modules (799 lines)
  - Contains all sections: hero, demo, features, pricing, why, roadmap, FAQ, privacy
  - Will become a shell that loads modules
- `assets/css/styles.css` - Design system implementation
  - May need minor updates for module-specific styles
- `assets/js/main.js` - Minimal interactivity
  - Will need module loader functionality added
- `README.md` - Project documentation
  - Will need updates to reflect new structure

### New Files
**New Directory Structure:**
```
app/
├── client/
│   ├── index.html           # Shell HTML that loads modules
│   ├── modules/             # Individual section modules
│   │   ├── header.html      # Site header and navigation
│   │   ├── hero.html        # Hero section
│   │   ├── demo.html        # Demo/video section
│   │   ├── features.html    # Features section
│   │   ├── pricing.html     # Pricing section
│   │   ├── why.html         # Why OTO section
│   │   ├── roadmap.html     # Roadmap section
│   │   ├── faq.html         # FAQ section
│   │   ├── privacy.html     # Privacy section
│   │   └── footer.html      # Site footer
│   ├── js/
│   │   ├── module-loader.js # Module loading system
│   │   └── app.js          # Main application logic
│   └── config/
│       └── modules.json     # Module configuration and load order
└── server/                  # Reserved for future server-side needs
    └── .gitkeep            # Placeholder for future use
```

**Scripts Updates:**
- `scripts/dev-server.sh` - New development server script
- `scripts/build.sh` - Build script for production (assembles modules)

## Implementation Plan
### Phase 1: Foundation
Set up the new directory structure and module loading system without breaking the existing site. Create the infrastructure for modular development while keeping the current index.html functional.

### Phase 2: Core Implementation
Extract each section from index.html into its own module file. Implement the module loader that assembles these components. Ensure all existing functionality (smooth scrolling, animations, dark mode) continues to work.

### Phase 3: Integration
Update the build process and deployment pipeline to work with the new structure. Ensure GitHub Pages deployment continues to work seamlessly. Update documentation to reflect the new architecture.

## Step by Step Tasks
IMPORTANT: Execute every step in order, top to bottom.

### 1. Create Base Directory Structure
- Create `app/` directory at project root
- Create `app/client/` subdirectory
- Create `app/client/modules/`, `app/client/js/`, and `app/client/config/` directories
- Create `app/server/` directory with `.gitkeep` placeholder
- Verify directory structure is created correctly

### 2. Implement Module Loader System
- Create `app/client/js/module-loader.js` with dynamic HTML loading functionality
- Support async loading of HTML modules
- Handle module dependencies and load order
- Include error handling for failed module loads
- Create simple test to verify loader works

### 3. Create Module Configuration
- Create `app/client/config/modules.json` defining all modules and their load order
- Include metadata for each module (name, path, dependencies, priority)
- Define which modules are critical vs lazy-loaded

### 4. Extract Header Module
- Extract header/navigation from index.html into `app/client/modules/header.html`
- Include all navigation functionality and mobile menu
- Test that navigation still works when loaded as module

### 5. Extract Hero Section Module
- Extract hero section from index.html into `app/client/modules/hero.html`
- Include all hero content, CTAs, and trust indicators
- Verify animations and interactions still work

### 6. Extract Demo Section Module
- Extract demo/video section into `app/client/modules/demo.html`
- Include slideshow functionality and controls
- Test video/slideshow functionality after extraction

### 7. Extract Features Section Module
- Extract features section into `app/client/modules/features.html`
- Include all feature cards and icons
- Verify feature grid layout remains intact

### 8. Extract Pricing Section Module
- Extract pricing section into `app/client/modules/pricing.html`
- Include pricing cards, badges, and CTAs
- Test that pricing interactions work correctly

### 9. Extract Why Section Module
- Extract "Why OTO" section into `app/client/modules/why.html`
- Include all comparison content and benefits
- Verify section animations continue to work

### 10. Extract Roadmap Section Module
- Extract roadmap section into `app/client/modules/roadmap.html`
- Include timeline and future features
- Test roadmap display and interactions

### 11. Extract FAQ Section Module
- Extract FAQ section into `app/client/modules/faq.html`
- Include all Q&A items and accordion functionality
- Verify FAQ expand/collapse still works

### 12. Extract Privacy Section Module
- Extract privacy section into `app/client/modules/privacy.html`
- Include all privacy policy content
- Test section anchoring and scrolling

### 13. Extract Footer Module
- Extract footer from index.html into `app/client/modules/footer.html`
- Include all footer links and copyright
- Verify footer displays correctly

### 14. Create Shell Index File
- Create `app/client/index.html` as the shell that loads modules
- Include base HTML structure, meta tags, and module loader script
- Set up module mounting points

### 15. Migrate JavaScript Logic
- Create `app/client/js/app.js` for main application logic
- Migrate relevant code from `assets/js/main.js`
- Ensure all event listeners work with dynamically loaded content
- Use event delegation for dynamically loaded elements

### 16. Update Asset References
- Update all asset paths in modules to work from new location
- Ensure CSS and images load correctly
- Update font and icon references

### 17. Create Development Server Script
- Create `scripts/dev-server.sh` for local development
- Configure to serve from `app/client/` directory
- Include hot reload functionality if possible

### 18. Create Build Script
- Create `scripts/build.sh` for production builds
- Assemble modules into single file for deployment
- Optimize for performance (minification optional)
- Output to root directory for GitHub Pages

### 19. Test Complete Functionality
- Test all sections load correctly
- Verify all interactions work (navigation, scrolling, animations)
- Test dark mode toggle
- Test responsive design on mobile/tablet/desktop
- Test accessibility features

### 20. Update Documentation
- Update README.md with new structure documentation
- Add development workflow instructions
- Document module creation process
- Update deployment instructions

### 21. Setup GitHub Pages Compatibility
- Configure build process to output to root for GitHub Pages
- Ensure index.html at root for automatic deployment
- Test deployment process

### 22. Run Validation Commands
- Execute all validation commands to ensure zero regressions
- Fix any issues found during validation
- Confirm site works identically to original

## Testing Strategy
### Unit Tests
- Module loader correctly loads HTML files
- Module configuration parsing works correctly
- Error handling for missing modules
- Asset path resolution in modules

### Integration Tests
- All modules load in correct order
- Navigation between sections works
- Form submissions and CTAs function correctly
- Analytics and tracking (if any) still work
- SEO meta tags are properly included

### Edge Cases
- Missing module files gracefully handled
- Network failures during module loading
- Modules with circular dependencies detected
- Very slow connections handle progressive loading
- JavaScript disabled fallback (if applicable)

## Acceptance Criteria
- [ ] Website appears and functions identically to current version
- [ ] Each section exists as a separate, self-contained HTML module
- [ ] Changes to one module don't affect others
- [ ] Page load performance equal to or better than current
- [ ] All existing features work (navigation, animations, dark mode)
- [ ] Development server allows local preview
- [ ] Build process creates production-ready output
- [ ] GitHub Pages deployment continues to work
- [ ] Documentation updated to reflect new structure
- [ ] No console errors or warnings in browser
- [ ] Lighthouse scores maintain or improve
- [ ] Mobile and desktop responsive design intact

## Validation Commands
Execute every command to validate the feature works correctly with zero regressions.

- `python3 -m http.server 8080 --directory app/client` - Test local development server
- `./scripts/build.sh` - Run build script to create production version
- `python3 -m http.server 8080` - Test production build locally
- `grep -r "console.error" app/client/` - Ensure no error logging left in code
- `find app/client/modules -name "*.html" | wc -l` - Verify all 10 modules created
- `curl -s http://localhost:8080 | grep -c "oto"` - Verify site loads and contains content
- `ls -la app/client/modules/` - Confirm all module files exist
- `head -20 app/client/index.html` - Verify shell structure is correct
- `grep -c "import" app/client/js/module-loader.js` - Verify module loader has imports

## Notes
- The feature maintains the static site nature for optimal performance and SEO
- Module loader should be lightweight (under 5KB) to avoid performance impact
- Consider using Web Components in future iteration for true encapsulation
- Build process can be enhanced later with bundlers like Vite or Webpack if needed
- Server directory created for future enhancements (API, backend services)
- This architecture supports future additions like A/B testing, personalization
- Consider implementing a simple template system in phase 2 if patterns emerge
- Module system should work without a build step during development
- Production build combines modules for optimal delivery (single HTTP request)