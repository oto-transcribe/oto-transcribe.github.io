#!/bin/bash

# Build script for OTO Transcribe website
# Assembles modules into a single index.html for production (GitHub Pages)
# Also copies standalone pages (about, esl, privacy, support) from app/client to root

set -e

echo "🔨 Building OTO Transcribe website..."
echo ""

# Configuration
SOURCE_DIR="app/client"
OUTPUT_DIR="."
OUTPUT_FILE="index.html.new"
TEMP_DIR="/tmp/oto-build-$$"
CSS_PARTIALS_DIR="assets/css/partials"
CSS_DIST_DIR="assets/css/dist"

# Standalone pages that live in app/client/ (NOT copied to root)
# These are served directly from app/client/ by GitHub Pages
STANDALONE_PAGES=("about.html" "esl.html" "privacy.html" "support.html")

# Create temp directory
mkdir -p "$TEMP_DIR"

# ========================================
# CSS BUILD STEP
# ========================================
echo "🎨 Building CSS..."

# Create dist directory if it doesn't exist
mkdir -p "$CSS_DIST_DIR"

# Concatenate all CSS partials in order
cat "$CSS_PARTIALS_DIR/_variables.css" \
    "$CSS_PARTIALS_DIR/_reset.css" \
    "$CSS_PARTIALS_DIR/_typography.css" \
    "$CSS_PARTIALS_DIR/_navigation.css" \
    "$CSS_PARTIALS_DIR/_layout.css" \
    "$CSS_PARTIALS_DIR/_hero.css" \
    "$CSS_PARTIALS_DIR/_buttons.css" \
    "$CSS_PARTIALS_DIR/_cards.css" \
    "$CSS_PARTIALS_DIR/_video.css" \
    "$CSS_PARTIALS_DIR/_screenshots.css" \
    "$CSS_PARTIALS_DIR/_pricing.css" \
    "$CSS_PARTIALS_DIR/_faq.css" \
    "$CSS_PARTIALS_DIR/_forms.css" \
    "$CSS_PARTIALS_DIR/_footer.css" \
    "$CSS_PARTIALS_DIR/_animations.css" \
    "$CSS_PARTIALS_DIR/_utilities.css" \
    "$CSS_PARTIALS_DIR/_components.css" \
    "$CSS_PARTIALS_DIR/_responsive.css" \
    > "$CSS_DIST_DIR/styles.css"

CSS_SIZE=$(wc -l < "$CSS_DIST_DIR/styles.css" | tr -d ' ')
echo "✅ CSS built: $CSS_SIZE lines -> $CSS_DIST_DIR/styles.css"
echo ""

# ========================================
# HTML BUILD STEP
# ========================================
echo "📦 Reading modules..."

# Read the shell index.html
SHELL_HTML="$SOURCE_DIR/index.html"

# Extract <head> section
HEAD_START=$(grep -n "<head>" "$SHELL_HTML" | cut -d: -f1)
HEAD_END=$(grep -n "</head>" "$SHELL_HTML" | cut -d: -f1)
sed -n "${HEAD_START},${HEAD_END}p" "$SHELL_HTML" > "$TEMP_DIR/head.html"

# Extract noscript block from source
echo "  🔗 Extracting noscript fallback content..."
sed -n '/<noscript>/,/<\/noscript>/p' "$SHELL_HTML" > "$TEMP_DIR/noscript.html"

# Start building the output file
echo "<!DOCTYPE html>" > "$OUTPUT_DIR/$OUTPUT_FILE"
echo '<html lang="en" class="no-js">' >> "$OUTPUT_DIR/$OUTPUT_FILE"
cat "$TEMP_DIR/head.html" >> "$OUTPUT_DIR/$OUTPUT_FILE"
echo "<body>" >> "$OUTPUT_DIR/$OUTPUT_FILE"
echo '<a class="skip-link" href="#main">Skip to content</a>' >> "$OUTPUT_DIR/$OUTPUT_FILE"

# Add noscript fallback content
cat "$TEMP_DIR/noscript.html" >> "$OUTPUT_DIR/$OUTPUT_FILE"

# Insert modules in order
echo "  🔗 Assembling header..."
cat "$SOURCE_DIR/modules/header.html" >> "$OUTPUT_DIR/$OUTPUT_FILE"

echo "  <main id=\"main\" tabindex=\"-1\">" >> "$OUTPUT_DIR/$OUTPUT_FILE"

echo "  🔗 Assembling hero..."
cat "$SOURCE_DIR/modules/hero.html" >> "$OUTPUT_DIR/$OUTPUT_FILE"

echo "  🔗 Assembling demo..."
cat "$SOURCE_DIR/modules/demo.html" >> "$OUTPUT_DIR/$OUTPUT_FILE"

echo "  🔗 Assembling features..."
cat "$SOURCE_DIR/modules/features.html" >> "$OUTPUT_DIR/$OUTPUT_FILE"

echo "  🔗 Assembling pricing..."
cat "$SOURCE_DIR/modules/pricing.html" >> "$OUTPUT_DIR/$OUTPUT_FILE"

# About section moved to standalone about.html page

# TODO: Re-enable when we have actual users
# echo "  🔗 Assembling use-cases..."
# cat "$SOURCE_DIR/modules/use-cases.html" >> "$OUTPUT_DIR/$OUTPUT_FILE"

# TODO: Re-enable if we want competitor comparison on the site
# echo "  🔗 Assembling comparison..."
# cat "$SOURCE_DIR/modules/comparison.html" >> "$OUTPUT_DIR/$OUTPUT_FILE"

echo "  🔗 Assembling roadmap..."
cat "$SOURCE_DIR/modules/roadmap.html" >> "$OUTPUT_DIR/$OUTPUT_FILE"

echo "  🔗 Assembling FAQ..."
cat "$SOURCE_DIR/modules/faq.html" >> "$OUTPUT_DIR/$OUTPUT_FILE"

echo "  </main>" >> "$OUTPUT_DIR/$OUTPUT_FILE"

echo "  🔗 Assembling footer..."
cat "$SOURCE_DIR/modules/footer.html" >> "$OUTPUT_DIR/$OUTPUT_FILE"

# Add the main.js script (not module loader)
echo "  <script src=\"assets/js/main.js\" defer></script>" >> "$OUTPUT_DIR/$OUTPUT_FILE"
echo "</body>" >> "$OUTPUT_DIR/$OUTPUT_FILE"
echo "</html>" >> "$OUTPUT_DIR/$OUTPUT_FILE"

echo ""
echo "🔧 Fixing asset paths..."
# Fix asset paths (remove ../../ prefix for production)
sed -i.bak 's|../../assets/|assets/|g' "$OUTPUT_DIR/$OUTPUT_FILE"
rm "$OUTPUT_DIR/$OUTPUT_FILE.bak"

# Update CSS path to use dist version for production
# The dev version uses @import, production uses concatenated file
sed -i.bak 's|assets/css/styles.css|assets/css/dist/styles.css|g' "$OUTPUT_DIR/$OUTPUT_FILE"
rm "$OUTPUT_DIR/$OUTPUT_FILE.bak"

echo ""
echo "🔍 Running SEO validation checks..."

# Check for robots.txt
if [ ! -f "robots.txt" ]; then
  echo "❌ ERROR: robots.txt not found in root directory"
  exit 1
else
  echo "✅ robots.txt exists"
fi

# Check for sitemap.xml
if [ ! -f "sitemap.xml" ]; then
  echo "❌ ERROR: sitemap.xml not found in root directory"
  exit 1
else
  echo "✅ sitemap.xml exists"
fi

# Validate sitemap.xml syntax
if command -v xmllint &> /dev/null; then
  if xmllint --noout sitemap.xml 2>&1; then
    echo "✅ sitemap.xml is valid XML"
  else
    echo "⚠️  WARNING: sitemap.xml has XML syntax errors"
  fi
else
  echo "⚠️  SKIP: xmllint not available (install with: brew install libxml2)"
fi

# Validate Schema.org JSON-LD syntax
echo "✅ Checking Schema.org markup..."
SCHEMA_COUNT=$(grep -c 'application/ld+json' "$OUTPUT_DIR/$OUTPUT_FILE" || echo "0")
echo "   Found $SCHEMA_COUNT Schema.org blocks"

if [ "$SCHEMA_COUNT" -lt 4 ]; then
  echo "⚠️  WARNING: Expected 4 Schema blocks (SoftwareApplication, FAQ, Organization, Breadcrumb), found $SCHEMA_COUNT"
fi

# Check for og-cover.png
if [ ! -f "assets/img/og-cover.png" ]; then
  echo "⚠️  WARNING: og-cover.png not found (required for social sharing)"
else
  echo "✅ og-cover.png exists"
fi

# Check for favicons
if [ ! -f "assets/img/apple-touch-icon.png" ]; then
  echo "⚠️  WARNING: apple-touch-icon.png not found"
else
  echo "✅ apple-touch-icon.png exists"
fi

if [ ! -f "assets/img/favicon.png" ]; then
  echo "⚠️  WARNING: favicon.png not found"
else
  echo "✅ favicon.png exists"
fi

# Check CSS dist file exists
if [ ! -f "$CSS_DIST_DIR/styles.css" ]; then
  echo "❌ ERROR: CSS dist file not found at $CSS_DIST_DIR/styles.css"
  exit 1
else
  echo "✅ CSS dist file exists"
fi

# Check for noscript fallback content
echo "✅ Checking noscript fallback content..."
NOSCRIPT_COUNT=$(grep -c '<noscript>' "$OUTPUT_DIR/$OUTPUT_FILE" || echo "0")
if [ "$NOSCRIPT_COUNT" -lt 1 ]; then
  echo "⚠️  WARNING: No noscript fallback content found (crawlers may miss content)"
else
  echo "   Found $NOSCRIPT_COUNT noscript block(s)"
  # Count FAQ questions in noscript
  NOSCRIPT_FAQ_COUNT=$(sed -n '/<noscript>/,/<\/noscript>/p' "$OUTPUT_DIR/$OUTPUT_FILE" | grep -c '<h3>' || echo "0")
  echo "   Found $NOSCRIPT_FAQ_COUNT FAQ questions in noscript"
  if [ "$NOSCRIPT_FAQ_COUNT" -lt 6 ]; then
    echo "⚠️  WARNING: Expected 6 FAQ questions in noscript, found $NOSCRIPT_FAQ_COUNT"
  fi
fi

echo ""
echo "✅ Build complete!"
echo "📄 Output: $OUTPUT_DIR/$OUTPUT_FILE"
echo "📄 Standalone pages in app/client/: ${STANDALONE_PAGES[*]}"
echo ""
echo "To deploy:"
echo "  mv $OUTPUT_FILE index.html"
echo "  git add index.html assets/css/dist/styles.css app/client/*.html"
echo "  git commit -m 'Build: Update production site'"
echo "  git push origin main"
echo ""

# Cleanup
rm -rf "$TEMP_DIR"

# Show file sizes
OUTPUT_SIZE=$(du -h "$OUTPUT_DIR/$OUTPUT_FILE" | cut -f1)
CSS_DIST_SIZE=$(du -h "$CSS_DIST_DIR/styles.css" | cut -f1)
echo "📊 Built file sizes:"
echo "   index.html: $OUTPUT_SIZE"
echo "   CSS:        $CSS_DIST_SIZE"
echo "   Standalone pages (in app/client/):"
for PAGE in "${STANDALONE_PAGES[@]}"; do
  if [ -f "$SOURCE_DIR/$PAGE" ]; then
    PAGE_SIZE=$(du -h "$SOURCE_DIR/$PAGE" | cut -f1)
    echo "     $PAGE: $PAGE_SIZE"
  fi
done
