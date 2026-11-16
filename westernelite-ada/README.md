# westernelite.com ADA fixes â€” Code Modules & iframes

Accessibility (WCAG 2.1 AA) fixes for the parts of westernelite.com that Echo can't edit: Divi Code Modules and locked map/video iframes.
Source audit: Echo's ADA audit of 2026-11-16. **This is not a legal certification of ADA compliance.**

Nothing here changes the website by itself. A person applies each fix by hand in WordPress after Paul approves.

## Why patch notes, not full copies
The page-reading tool cuts every page off at ~60k characters, and most of these pages embed large base64 images inside their Code Modules. A full "before/after" copy of those modules can't be captured faithfully, so each page gets **exact FIND â†’ REPLACE snippets copied from the live HTML** instead. Anything past the cut-off is listed as "not visible â€” check by hand".

## Files
| File | Page | Changes | Fully read? |
|---|---|---|---|
| `pages/why-us.md` | Why Us (11614) | 1 â€” phone H1 added | yes |
| `pages/henderson-dumpster-rental.md` | Dumpster Rental Henderson (35788) | 9 â€” "Rent Now"/"See Details" names, âœ“/âœ— hidden from screen readers | yes |
| `pages/iframe-titles.md` | Contact, Nellis, Wynn, Henderson CC, Videos, Residential | 21 â€” iframe titles (4 maps, 14 videos) + hidden U+FEFF characters removed from 3 map iframes | yes |
| `pages/construction-demolition.md` | C&D (31698) | 6 â€” gold hover contrast Ã—4, â˜… hidden Ã—2 | no (modules 1â€“4 of 17) |
| `pages/home.md` | Home (44) | 3 â€” â˜… hidden, Residential/Business button names | no |
| `pages/dumpster-rental.md` | Dumpster Rental (1328) | 1 â€” â˜… hidden | no |
| `pages/faq.md` | F.A.Q. (734) | 1 â€” â˜… hidden | no |
| `pages/recycling.md` | Recycling (36625) | 0 visible | no (modules 1â€“3) |
| `pages/commercial.md` | Commercial (31486) | 0 visible â€” checklist only | no (first module) |
| `pages/careers.md` | Careers (14664) | 0 visible â€” checklist only | no |
| `pages/christmas-express.md` | Christmas Express (3458) | 0 visible â€” no H1 found, option for Paul | no |

## How to apply (after Paul approves)
1. Re-read the page in WordPress first. Videos and Residential were edited on 2026-11-16, and any page may have changed since these notes were written. If a FIND no longer matches exactly, stop and ask.
2. WP Admin â†’ Pages â†’ edit the page â†’ Divi Builder â†’ open the module named in the file (Code Module, or the Text tab for raw iframes).
3. Ctrl+F the FIND text, replace it exactly with REPLACE WITH, then save the module.
4. Save as draft / Preview. Check desktop **and** phone. Then publish, and clear the Divi, WP Rocket and GoDaddy caches (and Cloudflare if needed).
5. Items marked "wording check for Paul" need his OK on the words before they go live.

## Gold button hover (#18232d text on #b07f24 = 4.49:1, fails)
The C&D file uses **#b17f24** (4.50:1, the smallest passing change). For a safer margin use **#b28025** (4.56:1). Both pass. The colour is repeated in every C&D module, and the last copy on the page wins, so also search modules 5â€“17 for `#b07f24`. Ratios were worked out by hand because no script runner was available on this PC, so confirm them in a contrast checker.

## Not covered (still open)
- Content past the 60k cut-off on 8 pages. Read those in the Divi editor, or move the inline base64 images into the Media Library (Echo, separate approval).
- Two H1s possible on Home between 681 and 767px wide (hero breakpoints don't match; CSS change).
- CSS-generated âœ“/âœ• bullets on several pages; site-wide skip link; footer headings; video captions; the 16 form/checkout pages; header-image alt text Paul needs to describe.
- Henderson (35788) nests a full `<html>` document inside the page. Rebuilding it is recommended, not done.

No browser or screen-reader test was possible on this PC.
