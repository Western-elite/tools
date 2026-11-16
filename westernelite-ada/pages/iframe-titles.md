# Untitled map and video iframes â€” 6 pages
DRAFT ONLY â€” nothing here has been applied to WordPress. Do not publish until Paul approves.

All fixes are WCAG 4.1.2 (Name, Role, Value) â€” an `<iframe>` needs a `title` so screen-reader users know what the frame contains (also helps 2.4.1).

## How to apply (all pages)
WP Admin â†’ Pages â†’ edit the page â†’ Divi Builder â†’ open the module named below (for Text modules switch to the **Text** tab, not Visual) â†’ Ctrl+F the FIND text â†’ replace exactly with REPLACE â†’ Save â†’ Preview (do not publish until Paul says so).

The FIND text is always the start of the iframe tag up to and including the end of its `src="â€¦"` â€” it contains no hidden characters and is unique on its page.

Hidden characters: the map iframes on 7936, 3163 and 11864 each contain two leftover TinyMCE "bookmark" spans, each holding one **U+FEFF (ZERO WIDTH NO-BREAK SPACE / BOM)**. They sit between `allowfullscreen="allowfullscreen">` and `</iframe>`. They are invisible and are what break Echo's locked-fragment check. A cleaned full-iframe REPLACE is given for each of those pages. In the FIND blocks below, `âŸ¨U+FEFFâŸ©` marks where the invisible character is â€” you will not see it in the editor; select and delete the whole `<span â€¦>â€¦</span>` pair instead. No zero-width spaces (U+200B), non-breaking spaces (U+00A0) or soft hyphens (U+00AD) were found inside any iframe on these six pages. (U+00A0 does appear in ordinary text on 755 and 3163, outside the iframes â€” not a problem.)

---

# Contact Us (ID 755) â€” https://westernelite.com/contact-us/
Read live: 2025-08-18 20:13:43 (GMT) Â· Content truncated: no
## Changes
### 1. Map title â€” WCAG 4.1.2
- Module: first module on the page â€” Fullwidth Code module in the top fullwidth section (shows on all screen sizes). Raw iframe, edit inside the module.
- FIND:
```html
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3219.2338132174273!2d-115.0647647848395!3d36.20951148007448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8db880fe4a433%3A0x6855fab535d35e58!2sWestern%20Elite%20%7C%20Dumpster%20Rentals!5e0!3m2!1sen!2sus!4v1603743481810!5m2!1sen!2sus"
```
- REPLACE WITH:
```html
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3219.2338132174273!2d-115.0647647848395!3d36.20951148007448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8db880fe4a433%3A0x6855fab535d35e58!2sWestern%20Elite%20%7C%20Dumpster%20Rentals!5e0!3m2!1sen!2sus!4v1603743481810!5m2!1sen!2sus" title="Map to Western Elite 2745 North Nellis Boulevard"
```
- Why: untitled map frame. The page names no location other than the address ("2745 North Nellis Boulevard"), so the title uses that. Wording check for Paul.
## Not fixed here
- A second map (Divi Fullwidth Map module, Nellis address) is in a disabled section (`disabled="on"`, hidden on all sizes) â€” not rendered, nothing to fix.

---

# Nellis Corporate Office (ID 7936) â€” https://westernelite.com/nellis-corporate-office/
Read live: 2026-03-10 17:22:10 (GMT) Â· Content truncated: no
## Changes
### 1. Map title â€” WCAG 4.1.2
- Module: third section, first Text module (top of the left 3/4 column, above "CORPORATE OFFICE"); shows on all screen sizes. Use the Text tab.
- FIND:
```html
<iframe style="border: 0;" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12876.935249591053!2d-115.0625761!3d36.2095115!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6855fab535d35e58!2sWestern%20Elite!5e0!3m2!1sen!2sus!4v1570663133825!5m2!1sen!2sus"
```
- REPLACE WITH:
```html
<iframe style="border: 0;" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12876.935249591053!2d-115.0625761!3d36.2095115!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6855fab535d35e58!2sWestern%20Elite!5e0!3m2!1sen!2sus!4v1570663133825!5m2!1sen!2sus" title="Map to Western Elite Corporate Office"
```
- Why: untitled map frame; "Corporate Office" is the name used in the page heading and the "CORPORATE OFFICE" label.
### 2. Remove hidden characters inside the map iframe
- Where: between `allowfullscreen="allowfullscreen">` and `</iframe>` â€” two identical spans, each containing one U+FEFF.
- FIND (as stored; `âŸ¨U+FEFFâŸ©` = invisible character):
```html
allowfullscreen="allowfullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">âŸ¨U+FEFFâŸ©</span><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">âŸ¨U+FEFFâŸ©</span></iframe>
```
- REPLACE WITH:
```html
allowfullscreen="allowfullscreen"></iframe>
```
- Cleaned full iframe (changes 1 + 2 together â€” easiest: select the whole iframe in the Text tab and paste this):
```html
<iframe style="border: 0;" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12876.935249591053!2d-115.0625761!3d36.2095115!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6855fab535d35e58!2sWestern%20Elite!5e0!3m2!1sen!2sus!4v1570663133825!5m2!1sen!2sus" title="Map to Western Elite Corporate Office" width="100%" height="200" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
```
- Why: leftover editor bookmarks with invisible U+FEFF break Echo's locked-fragment match and serve no purpose.
## Not fixed here
- Nothing else in scope.

---

# Wynn Collection Center (ID 3163) â€” https://westernelite.com/wynn-collection-center/
Read live: 2026-03-05 18:11:34 (GMT) Â· Content truncated: no
## Changes
### 1. Map title â€” WCAG 4.1.2
- Module: first Text module on the page (top of the left 3/4 column, above "WYNN LOCATION"); all screen sizes. Use the Text tab.
- FIND:
```html
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3223.482184795291!2d-115.19633838410613!3d36.106108814158944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c6837a7f1b55%3A0xde263835b93db51d!2s4610%20S%20Wynn%20Rd.%2C%20Las%20Vegas%2C%20NV%2089103!5e0!3m2!1sen!2sus!4v1617834401911!5m2!1sen!2sus"
```
- REPLACE WITH:
```html
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3223.482184795291!2d-115.19633838410613!3d36.106108814158944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c6837a7f1b55%3A0xde263835b93db51d!2s4610%20S%20Wynn%20Rd.%2C%20Las%20Vegas%2C%20NV%2089103!5e0!3m2!1sen!2sus!4v1617834401911!5m2!1sen!2sus" title="Map to Western Elite Wynn Collection Center"
```
- Why: untitled map frame; name from the page heading "Wynn Collection Center".
### 2. Remove hidden characters inside the map iframe
- Where: between `allowfullscreen="allowfullscreen">` and `</iframe>` â€” two spans, each containing one U+FEFF.
- FIND (as stored; `âŸ¨U+FEFFâŸ©` = invisible character):
```html
allowfullscreen="allowfullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">âŸ¨U+FEFFâŸ©</span><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">âŸ¨U+FEFFâŸ©</span></iframe>
```
- REPLACE WITH:
```html
allowfullscreen="allowfullscreen"></iframe>
```
- Cleaned full iframe (changes 1 + 2 together):
```html
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3223.482184795291!2d-115.19633838410613!3d36.106108814158944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c6837a7f1b55%3A0xde263835b93db51d!2s4610%20S%20Wynn%20Rd.%2C%20Las%20Vegas%2C%20NV%2089103!5e0!3m2!1sen!2sus!4v1617834401911!5m2!1sen!2sus" title="Map to Western Elite Wynn Collection Center" width="100%" height="200" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
```
- Why: invisible U+FEFF breaks Echo's locked-fragment match.
## Not fixed here
- Nothing else in scope.

---

# Henderson Collection Center (ID 11864) â€” https://westernelite.com/henderson-collection-center/
Read live: 2025-10-01 22:04:30 (GMT) Â· Content truncated: no
## Changes
### 1. Map title â€” WCAG 4.1.2
- Module: first Text module on the page (top of the left 3/4 column, above "HENDERSON LOCATION"); all screen sizes. Use the Text tab.
- FIND:
```html
<iframe style="border: 0;" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3225.5215241201813!2d-115.01787438410695!3d36.056381616912056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8d0d8a10fc6ff%3A0x480857026aa08526!2s691%20W%20Warm%20Springs%20Rd%2C%20Henderson%2C%20NV%2089011!5e0!3m2!1sen!2sus!4v1617836370993!5m2!1sen!2sus"
```
- REPLACE WITH:
```html
<iframe style="border: 0;" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3225.5215241201813!2d-115.01787438410695!3d36.056381616912056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8d0d8a10fc6ff%3A0x480857026aa08526!2s691%20W%20Warm%20Springs%20Rd%2C%20Henderson%2C%20NV%2089011!5e0!3m2!1sen!2sus!4v1617836370993!5m2!1sen!2sus" title="Map to Western Elite Henderson Collection Center"
```
- Why: untitled map frame; name from the page heading "Henderson Collection Center".
### 2. Remove hidden characters inside the map iframe
- Where: between `allowfullscreen="allowfullscreen">` and `</iframe>` â€” two spans, each containing one U+FEFF.
- FIND (as stored; `âŸ¨U+FEFFâŸ©` = invisible character):
```html
allowfullscreen="allowfullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">âŸ¨U+FEFFâŸ©</span><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">âŸ¨U+FEFFâŸ©</span></iframe>
```
- REPLACE WITH:
```html
allowfullscreen="allowfullscreen"></iframe>
```
- Cleaned full iframe (changes 1 + 2 together):
```html
<iframe style="border: 0;" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3225.5215241201813!2d-115.01787438410695!3d36.056381616912056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8d0d8a10fc6ff%3A0x480857026aa08526!2s691%20W%20Warm%20Springs%20Rd%2C%20Henderson%2C%20NV%2089011!5e0!3m2!1sen!2sus!4v1617836370993!5m2!1sen!2sus" title="Map to Western Elite Henderson Collection Center" width="100%" height="200" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
```
- Why: invisible U+FEFF breaks Echo's locked-fragment match.
## Not fixed here
- Unrelated content note (not changed): the page's SEO description says the centre is "on Nellis Blvd" and serves "northeastern Las Vegas", but the page body gives 691 W Warm Springs Rd, Henderson. Flag for Paul.

---

# Videos (ID 1980) â€” https://westernelite.com/videos/
Read live: 2026-11-16 16:23:39 (GMT) Â· Content truncated: no

Note: this page was modified today (16:23 GMT) and has a rollback available â€” someone changed it shortly before this read. Re-read it before applying in case the iframes changed.

All 13 videos are raw Vimeo `<iframe>`s inside Divi Text modules (no `[et_pb_video]` modules). Each heading on this page sits directly BELOW its video (not above). Titles use that heading with the running time (", mm:ss") dropped. Wording check for Paul.

## Changes
Each: Module = the Text module containing the video, use the Text tab.

### 1. Row 1 left â€” "Overview Video, 04:39" â€” WCAG 4.1.2
- FIND:
```html
<iframe src="https://player.vimeo.com/video/516515451"
```
- REPLACE WITH:
```html
<iframe src="https://player.vimeo.com/video/516515451" title="Video: Overview Video"
```
- Why: untitled video frame.

### 2. Row 1 right â€” "Commercial Service, 00:45" â€” WCAG 4.1.2
- FIND:
```html
<iframe src="https://player.vimeo.com/video/516515767"
```
- REPLACE WITH:
```html
<iframe src="https://player.vimeo.com/video/516515767" title="Video: Commercial Service"
```
- Why: untitled video frame.

### 3. Row 2 left â€” "Residential Service, 01:56" â€” WCAG 4.1.2
- FIND:
```html
<iframe src="https://player.vimeo.com/video/516515827"
```
- REPLACE WITH:
```html
<iframe src="https://player.vimeo.com/video/516515827" title="Video: Residential Service"
```
- Why: untitled video frame.

### 4. Row 2 right â€” "Loading The Dumpster, 01:52" â€” WCAG 4.1.2
- FIND:
```html
<iframe src="https://player.vimeo.com/video/387053651"
```
- REPLACE WITH:
```html
<iframe src="https://player.vimeo.com/video/387053651" title="Video: Loading The Dumpster"
```
- Why: untitled video frame.

### 5. Row 3 left â€” "Where Can You Put the Dumpster?, 01:22" â€” WCAG 4.1.2
- FIND:
```html
<iframe src="https://player.vimeo.com/video/387053979"
```
- REPLACE WITH:
```html
<iframe src="https://player.vimeo.com/video/387053979" title="Video: Where Can You Put the Dumpster?"
```
- Why: untitled video frame.

### 6. Row 3 right â€” "The Can & Cannot of Dumpster Rental, 00:57" â€” WCAG 4.1.2
- FIND:
```html
<iframe src="https://player.vimeo.com/video/387053620"
```
- REPLACE WITH:
```html
<iframe src="https://player.vimeo.com/video/387053620" title="Video: The Can &amp; Cannot of Dumpster Rental"
```
- Why: untitled video frame (`&amp;` is the correct way to write "&" inside an attribute).

### 7. Row 4 left â€” "What Size Dumpster?, 01:46" â€” WCAG 4.1.2
- FIND:
```html
<iframe src="https://player.vimeo.com/video/387053871"
```
- REPLACE WITH:
```html
<iframe src="https://player.vimeo.com/video/387053871" title="Video: What Size Dumpster?"
```
- Why: untitled video frame.

### 8. Row 4 right â€” "Where Does it Go?, 00:55" â€” WCAG 4.1.2
- FIND:
```html
<iframe src="https://player.vimeo.com/video/387054053"
```
- REPLACE WITH:
```html
<iframe src="https://player.vimeo.com/video/387054053" title="Video: Where Does it Go?"
```
- Why: untitled video frame.

### 9. Row 5 left â€” "Send Us a Text, 00:51" â€” WCAG 4.1.2
- FIND:
```html
<iframe src="https://player.vimeo.com/video/387053819"
```
- REPLACE WITH:
```html
<iframe src="https://player.vimeo.com/video/387053819" title="Video: Send Us a Text"
```
- Why: untitled video frame.

### 10. Row 5 right â€” "Our Community, 00:50" â€” WCAG 4.1.2
- FIND:
```html
<iframe src="https://player.vimeo.com/video/387053759"
```
- REPLACE WITH:
```html
<iframe src="https://player.vimeo.com/video/387053759" title="Video: Our Community"
```
- Why: untitled video frame.

### 11. Row 6 left â€” "Why Western Elite?, 00:52" â€” WCAG 4.1.2
- FIND:
```html
<iframe src="https://player.vimeo.com/video/387054103"
```
- REPLACE WITH:
```html
<iframe src="https://player.vimeo.com/video/387054103" title="Video: Why Western Elite?"
```
- Why: untitled video frame.

### 12. Row 6 right â€” "The Christmas Express, 01:59" â€” WCAG 4.1.2
- FIND:
```html
<iframe src="https://player.vimeo.com/video/393966743"
```
- REPLACE WITH:
```html
<iframe src="https://player.vimeo.com/video/393966743" title="Video: The Christmas Express"
```
- Why: untitled video frame.

### 13. Row 7 left â€” "The Benefits of Biosolids, 04:35" â€” WCAG 4.1.2
- FIND:
```html
<iframe src="https://player.vimeo.com/video/750162495"
```
- REPLACE WITH:
```html
<iframe src="https://player.vimeo.com/video/750162495" title="Video: The Benefits of Biosolids"
```
- Why: untitled video frame.

## Not fixed here
- No Divi Video modules on this page â€” nothing left out.
- Captions/transcripts for the 13 videos (WCAG 1.2.2 / 1.2.3) were not checked â€” needs a look in Vimeo.
- Minor markup slip (not changed): the Christmas Express text module ends with `<p/>` instead of `</p>`.

---

# Residential (ID 795) â€” https://westernelite.com/residential/
Read live: 2026-11-16 16:22:41 (GMT) Â· Content truncated: no

Note: this page was also modified today (16:22 GMT) and has a rollback available â€” re-read before applying.

## Changes
### 1. Video title â€” WCAG 4.1.2
- Module: left 2/3 column, second Text module (directly under the first Text module, which ends with "Contact Us Today!"; above the Portfolio module). All screen sizes. Use the Text tab.
- FIND:
```html
<iframe src="https://player.vimeo.com/video/516515827"
```
- REPLACE WITH:
```html
<iframe src="https://player.vimeo.com/video/516515827" title="Video: Residential Service"
```
- Why: untitled video frame. This page has no heading for the video (the heading above it is the unrelated "Contact Us Today!" link), so the title reuses this same video's heading from the Videos page ("Residential Service", same Vimeo ID 516515827). Wording check for Paul.
## Not fixed here
- Unrelated text glitch (not changed): "NevadaÃ¢â‚¬â„¢s" in the first paragraph is mis-encoded â€” it should read "Nevada's". Flag for a content fix.
