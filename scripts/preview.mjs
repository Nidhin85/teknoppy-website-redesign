/**
 * Local preview server for Astro static build with Vercel Serverless Function support.
 * Serves pre-built static assets from dist/ and routes /api/contact to api/contact.js.
 *
 * Usage:
 *   node scripts/preview.mjs
 *   node scripts/preview.mjs --port 4322
 */
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import contactHandler from '../api/contact.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outDir = path.resolve(__dirname, '../dist');

// Parse CLI port or default to 4321
const args = process.argv.slice(2);
const portIndex = args.indexOf('--port');
let PORT = portIndex !== -1 && args[portIndex + 1] ? parseInt(args[portIndex + 1], 10) : 4321;
if (isNaN(PORT) || PORT <= 0) PORT = 4321;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8'
};

function resolveStaticFile(urlPath) {
  let decodedPath = decodeURIComponent(urlPath.split('?')[0]);
  let safePath = path.normalize(decodedPath).replace(/^(\.\.[\/\\])+/, '');
  let filePath = path.join(outDir, safePath);

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    return filePath;
  }
  let indexPath = path.join(filePath, 'index.html');
  if (fs.existsSync(indexPath) && fs.statSync(indexPath).isFile()) {
    return indexPath;
  }
  let htmlPath = filePath + '.html';
  if (fs.existsSync(htmlPath) && fs.statSync(htmlPath).isFile()) {
    return htmlPath;
  }
  let notFoundPath = path.join(outDir, '404.html');
  if (fs.existsSync(notFoundPath)) {
    return notFoundPath;
  }
  return null;
}

const server = http.createServer(async (req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = parsedUrl.pathname;

  // Handle /api/contact route via root api/contact.js
  if (pathname === '/api/contact') {
    if (req.method !== 'POST') {
      res.writeHead(405, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Method not allowed' }));
      return;
    }

    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', async () => {
      try {
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
            return this;
          },
          json(data) {
            res.writeHead(this.statusCode || 200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(data));
          }
        };
        await contactHandler(vercelReq, vercelRes);
      } catch (err) {
        console.error('[preview api/contact error]', err);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Internal server error' }));
      }
    });
    return;
  }

  // Serve static assets from dist/
  const resolved = resolveStaticFile(pathname);
  if (!resolved) {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('404 Not Found');
    return;
  }

  const is404 = resolved.endsWith('404.html');
  const ext = path.extname(resolved).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  try {
    const stat = fs.statSync(resolved);
    res.writeHead(is404 ? 404 : 200, {
      'Content-Type': contentType,
      'Content-Length': stat.size
    });
    fs.createReadStream(resolved).pipe(res);
  } catch (err) {
    res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('500 Internal Server Error');
  }
});

function startServer(port) {
  server.listen(port, () => {
    console.log(`\n  preview server ready:`);
    console.log(`  ┃ Local:   http://localhost:${port}/`);
    console.log(`  ┃ Contact: http://localhost:${port}/api/contact\n`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${port} is in use, trying ${port + 1}...`);
      startServer(port + 1);
    } else {
      console.error('Server error:', err);
    }
  });
}

startServer(PORT);
