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
  // 1. Lenaa
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
  // 2. General Tech
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
  // 3. Koojo Custom Powder Coating
  {
    id: 'koojo-powder-coating',
    name: 'Koojo Custom Powder Coating',
    tagline: 'Site architecture, keyword strategy, and topical SEO infrastructure for a Milton, Ontario industrial metal finishing company.',
    industryLabel: 'SEO & Web Architecture',
    category: 'seo',
    categories: ['seo', 'web-design'],
    image: '/portfolios/website/koojopowdercoating.webp',
    imageAlt: 'Teknoppy website project - Koojo Custom Powder Coating homepage',
    href: '/case-studies/koojo-custom-powder-coating-seo/',
    location: 'Milton, Ontario, Canada'
  },
  // 4. Leema Engineering
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
  // 4. Abrus Krishna
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
  // 5. Varma Ayurveda
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
  // 6. TriQare
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
  // 7. Sun and Moon Korean
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
  // 8. YatraBay
  {
    id: 'yatrabay',
    name: 'YatraBay',
    tagline: 'Destination-first, process-transparent website for an international tour operator, structuring packages, pricing, and visa timelines.',
    industryLabel: 'Web Design & Development',
    category: 'web-design',
    categories: ['web-design'],
    image: '/portfolios/website/yatrabay.webp',
    imageAlt: 'Teknoppy website project - YatraBay tour operator homepage',
    href: '/case-study/yatrabay/',
    location: 'Trivandrum, Kerala'
  },
  // Remaining projects preserving existing relative order
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
    industryLabel: 'Hospitality • Web Design',
    category: 'web-design',
    categories: ['web-design'],
    image: '/case-studies/olivesresort.webp',
    imageAlt: 'Teknoppy website project - Olives Boutique Resort homepage',
    href: '/case-studies/olives-boutique-resort-digital-marketing/',
    location: 'Wayanad, Kerala'
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
  },
  // Latest verified website projects synchronized from case studies
  {
    id: 'sidhah-edutech',
    name: 'Sidhah Edutech',
    tagline: 'Programme-first, placement-driven website for a Kochi hospital administration training institute, designed around student enrolment decisions.',
    industryLabel: 'Web Design & Development',
    category: 'web-design',
    categories: ['web-design'],
    image: '/portfolios/website/sidhah-edutech.webp',
    imageAlt: 'Teknoppy website project - Sidhah Edutech hospital administration training homepage',
    href: '/case-studies/sidhah-edutech-website-design-development/',
    location: 'Kochi, Kerala'
  },
  {
    id: 'aeden-fruits-international',
    name: 'Aeden Fruits International',
    tagline: 'Global trade-first website for an Indian fresh-produce exporter, structuring international buyer inquiries and transparent procurement credentials.',
    industryLabel: 'Web Design & Development',
    category: 'web-design',
    categories: ['web-design'],
    image: '/portfolios/website/aeden-fruits-international.webp',
    imageAlt: 'Teknoppy website project - Aeden Fruits International export homepage',
    href: '/case-studies/aeden-fruits-international-web-design-development/',
    location: 'Kochi, Kerala'
  },
  {
    id: 'hike-rv-caravans',
    name: 'Hike RV Caravans',
    tagline: 'Showroom-grade website for an Australian custom caravan manufacturer, detailing off-road chassis specs and dealer enquiry pathways.',
    industryLabel: 'Web Design & Development',
    category: 'web-design',
    categories: ['web-design'],
    image: '/portfolios/website/hike-rv-caravans.webp',
    imageAlt: 'Teknoppy website project - Hike RV Caravans off-road manufacturer homepage',
    href: '/case-studies/hike-rv-caravans-web-design-development/',
    location: 'Melbourne, Victoria, Australia'
  },
  {
    id: 'logistics-gurukul',
    name: 'Logistics Gurukul',
    tagline: 'Curriculum-first, industry-aligned training portal for a Kerala logistics and supply chain academy with verified port and cargo placements.',
    industryLabel: 'Web Design & Development',
    category: 'web-design',
    categories: ['web-design'],
    image: '/portfolios/website/logistics-gurukul.webp',
    imageAlt: 'Teknoppy website project - Logistics Gurukul training portal homepage',
    href: '/case-studies/logistics-gurukul-web-design-development/',
    location: 'Kochi, Kerala'
  },
  {
    id: 'parametx',
    name: 'Parametx',
    tagline: 'Track-first, career-outcome-driven website for a Kollam-based BIM training and internship center, built for architects, engineers, and career switchers.',
    industryLabel: 'Web Design & Development',
    category: 'web-design',
    categories: ['web-design'],
    image: '/portfolios/website/parametx.webp',
    imageAlt: 'Teknoppy website project - Parametx BIM academy and internship homepage',
    href: '/case-studies/parametx-web-design-development/',
    location: 'Chandanathope, Kollam, Kerala'
  },
  {
    id: 'uplift-global-solutions',
    name: 'Uplift Global Solutions',
    tagline: 'Service-first, credibility-driven website for a Kerala management consulting firm, structuring nine core services and a four-stage client engagement process.',
    industryLabel: 'Web Design & Development',
    category: 'web-design',
    categories: ['web-design'],
    image: '/portfolios/website/uplift-global-solutions.webp',
    imageAlt: 'Teknoppy website project - Uplift Global Solutions consulting homepage',
    href: '/case-studies/uplift-global-solutions-web-design-development/',
    location: 'Vettichira, Malappuram, Kerala'
  },
  {
    id: 'uscholar-international',
    name: 'U Scholar International',
    tagline: 'Destination-first, process-driven website for a Kerala-based overseas education consultancy guiding students across 20+ study abroad countries.',
    industryLabel: 'Web Design & Development',
    category: 'web-design',
    categories: ['web-design'],
    image: '/portfolios/website/u-scholar-international.webp',
    imageAlt: 'Teknoppy website project - U Scholar International education consultancy homepage',
    href: '/case-studies/uscholar-international-web-design-development/',
    location: 'Perinthalmanna, Malappuram, Kerala'
  }
];
