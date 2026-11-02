# Steven Avant: portfolio site

A fast, static portfolio built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com), deployed to GitHub Pages.

## Run it locally

Requirements: [Node.js](https://nodejs.org) 22.22 or newer. With nvm, run `nvm use` in this folder.

```bash
npm install
npm run dev
```

Open http://localhost:4321. The page reloads as you save changes.

To check the production build:

```bash
npm run build
npm run preview
```

## Where things live

| What | File |
| --- | --- |
| English content (bio, jobs, projects, skills, tour steps) | `src/data/resume.ts` |
| Spanish and German content | `src/data/content/es.ts`, `src/data/content/de.ts` |
| Buttons, labels, and messages in every language | `src/i18n/ui.ts` |
| Steven's photo (About section and link previews; replace the file to change it) | `src/assets/steven-avant.png` |
| LinkedIn link (footer) | `profile.linkedin` in `src/data/resume.ts` |
| Contact form (Formspree ID in `profile.contactFormId` in `src/data/resume.ts`; see below) | `src/views/ContactPage.astro` |
| First-visit acceptable-use popup | `src/components/TermsDialog.astro` |
| Privacy Policy and Terms of Use (all three languages) | `src/data/legal/` |
| Colors and fonts | `src/styles/global.css` |
| Page order | `src/views/HomePage.astro` |
| Each section | `src/components/*.astro` |
| Network map geometry | `src/lib/topology.ts` |

Most updates only need the content files. For example, to add a certification, add a line to `education` or a new entry under `skills`, in all three languages.

### Languages

English lives at the site root, Spanish under `/es/`, and German under `/de/`. The globe menu in the header switches between them and keeps you on the same page. Each language has its own content file with the same shape; if you change a fact in English, change it in `es.ts` and `de.ts` too. The routes in `src/pages/` are one-line wrappers around the shared pages in `src/views/`.

### Privacy Policy and Terms of Use

The text for both pages is in `src/data/legal/en.ts`, `es.ts`, and `de.ts`, and the footer links to them. If the site starts collecting anything new (analytics, another form, embedded videos or maps), update the Privacy Policy in all three languages and change the `updated` date. The acceptable-use popup is not shown on these two pages, so visitors can read the terms before agreeing.

### The scroll tour

`src/components/SystemsTour.astro` pins the network map while the steps scroll by. Each step in `tour` (in `resume.ts`) has a `layer` name that switches on a matching layer in the drawing: `network`, `security`, `virtualization`, `backup`, `voice`, `automation`. You can reword any step freely. Adding a brand-new layer means drawing it in the SVG too, as a `<g class="layer layer-yourname">` group plus one CSS line `.on-yourname .layer-yourname { opacity: 1; }`.

Accessibility is built in: animation stops for visitors who turn on reduced motion, and without JavaScript every layer shows at once.

### Scroll spotlight

As visitors scroll the home page, the key item nearest the middle of the screen grows slightly and turns amber, one at a time: the About facts, each job title, the project cards, each skills row, the military service box, and the closing "Let's talk" link. To spotlight something else, add `class="focus"` to it and `focus-accent` to the part that should turn amber. Use `focus-card` for an amber ring, `focus-rule` for an amber top border, and `focus-inner` for rows with divider lines. The styles are in `src/styles/global.css` and the script is in `src/views/HomePage.astro`. Visitors who turn on reduced motion get the color change without the movement.

## Contact form setup

GitHub Pages can't send email, so the form goes through [Formspree](https://formspree.io), which emails each message to the inbox the Formspree form was created for. The site only contains the form's random ID, never an email address.

1. Sign in at formspree.io and create a new form (for example "Steven Avant portfolio") that delivers to Steven's email address. Formspree asks that address to confirm once.
2. Copy the form's ID: the part after `/f/` in its endpoint (`https://formspree.io/f/abcdwxyz` → `abcdwxyz`).
3. Paste it into `contactFormId` in `src/data/resume.ts`, then commit and push. The site redeploys with the form switched on.

Until the ID is filled in, the contact page shows a short "almost ready" note with a LinkedIn button instead of the form, so the site can go live before the form is set up. The ID isn't secret: it appears in the page for anyone to see and doesn't reveal any email address. Every message also appears in the Formspree dashboard. In the form's settings, you can limit submissions to the site's domain (`dnnavant.github.io`) so other sites can't use the form.

## Deploy to GitHub Pages

1. Create a new repository on GitHub, for example `steven-portfolio`.
2. Push this folder to it:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-user>/steven-portfolio.git
   git push -u origin main
   ```
3. On GitHub, open the repository's **Settings → Pages** and set **Source** to **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` builds and deploys on every push to `main`. Watch it run in the **Actions** tab. The site will be at `https://<your-user>.github.io/steven-portfolio/`.

The workflow sets the correct base path automatically, so links work under `/steven-portfolio/`.

Don't put private files in `public/`: everything in that folder is published, linked or not.

### Custom domain (optional)

1. In **Settings → Pages → Custom domain**, enter the domain (for example `stevenavant.com`) and save.
2. At the domain registrar, add the DNS records GitHub shows (four `A` records for the apex domain, or a `CNAME` to `<your-user>.github.io` for `www`).
3. Tick **Enforce HTTPS** once the certificate is issued, then re-run the workflow from the Actions tab.
