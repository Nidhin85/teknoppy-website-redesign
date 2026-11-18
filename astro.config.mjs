// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.teknoppy.com',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    react(),
    // The paid-traffic landing pages (/lp/) are not organic content — keep them out
    // of the index.
    sitemap({
      filter: (page) => !page.includes('/lp/'),
      changefreq: 'weekly',
      lastmod: new Date()
    })
  ]
});
