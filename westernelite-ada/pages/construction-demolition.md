# Construction and demolition waste services (ID 31698) â€” https://westernelite.com/construction-and-demolition-waste-services/
Read live: 2026-08-17 17:43:28 (modified_gmt) Â· Content truncated: yes

The API returned only ~60k characters. Visible: code modules 01-04 in full, plus the start of the "MATERIAL ROUTER" module. The response cuts off inside that module's base64 image. The page header says "SECTION xx of 17", so roughly 12 more code modules were not visible. See "Not fixed here".

## How to apply
WP Admin â†’ Pages â†’ edit Construction and demolition waste services â†’ Divi Builder â†’ open the Code Module named below â†’ use the browser's find (Ctrl+F) to locate the FIND text â†’ replace it exactly with REPLACE â†’ Save module â†’ Save page draft/Preview (do not publish until Paul says so).

## Contrast calculation (item 5)
- Text #18232d: relative luminance 0.01586.
- Old hover #b07f24: luminance 0.24536 â†’ **4.49:1 (4.485), fails AA**.
- New hover **#b17f24** (red channel +1): luminance 0.24653 â†’ **4.50:1 (4.503), passes AA**. This is the closest lightened gold that reaches 4.5:1.
- If Paul wants more margin, **#b28025** gives 4.56:1. It looks the same to the eye. To use it, swap it in for #b17f24 in every REPLACE below.
- The calculation uses the WCAG 2.1 relative-luminance formula: (L1+0.05)/(L2+0.05).

## Changes

### 1. Gold button hover contrast â€” WCAG 1.4.3
- Module: Code module #1. First line: `SECTION 01 of 17 - HERO (DESKTOP / LAPTOP)`. Visible on desktop only (its CSS hides it at 979px and below; no Divi visibility setting).
- FIND:
```html
.wecd-btn:hover { background: #b07f24; border-color: #b07f24; text-decoration: none; }
```
- REPLACE WITH:
```html
.wecd-btn:hover { background: #b28025; border-color: #b28025; text-decoration: none; }
```
- Why: dark text #18232d on #b07f24 is 4.49:1. On #b17f24 it is 4.50:1.

### 2. Gold button hover contrast â€” WCAG 1.4.3
- Module: Code module #2. First line: `SECTION 02 of 17 - HERO (TABLET / PHONE)`. Visible at 979px and below (tablet and phone).
- FIND:
```html
.wecd-btn:hover { background: #b07f24; border-color: #b07f24; text-decoration: none; }
```
- REPLACE WITH:
```html
.wecd-btn:hover { background: #b28025; border-color: #b28025; text-decoration: none; }
```
- Why: same rule as change 1. Every module repeats this CSS and it applies page-wide, so every copy has to change.

### 3. Gold button hover contrast â€” WCAG 1.4.3
- Module: Code module #3. First line: `SECTION 03 of 17 - STAT BAND`. Visible on all devices.
- FIND:
```html
.wecd-btn:hover { background: #b07f24; border-color: #b07f24; text-decoration: none; }
```
- REPLACE WITH:
```html
.wecd-btn:hover { background: #b28025; border-color: #b28025; text-decoration: none; }
```
- Why: same as change 1.

### 4. Gold button hover contrast â€” WCAG 1.4.3
- Module: Code module #4. First line: `SECTION 04 of 17 - ANCHOR NAV`. Visible on all devices.
- FIND:
```html
.wecd-btn:hover { background: #b07f24; border-color: #b07f24; text-decoration: none; }
```
- REPLACE WITH:
```html
.wecd-btn:hover { background: #b28025; border-color: #b28025; text-decoration: none; }
```
- Why: same as change 1.

### 5. Decorative star in the rating badge (desktop hero) â€” WCAG 1.1.1
- Module: Code module #1. First line: `SECTION 01 of 17 - HERO (DESKTOP / LAPTOP)`. Desktop only.
- FIND:
```html
<span>4.8â˜… Google rating</span>
```
- REPLACE WITH:
```html
<span>4.8<i aria-hidden="true" style="font-style:normal">â˜…</i> Google rating</span>
```
- Why: screen readers say "4.8 black star Google rating". The text already says "Google rating", so the star is decorative and gets hidden. I used `<i>` instead of a nested `<span>` because `.wecd-badges span` adds padding and a âœ“ to every span. The visible result does not change.

### 6. Decorative star in the rating badge (mobile hero) â€” WCAG 1.1.1
- Module: Code module #2. First line: `SECTION 02 of 17 - HERO (TABLET / PHONE)`. Tablet and phone.
- FIND:
```html
<span>4.8â˜… Google rating</span>
```
- REPLACE WITH:
```html
<span>4.8<i aria-hidden="true" style="font-style:normal">â˜…</i> Google rating</span>
```
- Why: same as change 5.

## Checked, no change needed (visible part)
- **H1:** module #1 (desktop) and module #2 (tablet/phone) each have one `<h1>Construction & Demolition Dumpster Rental in Las Vegas</h1>`. Their CSS hides one or the other at 979/980px, so each viewport shows exactly one H1. That passes. Optionally, also set Divi Visibility on these modules ("Disable on Phone + Tablet" for #1, "Disable on Desktop" for #2), as their own header comments suggest.
- **Links:** "Get Contractor Pricing", "Call or Text (702) 440-4242", the anchor-nav links (Your material / Containers / Exchanges / Load rules / Pricing / FAQ / Get a quote) and "(702) 440-4242" are all descriptive. No vague link text in the visible part.
- No iframes and no icon-only buttons in the visible part.
- The MATERIAL ROUTER module (#5) starts with an `<h2>`, which is correct.

## Not fixed here
- **Not visible (truncated) â€” check by hand:** code module #5 (MATERIAL ROUTER) from its base64 image onward, and all later code modules (about sections 06â€“17).
  - In each one, Ctrl+F `#b07f24` and apply the same hover replacement (#b28025). The rule applies page-wide and the last copy on the page wins, so one missed copy keeps the failing hover.
  - Also check those modules for: any extra `<h1>` (demote to `<h2>`), vague links ("Learn more", "Full answer â†’", repeated identical buttons), "Ã—" close buttons with no aria-label, â˜Ž/âœ“ symbols in the HTML, and iframes (map/video) with no `title`.
- **CSS checkmarks:** modules #1 and #2 add a âœ“ to each hero badge with `.wecd-badges span::before { content: "\2713"; }`. Some screen readers announce it. The fix would be CSS (`content: "\2713" / "";`), and only the gold-hover CSS is in scope, so this is left for Paul/Echo to decide.
- **Divi text/video modules (non-code):** none in the visible part. Anything outside code modules â†’ Echo.
