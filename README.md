# OTO Transcribe Website

Static promotional site for the OTO macOS voice‑to‑text application. Focus: privacy, local‑first architecture, and Apple‑inspired warm organic design.

## Tech Stack

- Pure static HTML/CSS/JS (no framework) for maximal performance
- System font stack (SF Pro on macOS) / graceful fallback
- Responsive & accessible (keyboard nav, reduced motion, prefers-color-scheme)

## Structure

```text
index.html                # Landing page
assets/css/styles.css     # Design system implementation
assets/js/main.js         # Minimal interactivity
assets/img/               # Images (add og-cover.png, favicon.png, etc.)
```

## Add Required Assets

Place these into `assets/img/` (export @2x where relevant):

- favicon.png (32x32)
- apple-touch-icon.png (180x180)
- og-cover.png (1200x630) – hero graphic or clean app window montage

## Local Preview

Open directly or serve for correct MIME types:

```bash
python3 -m http.server 8080
open http://localhost:8080
```

## Deployment (GitHub Pages)

This repo name ends with `github.io`, so `main` root auto‑publishes. After commits:

```bash
git add .
git commit -m "Landing: initial implementation"
git push origin main
```

Visit: <https://oto-transcribe.github.io/>

## Customization Points

- Update App Store URL in `#downloadBtnTop` and `#downloadBtnBottom`.
- Modify feature cards within the `#features` section.
- Adjust palette in `:root` if native app colors evolve.
- Replace waveform placeholder with canvas-powered live demo (optional).

## Accessibility & Performance

- Palette contrast targets WCAG AA (re‑test if hues shift)
- Reduced motion respected (`prefers-reduced-motion`)
- Single render‑blocking CSS file; JS is `defer`
- Semantic landmarks: header, nav, main, sections, footer

## Optional Future Enhancements

- Add screenshot carousel (CSS scroll-snap or light JS)
- Include a Press / Media Kit section
- Self‑hosted privacy‑respecting analytics (e.g., Plausible / Umami) if policy allows
- Add Service Worker for offline caching (ensuring no telemetry)

---

Your voice. Your hardware. Your rules.
