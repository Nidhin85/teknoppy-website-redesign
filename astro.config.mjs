// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.teknoppy.com',

  devToolbar: { enabled: false },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    react(),
    // The paid-traffic landing pages (/lp/) are not organic content — keep them out
    // of the index.
    sitemap({
      // Also skip the two old URLs that are only meta-refresh redirects to their new pages.
      filter: (page) =>
        !page.includes('/lp/') &&
        !page.endsWith('/case-studies/yatrabay/') &&
        !page.endsWith('/case-study/koojo-custom-powder-coating/'),
      changefreq: 'weekly',
      lastmod: new Date()
    })
  ]
});
