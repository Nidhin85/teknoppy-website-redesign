// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://teknoppy.com',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    react(),
    // The CMS admin shell, the 404 and the paid-traffic landing pages (/lp/) are not
    // organic content — keep them out of the index.
    sitemap({
      filter: (page) => !page.includes('/admin') && !page.includes('/lp/'),
      changefreq: 'weekly',
      lastmod: new Date()
    })
  ]
});
