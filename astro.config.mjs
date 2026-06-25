import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // Static output — deploys anywhere (Server C, Netlify, Vercel, S3, etc.)
  integrations: [
    tailwind({
      // We supply our own global.css with the @tailwind directives + custom layers,
      // so Astro should not inject its own base stylesheet.
      applyBaseStyles: false,
    }),
  ],
});
