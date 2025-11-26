#!/usr/bin/env bash
set -euo pipefail
# OTO image optimization helper
# Requires: imagemagick (convert), cwebp or imagemin-webp, pngquant, exiftool (optional)
# Usage: ./scripts/optimize-images.sh assets/img

IMG_DIR=${1:-assets/img}
OUT_DIR="$IMG_DIR/optimized"
mkdir -p "$OUT_DIR"

shopt -s nullglob
for f in "$IMG_DIR"/*.{png,PNG,jpg,jpeg,JPG,JPEG}; do
  base=$(basename "$f")
  name="${base%.*}"
  ext="${base##*.}"

  # Strip metadata & resize if huge (> 2400px width)
  dims=$(identify -format '%w' "$f" 2>/dev/null || echo 0)
  if [ "$dims" -gt 2400 ]; then
    convert "$f" -strip -resize 2400x "$OUT_DIR/${name}.png"
  else
    convert "$f" -strip "$OUT_DIR/${name}.png"
  fi

  # Compress PNG (lossless-ish)
  if command -v pngquant >/dev/null 2>&1; then
    pngquant --quality=70-90 --strip --output "$OUT_DIR/${name}.png" --force "$OUT_DIR/${name}.png" || true
  fi

  # Create WebP
  if command -v cwebp >/dev/null 2>&1; then
    cwebp -q 80 "$OUT_DIR/${name}.png" -o "$OUT_DIR/${name}.webp" >/dev/null 2>&1 || true
  fi

done

# Report sizes
printf "\nOptimized assets:\n"
ls -lh "$OUT_DIR" | awk '{print $5, $9}' | tail -n +2
