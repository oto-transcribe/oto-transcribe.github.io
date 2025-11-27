# Disabled Modules

These modules are built but currently disabled. To re-enable, add them back to `modules.json`.

## Use Cases Module
**File**: `modules/use-cases.html`
**Status**: Disabled
**Reason**: TODO: Re-enable when we have actual users

Shows 6 profession-specific workflow examples (Therapists, Content Creators, ESL Professionals, Journalists, Remote Workers, Lawyers).

**To re-enable**, add to `modules.json`:
```json
{
  "name": "use-cases",
  "path": "modules/use-cases.html",
  "target": "#module-use-cases",
  "priority": "lazy",
  "order": 7,
  "description": "Use cases section - workflow examples"
}
```

And uncomment in `scripts/build.sh`:
```bash
echo "  🔗 Assembling use-cases..."
cat "$SOURCE_DIR/modules/use-cases.html" >> "$OUTPUT_DIR/$OUTPUT_FILE"
```

---

## Comparison Table Module
**File**: `modules/comparison.html`
**Status**: Disabled
**Reason**: TODO: Re-enable if we want competitor comparison on the site

Feature comparison table: oto vs Otter.ai vs Descript vs MacWhisper (11 features compared).

**To re-enable**, add to `modules.json`:
```json
{
  "name": "comparison",
  "path": "modules/comparison.html",
  "target": "#module-comparison",
  "priority": "lazy",
  "order": 8,
  "description": "Comparison table vs competitors"
}
```

And uncomment in `scripts/build.sh`:
```bash
echo "  🔗 Assembling comparison..."
cat "$SOURCE_DIR/modules/comparison.html" >> "$OUTPUT_DIR/$OUTPUT_FILE"
```

---

## Roadmap Module
**File**: `modules/roadmap.html`
**Status**: Loaded but hidden with `display:none`
**Reason**: TODO: Re-enable when roadmap features are ready to announce

Shows upcoming features (Universal File Support, On-Device Intelligence, Apple Silicon Evolution).

**To re-enable**, remove `style="display:none;"` from the `<section>` tag in `modules/roadmap.html`.

---

**Last Updated**: November 26, 2025
