# Vámonos with Steve Walker — memorial site

A fully static website. No build step, no frameworks, no external dependencies —
every page is plain HTML with one shared stylesheet, so it can be hosted anywhere
and will still work unchanged in twenty years.

## Structure

```
site/
├── index.html            Home / splash (obituary + service details)
├── about/                Biography
├── essays/               Editorials & essays (9 pieces)
├── press/                News & magazine articles (summaries + links only)
├── poetry/               The Battle Trilogy
├── fiction/              Pinto Joe & project list
├── tv/                   The TV years + YouTube link
├── stories/              Personal anecdotes
├── gallery/              Photo gallery (22 photographs)
├── 404.html              Not-found page
├── css/style.css         All styling (palette + typography at the top)
├── images/               Web-optimized photos (originals stay in ../photos/)
├── favicon.png           Red-crowned parrot (also apple-touch-icon.png,
│                         emblem at images/red-crowned-parrot.png)
├── robots.txt, sitemap.xml
```

## Preview locally

```bash
cd site && python3 -m http.server 8080
```

Then open http://localhost:8080

## Deploy (pick one)

- **Netlify (easiest):** drag the `site` folder onto https://app.netlify.com/drop,
  then add the custom domain `vamonoswithstevewalker.com` in Site settings → Domain
  management, and point the domain's DNS at Netlify as instructed there.
  On Netlify, `404.html` works automatically.
- **Cloudflare Pages / Vercel:** create a project, upload the `site` folder as the
  output directory (no build command).
- **Any web host:** upload the *contents* of `site/` to the web root. The pages use
  root-relative paths (`/css/…`, `/images/…`), so the site must live at the domain
  root, not in a subfolder.

## Editing

- Every page is self-contained HTML — edit text right in the file.
- Colors and fonts are CSS variables at the top of `css/style.css`.
- To add a press link later: in `press/index.html`, replace
  `<p class="press-pending">Link coming soon.</p>` with
  `<p class="press-link"><a href="URL" target="_blank" rel="noopener">Read the original</a></p>`
- To add a gallery photo: optimize it
  (`sips -Z 1600 -s format jpeg -s formatOptions 82 photo.jpeg --out images/name.jpg`),
  then copy one `<li>…</li>` block in `gallery/index.html` and edit the filename,
  alt text, and caption.

## Before the site goes live — family checklist

1. **Poems** — these are transcribed from recordings of Steve's readings (the page
   says so). If his original written versions turn up, replace the text.
2. **Grackle essay & Rodeo editorial** — per the content package these were the
   passages flagged for a family decision; they are published as written in the
   package. Give them one last read on the page (essays → "Great-Tailed Grackle"
   and "The Rodeo") and cut anything you don't want on a public memorial.
3. **Press links** — three articles still show "Link coming soon."
   **Fiction page** is intentionally marked under construction (a note at the top and a
   "More to Come" panel at the bottom). Delete both once the section is filled out.
4. **Donation line** — the "in lieu of flowers" list appears on the home page under
   the obituary link. Confirm the organizations, or delete that paragraph.
5. **Photo captions** — names and places in `gallery/index.html` come from the photo
   filenames; confirm spellings (Jessica, Katie, Seth, Nikki, Chopper, Janie Brice,
   Project Crecer, Zaragoza, Real de Catorce, Idaho).
6. **Obituary link** — the home page links to the Darling-Mouser obituary rather than
   repeating the service details, so the funeral home stays the single source of truth
   if anything changes. Tracking parameters were stripped from the URL.

Not on the site, by design (and per Steve's wishes for some of it): the recorded
"outlaw stories," personal letters, and hunting field diaries.
