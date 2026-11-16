# Commercial waste services (ID 31486) â€” https://westernelite.com/commercial-waste-services/
Read live: 2026-08-05 21:03:36 (modified_gmt) Â· Content truncated: yes, badly. The output stops inside an inline base64 background image in the `<style>` block of the very first code module.

## How to apply
WP Admin â†’ Pages â†’ edit Commercial waste services â†’ Divi Builder â†’ open the Code Module named below â†’ use the browser's find (Ctrl+F) to locate the FIND text â†’ replace it exactly with REPLACE â†’ Save module â†’ Save page draft/Preview (do not publish until Paul says so).

## Changes
None. No page HTML was visible. The only readable part was the start of the CSS in Code Module 1:
- Module 1: `[et_pb_fullwidth_code disabled_on="on|off|off"]`, first line "Western Elite - Commercial Services | Divi Code module: HERO (DESKTOP)". Hidden on phone, shown on tablet/desktop.
- That CSS has no `#b07f24` before the cut-off. The hero background is an inline base64 JPEG in `.we-cs .hero{â€¦url('data:image/jpeg;base64,â€¦`, and the read stops inside it.

## Not fixed here (not visible â€” check by hand)
Everything on this page needs a manual pass in the Divi editor:
1. **H1 per screen size.** Module 1 is the desktop hero (disabled_on="on|off|off", hidden on phone). There's probably a separate phone hero module (disabled_on="off|on|on").
   - Make sure the desktop hero and the phone hero each have exactly one `<h1>`.
   - If the phone hero has no H1, change its main heading to `<h1>` using the same visible heading text the desktop hero uses.
   - Change any other `<h1>` in later code modules to `<h2>`.
2. **Vague or repeated link text** ("Learn more", "Full answer â†’", repeated identical buttons). Add an `aria-label` naming the destination, using only words already on the card/link target. Wording check for Paul.
3. **Icon-only buttons** (e.g. "Ã—" close on a modal/popup): add `aria-label="Close"`.
4. **Symbols â˜Ž âœ“ etc. in markup**:
   - Decorative next to text: wrap in `<span aria-hidden="true">`.
   - Symbol alone carries the meaning: use `role="img" aria-label="Phone"` / `"Included"`.
5. **Gold hover**: if `#b07f24` is a hover background behind `#18232d` text, replace it with `#b08024`. I calculated that by hand at about 4.52:1 against #18232d (#b07f24 is about 4.49:1). I couldn't run a script for this.
6. **Iframes** (map/Vimeo/YouTube) inside code modules: add a `title="â€¦"` that describes them using the page's own wording.

Why this can't be drafted from here: the hero CSS has a large inline base64 image, and that pushes the whole page past the ~60k-character read limit. A follow-up could move that image to the Media Library and use a normal URL. That would make the page readable and lighter, but it's a separate change Paul would need to approve.
