# F.A.Q. (ID 734) â€” https://westernelite.com/faq/
Read live: 2026-09-21 16:12:16 (modified_gmt) Â· Content truncated: yes (cut off inside the search `<script>` near the end of Code Module 2)

## How to apply
WP Admin â†’ Pages â†’ edit F.A.Q. â†’ Divi Builder â†’ open the Code Module named below â†’ use the browser's find (Ctrl+F) to locate the FIND text â†’ replace it exactly with REPLACE â†’ Save module â†’ Save page draft/Preview (do not publish until Paul says so).

## Checked and OK (no change needed)
- **One H1 per screen size: OK.** Code Module 1 (mobile hero, "Hero banner (MOBILE ONLY)") has `<h1>Have Questions?<span>We've Got Answers</span></h1>` and its CSS hides it at 768px and wider. Code Module 2 (main FAQ block) has `<h1>Have Questions?<br/>Weâ€™ve Got Answers.</h1>` in `#we-faq .hero`, and Module 1's CSS hides that hero below 768px. So each screen size shows exactly one H1. Neither module uses Divi's disabled_on. The hiding is done in CSS only.
- **Clear-search "Ã—" button:** already has `aria-label="Clear search"`.
- **Link text:** no vague links. The "Order a Dumpster" links repeat, but they all go to the same page (/dumpster-rental/), which is fine.
- **Iframes:** none in the part I could see.
- **Gold hover #b07f24:** not in the part I could see.

## Changes
### 1. Decorative star in desktop hero badge â€” WCAG 1.1.1 / 1.3.1
- Module: Code Module 2 (the 2nd on the page, first line "Western Elite FAQ - MAIN block (hero + search + all 8 Q&A categories)."). No disabled_on is set. The hero inside it shows on tablet/desktop only.
- FIND:
```html
<span class="badge-4hr">â˜… Help Center</span>
```
- REPLACE WITH:
```html
<span class="badge-4hr"><span aria-hidden="true">â˜…</span> Help Center</span>
```
- Why: the â˜… is decoration next to text. Without this, screen readers announce "black star, Help Center".

## Not fixed here
- **Not visible (truncated), check by hand:** the API output stops partway through the `we-faq-search` script in Code Module 2. Anything after that point was not reviewed. That includes the rest of Module 2 and any later modules on the page. Check them for H1s, vague links, "Ã—"/â˜Ž/âœ“ symbols, iframes without a title, and `#b07f24`. If you find `#b07f24` as a hover background behind #18232d text, replace it with `#b08024`. I calculated that by hand at about 4.52:1 against #18232d (#b07f24 is about 4.49:1). I couldn't run a script for this.
- **Content check for Paul (not a code-module a11y fix):** some links say "Text" but dial a phone call (`href="tel:â€¦"`). One is the "Didnâ€™t find it? Text (702) 440-4242" line at the end of the Commercial recycling category (`<p class="cat-foot">`). The other is "Text a photo to (702) 440-4242" in the rebar answer. The other "Didnâ€™t find it? Textâ€¦" lines use `sms:`. Consider switching these two to `sms:+17024404242`.
- **Not in scope:** gold buttons/badges use `#c8922a` (mobile "Call" button with #052f54 text, badge with #004070 text, focus outlines). I didn't check their contrast because this task only covers `#b07f24`.
- The "+" / "â€“" toggle signs on each question come from CSS `::after` content and weren't changed (CSS is out of scope). The `<details>/<summary>` element already gives the open/closed state to assistive tech.
