// Wording for /lp/website-development/{en,ml}/ — Kerala & India audience, no pricing.
// Figures come from src/data/site.json; process, FAQ answers and timelines from
// src/data/pages web-design / business-website JSON. Keep new claims verifiable.
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
  footerBlurb: 'Kochi based web development company building websites for businesses in Kerala & across India.',
  actionLabel: 'Get Quote',
  service: 'Website Development',
  pill: 'WEBSITE DEVELOPMENT COMPANY IN KOCHI',
  chips: ['WordPress', 'WooCommerce', 'Shopify', 'Custom Code', 'Landing Pages', 'Redesign'],
  ticks: ['Mobile-First Design', 'SEO-Ready Build', 'Fast Loading', 'Easy to Update'],
  heroCta: 'Get FREE Consultation',
  statsTitle: 'Trusted by Businesses Across Kerala',
  stats: [
    { icon: 'monitor', value: site.stats.projects, label: 'Websites<br>Delivered' },
    { icon: 'user', value: site.stats.clients, label: 'Happy<br>Clients' },
    { icon: 'award', value: years, label: 'Years<br>Experience' },
    { icon: 'layout', value: site.stats.industries, label: 'Industries<br>Covered' },
    { icon: 'mobile', label: 'Mobile-First<br>Design' },
    { icon: 'search', label: 'SEO-Ready<br>Build' },
    { icon: 'users', label: 'Kochi Based Web Team', wide: true }
  ],
  bandIcon: 'code',
  bandList: [
    ['wa', 'WhatsApp-First Communication'],
    ['clock', 'Written Timeline Before We Start'],
    ['tools', 'Support After Launch']
  ] as [string, string][],
  workTitle: "Websites We've Built",
  work: [
    {
      img: '/lp/work/cochinsuraksha.webp',
      name: 'Cochin Suraksha',
      place: 'Kochi, Kerala',
      type: 'Business Website',
      text: 'Fire-safety company website with seven dedicated service pages and a separate Civil & MEP page.',
      href: '/case-studies/cochin-suraksha-web-design-development/'
    },
    {
      img: '/lp/work/evosyz.webp',
      name: 'Evosyz',
      place: 'Kochi, Kerala',
      type: 'Corporate Website',
      text: '"Teknoppy created an appealing website that represents our brand perfectly." — Vivek Menon, CTO',
      href: '/case-study/'
    },
    {
      img: '/lp/work/generaltech.webp',
      name: 'General Tech Services',
      place: 'Sharjah, UAE',
      type: 'Website Redesign',
      text: 'Redesign built around three clear journeys — Calibration, Products and Services — with a page for each of its 15 accredited calibration disciplines.',
      href: '/case-studies/general-tech-services-web-design/'
    },
    {
      img: '/lp/work/leemaeng.webp',
      name: 'Leema Engineering Works',
      place: 'Sharjah, UAE',
      type: 'Corporate Website',
      text: 'A 66-page restructure organising products, services and industries into eight clear topical sections.',
      href: '/case-studies/leema-engineering-web-design-gcc/'
    }
  ],
  testiCta: 'Talk to Our Web Team on WhatsApp',
  why: [
    ['pin', 'Kochi Based Dedicated<br>Web Team'],
    ['mobile', 'Mobile-First,<br>SEO-Ready Build'],
    ['doc', 'Written Timeline &amp;<br>Clear Revisions'],
    ['wa', 'WhatsApp Support<br>Anytime'],
    ['tools', 'Support<br>After Launch']
  ] as [string, string][],
  whyCta: 'Talk to Our Web Team',
  processTitle: 'Our Website Development Process',
  process: [
    ['search', 'Discovery & Goal Mapping'],
    ['layout', 'Sitemap & URL Architecture'],
    ['palette', 'Wireframing & UX Design'],
    ['code', 'Development & Schema'],
    ['bolt', 'SEO Setup & Speed'],
    ['check', 'Launch, Testing & Handover']
  ] as [string, string][],
  includedTitle: 'What\'s Included in<br class="br-m">Your Website',
  included: [
    ['mobile', 'Responsive Design'],
    ['monitor', 'Business Websites'],
    ['award', 'Corporate Websites'],
    ['layout', 'Landing Pages'],
    ['move', 'Website Redesign'],
    ['page', 'WordPress CMS'],
    ['search', 'SEO-Friendly Build'],
    ['tools', 'Website Maintenance']
  ] as [string, string][],
  trust: [
    'Kerala Registered Company',
    'GST Registered',
    'Google Rated – 4.9/5',
    `In Kochi Since ${site.established}`,
    `${site.stats.projects} Websites Delivered`,
    'Written Project Timeline',
    'No Hidden Costs',
    'Post-Launch Support'
  ],
  contactPoints: [
    'Free consultation — no obligation',
    'Reply within 24 hours on WhatsApp',
    'Written quote before work begins',
    `Kochi-based team since ${site.established}`
  ],
  formTitle: 'Book Your Free Website Consultation',
  pills: ['More Enquiries', 'Mobile-First', 'SEO-Ready']
};

export const en: ServiceCopy = {
  ...shared,
  title: 'Teknoppy — Website Development Company in Kerala',
  description: `Custom, mobile-first, SEO-ready website development for businesses in Kerala and across India. Kochi-based team since ${site.established}.`,
  waText: "Hi Teknoppy, I saw your ad and I'd like a website for my business.",
  source: 'Google Ads LP — Website Development (English)',
  heroTitle: 'Need a Website That Brings in Enquiries?',
  heroLead: 'Custom, Mobile-First, SEO-Ready Websites<br>for Businesses in Kerala &amp; Across India.',
  bandTitle: 'From Kochi,<br>Built for Kerala Businesses.',
  bandText:
    'Written project timelines, clearly defined revision rounds, real cost estimates, and post-launch support. No hidden costs. No vanishing after handover.',
  workSub: 'Real projects for businesses in Kerala and the Gulf.',
  testiSub: 'Hear what our clients have to say...',
  problemsTitle: 'Are You Facing<br class="br-m">These Problems?',
  problems: [
    ['Your website looks outdated...', 'and visitors leave.'],
    ['Visitors come,', 'but no enquiries.'],
    ['Not mobile friendly,', 'and slow to load.'],
    ['Every small change', 'needs a developer.']
  ],
  solve: 'Get a website that brings<br>you real enquiries.',
  faq: [
    [
      'How long does it take to build a website?',
      'A standard 8–15 page business website typically takes 3 to 5 weeks. Larger corporate sites or custom functionality can take 6 to 10 weeks. A written timeline is provided at the start.'
    ],
    [
      'How much does a website cost?',
      'It depends on the number of pages, features and content. After a free consultation we send a written quote before any work begins — no hidden costs.'
    ],
    [
      'Will my website be mobile-friendly and SEO-ready?',
      'Yes. Every site is built mobile-first on a search-ready technical foundation — page structure, speed and metadata are set up from the start.'
    ],
    [
      'Can I update the website myself?',
      'Yes. We build on an easy-to-use CMS such as WordPress, and a full handover guide and optional training session are included.'
    ],
    [
      'Do you provide support after launch?',
      'Yes. Monthly maintenance plans cover updates, security monitoring, speed checks, content edits and technical fixes.'
    ],
    [
      'Can you redesign my existing website?',
      'Yes. We redesign websites while preserving your existing Google ranking history.'
    ]
  ],
  expertTitle: 'Speak with Our Experts...',
  expertSub: 'Your path to a website that brings in enquiries starts here.',
  contactSub: "Let's build a website that grows your business. Book a FREE consultation.",
  finalTitle: 'Ready for a Website That Brings in Enquiries?',
  finalText: 'Book your FREE website consultation today.'
};

export const ml: ServiceCopy = {
  ...shared,
  title: 'Teknoppy — കേരളത്തിലെ Website Development Company',
  description: `Custom, mobile-first, SEO-ready website development for businesses in Kerala and across India. Kochi-based team since ${site.established}.`,
  waText: 'Hi Teknoppy, എന്റെ ബിസിനസിന് ഒരു website വേണം.',
  source: 'Google Ads LP — Website Development (Malayalam)',
  heroTitle: 'Enquiries കൊണ്ടുവരുന്ന ഒരു Website വേണോ?',
  heroLead: '<span class="ml">കേരളത്തിലെ ബിസിനസ്സുകൾക്ക്</span><br>Custom, Mobile-First, SEO-Ready Websites.',
  bandTitle: 'കൊച്ചിയിൽ നിന്ന്<br>Kerala Business Focus.',
  bandText:
    'Written project timeline, വ്യക്തമായ revision rounds, യഥാർത്ഥ cost estimate, launch-ന് ശേഷവും support. Hidden costs ഇല്ല. Handover കഴിഞ്ഞാലും ഞങ്ങൾ കൂടെയുണ്ട്.',
  workSub: 'കേരളത്തിലും ഗൾഫിലുമുള്ള ബിസിനസ്സുകൾക്കായി ഞങ്ങൾ build ചെയ്ത യഥാർത്ഥ websites.',
  testiSub: 'ഞങ്ങളുടെ ക്ലയന്റുകൾ പറയുന്നത് കേൾക്കൂ...',
  problemsTitle: 'ഈ പ്രശ്നങ്ങൾ നിങ്ങളും<br class="br-m">നേരിടുന്നുണ്ടോ?',
  problems: [
    ['Website പഴയതാണ്...', 'visitors പെട്ടെന്ന് പോകുന്നു.'],
    ['Visitors വരുന്നുണ്ട്,', 'പക്ഷെ enquiries ഇല്ല.'],
    ['Mobile-ൽ ശരിയായി കാണുന്നില്ല,', 'load ആകാൻ സമയമെടുക്കുന്നു.'],
    ['ചെറിയ മാറ്റത്തിനും', 'developer-നെ വിളിക്കണം.']
  ],
  solve: 'ഇനി enquiries കൊണ്ടുവരുന്ന<br>ഒരു Website ഉണ്ടാക്കാം.',
  faq: [
    [
      'ഒരു Website ഉണ്ടാക്കാൻ എത്ര സമയം എടുക്കും?',
      'സാധാരണയായി 8–15 pages ഉള്ള ഒരു business website-ന് 3 മുതൽ 5 ആഴ്ച വരെ എടുക്കും. വലിയ corporate sites-നോ custom features-നോ 6 മുതൽ 10 ആഴ്ച വരെ എടുക്കാം. തുടക്കത്തിൽ തന്നെ written timeline നൽകും.'
    ],
    [
      'Website-ന് എത്ര ചെലവാകും?',
      'Pages-ന്റെ എണ്ണം, features, content എന്നിവ അനുസരിച്ച് വ്യത്യാസപ്പെടും. Free consultation-ന് ശേഷം, work തുടങ്ങുന്നതിന് മുൻപ് written quote അയക്കും — hidden costs ഇല്ല.'
    ],
    [
      'Website mobile-friendly-ഉം SEO-ready-ഉം ആയിരിക്കുമോ?',
      'അതെ. എല്ലാ website-ഉം mobile-first ആയി, search-ready technical foundation-ഓടെയാണ് build ചെയ്യുന്നത് — page structure, speed, metadata എല്ലാം തുടക്കം മുതൽ set ചെയ്യും.'
    ],
    [
      'Website ഞങ്ങൾക്ക് തന്നെ update ചെയ്യാമോ?',
      'തീർച്ചയായും. WordPress പോലുള്ള എളുപ്പമുള്ള CMS-ലാണ് build ചെയ്യുന്നത്. Handover guide-ഉം optional training session-ഉം ഉൾപ്പെടുന്നു.'
    ],
    [
      'Launch-ന് ശേഷം support ലഭിക്കുമോ?',
      'ഉണ്ട്. Monthly maintenance plans-ൽ updates, security monitoring, speed checks, content edits, technical fixes എന്നിവ ഉൾപ്പെടുന്നു.'
    ],
    [
      'നിലവിലുള്ള Website redesign ചെയ്യുമോ?',
      'അതെ. നിങ്ങളുടെ നിലവിലുള്ള Google ranking history നഷ്ടപ്പെടാതെയാണ് ഞങ്ങൾ website redesign ചെയ്യുന്നത്.'
    ]
  ],
  expertTitle: 'ഞങ്ങളുടെ Expert-നോട് സംസാരിക്കൂ...',
  expertSub: 'നിങ്ങളുടെ പുതിയ Website-ലേക്കുള്ള ആദ്യ ചുവട് ഇവിടെ തുടങ്ങാം.',
  contactSub: 'നിങ്ങളുടെ ബിസിനസിന് ഒരു പുതിയ Website തയ്യാറാക്കാം. ഒരു FREE consultation ബുക്ക് ചെയ്യൂ.',
  finalTitle: 'നിങ്ങളുടെ ബിസിനസിന് ഒരു പുതിയ Website-ന് തയ്യാറാണോ?',
  finalText: 'ഇന്നുതന്നെ ഒരു FREE Website Consultation ബുക്ക് ചെയ്യൂ.'
};
