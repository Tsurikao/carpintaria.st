# Carpintaria Sousa Tavares

Website for Carpintaria Sousa Tavares, Lda., a made-to-measure carpentry workshop in Farrapa, Portugal. It covers kitchens, wardrobes, wall cladding, doors and windows, staircases, ceilings, floors and terraces, and roof structures. The site is in Portuguese and English and includes a quote form and a careers form.

![Screenshot](docs/screenshot.png)
<!-- Add a screenshot at docs/screenshot.png -->

**Live site:** https://YOUR-USERNAME.github.io/carpintaria-sousa-tavares/

## Folder structure

```
carpintaria-sousa-tavares/
├── index.html                  Page markup
├── assets/
│   ├── css/
│   │   ├── variables.css       Palette, fonts, spacing, easing
│   │   └── style.css           All component styles
│   ├── js/
│   │   ├── data.js             All texts (PT + EN), contacts, image paths and crops
│   │   ├── i18n.js             Language switching
│   │   ├── render.js           Builds panels, project cards, steps, reviews, updates
│   │   ├── menu.js             Menu overlay, scroll lock, in-page links
│   │   ├── panels.js           "Everything in wood" details layers
│   │   ├── work.js             Project cards, horizontal scroll, project popup + gallery
│   │   ├── forms.js            Quote form, careers popup
│   │   ├── cursor.js           Custom cursor
│   │   ├── animations.js       Smooth scroll and GSAP motion, no-library fallback
│   │   └── main.js             Start-up
│   └── images/
│       ├── brand/              Logo, credit badge
│       ├── hero/
│       ├── panels/
│       ├── work/
│       ├── backgrounds/        Quote background, Builder's Eye collage
│       └── testimonials/
├── .github/workflows/deploy.yml
├── .nojekyll
└── .gitignore
```

The "Latest updates" rows reuse photos from `panels/` and `work/`, so there is no separate `updates/` folder.

## Editing

**Texts.** Open `assets/js/data.js`. Each language has its own block under `i18n.pt` and `i18n.en`:
- `ui` holds headings, buttons, form labels and vacancies
- `panels`, `work`, `process`, `testimonials` and `updates` hold the text of each list, in page order

**Contacts.** `contact` in `assets/js/data.js` (phone, e-mail, WhatsApp, Instagram, Facebook, map link).

**Colours, fonts, spacing.** `assets/css/variables.css`. Panel background colours are set per panel in `data.js` (`panels[].bg` / `fg`).

**Images.** Put the file in the right folder under `assets/images/`, then update its path and `alt` text in `images` in `data.js`. `pos` values are CSS `object-position` focal points. Project popup photos are set in `work[].gallery`; `zoom` above 1 shows a close-up crop.

**Forms.** By default both forms show a confirmation message and send nothing. To receive submissions, set `formEndpoint` in `data.js` to a form service URL (for example Formspree).

## Run locally

From the project folder:

```
python3 -m http.server 8000
```

Then open http://localhost:8000. You can also run `npx serve`.

## Deploy

1. Push to the `main` branch on GitHub.
2. In the repository, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` publishes the site on every push to `main`.

All paths are relative, so the site works under a repository subpath.

## Tech

- HTML, CSS, vanilla JavaScript (no build step)
- [GSAP 3.12.5](https://gsap.com) and ScrollTrigger, from cdnjs
- [Lenis 1.1.13](https://github.com/darkroomengineering/lenis) smooth scroll, from jsDelivr
- Geist and Geist Mono, from Google Fonts

If GSAP or Lenis fails to load, the page still shows all content, without motion.

## Image credits

- Project photos: Carpintaria Sousa Tavares, Lda.
- Interior photography from Unsplash: Clay Banks, Declan Sun, Franco Debartolo, Jeton Bajrami, João Emanuel, Meritt Thomas, Reuben Hustler, Spacejoy, Aranprime (Unsplash License).
- Testimonial portraits: supplied by the client. The reviews are samples; replace them with real ones before launch.

## Credits

Concept crafted by [noomo](https://noomo.eu).
