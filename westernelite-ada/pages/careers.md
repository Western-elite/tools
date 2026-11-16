# Careers (ID 14664) â€” https://westernelite.com/careers/
Read live: 2026-08-07 20:55:31 (modified_gmt) Â· Content truncated: yes

The API returned only ~60k characters, and almost all of that is one inline base64 JPEG. It is the background image in the CSS of the first code module, "WESTERN ELITE CAREERS â€” SECTION 1 of 8: Hero banner". The response cuts off inside that image. Only the first ~2k characters of the page could be read: the module's header comment, font `<link>` tags, and the first few CSS rules. No HTML markup (headings, links, buttons, iframes) was visible.

## How to apply
WP Admin â†’ Pages â†’ edit Careers â†’ Divi Builder â†’ open the Code Module named below â†’ use the browser's find (Ctrl+F) to locate the FIND text â†’ replace it exactly with REPLACE â†’ Save module â†’ Save page draft/Preview (do not publish until Paul says so).

## Changes
None. Nothing that needs fixing appears in the visible part of the code modules. Everything below has to be checked by hand.

## Not fixed here
**Not visible â€” check by hand.** The page has 8 code sections. Check each item below:

1. **H1, module #1 (Hero banner, SECTION 1 of 8).** Its comment says it holds a DESKTOP hero and a MOBILE hero that swap at 767px. Check that each one has exactly one `<h1>`.
   - If one hero has no H1, copy the other hero's heading text into an `<h1>`.
   - If both show at the same width, demote the extra one to `<h2>`.
   - Any `<h1>` in sections 2â€“8 â†’ `<h2>`.
2. **Gold hover contrast.** Ctrl+F `#b07f24` in every code module. If found as a button hover background behind #18232d text, replace with `#b17f24` (4.50:1; or `#b28025` for 4.56:1).
3. **Vague links.** Check for "Apply", "Learn more", "click here" or repeated identical buttons. Add an aria-label naming the destination (for example, the job title already on the page). Wording check for Paul.
4. **Icon-only buttons.** Check for "Ã—" close buttons, for example on a job or apply modal. Add `aria-label="Close"`.
5. **Symbols.** Check for â˜Ž âœ“ etc. Use `aria-hidden="true"` if decorative; use `role="img"` plus `aria-label` if the symbol carries the meaning on its own.
6. **Iframes.** Any map, video or embedded application form iframe without a `title` â†’ add one that describes it from page context.

A smaller response is needed to review this page from the API. That means either reading it in the Divi editor, or moving the base64 hero background to a Media Library URL (that is a content change for Echo/Paul, not part of this patch).
