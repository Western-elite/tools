# Dumpster Rental (ID 1328) â€” https://westernelite.com/dumpster-rental/

Read live: 2026-09-21 17:05:28 (modified_gmt) Â· Content truncated: **yes**. The API response stops at about 60k characters, partway through the `<style>` block of the 3rd code module (Section Nav). The Section Nav HTML and every later section could not be read (pricing cards, heavy materials, how it works, areas, FAQ, final CTA, mobile action bar).

## How to apply
WP Admin â†’ Pages â†’ edit Dumpster Rental â†’ Divi Builder â†’ open the Code Module named below â†’ use the browser's find (Ctrl+F) to locate the FIND text â†’ replace it exactly with REPLACE â†’ Save module â†’ Save page draft/Preview (do not publish until Paul says so).

## Changes

### 1. Hide decorative star in the Google rating line â€” WCAG 1.1.1 / 1.3.1
- Module: 1st code module on the page (Fullwidth Code in the `fw_header` section). It starts with the comment `SECTION: Hero`, and its first HTML tag is `<a class="skip" href="#sizes">`. `disabled_on="on|off|off"` means hidden on phone, visible on tablet and desktop. The change is in the desktop `<header class="hero">` trust list.
- FIND:
```html
<li>4.8â˜… Google rating Â· 200+ reviews</li>
```
- REPLACE WITH:
```html
<li>4.8<span aria-hidden="true">â˜…</span> Google rating Â· 200+ reviews</li>
```
- Why: the â˜… is decoration next to text that already says "Google rating". Without this, screen readers read it as "4.8 black star".

## H1 check (visible part)
- Module 1 (hidden on phone) holds both the desktop H1 "Residential Dumpster / Rental in Las Vegas" and a mobile H1 `<h1 id="mhero-title">`. Its CSS swaps them at 767px, and Divi hides the whole module on phone. So tablet and desktop each show exactly **one** H1. No change needed.
- **Phone: check by hand.** Module 1 is hidden on phone, so its mobile H1 never shows there. The visible part has no phone-only hero module. If a later (cut-off) module is a phone-only hero (`disabled_on="off|on|on"`) without an H1, add one with the same text: `<h1>Residential Dumpster Rental<span>in Las Vegas</span></h1>`. If there is no phone hero at all, phone visitors get zero H1, and Paul or Echo should decide where it goes.

## Not fixed here
- **Everything after the 3rd module's CSS is not visible. Check by hand.** Look for:
  - extra H1s (they should become H2)
  - vague or repeated link text ("Rent Now", "Learn more", "Full answer â†’"; e.g. in the pricing cards, areas and FAQ, which the CSS shows exist)
  - icon-only buttons such as "Ã—"
  - â˜Ž / âœ“ symbols in the HTML
  - iframes (map/video) with no title
  - the mobile action bar links (`.m-call`, `.m-text`, `.m-order`)
- **Gold hover #b07f24: not in the visible part. Check by hand.**
  - The visible CSS uses `--gold:#c8961e` and `#c8922a` with white text, not #b07f24.
  - If you find #b07f24 as a hover background behind #18232d text, replace it with `#b18025`.
  - Contrast: #b07f24 is 4.49:1 and #b18025 is about 4.54:1 against #18232d. That passes AA (4.5:1).
  - Worked out by hand with the WCAG relative-luminance formula (my script tool was blocked this run). Confirm it in a contrast checker.
- **CSS check marks: not changed.** These are in `.trust li::before`, `.card li::before`, `.card li.no::before` (âœ•) and `.rule-card li::before`, all `content:"âœ“"`. Screen readers may announce them, and in the "no" lists âœ“/âœ• may carry meaning. The fix is a CSS/markup change outside this task's scope. Leave it to Echo or Paul.
- 2nd module (Stat Band, `<div class="we-cs">`): `aria-label="Service highlights"` sits on a plain `<div>`, where most screen readers ignore it. Optional: add `role="region"`. Not changed (outside the six fix types).
