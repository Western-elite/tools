# Recycling (ID 36625) â€” https://westernelite.com/recycling/
Read live: 2026-09-11 21:49:19 (modified_gmt) Â· Content truncated: yes (cut off inside an inline base64 image in Code Module 4, "SECTION 04 of 16 : RECYCLING SERVICES (cards)")

## How to apply
WP Admin â†’ Pages â†’ edit Recycling â†’ Divi Builder â†’ open the Code Module named below â†’ use the browser's find (Ctrl+F) to locate the FIND text â†’ replace it exactly with REPLACE â†’ Save module â†’ Save page draft/Preview (do not publish until Paul says so).

## Changes
None needed in the part I could see (Code Modules 1â€“3 in full, plus the start of Module 4).

What was checked:
- **One H1 per screen size: OK.** Code Module 1 ("SECTION 01 of 16 : HERO BANNER (desktop + mobile)") holds both heroes. The desktop one, `<h1 id="page-title" class="sb-title">Commercial Recycling <br>in Las Vegas</h1>`, is hidden at 767px and below. The mobile one, `<h1 class="m-title">Commercial Recycling in Las Vegas</h1>`, shows only at 767px and below. So each screen size has exactly one H1. Divi's disabled_on isn't used; the switching is done in CSS.
- **Link text in Modules 1â€“3:** all descriptive ("Call for recycling service", "See your options", section-nav tabs, "Get Pricing"). No vague links.
- **Icon-only buttons, â˜Ž / âœ“ in the markup, iframes, `#b07f24`:** none in Modules 1â€“3 or the visible start of Module 4.

## Not fixed here
- **Not visible (truncated), check by hand:** Code Module 4 (Recycling Services cards) after its first card image, plus Modules 5â€“16. The header comment says there are 16 sections. Check each one for:
  - extra H1s (any H1 outside the hero â†’ H2)
  - repeated or vague card buttons (e.g. identical "Get Pricing"/"Learn more" on several cards â†’ add aria-label naming the card's service, using the card's own title; wording check for Paul)
  - â˜Ž / âœ“ / Ã— symbols in markup
  - map or video iframes without `title`
  - `#b07f24` as a hover background behind #18232d text. Replace it with `#b08024`. I calculated that by hand at about 4.52:1 against #18232d (#b07f24 is about 4.49:1). I couldn't run a script for this.
- **CSS-only âœ“ (out of scope):** the desktop hero's bullet list adds a âœ“ through CSS (`.wel-hero-desktop .sb-points li::before{content:"\2713"â€¦}`). It's decorative, but some screen readers read CSS-generated content. The fix would be a CSS change (e.g. `content:"\2713" / ""` alt-text syntax), which this task doesn't cover. Flagging it for Paul/Echo.
- Minor and outside the listed fixes: the desktop hero `<div class="storage-banner" id="overview" aria-labelledby="page-title">` has `aria-labelledby` on a plain div with no role. It's harmless, so I left it alone.
