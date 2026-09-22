/**
 * Contact / consultation form handler.
 *
 * Receives JSON from the footer CTA form and the contact page, and emails it to
 * the business. Delivery goes through Resend, which needs exactly one secret.
 *
 * Required env vars (Vercel → Project → Settings → Environment Variables):
 *   RESEND_API_KEY   - from resend.com (free tier is enough for form volume)
 *   CONTACT_TO       - optional; defaults to sales@teknoppy.com
 *   CONTACT_CC       - optional; defaults to sanal@teknoppy.com. Comma-separate
 *                      for several addresses; set to "none" to send no copy.
 *   CONTACT_FROM     - optional; defaults to onboarding@resend.dev, which works
 *                      immediately without domain verification. Switch this to
 *                      something like website@teknoppy.com once the teknoppy.com
 *                      domain is verified in Resend, so replies thread properly.
 *
 * The forms post here by default. PUBLIC_CONTACT_ENDPOINT only needs setting to
 * point them somewhere else (a different route or an external form service).
 */

/** "a@x.com, b@y.com" -> ['a@x.com','b@y.com']. "none"/empty -> []. */
const addresses = (value, fallback) => {
  const raw = String(value ?? '').trim() || fallback;
  if (raw.toLowerCase() === 'none') return [];
  return raw
    .split(',')
    .map((a) => a.trim())
    .filter(Boolean);
};

const MAX_FIELD = 5000;

const esc = (s) =>
  String(s ?? '')
    .slice(0, MAX_FIELD)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch {
      return res.status(400).json({ error: 'Invalid JSON' });
    }
  }
  body = body || {};

  // Honeypot — a bot filled a field no human can see. Accept and drop.
  if (body.company_website) return res.status(200).json({ ok: true });

  const name = String(body.name || '').trim();
  const email = String(body.email || '').trim();
  const phone = String(body.phone || '').trim();
  const message = String(body.message || '').trim();
  const service = String(body.service || '').trim();
  const source = String(body.source || 'Website').trim();

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email and message are required' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address' });
  }

  const API_KEY = process.env.RESEND_API_KEY;
  if (!API_KEY) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn('[contact] RESEND_API_KEY is not set in dev. Form submission accepted locally.');
      return res.status(200).json({ ok: true, dev: true });
    }
    console.error('[contact] RESEND_API_KEY is not set');
    return res.status(500).json({ error: 'Contact form is not configured' });
  }

  const rows = [
    ['Name', name],
    ['Email', email],
    ['Phone', phone],
    ['Service', service],
    ['Source', source]
  ].filter(([, v]) => v);

  const html = `
    <div style="font-family:system-ui,-apple-system,Segoe UI,sans-serif;max-width:620px">
      <h2 style="margin:0 0 4px;font-size:19px;color:#111">New enquiry from teknoppy.com</h2>
      <p style="margin:0 0 20px;color:#777;font-size:13px">${esc(source)}</p>
      <table style="border-collapse:collapse;width:100%;font-size:14px">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="padding:8px 12px 8px 0;color:#888;white-space:nowrap;vertical-align:top;border-bottom:1px solid #eee">${k}</td><td style="padding:8px 0;color:#111;border-bottom:1px solid #eee">${esc(v)}</td></tr>`
          )
          .join('')}
      </table>
      <h3 style="margin:22px 0 6px;font-size:14px;color:#888;font-weight:600">Message</h3>
      <div style="white-space:pre-wrap;font-size:14px;line-height:1.6;color:#111">${esc(message)}</div>
    </div>`;

  // sales@ is the inbox of record; sanal@ is copied on every enquiry.
  const to = addresses(process.env.CONTACT_TO, 'sales@teknoppy.com');
  const cc = addresses(process.env.CONTACT_CC, 'sanal@teknoppy.com');

  const payload = {
    from: process.env.CONTACT_FROM || 'Teknoppy Website <onboarding@resend.dev>',
    to: to.length ? to : ['sales@teknoppy.com'],
    reply_to: email,
    subject: `New enquiry — ${name}${service ? ` (${service})` : ''}`,
    html
  };
  // Resend rejects an empty cc array — only include the key when there is one.
  if (cc.length) payload.cc = cc;

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!r.ok) {
      console.error('[contact] Resend error', r.status, await r.text());
      return res.status(502).json({ error: 'Could not send message' });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('[contact] send failed', err);
    return res.status(502).json({ error: 'Could not send message' });
  }
}
