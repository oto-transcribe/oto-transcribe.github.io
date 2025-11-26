#!/bin/bash

# Build script for OTO Transcribe website
# Assembles modules into a single index.html for production (GitHub Pages)

set -e

echo "🔨 Building OTO Transcribe website..."
echo ""

# Configuration
SOURCE_DIR="app/client"
OUTPUT_DIR="."
OUTPUT_FILE="index.html.new"
TEMP_DIR="/tmp/oto-build-$$"

# Create temp directory
mkdir -p "$TEMP_DIR"

echo "📦 Reading modules..."

# Read the shell index.html
SHELL_HTML="$SOURCE_DIR/index.html"

# Extract <head> section
HEAD_START=$(grep -n "<head>" "$SHELL_HTML" | cut -d: -f1)
HEAD_END=$(grep -n "</head>" "$SHELL_HTML" | cut -d: -f1)
sed -n "${HEAD_START},${HEAD_END}p" "$SHELL_HTML" > "$TEMP_DIR/head.html"

# Start building the output file
echo "<!DOCTYPE html>" > "$OUTPUT_DIR/$OUTPUT_FILE"
echo '<html lang="en" class="no-js">' >> "$OUTPUT_DIR/$OUTPUT_FILE"
cat "$TEMP_DIR/head.html" >> "$OUTPUT_DIR/$OUTPUT_FILE"
echo "<body>" >> "$OUTPUT_DIR/$OUTPUT_FILE"

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

echo "  🔗 Assembling why..."
cat "$SOURCE_DIR/modules/why.html" >> "$OUTPUT_DIR/$OUTPUT_FILE"

echo "  🔗 Assembling roadmap..."
cat "$SOURCE_DIR/modules/roadmap.html" >> "$OUTPUT_DIR/$OUTPUT_FILE"

echo "  🔗 Assembling FAQ..."
cat "$SOURCE_DIR/modules/faq.html" >> "$OUTPUT_DIR/$OUTPUT_FILE"

echo "  🔗 Assembling privacy..."
cat "$SOURCE_DIR/modules/privacy.html" >> "$OUTPUT_DIR/$OUTPUT_FILE"

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

echo ""
echo "✅ Build complete!"
echo "📄 Output: $OUTPUT_DIR/$OUTPUT_FILE"
echo ""
echo "To deploy:"
echo "  mv $OUTPUT_FILE index.html"
echo "  git add index.html"
echo "  git commit -m 'Build: Update production site'"
echo "  git push origin main"
echo ""

# Cleanup
rm -rf "$TEMP_DIR"

# Show file size
OUTPUT_SIZE=$(du -h "$OUTPUT_DIR/$OUTPUT_FILE" | cut -f1)
echo "📊 Built file size: $OUTPUT_SIZE"
