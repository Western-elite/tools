# Dumpster Rental Henderson (ID 35788) â€” https://westernelite.com/dumpster-rental-henderson/
Read live: 2026-07-07 16:12:20 (GMT) Â· Content truncated: no

DRAFT ONLY â€” nothing here has been applied to WordPress. Do not publish until Paul approves.

Page confirmed: this page is one Divi Code Module that contains a whole `<!DOCTYPE html><html>â€¦<head>â€¦<body>â€¦</html>` document. Henderson Collection Center (11864) has no code module, so it is not the target.

Audit items checked against the live content:
- H1: only ONE `<h1>` on the page ("Dumpster Rental in Henderson, NV"), inside the only module, which has no `disabled_on` setting, so it shows at every screen size. No two-H1 / missing-phone-H1 problem exists on the current live version â€” no change needed.
- "Ã—" close button: not present on the live page â€” nothing to fix.
- â˜Ž symbol: not present on the live page â€” nothing to fix.
- Gold #b07f24 / #18232d: neither colour appears in the module â€” no contrast change needed.
- Map iframe: already has `title="Western Elite Henderson transfer station map"` â€” no change needed.
- Present and fixed below: six "Rent Now" links (four identical ones on the size cards), a vague "See Details" link, âœ“ / âœ— symbols in two headings and in CSS list bullets.

## How to apply
WP Admin â†’ Pages â†’ edit Dumpster Rental Henderson â†’ Divi Builder â†’ open the module named below (or switch to the Text/Code tab for raw iframes) â†’ Ctrl+F the FIND text â†’ replace exactly with REPLACE â†’ Save â†’ Preview (do not publish until Paul says so).

Note: the Divi editor shows real line breaks where the saved content has `<!-- [et_pb_line_break_holder] -->`. Every FIND below sits on a single line, so it can be found as-is.

## Changes

### 1. Lowboy card "Rent Now" link name â€” WCAG 2.4.4 (Link Purpose)
- Module: Module 1 of 1 (Code Module, starts `<!DOCTYPE html>`); shows on desktop, tablet and phone. Sizes & Pricing section, first card.
- FIND:
```html
<a class="btn accent" href="https://westernelite.com/lowboy-dumpster-rental/">Rent Now</a>
```
- REPLACE WITH:
```html
<a class="btn accent" href="https://westernelite.com/lowboy-dumpster-rental/" aria-label="Rent Now: Lowboy">Rent Now</a>
```
- Why: four card buttons all read "Rent Now" to a screen reader; the label adds the card's own heading. Wording check for Paul.

### 2. 40 yard card "Rent Now" link name â€” WCAG 2.4.4
- Module: same Code Module; second card.
- FIND:
```html
<a class="btn accent" href="https://westernelite.com/shop/40-yard-dumpster/">Rent Now</a>
```
- REPLACE WITH:
```html
<a class="btn accent" href="https://westernelite.com/shop/40-yard-dumpster/" aria-label="Rent Now: 40 Cubic Yard Dumpster">Rent Now</a>
```
- Why: names which dumpster the link rents (text taken from the card heading). Wording check for Paul.

### 3. 30 yard card "Rent Now" link name â€” WCAG 2.4.4
- Module: same Code Module; third card.
- FIND:
```html
<a class="btn accent" href="https://westernelite.com/shop/30-yard-dumpster/">Rent Now</a>
```
- REPLACE WITH:
```html
<a class="btn accent" href="https://westernelite.com/shop/30-yard-dumpster/" aria-label="Rent Now: 30 Cubic Yard Dumpster">Rent Now</a>
```
- Why: same as above. Wording check for Paul.

### 4. 15 yard card "Rent Now" link name â€” WCAG 2.4.4
- Module: same Code Module; fourth card.
- FIND:
```html
<a class="btn accent" href="https://westernelite.com/shop/15-yard-dumpster/">Rent Now</a>
```
- REPLACE WITH:
```html
<a class="btn accent" href="https://westernelite.com/shop/15-yard-dumpster/" aria-label="Rent Now: 15 Cubic Yard Dumpster">Rent Now</a>
```
- Why: same as above. Wording check for Paul.

### 5. Hero and bottom-banner "Rent Now" (jump to sizes) â€” WCAG 2.4.4
- Module: same Code Module; this exact line appears TWICE â€” once in the top hero (under "Dumpster Rental in Henderson, NV") and once in the bottom banner (under "Ready to rent a dumpster in Henderson?"). Replace BOTH.
- FIND:
```html
<a class="btn onblue" href="#sizes">Rent Now</a>
```
- REPLACE WITH:
```html
<a class="btn onblue" href="#sizes" aria-label="Rent Now: Sizes &amp; Pricing">Rent Now</a>
```
- Why: these two jump to the "Sizes & Pricing" section rather than a product; the label says so, so they are no longer confused with the four card links. Wording check for Paul.

### 6. "See Details" link name â€” WCAG 2.4.4
- Module: same Code Module; "Your local Henderson transfer station" section, next to "Get Directions".
- FIND:
```html
<a class="btn ghost" href="https://westernelite.com/dumpsites-2/">See Details</a>
```
- REPLACE WITH:
```html
<a class="btn ghost" href="https://westernelite.com/dumpsites-2/" aria-label="See Details: Your local Henderson transfer station">See Details</a>
```
- Why: "See Details" alone doesn't say details of what; label uses the section heading. Wording check for Paul.

### 7. âœ“ in "Accepted Materials" heading â€” WCAG 1.1.1 (Non-text Content)
- Module: same Code Module; "Accepted & prohibited materials" section, left column heading.
- FIND:
```html
<h3>&#10003; Accepted Materials</h3>
```
- REPLACE WITH:
```html
<h3><span aria-hidden="true">&#10003;</span> Accepted Materials</h3>
```
- Why: the tick is decorative (the word "Accepted" carries the meaning); hides it so screen readers don't announce "check mark".

### 8. âœ— in "Prohibited Materials" heading â€” WCAG 1.1.1
- Module: same Code Module; right column heading.
- FIND:
```html
<h3>&#10007; Prohibited Materials</h3>
```
- REPLACE WITH:
```html
<h3><span aria-hidden="true">&#10007;</span> Prohibited Materials</h3>
```
- Why: decorative cross; the word "Prohibited" carries the meaning.

### 9. âœ“ / âœ— list bullets drawn by CSS â€” WCAG 1.1.1
- Module: same Code Module; inside the `<style>` block, under the `/* Materials */` comment. Two lines.
- FIND:
```html
.mcol.accepted li::before{content:"\2713";position:absolute;left:0;color:#2e7d32;font-weight:700;}
```
- REPLACE WITH:
```html
.mcol.accepted li::before{content:"\2713";content:"\2713" / "";position:absolute;left:0;color:#2e7d32;font-weight:700;}
```
- FIND:
```html
.mcol.prohibited li::before{content:"\2717";position:absolute;left:0;color:#c0392b;font-weight:700;}
```
- REPLACE WITH:
```html
.mcol.prohibited li::before{content:"\2717";content:"\2717" / "";position:absolute;left:0;color:#c0392b;font-weight:700;}
```
- Why: screen readers read CSS-inserted symbols, so every list item starts "check markâ€¦" / "ballot Xâ€¦". The `/ ""` form gives the symbol empty alt text; older browsers ignore that second declaration and keep the first, so nothing changes visually.

## Not fixed here
- **Nested HTML document inside the module (recommendation, not restructured):** the Code Module contains `<!DOCTYPE html>`, `<html lang="en">`, `<head>` (with `<meta charset>`, `<meta viewport>`, `<title>`, `<meta name="description">`, font `<link>`s, JSON-LD `<script>`, `<style>`) and `<body data-rsssl=1>`, all inside WordPress's own page body. Browsers ignore/strip the extra `html/head/body` tags, the in-body `<title>` and meta description do nothing (SEO title/description fields for this page in AIOSEO are empty), and it is invalid markup (WCAG 4.1.1 is obsolete in 2.2 but this still risks parsing issues). Recommend a dev rebuild keeping only the `<style>`, the JSON-LD `<script>` and the `<section>` blocks, and moving the title/description into AIOSEO. Needs its own approval.
- **Unused CSS:** the style block contains `header.site`, `nav.main`, `.util` and `footer.site` rules, but no header/nav/footer markup is in the module. Harmless; clean up during the rebuild.
- **"Get Directions" opens a new tab** (`target="_blank"`) with no warning. Advisory only (WCAG 3.2.5 is AAA); not changed.
- **Colour contrast not machine-checked:** the gold #b07f24 the audit mentions is not on this page, so no colour change was made. I could not run a contrast script in this session (shell access denied), so lighter text colours such as `#7fb4e0` eyebrow on navy `#004070`, `#666` fine print, and `#0C71C3` blue on `#f4f4f2` have not been measured. Check them with a contrast checker before sign-off.
- **Audit items not found on the live page:** two H1s / missing phone H1, "Ã—" close button, â˜Ž symbol. The audit may have been based on an earlier version, or on a different page. Nothing to change here.
