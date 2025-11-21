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
