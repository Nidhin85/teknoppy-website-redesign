export interface WebsitePortfolioItem {
  id: string;
  name: string;
  tagline: string;
  industryLabel: string;
  category: string;
  categories: string[];
  image: string;
  imageAlt: string;
  href: string;
  location?: string;
}

export interface PortfolioFilterCategory {
  id: string;
  label: string;
  slug: string;
}

export const portfolioFilterCategories: PortfolioFilterCategory[] = [
  { id: 'all', label: 'All Projects', slug: 'all' },
  { id: 'web-design', label: 'Web Design & Development', slug: 'web-design-development' },
  { id: 'uiux', label: 'UI/UX Design', slug: 'ui-ux-design' },
  { id: 'wordpress', label: 'WordPress Development', slug: 'wordpress-development' },
  { id: 'ecommerce', label: 'E-commerce Development', slug: 'ecommerce-development' },
  { id: 'shopify', label: 'Shopify', slug: 'shopify' },
  { id: 'web-app', label: 'Web Application', slug: 'web-application' },
  { id: 'seo', label: 'SEO', slug: 'seo' },
  { id: 'digital-marketing', label: 'Digital Marketing', slug: 'digital-marketing' },
];

export const websitePortfolioProjects: WebsitePortfolioItem[] = [
  {
    id: 'general-tech-services',
    name: 'General Tech Services',
    tagline: 'UAE ISO 17025 calibration lab website redesign, structuring complex instrumentation services into commercial conversion funnels.',
    industryLabel: 'Web Design & Development',
    category: 'web-design',
    categories: ['web-design', 'seo'],
    image: '/portfolios/website/general-tech-services.webp',
    imageAlt: 'Teknoppy website project - General Tech Services calibration lab homepage',
    href: '/case-studies/general-tech-services-web-design/',
    location: 'Dubai & Sharjah, UAE'
  },
  {
    id: 'leema-engineering',
    name: 'Leema Engineering Works',
    tagline: 'GCC industrial supplier website showcasing oil & gas piping, precision valves, and heavy manufacturing capabilities.',
    industryLabel: 'Web Design & Development',
    category: 'web-design',
    categories: ['web-design'],
    image: '/portfolios/website/leema-engineering.webp',
    imageAlt: 'Teknoppy website project - Leema Engineering Works industrial homepage',
    href: '/case-studies/leema-engineering-web-design-gcc/',
    location: 'GCC / UAE'
  },
  {
    id: 'cochin-suraksha',
    name: 'Cochin Suraksha',
    tagline: 'Corporate website for a premier Kerala fire & safety contractor expanding into Civil and MEP infrastructure.',
    industryLabel: 'Web Design & Development',
    category: 'web-design',
    categories: ['web-design'],
    image: '/portfolios/website/cochin-suraksha.webp',
    imageAlt: 'Teknoppy website project - Cochin Suraksha fire safety and MEP homepage',
    href: '/case-studies/cochin-suraksha-web-design-development/',
    location: 'Kochi, Kerala'
  },
  {
    id: 'mount-bell-global-studies',
    name: 'Mount Bell Global Studies',
    tagline: 'Overseas education consultancy website streamlining international university admissions and student visa funnels.',
    industryLabel: 'Web Design & Development',
    category: 'web-design',
    categories: ['web-design'],
    image: '/portfolios/website/mount-bell-global-studies.webp',
    imageAlt: 'Teknoppy website project - Mount Bell Global Studies education homepage',
    href: '/case-studies/mount-bell-global-studies-web-design-development/',
    location: 'Kochi, Kerala'
  },
  {
    id: 'lenaa',
    name: 'Lenaa',
    tagline: 'Personal brand platform for an acclaimed actor, author, and TEDx speaker, unifying cinema, books, and speaking tours.',
    industryLabel: 'Web Design & Development',
    category: 'web-design',
    categories: ['web-design'],
    image: '/portfolios/website/lenaa.webp',
    imageAlt: 'Teknoppy website project - Lenaa personal brand homepage',
    href: '/lenaa-personal-brand-website-case-study/',
    location: 'Kerala, India'
  },
  {
    id: 'abrus-krishna-finance',
    name: 'Abrus Krishna Finance',
    tagline: 'UI/UX design and WordPress site for a KML-registered Kerala lending company, establishing clear borrower trust journeys.',
    industryLabel: 'UI/UX Design • WordPress',
    category: 'uiux',
    categories: ['uiux', 'wordpress'],
    image: '/portfolios/website/abrus-krishna-finance.webp',
    imageAlt: 'Teknoppy website project - Abrus Krishna Finance lending homepage',
    href: '/case-studies/abrus-krishna-finance-ui-ux-design/',
    location: 'Guruvayoor, Kerala'
  },
  {
    id: 'varma-ayurveda',
    name: 'Varma Ayurveda',
    tagline: 'Multilingual wellness retreat website connecting European health seekers with authentic Kerala Ayurvedic therapies.',
    industryLabel: 'UI/UX Design • WordPress',
    category: 'uiux',
    categories: ['uiux', 'wordpress'],
    image: '/portfolios/website/varma-ayurveda.webp',
    imageAlt: 'Teknoppy website project - Varma Ayurveda wellness retreat homepage',
    href: '/case-studies/varma-ayurveda-ui-ux-design/',
    location: 'Germany & Kerala'
  },
  {
    id: 'evosyz',
    name: 'Evosyz',
    tagline: 'Modern fintech website designed for clear financial communication, high conversion, and organic search visibility.',
    industryLabel: 'Fintech • Web Design',
    category: 'web-design',
    categories: ['web-design', 'uiux'],
    image: '/case-studies/evosyz.webp',
    imageAlt: 'Teknoppy website project - Evosyz fintech homepage',
    href: '/contact-us/',
    location: 'Kochi, Kerala'
  },
  {
    id: 'greens-ayurveda',
    name: 'Greens Ayurveda',
    tagline: 'Ayurvedic hospital and international academy website catering to holistic health patients and medical trainees worldwide.',
    industryLabel: 'Healthcare • Web Design',
    category: 'web-design',
    categories: ['web-design', 'wordpress'],
    image: '/case-studies/greensayurveda.webp',
    imageAlt: 'Teknoppy website project - Greens Ayurveda hospital homepage',
    href: '/contact-us/',
    location: 'Calicut, Kerala'
  },
  {
    id: 'olives-resort',
    name: 'Olives Boutique Resort',
    tagline: 'Eco-luxury plantation resort website in Wayanad, designed to drive direct booking inquiries and guest acquisition.',
    industryLabel: 'Hospitality • Digital Marketing',
    category: 'digital-marketing',
    categories: ['web-design', 'digital-marketing'],
    image: '/case-studies/olivesresort.webp',
    imageAlt: 'Teknoppy website project - Olives Boutique Resort homepage',
    href: '/case-studies/olives-boutique-resort-digital-marketing/',
    location: 'Wayanad, Kerala'
  },
  {
    id: 'triqare',
    name: 'TriQare',
    tagline: 'HealthTech emergency SOS web application coordinating real-time medical responder alerts and patient geolocation.',
    industryLabel: 'Web Application • UI/UX',
    category: 'web-app',
    categories: ['web-app', 'uiux'],
    image: '/case-studies/triqare-desktop.webp',
    imageAlt: 'Teknoppy website project - TriQare healthtech emergency SOS application',
    href: '/case-studies/triqare-web-application-design/',
    location: 'Kochi, Kerala'
  },
  {
    id: 'libra-group-uae',
    name: 'Libra Group UAE',
    tagline: 'Enterprise facilities management web application digitizing client work orders and operational dispatch across the Emirates.',
    industryLabel: 'Web Application',
    category: 'web-app',
    categories: ['web-app', 'web-design'],
    image: '/case-studies/libragroupuae.webp',
    imageAlt: 'Teknoppy website project - Libra Group UAE facilities management portal',
    href: '/case-studies/libra-group-uae-web-application-design/',
    location: 'Dubai, UAE'
  },
  {
    id: 'getskill-online',
    name: 'GetSkill Online',
    tagline: 'UK certification training ecommerce platform featuring frictionless course enrollment and digital payment gateways.',
    industryLabel: 'E-commerce Development',
    category: 'ecommerce',
    categories: ['ecommerce'],
    image: '/case-studies/getskillonline.webp',
    imageAlt: 'Teknoppy website project - GetSkill Online course certification platform',
    href: '/case-studies/getskillonline-ecommerce-website-development/',
    location: 'United Kingdom'
  },
  {
    id: 'my-plantstore',
    name: 'My PlantStore',
    tagline: 'Dubai online botanical nursery ecommerce store engineered for botanical delivery, plant care guides, and instant checkout.',
    industryLabel: 'E-commerce Development',
    category: 'ecommerce',
    categories: ['ecommerce'],
    image: '/case-studies/myplantstore.webp',
    imageAlt: 'Teknoppy website project - My PlantStore botanical nursery store',
    href: '/case-studies/myplantstore-ecommerce-website-development/',
    location: 'Dubai, UAE'
  },
  {
    id: 'apolo-mattress',
    name: 'Apolo Mattress',
    tagline: 'Shopify D2C ecommerce store for a Kerala mattress brand with custom mattress dimension calculators and doorstep delivery.',
    industryLabel: 'Shopify • E-commerce',
    category: 'shopify',
    categories: ['shopify', 'ecommerce'],
    image: '/case-studies/apolomattress-desktop.webp',
    imageAlt: 'Teknoppy website project - Apolo Mattress Shopify store',
    href: '/case-studies/apolo-mattress-shopify-ecommerce/',
    location: 'Kerala, India'
  },
  {
    id: 'nuelments',
    name: 'Nuelments',
    tagline: 'High-conversion Shopify store for a D2C hair care brand, optimized for mobile checkout speed and ingredient storytelling.',
    industryLabel: 'Shopify • E-commerce',
    category: 'shopify',
    categories: ['shopify', 'ecommerce'],
    image: '/case-studies/nuelments.webp',
    imageAlt: 'Teknoppy website project - Nuelments D2C hair care Shopify store',
    href: '/case-studies/nuelments-shopify-ecommerce/',
    location: 'India'
  },
  {
    id: 'modestsisters',
    name: 'Modestsisters',
    tagline: 'Luxury Shopify fashion storefront for a GCC apparel brand with multi-currency payment and regional logistics.',
    industryLabel: 'Shopify • E-commerce',
    category: 'shopify',
    categories: ['shopify', 'ecommerce'],
    image: '/case-studies/modestsisters.webp',
    imageAlt: 'Teknoppy website project - Modestsisters luxury fashion Shopify store',
    href: '/case-studies/modestsisters-shopify-ecommerce/',
    location: 'UAE & GCC'
  },
  {
    id: 'sun-and-moon-korean',
    name: 'Sun and Moon Korean',
    tagline: 'Korean lifestyle and authentic artisanal food ecommerce store delivering pan-India retail experiences.',
    industryLabel: 'E-commerce Development',
    category: 'ecommerce',
    categories: ['ecommerce'],
    image: '/case-studies/sunandmoonkorean.webp',
    imageAlt: 'Teknoppy website project - Sun and Moon Korean lifestyle ecommerce store',
    href: '/case-studies/sun-and-moon-korean-ecommerce-website/',
    location: 'Mumbai, India'
  },
  {
    id: 'kerala-dayz',
    name: 'Kerala Dayz',
    tagline: 'Tour operator website and organic SEO architecture capturing high-intent holiday tourism searches and direct inquiries.',
    industryLabel: 'SEO • Web Design',
    category: 'seo',
    categories: ['seo', 'web-design'],
    image: '/case-studies/keraladayz.webp',
    imageAlt: 'Teknoppy website project - Kerala Dayz travel and tour operator website',
    href: '/case-studies/kerala-dayz-seo-services/',
    location: 'Kochi, Kerala'
  }
];
