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
| Contact form (delivery address set by `CONTACT_FORM_ID`; see below) | `src/views/ContactPage.astro` |
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

GitHub Pages can't send email, so the form goes through [FormSubmit](https://formsubmit.co), which forwards each message to Steven. The delivery address is a setting called `CONTACT_FORM_ID` and is deliberately kept out of the code, so it never shows up in this repository.

- **On your computer:** create a file named `.env` in this folder containing `CONTACT_FORM_ID=` followed by the address. Git ignores this file.
- **On GitHub:** open **Settings → Secrets and variables → Actions → Variables**, choose **New repository variable**, name it `CONTACT_FORM_ID`, and enter the value.

If the setting is missing, the build stops with a message pointing here, rather than publishing a form that goes nowhere.

**Hide Steven's address before the site goes live.** At first the value is Steven's email address, and anyone viewing the contact page's source could see it. To replace it:

1. Run the site locally (`npm run dev`) and send one test message from the contact page.
2. FormSubmit emails Steven an activation link. Once he clicks it, the activation page and his emails from FormSubmit show a random ID such as `a1b2c3d4e5f6...`.
3. Use that ID as the `CONTACT_FORM_ID` value, both in `.env` and on GitHub. Messages still reach Steven, and his address no longer appears anywhere on the site.

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
4. Add the `CONTACT_FORM_ID` repository variable (see [Contact form setup](#contact-form-setup)).
5. The workflow in `.github/workflows/deploy.yml` builds and deploys on every push to `main`. Watch it run in the **Actions** tab. The site will be at `https://<your-user>.github.io/steven-portfolio/`.

The workflow sets the correct base path automatically, so links work under `/steven-portfolio/`.

Don't put private files in `public/`: everything in that folder is published, linked or not.

### Custom domain (optional)

1. In **Settings → Pages → Custom domain**, enter the domain (for example `stevenavant.com`) and save.
2. At the domain registrar, add the DNS records GitHub shows (four `A` records for the apex domain, or a `CNAME` to `<your-user>.github.io` for `www`).
3. Tick **Enforce HTTPS** once the certificate is issued, then re-run the workflow from the Actions tab.
