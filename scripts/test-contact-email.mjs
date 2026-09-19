// Sends one real enquiry through the live contact handler, so you can confirm
// Resend delivery before trusting the form in production.
//
// It exercises the exact code path a visitor hits: api/contact.js, the same
// address defaults, the same Resend call. Nothing is stubbed.
//
// Run: npm run test:contact
//
// Reads RESEND_API_KEY (and the optional CONTACT_* overrides) from .env, or
// from the shell if you would rather not put the key on disk:
//   RESEND_API_KEY=re_xxx npm run test:contact
import { readFileSync, existsSync } from 'node:fs';

// Minimal .env loader — this script runs outside Astro, so import.meta.env
// is not available and we do not want a dotenv dependency for one script.
if (existsSync('.env')) {
  for (const line of readFileSync('.env', 'utf8').split('\n')) {
    const m = line.match(/^\s*([A-Z_][A-Z0-9_]*)\s*=\s*(.*)\s*$/);
    if (!m) continue;
    const value = m[2].replace(/^["']|["']$/g, '').trim();
    if (value && !process.env[m[1]]) process.env[m[1]] = value;
  }
}

const key = process.env.RESEND_API_KEY;
if (!key) {
  console.error(`
✗ RESEND_API_KEY is not set.

   1. Create a key at https://resend.com → API Keys (free tier is plenty).
   2. Put it in .env as RESEND_API_KEY=re_...
   3. Add the same key in Vercel → Settings → Environment Variables, then
      redeploy — the live form reads it from there, not from .env.
`);
  process.exit(1);
}

const to = process.env.CONTACT_TO || 'sales@teknoppy.com';
const ccRaw = process.env.CONTACT_CC || 'sanal@teknoppy.com';
const cc = ccRaw.toLowerCase() === 'none' ? '' : ccRaw;
const from = process.env.CONTACT_FROM || 'Teknoppy Website <website@teknoppy.com>';
const recipients = cc ? `${to} and ${cc}` : to;

console.log('Sending a test enquiry through api/contact.js');
console.log(`  from : ${from}`);
console.log(`  to   : ${to}`);
console.log(`  cc   : ${cc || '(none)'}\n`);

// teknoppy.com is verified in Resend, so a sender on that domain reaches any
// recipient. The shared onboarding@resend.dev sandbox sender does not — it is
// rejected with a 403 for anything but the account owner's own address, which
// is exactly what made the live form fail. Flag it if CONTACT_FROM regresses.
const sandboxSender = from.includes('@resend.dev');

const { default: handler } = await import('../api/contact.js');

// Vercel's req/res shape, reduced to what the handler actually touches.
const req = {
  method: 'POST',
  body: {
    name: 'Contact form test',
    email: 'no-reply@teknoppy.com',
    phone: '+91 6282249224',
    service: 'Website Design',
    message:
      'This is an automated test of the Teknoppy contact form. If it reached ' +
      'both sales@ and sanal@, the form is wired up correctly.',
    source: 'npm run test:contact'
  }
};

let status = 0;
const res = {
  setHeader() {},
  status(code) {
    status = code;
    return res;
  },
  json(payload) {
    if (status === 200 && payload.ok) {
      console.log('✓ Resend accepted the message.\n');
      console.log(`  Check ${recipients} — it should arrive within a minute.`);
      console.log('  Not there? Check spam, then https://resend.com → Emails for');
      console.log('  the delivery log. An unverified sender domain is the usual cause.');
      if (sandboxSender) {
        console.log('\n  Warning: sending from a @resend.dev sandbox address, which only');
        console.log('  reaches your own Resend account. Set CONTACT_FROM to an address on');
        console.log('  the verified teknoppy.com domain before trusting this in production.');
      }
    } else {
      console.error(`✗ Failed (HTTP ${status}): ${payload.error || JSON.stringify(payload)}`);
      if (sandboxSender) {
        console.error(`
  Most likely cause: CONTACT_FROM is a @resend.dev sandbox address, which can
  only email your own Resend account — sending to ${recipients} is refused
  with a 403. teknoppy.com is already verified, so point CONTACT_FROM at it:

    CONTACT_FROM="Teknoppy Website <website@teknoppy.com>"

  Set it in .env for local runs and in Vercel → Settings → Environment
  Variables (Production) for the live form, then redeploy.

  See the exact error from Resend logged above.`);
      } else {
        console.error('\n  The handler logs the reason from Resend above this line.');
      }
      process.exitCode = 1;
    }
    return res;
  }
};

await handler(req, res);
