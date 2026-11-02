// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages serves project sites from https://<user>.github.io/<repo>/.
// The deploy workflow passes the right values in; locally both default to the root.
export default defineConfig({
  site: process.env.SITE_URL || 'https://example.github.io',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'ignore',
  // English at the root, Spanish under /es/, German under /de/. Interface text is in
  // src/i18n/ui.ts and page content in src/data/.
  i18n: {
    locales: ['en', 'es', 'de'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
  // Content Security Policy, added to every page as a <meta> tag (GitHub Pages can't
  // send custom headers). Astro hashes the site's own scripts and styles; anything else
  // is refused. The only outside service allowed is the contact form relay.
  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        'connect-src https://formspree.io',
        "form-action 'self' https://formspree.io",
        "base-uri 'self'",
        "object-src 'none'",
        'upgrade-insecure-requests',
      ],
      // The network maps time each animated link with a style="--delay:…" attribute.
      // Style attributes can't run code; <style> blocks and scripts stay hash-locked.
      styleDirective: {
        resources: [{ resource: "'unsafe-inline'", kind: 'attribute' }],
      },
    },
  },
  // No code blocks on this site; Shiki's inline styles would conflict with the CSP.
  markdown: { syntaxHighlight: false },
  vite: {
    plugins: [tailwindcss()],
  },
});
