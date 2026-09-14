// Shared bits for the Google Ads landing pages in src/pages/lp/.
import site from '../../data/site.json';

export { site };

export const tel = `tel:${site.phoneLink}`;

/** WhatsApp link with a prefilled first message, so ad leads identify themselves. */
export const waLink = (text: string) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

// Icon paths — each appears several times per page.
export const WA =
  'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.359.101 11.945c0 2.096.549 4.142 1.595 5.945L0 24l6.335-1.652a11.882 11.882 0 005.667 1.448h.005c6.585 0 11.946-5.359 11.949-11.945a11.821 11.821 0 00-3.495-8.454';
export const PHONE =
  'M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1z';
export const CLIP =
  'M9 2h6a1 1 0 0 1 1 1v1h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2V3a1 1 0 0 1 1-1m1 3h4V4h-4zM7 9h10v2H7zm0 4h10v2H7z';
export const G =
  '<path fill="#4285F4" d="M23 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.2a5.3 5.3 0 0 1-2.3 3.5v2.9h3.7c2.2-2 3.4-5 3.4-8.6"/><path fill="#34A853" d="M12 24c3.1 0 5.7-1 7.6-2.8l-3.7-2.9c-1 .7-2.3 1.1-3.9 1.1-3 0-5.5-2-6.4-4.7H1.8v3a12 12 0 0 0 10.2 6.3"/><path fill="#FBBC05" d="M5.6 14.7a7.1 7.1 0 0 1 0-4.6v-3H1.8a12 12 0 0 0 0 10.7z"/><path fill="#EA4335" d="M12 4.7c1.7 0 3.2.6 4.4 1.7l3.3-3.2A11.6 11.6 0 0 0 12 0 12 12 0 0 0 1.8 6.1l3.8 3a7.1 7.1 0 0 1 6.4-4.4"/>';
export const MAIL = '<path fill="currentColor" d="M3 5h18v14H3z" opacity=".25"/><path fill="currentColor" d="M3 5h18l-9 7z"/>';

/** Inner markup for 24×24 icons, referenced by key from the page content files. */
export const ICONS: Record<string, string> = {
  wa: `<path fill="currentColor" d="${WA}"/>`,
  pin: '<path fill="currentColor" d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7m0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5"/>',
  doc: '<path fill="currentColor" d="M6 2h8l5 5v15H6zm7 1.5V8h4.5z"/><path stroke="#fff" stroke-width="1.5" d="M9 12h6M9 15h6M9 18h4"/>',
  search: '<path fill="currentColor" d="M10 2a8 8 0 1 0 4.9 14.3l5.4 5.4 1.4-1.4-5.4-5.4A8 8 0 0 0 10 2m0 2a6 6 0 1 1 0 12 6 6 0 0 1 0-12"/>',
  page: '<path fill="currentColor" d="M5 3h14v18H5z" opacity=".2"/><path fill="currentColor" d="M7 6h10v2H7zm0 4h10v2H7zm0 4h6v2H7z"/>',
  clock: '<path fill="currentColor" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m1 10.6l4 2.3-1 1.7-5-2.9V6h2z"/>',
  award: '<path fill="currentColor" d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.6-4.8 2.6.9-5.4L4.2 7.7l5.4-.8z"/><path fill="currentColor" opacity=".55" d="M8 17l-2 5 4-1.4L12 24l2-3.4 4 1.4-2-5z"/>',
  user: '<path fill="currentColor" d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8m0 2c-4 0-8 2-8 5v1h16v-1c0-3-4-5-8-5"/>',
  users: '<path fill="currentColor" d="M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6m8 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M2 19v-1c0-2.5 3.1-4 7-4s7 1.5 7 4v1zm15.5-5c2.7 0 4.5 1.2 4.5 3v2h-4v-1c0-1.6-.8-2.9-2-3.8z"/>',
  calendar: '<path fill="currentColor" d="M3 5h18v16H3z" opacity=".2"/><path fill="currentColor" d="M3 5h18v4H3zm4-3h2v4H7zm8 0h2v4h-2zM6 12h3v3H6zm5 0h3v3h-3zm5 0h3v3h-3zM6 16h3v3H6zm5 0h3v3h-3z"/>',
  mobile: '<rect x="6" y="2" width="12" height="20" rx="2.5" fill="currentColor"/><rect x="8" y="5" width="8" height="12" rx="1" fill="#fff"/>',
  monitor: '<path fill="currentColor" d="M2 4h20v13H2z"/><path fill="#fff" d="M4 6h16v9H4z"/><path fill="currentColor" d="M8 20h8v2H8zm3-3h2v3h-2z"/>',
  layout: '<path fill="currentColor" d="M3 3h18v18H3z" opacity=".2"/><path fill="currentColor" d="M3 3h18v5H3zm0 7h7v11H3zm9 0h9v5h-9z"/>',
  code: '<path fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" d="M8 7l-5 5 5 5M16 7l5 5-5 5M13.5 4l-3 16"/>',
  bolt: '<path fill="currentColor" d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
  tools: '<path fill="currentColor" d="M22 19.6l-8.5-8.5a5.5 5.5 0 0 0-7-7L10 7.6 7.6 10 4.1 6.5a5.5 5.5 0 0 0 7 7l8.5 8.5z"/>',
  check: '<circle cx="12" cy="12" r="10" fill="currentColor"/><path fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" d="M7.5 12.5l3 3 6-6"/>',
  move: '<path fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" d="M4 8h13l-3.5-3.5M20 16H7l3.5 3.5"/>',
  palette: '<path fill="currentColor" d="M12 2a10 10 0 0 0 0 20c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.3-.3-.4-.5-.8-.5-1.3 0-1.1.9-2 2-2h2.4A4.6 4.6 0 0 0 22 10.8C22 5.9 17.5 2 12 2"/><circle cx="7" cy="11" r="1.5" fill="#fff"/><circle cx="10" cy="7" r="1.5" fill="#fff"/><circle cx="15" cy="7" r="1.5" fill="#fff"/>',
  cart: '<path fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" d="M3 4h2.5l2.4 11h10.4L20.5 7H6.8"/><circle cx="9.5" cy="19.5" r="1.7" fill="currentColor"/><circle cx="17" cy="19.5" r="1.7" fill="currentColor"/>',
  card: '<rect x="2" y="5" width="20" height="14" rx="2.5" fill="currentColor"/><path fill="#fff" d="M2 9h20v2.5H2zM5 14.5h5v2H5z"/>',
  truck: '<path fill="currentColor" d="M2 6h12v10H2zm12 4h4l3 3.5V16h-7z"/><circle cx="6.5" cy="17.5" r="2" fill="currentColor" stroke="#fff" stroke-width="1.2"/><circle cx="17.5" cy="17.5" r="2" fill="currentColor" stroke="#fff" stroke-width="1.2"/>'
};
