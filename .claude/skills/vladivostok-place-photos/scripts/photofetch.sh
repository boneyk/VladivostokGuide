#!/usr/bin/env bash
# photofetch.sh <slug> <search-term> [limit]
# Ищет файлы на Wikimedia Commons, качает масштабированных (~1600px) кандидатов и пишет credits.json.
# Кандидаты: ${PHOTO_CAND_DIR:-/tmp/photo-candidates}/<slug>/  (это временная папка, НЕ репозиторий).
# Требуется: curl, jq, identify (ImageMagick).
set -euo pipefail
SLUG="${1:?slug}"; TERM="${2:?search term}"; LIMIT="${3:-10}"
BASE="${PHOTO_CAND_DIR:-/tmp/photo-candidates}"
OUT="$BASE/$SLUG"
API="https://commons.wikimedia.org/w/api.php"
rm -rf "$OUT"; mkdir -p "$OUT"; echo "[]" > "$OUT/credits.json"

titles=$(curl -sS -G "$API" \
  --data-urlencode "action=query" --data-urlencode "format=json" \
  --data-urlencode "list=search" --data-urlencode "srnamespace=6" \
  --data-urlencode "srlimit=$LIMIT" --data-urlencode "srsearch=$TERM" \
  | jq -r '.query.search[].title')

i=0
while IFS= read -r title; do
  [ -z "$title" ] && continue
  page=$(curl -sS -G "$API" \
    --data-urlencode "action=query" --data-urlencode "format=json" \
    --data-urlencode "prop=imageinfo" \
    --data-urlencode "iiprop=url|size|mime|extmetadata" \
    --data-urlencode "iiurlwidth=1600" \
    --data-urlencode "titles=$title" | jq -c '.query.pages | to_entries[0].value')
  dlurl=$(echo "$page"  | jq -r '.imageinfo[0].thumburl // .imageinfo[0].url // empty')  # масштаб 1600px
  origurl=$(echo "$page" | jq -r '.imageinfo[0].url // empty')                            # оригинал (для credits)
  mime=$(echo "$page"   | jq -r '.imageinfo[0].mime // empty')
  [ -z "$dlurl" ] && continue
  case "$mime" in
    image/jpeg) ext=jpg;; image/png) ext=png;; image/webp) ext=webp;;
    *) continue;;   # svg/tiff/pdf пропускаем
  esac
  i=$((i+1)); n=$(printf "%02d" "$i")
  if ! curl -sS -L --max-time 60 -o "$OUT/$n.$ext" "$dlurl"; then echo "fail: $title"; i=$((i-1)); continue; fi
  w=$(echo "$page"   | jq -r '.imageinfo[0].width // 0')
  h=$(echo "$page"   | jq -r '.imageinfo[0].height // 0')
  lic=$(echo "$page" | jq -r '.imageinfo[0].extmetadata.LicenseShortName.value // "?"')
  art=$(echo "$page" | jq -r '.imageinfo[0].extmetadata.Artist.value // "?"' \
        | sed 's/<[^>]*>//g' | tr '\n' ' ' | tr -s ' ' | sed 's/^ *//; s/ *$//' | cut -c1-160)
  desc=$(echo "$page" | jq -r '.imageinfo[0].descriptionurl // ""')
  jq --arg file "$n.$ext" --arg url "$origurl" --arg desc "$desc" \
     --arg lic "$lic" --arg art "$art" --argjson w "${w:-0}" --argjson h "${h:-0}" \
     '. += [{file:$file,url:$url,page:$desc,license:$lic,author:$art,width:$w,height:$h}]' \
     "$OUT/credits.json" > "$OUT/credits.tmp" && mv "$OUT/credits.tmp" "$OUT/credits.json"
done <<< "$titles"

echo "=== $i кандидатов в $OUT ==="
identify -format '%f  %wx%h\n' "$OUT"/*.jpg "$OUT"/*.png "$OUT"/*.webp 2>/dev/null || true
