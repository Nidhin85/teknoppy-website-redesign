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
    tag: 'Ayurvedic Wellness Retreat'
  },
  {
    id: 'abrus-krishna-finance-uiux',
    title: 'Abrus Krishna Finance — UI/UX Design',
    client: 'Abrus Krishna Finance',
    category: 'UI/UX Design',
    categories: ['UI/UX Design'],
    description: 'UI/UX design for a KML-registered Kerala lending company, establishing visual trust hierarchy and a clear 15–30 min borrower journey.',
    image: '/case-studies/abruskrishna.webp',
    imageAlt: 'Abrus Krishna Finance — UI/UX Design website homepage screenshot',
    href: '/case-studies/abrus-krishna-finance-ui-ux-design/',
    location: 'Guruvayoor, Kerala',
    tag: 'Fintech Trust Interface'
  },
  {
    id: 'varma-ayurveda-uiux',
    title: 'Varma Ayurveda — UI/UX Design',
    client: 'Varma Ayurveda',
    category: 'UI/UX Design',
    categories: ['UI/UX Design'],
    description: 'UI/UX design case study for a multilingual wellness retreat, crafting serene digital interactions for international wellness seekers.',
    image: '/case-studies/varmaayurveda.webp',
    imageAlt: 'Varma Ayurveda — UI/UX Design website homepage screenshot',
    href: '/case-studies/varma-ayurveda-ui-ux-design/',
    location: 'Germany & Kerala',
    tag: 'Healthcare & Wellness UI'
  },
  {
    id: 'general-tech-services-web-design',
    title: 'General Tech Services — Web Design',
    client: 'General Tech Services',
    category: 'Web Design & Development',
    categories: ['Web Design & Development'],
    description: 'UAE ISO 17025 calibration lab website redesign, organizing complex technical instrumentation services into clear commercial funnels.',
    image: '/case-studies/generaltech.webp',
    imageAlt: 'General Tech Services — Web Design website homepage screenshot',
    href: '/case-studies/general-tech-services-web-design/',
    featured: true,
    location: 'Dubai & Sharjah, UAE',
    tag: 'Industrial & Calibration'
  },
  {
    id: 'leema-engineering-web-design-gcc',
    title: 'Leema Engineering',
    client: 'Leema Engineering',
    category: 'Web Design & Development',
    categories: ['Web Design & Development'],
    description: 'Web design case study for a GCC industrial supplier, showcasing oil & gas piping, valves, and precision heavy engineering capabilities.',
    image: '/case-studies/leemaeng.webp',
    imageAlt: 'Leema Engineering website homepage screenshot',
    href: '/case-studies/leema-engineering-web-design-gcc/',
    location: 'GCC / UAE',
    tag: 'Industrial Engineering'
  },
  {
    id: 'cochin-suraksha-web-design',
    title: 'Cochin Suraksha',
    client: 'Cochin Suraksha',
    category: 'Web Design & Development',
    categories: ['Web Design & Development'],
    description: 'Kochi fire & safety company website evolving into Civil & MEP engineering contracting across industrial and residential developments.',
    image: '/case-studies/cochinsuraksha.webp',
    imageAlt: 'Cochin Suraksha website homepage screenshot',
    href: '/case-studies/cochin-suraksha-web-design-development/',
    location: 'Kochi, Kerala',
    tag: 'Civil, Fire & MEP'
  },
  {
    id: 'mount-bell-global-studies-web-design',
    title: 'Mount Bell Global Studies',
    client: 'Mount Bell Global Studies',
    category: 'Web Design & Development',
    categories: ['Web Design & Development'],
    description: 'Web design for a Kerala overseas education consultancy, streamlining country guides, university admissions, and visa consultation paths.',
    image: '/case-studies/mountbell.webp',
    imageAlt: 'Mount Bell Global Studies website homepage screenshot',
    href: '/case-studies/mount-bell-global-studies-web-design-development/',
    location: 'Kochi, Kerala',
    tag: 'Global Study Abroad'
  },
  {
    id: 'lenaa-personal-brand',
    title: 'Lenaa',
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
  {
    id: 'libra-group-uae-web-app',
    title: 'Libra Group UAE',
    client: 'Libra Group UAE',
    category: 'Web Application',
    categories: ['Web Application'],
    description: 'Web application case study for a Dubai facilities management group, digitizing client work orders and operational dispatch across the Emirates.',
    image: '/case-studies/libragroupuae.webp',
    imageAlt: 'Libra Group UAE website homepage screenshot',
    href: '/case-studies/libra-group-uae-web-application-design/',
    location: 'Dubai, UAE',
    tag: 'Facilities Web Portal'
  },
  {
    id: 'triqare-web-app',
    title: 'TriQare',
    client: 'TriQare',
    category: 'Web Application',
    categories: ['Web Application'],
    description: 'Web application case study for a healthtech emergency SOS platform, coordinating real-time medical responder alerts and patient location data.',
    image: '/case-studies/triqare.webp',
    imageAlt: 'TriQare website homepage screenshot',
    href: '/case-studies/triqare-web-application-design/',
    location: 'Kochi, Kerala',
    tag: 'HealthTech Emergency Platform'
  },
  {
    id: 'getskillonline-ecommerce',
    title: 'GetSkill Online',
    client: 'GetSkill Online',
    category: 'E-commerce Development',
    categories: ['E-commerce Development'],
    description: 'UK ecommerce certification training platform, featuring seamless course enrollment, payment gateway checkout, and digital learner onboarding.',
    image: '/case-studies/getskillonline.webp',
    imageAlt: 'GetSkill Online website homepage screenshot',
    href: '/case-studies/getskillonline-ecommerce-website-development/',
    location: 'United Kingdom',
    tag: 'EdTech Course Marketplace'
  },
  {
    id: 'myplantstore-ecommerce',
    title: 'My PlantStore',
    client: 'My PlantStore',
    category: 'E-commerce Development',
    categories: ['E-commerce Development'],
    description: 'Dubai ecommerce plant nursery website, engineered for fragile botanical shipping, climate-specific plant care guides, and instant delivery.',
    image: '/case-studies/myplantstore.webp',
    imageAlt: 'My PlantStore website homepage screenshot',
    href: '/case-studies/myplantstore-ecommerce-website-development/',
    location: 'Dubai, UAE',
    tag: 'Botanical Ecommerce'
  },
  {
    id: 'sun-and-moon-korean-ecommerce',
    title: 'Sun and Moon Korean',
    client: 'Sun and Moon Korean',
    category: 'E-commerce Development',
    categories: ['E-commerce Development'],
    description: 'Mumbai kimchi and K-fashion ecommerce brand, blending authentic Korean lifestyle culture with seamless pan-India retail checkout.',
    image: '/case-studies/sunandmoonkorean.webp',
    imageAlt: 'Sun and Moon Korean website homepage screenshot',
    href: '/case-studies/sun-and-moon-korean-ecommerce-website/',
    location: 'Mumbai, India',
    tag: 'Korean D2C Retail'
  },
  {
    id: 'nuelments-shopify',
    title: 'Nuelments',
    client: 'Nuelments',
    category: 'Shopify',
    categories: ['Shopify'],
    description: 'Shopify store for an Indian D2C hair care brand, optimized for fast mobile checkout, ingredient storytelling, and high repeat order value.',
    image: '/case-studies/nuelments.webp',
    imageAlt: 'Nuelments website homepage screenshot',
    href: '/case-studies/nuelments-shopify-ecommerce/',
    location: 'India',
    tag: 'D2C Beauty & Wellness'
  },
  {
    id: 'modestsisters-shopify',
    title: 'Modestsisters',
    client: 'Modestsisters',
    category: 'Shopify',
    categories: ['Shopify'],
    description: 'Shopify store for a UAE modest fashion brand, catering to GCC luxury apparel shoppers with multi-currency payment and regional logistics.',
    image: '/case-studies/modestsisters.webp',
    imageAlt: 'Modestsisters website homepage screenshot',
    href: '/case-studies/modestsisters-shopify-ecommerce/',
    location: 'UAE & GCC',
    tag: 'Modest Luxury Fashion'
  },
  {
    id: 'apolo-mattress-shopify',
    title: 'Apolo Mattress',
    client: 'Apolo Mattress',
    category: 'Shopify',
    categories: ['Shopify'],
    description: 'Shopify store for a Kerala mattress manufacturer, showcasing sleep ergonomics, custom mattress dimension calculators, and home delivery.',
    image: '/case-studies/apolomattress.webp',
    imageAlt: 'Apolo Mattress website homepage screenshot',
    href: '/case-studies/apolo-mattress-shopify-ecommerce/',
    location: 'Kerala, India',
    tag: 'Direct-to-Consumer Bedding'
  },
  {
    id: 'kerala-dayz-seo',
    title: 'Kerala Dayz',
    client: 'Kerala Dayz',
    category: 'SEO',
    categories: ['SEO'],
    description: 'SEO strategy and GBP cleanup for a Kochi taxi and tour operator, capturing high-intent holiday tourism searches and direct bookings.',
    image: '/case-studies/keraladayz.webp',
    imageAlt: 'Kerala Dayz website homepage screenshot',
    href: '/case-studies/kerala-dayz-seo-services/',
    location: 'Kochi, Kerala',
    tag: 'Local Tourism SEO'
  },
  {
    id: 'general-tech-services-seo',
    title: 'General Tech Services — SEO Services',
    client: 'General Tech Services',
    category: 'SEO',
    categories: ['SEO'],
    description: 'An SEO strategy built for 15 calibration disciplines across Dubai and Abu Dhabi, dominating high-value B2B testing queries.',
    image: '/case-studies/generaltech.webp',
    imageAlt: 'General Tech Services — SEO Services website homepage screenshot',
    href: '/case-studies/general-tech-services-seo-services/',
    location: 'UAE & GCC',
    tag: 'Technical B2B SEO'
  },
  {
    id: 'creative-web-design-qatar-seo',
    title: 'Creative Web Design Qatar',
    client: 'Creative Web Design Qatar',
    category: 'SEO',
    categories: ['SEO'],
    description: 'Ongoing SEO and content architecture for a GCC web design agency, capturing commercial agency terms across Doha and Qatar.',
    image: '/case-studies/webdesignqa.webp',
    imageAlt: 'Creative Web Design Qatar website homepage screenshot',
    href: '/case-studies/creative-web-design-qatar-seo-content/',
    location: 'Doha, Qatar',
    tag: 'GCC Agency SEO'
  },
  {
    id: 'direction-north-marketing',
    title: 'Direction North',
    client: 'Direction North',
    category: 'Digital Marketing',
    categories: ['Digital Marketing'],
    description: 'Digital marketing and social-first brand campaigns for a retail display and architectural visual merchandising manufacturer.',
    image: '/client logos/direction north.png',
    imageAlt: 'Direction North retail display digital marketing',
    href: '/case-studies/direction-north-digital-marketing/',
    location: 'Kerala, India',
    tag: 'Social-First Merchandising'
  },
  {
    id: 'olives-boutique-resort-marketing',
    title: 'Olives Boutique Resort',
    client: 'Olives Boutique Resort',
    category: 'Digital Marketing',
    categories: ['Digital Marketing'],
    description: 'Digital marketing, social-first engagement, and guest acquisition campaigns for an eco-luxury plantation resort in Wayanad.',
    image: '/case-studies/olivesresort.webp',
    imageAlt: 'Olives Boutique Resort website homepage screenshot',
    href: '/case-studies/olives-boutique-resort-digital-marketing/',
    location: 'Wayanad, Kerala',
    tag: 'Luxury Hospitality Marketing'
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
