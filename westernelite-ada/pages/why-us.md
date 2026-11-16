# Why Us (ID 11614) â€” https://westernelite.com/why-us/
Read live: 2026-11-11 23:18:53 GMT Â· Content truncated: no

## How to apply
WP Admin â†’ Pages â†’ edit Why Us â†’ Divi Builder â†’ open the Code Module named below â†’ use the browser's find (Ctrl+F) to locate the FIND text â†’ replace it exactly with REPLACE â†’ Save module â†’ Save draft / Preview (do not publish until Paul says so).

## Changes

### 1. Add the missing phone H1 â€” WCAG 1.3.1 / 2.4.6
- Module: 2nd section, Fullwidth Code Module starting `<div class="compactor-banner-mobile">` (phone only, `disabled_on="off|on|on"`). The desktop hero (1st section) has `<h1>Why Western Elite?</h1>` but is hidden on phones, so phones currently get no H1 at all.
- FIND:
```html
        <div class="compactor-banner-text">
        </div>
```
- REPLACE WITH:
```html
        <div class="compactor-banner-text">
            <h1>Why Western Elite?</h1>
        </div>
```
- Why: gives phones the same single H1 desktop has. Styling already exists in this module (`.compactor-banner-mobile h1`, 28px white), so no CSS change is needed. **Visual check:** the heading will now appear over the phone banner image â€” confirm it doesn't clash with text already baked into the image.

## Not fixed here
- "Check back often" link (â†’ /employment/) is in a normal Divi Text module, not a Code Module â†’ **Echo**. Suggested text: "See open positions on our careers page". Also check the target: Careers lives at /careers/.
- Vimeo video (Divi Video module, `vimeo.com/387054103`) renders an iframe with no title; a Video module can't take an iframe title â†’ needs a Code Module swap or a theme/plugin fix.
- Hero `alt="Western Elite Why Western Elite"` repeats the H1; fine as-is, optional cleanup.
