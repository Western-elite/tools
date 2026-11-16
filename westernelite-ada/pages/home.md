# Home (ID 44) â€” https://westernelite.com/

Read live: 2026-08-04 15:49:06 (modified_gmt) Â· Content truncated: **yes**. The API response stops at about 60k characters, partway through the inline base64 background image in the 2nd code module (mobile hero). Nothing after that point could be read. That includes the mobile hero's H1, its buttons, and every later section on the page.

## How to apply
WP Admin â†’ Pages â†’ edit Home â†’ Divi Builder â†’ open the Code Module named below â†’ use the browser's find (Ctrl+F) to locate the FIND text â†’ replace it exactly with REPLACE â†’ Save module â†’ Save page draft/Preview (do not publish until Paul says so).

## Changes

### 1. Hide decorative star in the 4-hour badge â€” WCAG 1.1.1 / 1.3.1
- Module: 1st code module on the page (Fullwidth Code, 1st section), first line `<div class="we-b we-b--hero-desktop">`. No disabled_on attribute. Its CSS hides it at 680px wide and below, so it shows on desktop, tablet and large phones.
- FIND:
```html
<span class="badge-4hr">â˜… 4-Hour Delivery â€” Guaranteed</span>
```
- REPLACE WITH:
```html
<span class="badge-4hr"><span aria-hidden="true">â˜…</span> 4-Hour Delivery â€” Guaranteed</span>
```
- Why: the â˜… is decoration next to text that already says it. Without this, screen readers announce "black star" before the badge.

### 2. "Residential" button: name the destination â€” WCAG 2.4.4 â€” wording check for Paul
- Module: 1st code module (`<div class="we-b we-b--hero-desktop">`), hero buttons row. Same visibility as change 1.
- FIND:
```html
<a class="btn btn-ghost" href="https://westernelite.com/dumpster-rental/">Residential</a>
```
- REPLACE WITH:
```html
<a class="btn btn-ghost" href="https://westernelite.com/dumpster-rental/" aria-label="Residential dumpster rental">Residential</a>
```
- Why: a link that just says "Residential" doesn't tell a screen-reader user where it goes. The label uses only words from the link and its URL, and it starts with the visible word, so it also meets WCAG 2.5.3. **Wording check for Paul.**

### 3. "Business" button: name the destination â€” WCAG 2.4.4 â€” wording check for Paul
- Module: 1st code module (`<div class="we-b we-b--hero-desktop">`), hero buttons row. Same visibility as change 1.
- FIND:
```html
<a class="btn btn-ghost" href="https://westernelite.com/business-commercial-dumpster-rental/">Business</a>
```
- REPLACE WITH:
```html
<a class="btn btn-ghost" href="https://westernelite.com/business-commercial-dumpster-rental/" aria-label="Business commercial dumpster rental">Business</a>
```
- Why: same as change 2. The words come from the link and its URL. **Wording check for Paul.**

## Not fixed here
- **Possible double H1 between 681 and 767px wide. Check by hand.** Neither hero module uses Divi's disabled_on. Visibility is set in CSS instead:
  - The desktop hero (module 1) is hidden only at `max-width:680px`.
  - The mobile hero (module 2, `<section class="we-mhero" aria-labelledby="we-mhero-title">`) is hidden only at `min-width:768px`.
  - So between 681 and 767px both heroes show. Module 2's CSS styles `.we-mhero h1`, so it almost certainly has an H1, but that part is cut off.
  - Demoting either H1 would leave some screen size with no H1. The clean fix is to make the two breakpoints match (for example, hide the desktop hero at `max-width:767px`). That is a CSS change outside this task's scope, so Paul should decide.
  - Desktop H1 (visible): "Your Roll-Off / Shows Up. Your / Job Keeps Moving."
- **Mobile hero H1 text, links and symbols are not visible. Check by hand.** The cut-off happens inside module 2's base64 `<img class="hero-bg">`.
- **The rest of the page after module 2 is not visible. Check by hand.** Look for:
  - extra H1s (they should become H2)
  - vague links ("Learn more", "Full answer â†’", repeated "Rent Now")
  - icon-only buttons such as "Ã—"
  - â˜Ž / âœ“ symbols in the HTML
  - iframes with no title
- **Gold hover #b07f24: not in the visible part. Check by hand.**
  - If you find it as a hover background behind #18232d text, replace `#b07f24` with `#b18025`.
  - Contrast: #b07f24 is 4.49:1 and #b18025 is about 4.54:1 against #18232d. That passes AA (4.5:1).
  - Worked out by hand with the WCAG relative-luminance formula (my script tool was blocked this run). Confirm it in a contrast checker.
- **CSS âœ“ in `.we-b .proofline span::before{content:"âœ“"â€¦}` (module 1): not changed.** Screen readers may announce this check mark. The fix (`content:"âœ“" / ""`, or moving the mark into an aria-hidden span) is a CSS/markup change outside this task's scope. Leave it to Echo or Paul.
- Module 2 wraps its content in a full `<!DOCTYPE html><html><head><title>â€¦</title></head><body>` document inside a code module. That's invalid nesting (the `<title>` ends up inside the page body). Noted only, not changed.
