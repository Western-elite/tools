# Home (ID 44) - https://westernelite.com/

Read live: 2026-08-04 15:49:06 (modified_gmt). Content truncated: **yes**. The API response stops at about 60k characters, partway through the inline base64 background image in the 2nd code module (mobile hero). Nothing after that point could be read. That includes the mobile hero's H1, its buttons, and every later section on the page.

> Note on characters: this file is plain ASCII on purpose. The tool that commits these notes garbles non-ASCII characters (stars, dashes, arrows). Where the live page has a special character, this note names it in [brackets] and the REPLACE snippets use the matching HTML entity (`&#9733;` = star, `&mdash;` = long dash). Entities display exactly like the character.

## How to apply
WP Admin -> Pages -> edit Home -> Divi Builder -> open the Code Module named below -> use the browser's find (Ctrl+F) to locate the FIND text -> replace it exactly with REPLACE -> Save module -> Save page draft/Preview (do not publish until Paul says so).

## Changes

### 1. Hide decorative star in the 4-hour badge - WCAG 1.1.1 / 1.3.1
- Module: 1st code module on the page (Fullwidth Code, 1st section), first line `<div class="we-b we-b--hero-desktop">`. No disabled_on attribute. Its CSS hides it at 680px wide and below (767px and below once change 4 is applied), so it shows on desktop and tablet.
- FIND (the whole badge line; on the live page it reads: `<span class="badge-4hr">` [star] ` 4-Hour Delivery ` [long dash] ` Guaranteed</span>`). Ctrl+F for `badge-4hr` to find it.
- REPLACE the whole line WITH:
```html
<span class="badge-4hr"><span aria-hidden="true">&#9733;</span> 4-Hour Delivery &mdash; Guaranteed</span>
```
- Why: the star is decoration next to text that already says it. Without this, screen readers announce "black star" before the badge.

### 2. "Residential" button: name the destination - WCAG 2.4.4 - wording check for Paul
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

### 3. "Business" button: name the destination - WCAG 2.4.4 - wording check for Paul
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

### 4. Only one H1 between 681 and 767px wide - WCAG 1.3.1 / 2.4.6 (Paul's decision D3, 2026-11-16)
- Module: 1st code module (`<div class="we-b we-b--hero-desktop">`), inside its `<style>` block, right after the comment `/* Desktop hero: full-width background banner. Hidden on phones. */`.
- FIND:
```css
@media(max-width:680px){.we-b--hero-desktop{display:none}}
```
- REPLACE WITH:
```css
@media(max-width:767px){.we-b--hero-desktop{display:none}}
```
- Why: the desktop hero (module 1) was hidden only at 680px and below, and the mobile hero (module 2, `<section class="we-mhero">`) is hidden only at 768px and above (`@media(min-width:768px){.we-mhero{display:none !important}}`, read live, unchanged). So between 681 and 767px both heroes showed, each with its own H1. After this change the hand-off point is 767/768px for both:
  - 767px and below: mobile hero only (its H1).
  - 768px and above: desktop hero only (H1 "Your Roll-Off / Shows Up. Your / Job Keeps Moving.").
  - Every width still has exactly one hero H1. Neither H1 is demoted or removed.
- Scope: one number in one CSS rule inside the Home Code Module. Both rules live in the page's own Code Modules, not in the theme or site-wide CSS. Module 1 contains only the desktop hero (hero, buttons, proofline), so nothing else is hidden by the wider breakpoint. Module 1's other 680px rule (`@media(max-width:680px){.we-b .section{padding:52px 0...`) is left as is; it only styles content inside module 1, which is now hidden at that width anyway.
- Visual effect: screens 681-767px wide (some phones in landscape, small tablets in portrait) now see the mobile hero instead of the desktop banner. That is the same hero phones already get.
- Check after pasting (Preview, browser dev tools -> responsive mode):
  - **680px**: only the mobile hero shows. One H1.
  - **700px**: only the mobile hero shows (before this fix both showed). One H1.
  - **767px**: only the mobile hero shows. One H1.
  - **768px**: only the desktop hero shows. One H1.
  - Quick visible-H1 count, in the browser console: `[...document.querySelectorAll('h1')].filter(h=>h.offsetParent).length`. It should be 1 at each width (unless the unread part of the page has more H1s, see below).
- No browser test was possible on this PC. The rules were read from the live page HTML only.

## Not fixed here
- **Mobile hero H1 text, links and symbols are not visible. Check by hand.** The cut-off happens inside module 2's base64 `<img class="hero-bg">`. Module 2's CSS styles `.we-mhero h1` and the section uses `aria-labelledby="we-mhero-title"`, so it almost certainly has an H1. Confirm it exists when applying change 4, otherwise 681-767px (and phones) would have no H1.
- **The rest of the page after module 2 is not visible. Check by hand.** Look for:
  - extra H1s (they should become H2)
  - vague links ("Learn more", "Full answer" + arrow, repeated "Rent Now")
  - icon-only buttons such as [multiplication sign / "x" close]
  - [telephone] / [check mark] symbols in the HTML
  - iframes with no title
- **Gold hover #b07f24: not in the visible part. Check by hand.**
  - If you find it as a hover background behind #18232d text, replace `#b07f24` with `#b18025`.
  - Contrast: #b07f24 is 4.49:1 and #b18025 is about 4.54:1 against #18232d. That passes AA (4.5:1).
  - Worked out by hand with the WCAG relative-luminance formula (my script tool was blocked this run). Confirm it in a contrast checker.
- **CSS [check mark] in `.we-b .proofline span::before{content:"[check mark]"...}` (module 1): not changed.** Screen readers may announce this check mark. The fix (`content:"\2713" / ""`, or moving the mark into an aria-hidden span) is a CSS/markup change outside this task's scope. Leave it to Echo or Paul.
- Module 2 wraps its content in a full `<!DOCTYPE html><html><head><title>...</title></head><body>` document inside a code module. That's invalid nesting (the `<title>` ends up inside the page body). Noted only, not changed.
