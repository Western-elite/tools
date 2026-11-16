# Christmas Express (ID 3458) - https://westernelite.com/christmas-express/

Re-read live: 2026-11-16 (WordPress modified_gmt 2026-11-16 17:49:19). Code Module content still truncated by the API (~60k characters).
First read (PR #30): modified_gmt 2026-11-16 01:02:02. **The page was edited between the two reads.**

## How to apply
WP Admin -> Pages -> edit Christmas Express -> Divi Builder -> open the Code Module named below -> use the browser's find (Ctrl+F) to locate the FIND text -> replace it exactly with REPLACE -> Save module -> Save page draft/Preview (do not publish until Paul says so).

Christmas Express is in peak season. Paste only at a quiet time, and re-read the page first, because it is still being edited.

## H1 - resolved by the page edit, no change needed
- PR #30 found no `<h1>` and suggested a visually hidden `<h1>The Christmas Express</h1>` (decision D2).
- The live page (rendered HTML, read 2026-11-16) now has **one visible H1**:
  "All Aboard The Christmas Express for a Magical Holiday Evening!"
- The rest of the page uses H2s: "This Year's Christmas Express Is Full", "Everything below is compliments of the Williams family", "Train times, directions &amp; the property", "Meet the creator &amp; see the experience", "Toy Drive", "Frequently asked questions".
- The page CSS also styles `.cx-express .intro h1`, which matches a heading in an intro section.
- **Adding a hidden H1 now would give the page two H1s, which is worse for screen readers and SEO. Do NOT add it.**

### Check by hand when pasting other fixes
- Confirm there is still exactly one `<h1>` on the page, at desktop and phone widths.
- If a second `<h1>` shows up, change the extra one to `<h2>`.

### Fallback only - use ONLY if the visible H1 is ever removed
Module: `SECTION 1 - HERO BANNER (HOSTED)` (the first full-width Code Module). `<div class="hero">` appears once in the visible code.

FIND:
```html
<div class="hero">
```

REPLACE:
```html
<div class="hero">
  <h1 style="position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;">The Christmas Express</h1>
```
The inline style hides the heading visually but keeps it for screen readers, so the page looks the same. The text comes from the banner's alt text.

## Checked, no change needed (visible part)
- **Module #1 (`SECTION 1 - HERO BANNER (HOSTED)`):** now one banner image for all screens (was a desktop + mobile pair). Alt text: "Western Elite &amp; The Williams Family present The Christmas Express - Santa and Mrs. Claus in the sleigh". No links, buttons, symbols or iframes.
- **Module #2 (`SECTION 2 - FACTS STRIP`):** plain-text facts. Nothing to fix.
- No `#b07f24` (gold hover) in the visible CSS.

## Not visible (truncated) - check by hand
Module #3 (IN-PAGE NAV) HTML and every later Code Module. In each one, check for:
- vague links ("Learn more", "Reserve", "click here", repeated identical buttons) -> add an aria-label naming the destination;
- "x" close buttons without a label -> `aria-label="Close"`;
- phone / check-mark / emoji symbols -> `aria-hidden="true"` if decorative, `role="img"` plus `aria-label` if they carry meaning on their own;
- map/video iframes without `title`;
- `#b07f24` hover backgrounds behind #18232d text -> `#b17f24` (4.50:1) or `#b28025` (4.56:1).

## Notes
- This file was rewritten in plain ASCII. The PR #30 version had garbled dashes and arrows from a commit-tool encoding glitch.
- No browser or screen-reader test is possible on this PC.
