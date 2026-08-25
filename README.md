# The Lantern Glow — Website

Cinematic creative studio website for TLG, Mohali Chandigarh.

## Stack
- HTML5, CSS3, Vanilla JS
- GSAP + ScrollTrigger (animations)
- SwiperJS (carousels)
- AOS (scroll reveals)
- Google Fonts: Playfair Display + Inter

## Project Structure
```
TLG-Website/
├── index.html          ← Main homepage
├── contact.html        ← Contact / enquiry form
├── css/
│   ├── style.css       ← Core styles & design tokens
│   ├── animations.css  ← Animation keyframes & GSAP classes
│   └── responsive.css  ← Mobile breakpoints
├── js/
│   ├── app.js          ← Nav, loader, scroll, parallax
│   ├── slider.js       ← Swiper configurations
│   └── animations.js   ← GSAP ScrollTrigger animations
└── assets/
    ├── logo/           ← Place tlg-logo.svg here
    ├── images/         ← hero-poster.jpg, BTS images, client logos
    ├── videos/         ← hero.mp4 (main background video)
    └── testimonials/   ← Client photos (optional)
```

## Quick Start
1. Open `index.html` directly in a browser, OR
2. Use a local server (recommended):
   ```
   npx serve .
   # or
   python -m http.server 8080
   ```

## Customisation Checklist

### Content
- [ ] Replace placeholder project slides with real work (images/videos)
- [ ] Update BTS gallery images
- [ ] Add real client logos to logo strip
- [ ] Fill in actual testimonials
- [ ] Update WhatsApp number (search `91XXXXXXXXXX`)
- [ ] Update email address (`hello@thelanternglow.com`)
- [ ] Update Instagram handle

### Media
- [ ] `assets/videos/hero.mp4` — main hero background video
- [ ] `assets/images/hero-poster.jpg` — fallback image for hero
- [ ] BTS images for the masonry gallery section

### Contact Form
The form in `contact.html` is front-end only. To make it work:
- **Formspree** (free, easy): add `action="https://formspree.io/f/YOUR_ID"` to the `<form>` tag
- **EmailJS**: add their SDK and call `emailjs.send()` in the submit handler
- **Custom backend**: POST to your API in the submit handler in `contact.html`

### SEO
Update `<meta>` tags in both HTML files with your real description and social image.

## Design Tokens (CSS variables in style.css)
```css
--navy:       #0A0E1A   /* Primary background */
--gold:       #C9A84C   /* Brand accent */
--white:      #F0EDE6   /* Primary text */
--white-dim:  #b8b4aa   /* Secondary text */
```
