// Wording for /lp/shopify-development/{en,ml}/ — Kerala & India audience, no pricing.
// Figures come from src/data/site.json; process, FAQ answers and timelines from
// the shopify-development-company-kochi page JSON. Keep new claims verifiable —
// there is no verified count of Shopify stores or conversion figures yet.
import site from '../../../data/site.json';
import type { ServiceCopy } from './types';

const years = String(parseInt(site.stats.yearsInBusiness, 10));

const shared = {
  nav: [
    ['#services', 'Services'],
    ['#work', 'Work'],
    ['#process', 'Process'],
    ['#faq', 'FAQ']
  ] as [string, string][],
  footerBlurb: 'Kochi based Shopify development company building online stores for brands in Kerala & across India.',
  actionLabel: 'Get Quote',
  service: 'Shopify Development',
  pill: 'SHOPIFY DEVELOPMENT COMPANY IN KOCHI',
  chips: ['Store Setup', 'Theme Design', 'Payments', 'Shipping', 'Migration', 'Custom Apps'],
  ticks: ['Built to Convert', 'Secure Checkout', 'Shopify SEO Setup', 'Easy to Manage'],
  heroCta: 'Get FREE Consultation',
  statsTitle: 'Trusted by Businesses Across Kerala',
  stats: [
    { icon: 'monitor', value: site.stats.projects, label: 'Websites<br>Delivered' },
    { icon: 'user', value: site.stats.clients, label: 'Happy<br>Clients' },
    { icon: 'award', value: years, label: 'Years<br>Experience' },
    { icon: 'layout', value: site.stats.industries, label: 'Industries<br>Covered' },
    { icon: 'card', label: 'Payment<br>Gateway Setup' },
    { icon: 'search', label: 'Shopify SEO<br>Built In' },
    { icon: 'users', label: 'Kochi Based Shopify Team', wide: true }
  ],
  bandIcon: 'cart',
  bandList: [
    ['wa', 'WhatsApp-First Communication'],
    ['card', 'Payments Tested Before Launch'],
    ['check', 'Monitored Launch Support']
  ] as [string, string][],
  workTitle: "Shopify Stores We've Built",
  work: [
    {
      img: '/lp/work/apolomattress.webp',
      name: 'Apolo Mattress',
      place: 'Kerala, India',
      type: 'Shopify Store',
      text: 'Mattress store with Google reviews on the homepage and a warranty, returns, COD and sizing FAQ.',
      href: '/case-studies/apolo-mattress-shopify-ecommerce/'
    },
    {
      img: '/lp/work/nuelments.webp',
      name: 'Nuelments',
      place: 'India',
      type: 'Shopify Store',
      text: 'Hair-care store with combo-offer collections, certification badges, shoppable video and a wishlist.',
      href: '/case-studies/nuelments-shopify-ecommerce/'
    },
    {
      img: '/lp/work/modestsisters.webp',
      name: 'Modestsisters',
      place: 'UAE',
      type: 'Shopify Store',
      text: 'Fashion store with clothing, accessories and sunglasses collections and a UAE free-shipping banner.',
      href: '/case-studies/modestsisters-shopify-ecommerce/'
    }
  ],
  testiCta: 'Talk to Our Shopify Team on WhatsApp',
  why: [
    ['pin', 'Kochi Based<br>Shopify Developers'],
    ['palette', 'Custom Store Design,<br>Not a Default Theme'],
    ['card', 'Payments Tested on<br>Real Transactions'],
    ['wa', 'WhatsApp Support<br>Anytime'],
    ['doc', 'Handover Guide<br>&amp; Training']
  ] as [string, string][],
  whyCta: 'Talk to Our Shopify Team',
  processTitle: 'Our Shopify Store Process',
  process: [
    ['search', 'Store Requirements Review'],
    ['layout', 'Store Architecture & Setup'],
    ['palette', 'Design & Theme Customization'],
    ['card', 'App & Payment Integration'],
    ['check', 'Testing & Launch'],
    ['doc', 'Handover & Training']
  ] as [string, string][],
  includedTitle: 'What\'s Included in<br class="br-m">Your Shopify Store',
  included: [
    ['cart', 'Store Setup'],
    ['palette', 'Custom Store Design'],
    ['layout', 'Theme Customization'],
    ['page', 'Product Page Design'],
    ['card', 'Payment Gateway Setup'],
    ['truck', 'Shipping & Tax Settings'],
    ['search', 'Shopify SEO Setup'],
    ['move', 'Shopify Migration']
  ] as [string, string][],
  trust: [
    'Kerala Registered Company',
    'GST Registered',
    'Google Rated – 4.9/5',
    `In Kochi Since ${site.established}`,
    'Work Directly with Developers',
    'Tested Payment Flows',
    'Monitored Launch Support',
    'Handover Guide & Training'
  ],
  contactPoints: [
    'Free consultation — no obligation',
    'Reply within 24 hours on WhatsApp',
    'Written quote before work begins',
    'Work directly with the developers'
  ],
  formTitle: 'Book Your Free Shopify Consultation',
  pills: ['Fast Store', 'Secure Checkout', 'Ready to Sell']
};

export const en: ServiceCopy = {
  ...shared,
  title: 'Teknoppy — Shopify Development Company in Kerala',
  description:
    'Shopify store development for brands in Kerala and across India — custom store design, payment setup, Shopify SEO and migration by a Kochi-based team.',
  waText: "Hi Teknoppy, I saw your ad and I'd like a Shopify store for my business.",
  source: 'Google Ads LP — Shopify Development (English)',
  heroTitle: 'Launch a Shopify Store Built to Convert',
  heroLead: 'Fast, Secure, Ready-to-Sell Shopify Stores<br>for Brands in Kerala &amp; Across India.',
  bandTitle: 'Talk Directly to the Developers<br>Who Build Your Store.',
  bandText:
    'A Kochi-based team you can actually reach — building fast, well-structured stores set up to turn visitors into paying customers from the first day they go live.',
  workSub: 'Real Shopify stores for brands in India and the UAE.',
  testiSub: 'Hear what our clients have to say...',
  problemsTitle: 'Are You Facing<br class="br-m">These Problems?',
  problems: [
    ['Marketplace commissions', 'eat into your margins.'],
    ['Your store looks', 'like every other theme.'],
    ['Checkout and payments', 'keep failing.'],
    ['Slow on mobile,', 'so carts get abandoned.']
  ],
  solve: 'Sell on your own store,<br>built to convert.',
  faq: [
    [
      'How is Shopify different from WooCommerce?',
      'Shopify is a fully hosted platform — Shopify manages servers, security, and updates for you, at a monthly cost. WooCommerce runs on WordPress and gives you full ownership of code and hosting. Shopify suits businesses that want a managed platform with less technical overhead.'
    ],
    [
      'Can you migrate our existing store to Shopify?',
      'Yes — we move products, customer data, and order history from other platforms to Shopify with minimal downtime.'
    ],
    [
      'Will our Shopify store be optimised for search engines?',
      "Yes. Shopify SEO is built into setup — page structure, collection organisation, and metadata are configured with search visibility in mind from the start, though Shopify's platform has some built-in SEO limitations we'll walk you through."
    ],
    [
      'How long does Shopify store development take?',
      'A typical store takes 3–5 weeks from requirements review to launch. Larger catalogues or custom app requirements can extend this timeline.'
    ],
    [
      'Do you build custom Shopify apps?',
      "Yes. When an existing app doesn't cover a specific need, we build custom functionality directly into your store."
    ],
    [
      'Can you customize product pages to match our brand?',
      'Yes — product pages are designed around your brand and product type rather than left as a default theme layout.'
    ]
  ],
  expertTitle: 'Speak with Our Experts...',
  expertSub: 'Your path to launching your online store starts here.',
  contactSub: "Let's get your Shopify store live. Book a FREE consultation.",
  finalTitle: 'Ready to Launch Your Shopify Store?',
  finalText: 'Book your FREE Shopify consultation today.'
};

export const ml: ServiceCopy = {
  ...shared,
  title: 'Teknoppy — കേരളത്തിലെ Shopify Development Company',
  description:
    'Shopify store development for brands in Kerala and across India — custom store design, payment setup, Shopify SEO and migration by a Kochi-based team.',
  waText: 'Hi Teknoppy, എന്റെ ബിസിനസിന് ഒരു Shopify store വേണം.',
  source: 'Google Ads LP — Shopify Development (Malayalam)',
  heroTitle: 'സ്വന്തമായി ഒരു Shopify Store വേണോ?',
  heroLead: '<span class="ml">കേരളത്തിലെ ബ്രാൻഡുകൾക്ക്</span><br>Fast, Secure, Ready-to-Sell Shopify Stores.',
  bandTitle: 'Store build ചെയ്യുന്ന developers-നോട്<br>നേരിട്ട് സംസാരിക്കാം.',
  bandText:
    'കൊച്ചിയിലുള്ള, എപ്പോഴും ബന്ധപ്പെടാവുന്ന team. Launch ചെയ്യുന്ന ആദ്യ ദിവസം മുതൽ visitors-നെ customers ആക്കാൻ set ചെയ്ത fast, well-structured stores.',
  workSub: 'ഇന്ത്യയിലെയും UAE-യിലെയും ബ്രാൻഡുകൾക്കായി ഞങ്ങൾ build ചെയ്ത Shopify stores.',
  testiSub: 'ഞങ്ങളുടെ ക്ലയന്റുകൾ പറയുന്നത് കേൾക്കൂ...',
  problemsTitle: 'ഈ പ്രശ്നങ്ങൾ നിങ്ങളും<br class="br-m">നേരിടുന്നുണ്ടോ?',
  problems: [
    ['Marketplace commission', 'ലാഭം കുറയ്ക്കുന്നു.'],
    ['Store കാണാൻ', 'മറ്റെല്ലാ theme-ഉം പോലെ.'],
    ['Checkout / payment', 'ഇടയ്ക്കിടെ fail ആകുന്നു.'],
    ['Mobile-ൽ slow,', 'customers cart ഉപേക്ഷിച്ച് പോകുന്നു.']
  ],
  solve: 'ഇനി സ്വന്തം Shopify Store-ലൂടെ<br>നേരിട്ട് വിൽക്കാം.',
  faq: [
    [
      'Shopify-ഉം WooCommerce-ഉം തമ്മിലുള്ള വ്യത്യാസം എന്താണ്?',
      'Shopify ഒരു fully hosted platform ആണ് — servers, security, updates എല്ലാം monthly fee-ക്ക് Shopify തന്നെ നോക്കും. WooCommerce WordPress-ൽ പ്രവർത്തിക്കുന്നു, code-ന്റെയും hosting-ന്റെയും പൂർണ്ണ ownership നിങ്ങൾക്കായിരിക്കും. Technical തലവേദന കുറഞ്ഞ managed platform വേണ്ടവർക്ക് Shopify ആണ് നല്ലത്.'
    ],
    [
      'നിലവിലുള്ള store Shopify-ലേക്ക് migrate ചെയ്യാമോ?',
      'അതെ — products, customer data, order history എന്നിവ മറ്റ് platforms-ൽ നിന്ന് കുറഞ്ഞ downtime-ൽ Shopify-ലേക്ക് മാറ്റും.'
    ],
    [
      'Shopify store search engines-ന് optimise ചെയ്യുമോ?',
      'അതെ. Setup-ൽ തന്നെ Shopify SEO ഉൾപ്പെടുന്നു — page structure, collections, metadata എല്ലാം തുടക്കം മുതൽ search visibility മനസ്സിൽ വെച്ച് configure ചെയ്യും. Shopify platform-ന്റെ ചില built-in SEO പരിമിതികളും ഞങ്ങൾ വിശദീകരിച്ചു തരും.'
    ],
    [
      'Shopify store ഉണ്ടാക്കാൻ എത്ര സമയം എടുക്കും?',
      'സാധാരണ ഒരു store-ന് requirements review മുതൽ launch വരെ 3–5 ആഴ്ച എടുക്കും. വലിയ catalogue-ഓ custom app ആവശ്യങ്ങളോ ഉണ്ടെങ്കിൽ കൂടുതൽ സമയമെടുക്കാം.'
    ],
    [
      'Custom Shopify apps ഉണ്ടാക്കുമോ?',
      'ഉണ്ട്. നിലവിലുള്ള ഒരു app നിങ്ങളുടെ ആവശ്യം നിറവേറ്റുന്നില്ലെങ്കിൽ, ആ functionality നേരിട്ട് store-ൽ build ചെയ്യും.'
    ],
    [
      'Product pages ഞങ്ങളുടെ brand-ന് അനുസരിച്ച് customise ചെയ്യുമോ?',
      'അതെ — default theme layout അല്ല, നിങ്ങളുടെ brand-ഉം product type-ഉം അനുസരിച്ചാണ് product pages design ചെയ്യുന്നത്.'
    ]
  ],
  expertTitle: 'ഞങ്ങളുടെ Expert-നോട് സംസാരിക്കൂ...',
  expertSub: 'നിങ്ങളുടെ Shopify Store-ലേക്കുള്ള ആദ്യ ചുവട് ഇവിടെ തുടങ്ങാം.',
  contactSub: 'നിങ്ങളുടെ ബ്രാൻഡിന് ഒരു Shopify Store തയ്യാറാക്കാം. ഒരു FREE consultation ബുക്ക് ചെയ്യൂ.',
  finalTitle: 'നിങ്ങളുടെ Shopify Store launch ചെയ്യാൻ തയ്യാറാണോ?',
  finalText: 'ഇന്നുതന്നെ ഒരു FREE Shopify Consultation ബുക്ക് ചെയ്യൂ.'
};
