export interface CaseStudyItem {
  id: string;
  title: string;
  client: string;
  category: string;
  categories: string[];
  description: string;
  image: string;
  imageAlt: string;
  href: string;
  featured?: boolean;
  location?: string;
  tag?: string;
  highlightMetric?: string;
}

export interface FilterCategory {
  id: string;
  label: string;
  slug: string;
}

export const filterCategories: FilterCategory[] = [
  { id: 'all', label: 'All Projects', slug: 'all' },
  { id: 'wordpress', label: 'WordPress Development', slug: 'wordpress-development' },
  { id: 'uiux', label: 'UI/UX Design', slug: 'ui-ux-design' },
  { id: 'web-design', label: 'Web Design & Development', slug: 'web-design-development' },
  { id: 'web-app', label: 'Web Application', slug: 'web-application' },
  { id: 'ecommerce', label: 'E-commerce Development', slug: 'ecommerce-development' },
  { id: 'shopify', label: 'Shopify', slug: 'shopify' },
  { id: 'seo', label: 'SEO', slug: 'seo' },
  { id: 'digital-marketing', label: 'Digital Marketing', slug: 'digital-marketing' },
];

export const caseStudiesList: CaseStudyItem[] = [
  // 1. Lenaa
  {
    id: 'lenaa-personal-brand',
    title: 'Lenaa — Celebrity Personal Brand',
    client: 'Lenaa',
    category: 'Web Design & Development',
    categories: ['Web Design & Development'],
    description: 'Personal brand website for an acclaimed actor, author, and TEDx speaker, unifying cinema presence, published literature, and speaking tours.',
    image: '/case-studies/lenaalife.webp',
    imageAlt: 'Lenaa website homepage screenshot',
    href: '/lenaa-personal-brand-website-case-study/',
    location: 'Kerala, India',
    tag: 'Celebrity Personal Brand'
  },
  // 2. General Tech
  {
    id: 'general-tech-services-web-design',
    title: 'General Tech Services — Web Design & Development',
    client: 'General Tech Services',
    category: 'Web Design & Development',
    categories: ['Web Design & Development'],
    description: 'UAE ISO 17025 calibration lab website redesign, structuring complex instrumentation services into commercial conversion funnels.',
    image: '/case-studies/generaltech.webp',
    imageAlt: 'General Tech Services — Web Design & Development website homepage screenshot',
    href: '/case-studies/general-tech-services-web-design/',
    location: 'Dubai & Sharjah, UAE',
    tag: 'Calibration & Measurement'
  },
  // 3. Leema Engineering
  {
    id: 'leema-engineering-web-design-gcc',
    title: 'Leema Engineering — Web Design & Development',
    client: 'Leema Engineering',
    category: 'Web Design & Development',
    categories: ['Web Design & Development'],
    description: 'GCC industrial supplier website showcasing oil & gas piping, precision valves, and heavy manufacturing capabilities.',
    image: '/case-studies/leemaeng.webp',
    imageAlt: 'Leema Engineering — Web Design & Development website homepage screenshot',
    href: '/case-studies/leema-engineering-web-design-gcc/',
    location: 'GCC / UAE',
    tag: 'Industrial Engineering'
  },
  // 4. Abrus Krishna
  {
    id: 'abrus-krishna-finance-uiux',
    title: 'Abrus Krishna Finance — UI/UX Design',
    client: 'Abrus Krishna Finance',
    category: 'UI/UX Design',
    categories: ['UI/UX Design'],
    description: 'Trust-first financial interface for a regulated Kerala lending company, visually mapping 9 distinct loan products and transparent borrower steps.',
    image: '/case-studies/abruskrishna.webp',
    imageAlt: 'Abrus Krishna Finance — UI/UX Design website homepage screenshot',
    href: '/case-studies/abrus-krishna-finance-ui-ux-design/',
    location: 'Guruvayoor, Kerala',
    tag: 'Regulated Financial Services'
  },
  // 5. Varma Ayurveda
  {
    id: 'varma-ayurveda-uiux',
    title: 'Varma Ayurveda — UI/UX Design',
    client: 'Varma Ayurveda',
    category: 'UI/UX Design',
    categories: ['UI/UX Design'],
    description: 'Serene, accessible UI/UX interface connecting European wellness guests with authentic Kerala Ayurvedic therapies and treatment packages.',
    image: '/case-studies/varmaayurveda.webp',
    imageAlt: 'Varma Ayurveda — UI/UX Design website homepage screenshot',
    href: '/case-studies/varma-ayurveda-ui-ux-design/',
    location: 'Germany & Kerala',
    tag: 'Ayurvedic Retreat'
  },
  // 6. TriQare
  {
    id: 'triqare-web-app',
    title: 'TriQare — Web Application',
    client: 'TriQare',
    category: 'Web Application',
    categories: ['Web Application'],
    description: 'HealthTech emergency SOS web application coordinating real-time medical responder alerts and patient geolocation.',
    image: '/case-studies/triqare-desktop.webp',
    imageAlt: 'TriQare — Web Application website homepage screenshot',
    href: '/case-studies/triqare-web-application-design/',
    location: 'Kochi, Kerala',
    tag: 'HealthTech Emergency SOS'
  },
  // 7. Sun and Moon Korean
  {
    id: 'sun-and-moon-korean-ecommerce',
    title: 'Sun and Moon Korean — E-commerce Development',
    client: 'Sun and Moon Korean',
    category: 'E-commerce Development',
    categories: ['E-commerce Development'],
    description: 'Korean lifestyle and authentic artisanal food ecommerce store delivering pan-India retail experiences.',
    image: '/case-studies/sunandmoonkorean.webp',
    imageAlt: 'Sun and Moon Korean — E-commerce Development website homepage screenshot',
    href: '/case-studies/sun-and-moon-korean-ecommerce-website/',
    location: 'Mumbai, India',
    tag: 'Korean Retail E-commerce'
  },
  // 8. Koojo Custom Powder Coating
  {
    id: 'koojo-powder-coating-seo',
    title: 'Koojo Custom Powder Coating — SEO Services',
    client: 'Koojo Custom Powder Coating',
    category: 'SEO',
    categories: ['SEO'],
    description: 'Site architecture and topical SEO strategy for a Milton, Ontario industrial powder coating company, resolving keyword cannibalization across 48 pages.',
    image: '/case-studies/koojopowdercoating.webp',
    imageAlt: 'Koojo Custom Powder Coating — SEO Services website homepage screenshot',
    href: '/case-studies/koojo-custom-powder-coating-seo/',
    featured: true,
    location: 'Milton, Ontario, Canada',
    tag: 'Industrial Powder Coating SEO'
  },
  // 9. YatraBay
  {
    id: 'yatrabay-web-design',
    title: 'YatraBay — Web Design & Development',
    client: 'YatraBay',
    category: 'Web Design & Development',
    categories: ['Web Design & Development'],
    description: 'Destination-first, process-transparent website for a Trivandrum tour operator with clear regional package browsing, 0% hidden fees pricing, and 3–5 day visa timelines.',
    image: '/case-studies/yatrabay.webp',
    imageAlt: 'YatraBay — Web Design & Development website homepage screenshot',
    href: '/case-study/yatrabay/',
    featured: true,
    location: 'Trivandrum, Kerala',
    tag: 'Tour Operator & Travel Packages'
  },
  // Remaining existing projects preserving relative order
  {
    id: 'abrus-krishna-finance-wordpress',
    title: 'Abrus Krishna Finance — WordPress Development',
    client: 'Abrus Krishna Finance',
    category: 'WordPress Development',
    categories: ['WordPress Development'],
    description: 'WordPress site for a KML-registered Kerala lending company with dedicated search-intent architecture and compliance-first content.',
    image: '/case-studies/abruskrishna.webp',
    imageAlt: 'Abrus Krishna Finance — WordPress Development website homepage screenshot',
    href: '/case-studies/abrus-krishna-finance/',
    featured: true,
    location: 'Guruvayoor, Kerala',
    tag: 'Regulated Financial Services'
  },
  {
    id: 'varma-ayurveda-wordpress',
    title: 'Varma Ayurveda — WordPress Development',
    client: 'Varma Ayurveda',
    category: 'WordPress Development',
    categories: ['WordPress Development'],
    description: 'Multilingual WordPress site for a German Ayurvedic retreat, bridging European wellness search intent with Kerala heritage.',
    image: '/case-studies/varmaayurveda.webp',
    imageAlt: 'Varma Ayurveda — WordPress Development website homepage screenshot',
    href: '/case-studies/varma-ayurveda-wordpress-development/',
    location: 'Germany & Kerala',
    tag: 'Ayurvedic Retreat'
  },
  {
    id: 'cochin-suraksha-web-design',
    title: 'Cochin Suraksha — Web Design & Development',
    client: 'Cochin Suraksha',
    category: 'Web Design & Development',
    categories: ['Web Design & Development'],
    description: 'Corporate website for a premier Kerala fire & safety contractor expanding into Civil and MEP infrastructure.',
    image: '/case-studies/cochinsuraksha.webp',
    imageAlt: 'Cochin Suraksha — Web Design & Development website homepage screenshot',
    href: '/case-studies/cochin-suraksha-web-design-development/',
    location: 'Kochi, Kerala',
    tag: 'Fire Safety & MEP'
  },
  {
    id: 'mount-bell-global-studies-web-design',
    title: 'Mount Bell Global Studies — Web Design & Development',
    client: 'Mount Bell Global Studies',
    category: 'Web Design & Development',
    categories: ['Web Design & Development'],
    description: 'Overseas education consultancy website streamlining international university admissions and student visa funnels.',
    image: '/case-studies/mountbell.webp',
    imageAlt: 'Mount Bell Global Studies — Web Design & Development website homepage screenshot',
    href: '/case-studies/mount-bell-global-studies-web-design-development/',
    location: 'Kochi, Kerala',
    tag: 'Overseas Education'
  },
  {
    id: 'libra-group-uae-web-app',
    title: 'Libra Group UAE — Web Application',
    client: 'Libra Group UAE',
    category: 'Web Application',
    categories: ['Web Application'],
    description: 'Enterprise facilities management web application digitizing client work orders and operational dispatch across the Emirates.',
    image: '/case-studies/libragroupuae.webp',
    imageAlt: 'Libra Group UAE — Web Application website homepage screenshot',
    href: '/case-studies/libra-group-uae-web-application-design/',
    location: 'Dubai, UAE',
    tag: 'Facilities Management Portal'
  },
  {
    id: 'getskillonline-ecommerce',
    title: 'GetSkill Online — E-commerce Development',
    client: 'GetSkill Online',
    category: 'E-commerce Development',
    categories: ['E-commerce Development'],
    description: 'UK certification training ecommerce platform featuring frictionless course enrollment and digital payment gateways.',
    image: '/case-studies/getskillonline.webp',
    imageAlt: 'GetSkill Online — E-commerce Development website homepage screenshot',
    href: '/case-studies/getskillonline-ecommerce-website-development/',
    location: 'United Kingdom',
    tag: 'Course Enrollment Platform'
  },
  {
    id: 'myplantstore-ecommerce',
    title: 'My PlantStore — E-commerce Development',
    client: 'My PlantStore',
    category: 'E-commerce Development',
    categories: ['E-commerce Development'],
    description: 'Dubai online botanical nursery ecommerce store engineered for botanical delivery, plant care guides, and instant checkout.',
    image: '/case-studies/myplantstore.webp',
    imageAlt: 'My PlantStore — E-commerce Development website homepage screenshot',
    href: '/case-studies/myplantstore-ecommerce-website-development/',
    location: 'Dubai, UAE',
    tag: 'Botanical Nursery Store'
  },
  {
    id: 'nuelments-shopify',
    title: 'Nuelments — Shopify',
    client: 'Nuelments',
    category: 'Shopify',
    categories: ['Shopify'],
    description: 'High-conversion Shopify store for a D2C hair care brand, optimized for mobile checkout speed and ingredient storytelling.',
    image: '/case-studies/nuelments.webp',
    imageAlt: 'Nuelments — Shopify website homepage screenshot',
    href: '/case-studies/nuelments-shopify-ecommerce/',
    location: 'India',
    tag: 'D2C Hair Care'
  },
  {
    id: 'modestsisters-shopify',
    title: 'Modestsisters — Shopify',
    client: 'Modestsisters',
    category: 'Shopify',
    categories: ['Shopify'],
    description: 'Luxury Shopify fashion storefront for a GCC apparel brand with multi-currency payment and regional logistics.',
    image: '/case-studies/modestsisters.webp',
    imageAlt: 'Modestsisters — Shopify website homepage screenshot',
    href: '/case-studies/modestsisters-shopify-ecommerce/',
    location: 'UAE & GCC',
    tag: 'Luxury Fashion Store'
  },
  {
    id: 'apolo-mattress-shopify',
    title: 'Apolo Mattress — Shopify',
    client: 'Apolo Mattress',
    category: 'Shopify',
    categories: ['Shopify'],
    description: 'Shopify D2C ecommerce store for a Kerala mattress brand with custom mattress dimension calculators and doorstep delivery.',
    image: '/case-studies/apolomattress-desktop.webp',
    imageAlt: 'Apolo Mattress — Shopify website homepage screenshot',
    href: '/case-studies/apolo-mattress-shopify-ecommerce/',
    location: 'Kerala, India',
    tag: 'Custom Dimension Mattress'
  },
  {
    id: 'kerala-dayz-seo',
    title: 'Kerala Dayz — SEO',
    client: 'Kerala Dayz',
    category: 'SEO',
    categories: ['SEO'],
    description: 'Tour operator website and organic SEO architecture capturing high-intent holiday tourism searches and direct inquiries.',
    image: '/case-studies/keraladayz.webp',
    imageAlt: 'Kerala Dayz — SEO website homepage screenshot',
    href: '/case-studies/kerala-dayz-seo-services/',
    location: 'Kochi, Kerala',
    tag: 'Tourism Search Visibility'
  },
  {
    id: 'general-tech-services-seo',
    title: 'General Tech Services — SEO Services',
    client: 'General Tech Services',
    category: 'SEO',
    categories: ['SEO'],
    description: 'B2B SEO strategy for a UAE calibration lab, securing Page 1 rankings for 30+ instrumentation search terms across the Emirates.',
    image: '/case-studies/generaltech.webp',
    imageAlt: 'General Tech Services — SEO Services website homepage screenshot',
    href: '/case-studies/general-tech-services-seo-services/',
    location: 'Dubai & Sharjah, UAE',
    tag: 'B2B Technical Calibration'
  },
  {
    id: 'creative-web-design-qatar-seo',
    title: 'Creative Web Design Qatar — SEO',
    client: 'Creative Web Design Qatar',
    category: 'SEO',
    categories: ['SEO'],
    description: 'GCC localized search strategy establishing market presence and inbound qualification across competitive regional services.',
    image: '/case-studies/webdesignqa.webp',
    imageAlt: 'Creative Web Design Qatar — SEO website homepage screenshot',
    href: '/case-studies/creative-web-design-qatar-seo-content/',
    location: 'Doha, Qatar',
    tag: 'GCC Agency Search'
  },
  {
    id: 'direction-north-marketing',
    title: 'Direction North — Digital Marketing',
    client: 'Direction North',
    category: 'Digital Marketing',
    categories: ['Digital Marketing'],
    description: 'Holistic digital acquisition campaigns combining performance marketing, conversion tracking, and multi-channel audience targeting.',
    image: '/case-studies/directionnorth.webp',
    imageAlt: 'Direction North — Digital Marketing website homepage screenshot',
    href: '/case-studies/direction-north-digital-marketing/',
    location: 'Dubai, UAE',
    tag: 'Performance Acquisition'
  },
  {
    id: 'olives-boutique-resort-web-design',
    title: 'Olives Boutique Resort — Web Design & Development',
    client: 'Olives Boutique Resort',
    category: 'Web Design & Development',
    categories: ['Web Design & Development'],
    description: 'Eco-luxury plantation resort website in Wayanad, designed to drive direct booking inquiries and guest acquisition.',
    image: '/case-studies/olivesresort.webp',
    imageAlt: 'Olives Boutique Resort — Web Design & Development website homepage screenshot',
    href: '/case-studies/olives-boutique-resort-digital-marketing/',
    location: 'Wayanad, Kerala',
    tag: 'Hospitality Web Design'
  },
  {
    id: 'sidhah-edutech-web-design',
    title: 'Sidhah Edutech — Web Design & Development',
    client: 'Sidhah Edutech',
    category: 'Web Design & Development',
    categories: ['Web Design & Development'],
    description: 'Programme-first, placement-driven website for a Kochi hospital administration training institute, designed around student enrolment decisions.',
    image: '/case-studies/sidhah-edutech.webp',
    imageAlt: 'Sidhah Edutech — Website Design and Development website homepage hero',
    href: '/case-studies/sidhah-edutech-website-design-development/',
    location: 'Kochi, Kerala',
    tag: 'Hospital Administration Training'
  },
  {
    id: 'aeden-fruits-international-web-design',
    title: 'Aeden Fruits International',
    client: 'Aeden Fruits International',
    category: 'Web Design & Development',
    categories: ['Web Design & Development'],
    description: 'Global trade-first website for an Indian fresh-produce exporter, structuring international buyer inquiries and transparent procurement credentials.',
    image: '/case-studies/aeden-fruits-international.webp',
    imageAlt: 'Aeden Fruits International — Website Design and Development website homepage hero',
    href: '/case-studies/aeden-fruits-international-web-design-development/',
    location: 'Kochi, Kerala',
    tag: 'Fresh Produce Export'
  },
  {
    id: 'hike-rv-caravans-web-design',
    title: 'Hike RV Caravans',
    client: 'Hike RV Caravans',
    category: 'Web Design & Development',
    categories: ['Web Design & Development'],
    description: 'Showroom-grade website for an Australian custom caravan manufacturer, detailing off-road chassis specs and dealer enquiry pathways.',
    image: '/case-studies/hike-rv-caravans.webp',
    imageAlt: 'Hike RV Caravans — Website Design and Development website homepage hero',
    href: '/case-studies/hike-rv-caravans-web-design-development/',
    location: 'Melbourne, Victoria, Australia',
    tag: 'Off-Road Caravan Manufacturing'
  },
  {
    id: 'logistics-gurukul-web-design',
    title: 'Logistics Gurukul',
    client: 'Logistics Gurukul',
    category: 'Web Design & Development',
    categories: ['Web Design & Development'],
    description: 'Curriculum-first, industry-aligned training portal for a Kerala logistics and supply chain academy with verified port and cargo placements.',
    image: '/case-studies/logistics-gurukul.webp',
    imageAlt: 'Logistics Gurukul — Website Design and Development website homepage hero',
    href: '/case-studies/logistics-gurukul-web-design-development/',
    location: 'Kochi, Kerala',
    tag: 'Logistics & Supply Chain Academy'
  },
  {
    id: 'parametx-web-design',
    title: 'Parametx',
    client: 'Parametx',
    category: 'Web Design & Development',
    categories: ['Web Design & Development'],
    description: 'Track-first, career-outcome-driven website for a Kollam-based BIM training and internship center, built for architects, engineers, and career switchers.',
    image: '/case-studies/parametx.webp',
    imageAlt: 'Parametx — Website Design and Development website homepage hero',
    href: '/case-studies/parametx-web-design-development/',
    location: 'Chandanathope, Kollam, Kerala',
    tag: 'BIM Training & Internship'
  },
  {
    id: 'uplift-global-solutions-web-design',
    title: 'Uplift Global Solutions',
    client: 'Uplift Global Solutions',
    category: 'Web Design & Development',
    categories: ['Web Design & Development'],
    description: 'Service-first, credibility-driven website for a Kerala management consulting firm, structuring nine core services and a four-stage client engagement process.',
    image: '/case-studies/uplift-global-solutions.webp',
    imageAlt: 'Uplift Global Solutions — Website Design and Development website homepage hero',
    href: '/case-studies/uplift-global-solutions-web-design-development/',
    location: 'Vettichira, Malappuram, Kerala',
    tag: 'Management & Business Consulting'
  },
  {
    id: 'uscholar-international-web-design',
    title: 'U Scholar International',
    client: 'U Scholar International',
    category: 'Web Design & Development',
    categories: ['Web Design & Development'],
    description: 'Destination-first, process-driven website for a Kerala-based overseas education consultancy guiding students across 20+ study abroad countries.',
    image: '/case-studies/u-scholar-international.webp',
    imageAlt: 'U Scholar International — Website Design and Development website homepage hero',
    href: '/case-studies/uscholar-international-web-design-development/',
    location: 'Perinthalmanna, Malappuram, Kerala',
    tag: 'Overseas Education Consultancy'
  }
];

export const caseStudyFAQs = [
  {
    q: "Are these results typical for every project?",
    a: "Results vary by industry, starting point, and competition. These summaries show real outcomes from specific projects, not a guaranteed baseline for every business."
  },
  {
    q: "Can I see the full details behind a result?",
    a: "Reach out through Contact and we can walk through the specifics relevant to your industry and goals."
  },
  {
    q: "Does Teknoppy work on projects outside Kerala?",
    a: "Yes. Alongside Kerala clients, the case studies above include work delivered for businesses in Qatar, the UAE, Germany, and the United Kingdom."
  }
];
