// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

/**
 * Dev server middleware to serve root api/contact.js during `astro dev`.
 */
function devApiContactPlugin() {
  return {
    name: 'dev-api-contact',
    configureServer(server) {
      server.middlewares.use('/api/contact', async (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ error: 'Method not allowed' }));
          return;
        }

        let body = '';
        req.on('data', (chunk) => {
          body += chunk;
        });
        req.on('end', async () => {
          try {
            const { default: handler } = await import(new URL('./api/contact.js', import.meta.url).href);
            const parsedBody = body ? JSON.parse(body) : {};
            const vercelReq = {
              method: req.method,
              headers: req.headers,
              body: parsedBody
            };
            const vercelRes = {
              statusCode: 200,
              setHeader(key, val) {
                res.setHeader(key, val);
              },
              status(code) {
                this.statusCode = code;
                res.statusCode = code;
                return this;
              },
              json(data) {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(data));
              }
            };
            await handler(vercelReq, vercelRes);
          } catch (err) {
            console.error('[api/contact dev error]', err);
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: 'Internal server error' }));
          }
        });
      });
    }
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://teknoppy.com',

  vite: {
    plugins: [tailwindcss(), devApiContactPlugin()]
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
