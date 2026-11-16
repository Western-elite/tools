# Christmas Express (ID 3458) â€” https://westernelite.com/christmas-express/
Read live: 2026-11-16 01:02:02 (modified_gmt) Â· Content truncated: yes

The API returned only ~60k characters. Visible: code module #1 (SECTION 1 â€” HERO BANNER) and #2 (SECTION 2 â€” FACTS STRIP) in full, plus the start of #3 (SECTION 3 â€” IN-PAGE NAV). The response cuts off inside #3's `<style>` block, so its HTML and every later module were not visible.

## How to apply
WP Admin â†’ Pages â†’ edit Christmas Express â†’ Divi Builder â†’ open the Code Module named below â†’ use the browser's find (Ctrl+F) to locate the FIND text â†’ replace it exactly with REPLACE â†’ Save module â†’ Save page draft/Preview (do not publish until Paul says so).

## Changes
None in the visible part.

## Checked, no change needed (visible part)
- **Module #1 (`SECTION 1 â€” HERO BANNER (HOSTED)`, all devices):** two `<img>` banners with CSS swapping desktop (â‰¥768px) and mobile (â‰¤767px). Both have meaningful alt text. No links, buttons, symbols or iframes.
- **Module #2 (`SECTION 2 â€” FACTS STRIP`, all devices):** five plain-text `<span class="fact">` items (Since 2010 / 12,000+ Guests Each Season / Cost: Free - Compliments of The Williams Family / Reservations Required / Dec 3, 4, & 5, 10, 11, & 12). Nothing to fix.
- No `#b07f24` (gold hover) in the visible CSS.

## Not fixed here
- **H1 â€” needs Paul's decision.** The hero (module #1) contains images only and has **no `<h1>`** at either screen size. The banner text is baked into the image. No H1 was found anywhere in the visible part.
  - The rule is to reuse an existing visible heading, but there is no on-page heading text to copy, so nothing was added rather than inventing copy.
  - Check by hand whether a later module (from SECTION 3 on) has an `<h1>`.
  - If none exists, the H1 would need to come from text that is already there. One option for Paul: a visually-hidden `<h1>The Christmas Express</h1>` in module #1, taken from the banner alt text. **Wording check for Paul.**
  - If a later module has more than one `<h1>`, demote the extras to `<h2>`.
- **Not visible (truncated) â€” check by hand:** module #3 (IN-PAGE NAV) HTML and every later code module. In each one, check for:
  - vague links ("Learn more", "Reserve", "click here", repeated identical "Reserve Now"-type buttons) â†’ add an aria-label naming the destination;
  - "Ã—" close buttons without a label â†’ `aria-label="Close"`;
  - â˜Ž/âœ“/ðŸŽ„-type symbols â†’ `aria-hidden="true"` if decorative, `role="img"` plus `aria-label` if they carry meaning on their own;
  - map/video iframes without `title`;
  - `#b07f24` hover backgrounds behind #18232d text â†’ `#b17f24` (4.50:1) or `#b28025` (4.56:1).
- **CSS variable note:** the visible CSS defines `--gold:#eed333; --gold-dk:#c9a22â€¦` (cut off). This is not the #b07f24 issue and was not checked for contrast here.
