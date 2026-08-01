import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Canonical origin — required for sitemap.xml and absolute canonical/OG URLs.
  // Override per-environment with PUBLIC_SITE_URL.
  site: (process.env.PUBLIC_SITE_URL || 'https://www.campbellindia.com').replace(/\/$/, ''),

  // Static output — deploys anywhere (Server C, Netlify, Vercel, S3, etc.)
  integrations: [
    tailwind({
      // We supply our own global.css with the @tailwind directives + custom layers,
      // so Astro should not inject its own base stylesheet.
      applyBaseStyles: false,
    }),
    sitemap(),
  ],
});
