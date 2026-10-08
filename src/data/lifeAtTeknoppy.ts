/**
 * Life @ Teknoppy — Dynamic Content & Data Architecture
 * 
 * Adding a new photo, video, client moment, or milestone only requires
 * appending a new item to these arrays. The page layout, filters, lightbox,
 * and animations handle the presentation automatically.
 */

export interface LifeEntry {
  id: string;
  date: string;
  formattedDate: string;
  title: string;
  category: 'team' | 'projects' | 'clients' | 'office' | 'events' | 'culture' | 'behind-the-scenes' | 'achievements';
  type: 'image' | 'video';
  mediaUrl: string;
  thumbnailUrl?: string;
  aspect: 'portrait' | 'landscape' | 'square' | 'wide';
  description: string;
  person?: string;
  client?: string;
  project?: string;
  featured?: boolean;
  isNew?: boolean;
  tags?: string[];
  youtubeId?: string;
}

export interface DayTimelineItem {
  id: string;
  time: string;
  period: 'AM' | 'PM';
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tag: string;
  location: string;
}

export interface ProjectWorkflowStage {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  image: string;
}

export interface ActiveBuild {
  id: string;
  client: string;
  projectType: string;
  stage: string;
  progressPercent: number;
  lead: string;
  badge: string;
  accent: string;
}

export interface TeamMemberLife {
  id: string;
  name: string;
  role: string;
  department: string;
  photo: string;
  photoFallback?: string;
  bio: string;
  specialty: string;
}

export interface ClientMoment {
  id: string;
  clientName: string;
  organization: string;
  role: string;
  image: string;
  location: string;
  highlight: string;
  projectRef: string;
  youtubeId?: string;
}

export interface MilestoneItem {
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
  sublabel: string;
  iconName: string;
}

/* =========================================================================
   1. THE TEKNOPPY WALL & JOURNAL ENTRIES
   ========================================================================= */
export const lifeEntries: LifeEntry[] = [
  {
    id: 'wall-01',
    date: '2026-10-01',
    formattedDate: 'OCT 2026',
    title: 'Client Review & Brand Strategy Catchup with Evosyz',
    category: 'clients',
    type: 'video',
    mediaUrl: '/testimonials/vivek-menon.webp',
    thumbnailUrl: '/testimonials/vivek-menon.webp',
    youtubeId: 'E7HfgGOHjYE',
    aspect: 'wide',
    description: 'Vivek Menon, CTO of Evosyz, sharing key takeaways on high-performance fintech UI architecture and seamless brand transformation.',
    person: 'Vivek Menon',
    client: 'Evosyz, Kochi',
    project: 'Fintech Portal',
    featured: true,
    isNew: true,
    tags: ['Fintech', 'Client Story', 'Video Review']
  },
  {
    id: 'wall-02',
    date: '2026-09-28',
    formattedDate: 'SEP 2026',
    title: 'Direction North — Global Logistics Portal Launch',
    category: 'projects',
    type: 'image',
    mediaUrl: '/portfolios/website/direction-north.webp',
    aspect: 'landscape',
    description: 'Shipped a multi-region shipping and cargo tracking digital portal with streamlined quotation funnels and modern typography.',
    person: 'Nandana S Madhu & Sanal Edison',
    project: 'Direction North',
    featured: true,
    isNew: true,
    tags: ['Live Launch', 'Next-Gen Web', 'Cargo']
  },
  {
    id: 'wall-03',
    date: '2026-09-20',
    formattedDate: 'SEP 2026',
    title: 'Brand Vision & Creative Alignment with Lenaa',
    category: 'clients',
    type: 'video',
    mediaUrl: '/testimonials/lenaa.webp',
    thumbnailUrl: '/testimonials/lenaa.webp',
    youtubeId: 'T6Vzf4ZhCYk',
    aspect: 'portrait',
    description: 'Lenaa (Actor, Author & TEDx Speaker) collaborating with the Teknoppy design squad on personal brand storytelling and book launch aesthetics.',
    person: 'Lenaa',
    client: 'Lenaa Personal Brand',
    featured: true,
    isNew: false,
    tags: ['Personal Brand', 'Actor', 'Creative Direction']
  },
  {
    id: 'wall-04',
    date: '2026-09-12',
    formattedDate: 'SEP 2026',
    title: 'Aeden Fruits International — Responsive Product Showcase',
    category: 'projects',
    type: 'image',
    mediaUrl: '/portfolios/website/aeden-fruits-international.webp',
    aspect: 'landscape',
    description: 'Crafted rich, vibrant digital packaging and responsive product navigation for one of South India’s leading fresh produce exporters.',
    project: 'Aeden Fruits',
    tags: ['Export', 'Brand UI', 'Web Design']
  },
  {
    id: 'wall-05',
    date: '2026-09-02',
    formattedDate: 'SEP 2026',
    title: 'Greens Ayurveda Global Wellness Platform Overhaul',
    category: 'clients',
    type: 'image',
    mediaUrl: '/testimonials/dr-asghar.webp',
    aspect: 'square',
    description: 'Dr. Asghar reviewing direct booking engagement metrics after the international treatment enquiry redesign.',
    person: 'Dr. Asghar',
    client: 'Greens Ayurveda, Calicut',
    project: 'Ayurveda Portal',
    tags: ['Healthcare', 'International Clients', 'Conversion']
  },
  {
    id: 'wall-06',
    date: '2026-08-22',
    formattedDate: 'AUG 2026',
    title: 'Engineering Rigor: General Tech Services Digital Platform',
    category: 'projects',
    type: 'image',
    mediaUrl: '/portfolios/website/general-tech-services.webp',
    aspect: 'landscape',
    description: 'Custom industrial equipment catalog with sub-second page transitions, dynamic specs filtration, and enquiry routing.',
    project: 'General Tech Services',
    tags: ['Industrial', 'GCC Ready', 'Fast Load']
  },
  {
    id: 'wall-07',
    date: '2026-08-14',
    formattedDate: 'AUG 2026',
    title: 'SEO Audit Sprint & Core Web Vitals Mastery',
    category: 'behind-the-scenes',
    type: 'image',
    mediaUrl: '/whoweare.webp',
    aspect: 'wide',
    description: 'Inside the daily review: Niya K K and Neha P deep-diving into on-page schema trees, INP responsiveness scores, and local search signals.',
    person: 'Niya K K & Neha P',
    tags: ['SEO Sprint', 'Lighthouse 100', 'Tech Deepdive']
  },
  {
    id: 'wall-08',
    date: '2026-08-05',
    formattedDate: 'AUG 2026',
    title: 'Hospitality Booking Optimization for Olives Resort Wayanad',
    category: 'achievements',
    type: 'image',
    mediaUrl: '/testimonials/biju-thomas.webp',
    aspect: 'square',
    description: 'Biju Thomas celebrating #1 Google ranking for direct resort bookings and reduced OTA commission dependency.',
    person: 'Biju Thomas',
    client: 'Olives Resort',
    tags: ['Milestone', 'Direct Bookings', 'SEO Win']
  },
  {
    id: 'wall-09',
    date: '2026-07-29',
    formattedDate: 'JUL 2026',
    title: 'Cochin Suraksha — Modern Safety Systems Architecture',
    category: 'projects',
    type: 'image',
    mediaUrl: '/portfolios/website/cochin-suraksha.webp',
    aspect: 'landscape',
    description: 'High-trust, security-focused web experience designed for instant lead generation and B2B corporate contracting.',
    project: 'Cochin Suraksha',
    tags: ['B2B', 'Kochi Local', 'Lead Generation']
  },
  {
    id: 'wall-10',
    date: '2026-07-18',
    formattedDate: 'JUL 2026',
    title: 'Hike RV Caravans — Adventure Tourism Brand Portal',
    category: 'projects',
    type: 'image',
    mediaUrl: '/portfolios/website/hike-rv-caravans.webp',
    aspect: 'landscape',
    description: 'Visual immersive journey highlighting luxury overland vehicles, detailed floor plans, and interactive fleet booking.',
    project: 'Hike RV Caravans',
    tags: ['Tourism', 'Custom Fleet', 'Visual UI']
  },
  {
    id: 'wall-11',
    date: '2026-07-06',
    formattedDate: 'JUL 2026',
    title: 'Design Architecture Jam & Wireframing Workshop',
    category: 'team',
    type: 'image',
    mediaUrl: '/tekenoppyadvantage.webp',
    aspect: 'wide',
    description: 'Interactive wireframing sessions turning complex business needs into intuitive micro-interactions and tactile UI components.',
    person: 'Sanal Edison & Nandana',
    tags: ['Workshop', 'Team Sync', 'UI Blueprint']
  },
  {
    id: 'wall-12',
    date: '2026-06-25',
    formattedDate: 'JUN 2026',
    title: 'Abrus Krishna Finance — FinTech Corporate Presence',
    category: 'projects',
    type: 'image',
    mediaUrl: '/portfolios/website/abrus-krishna-finance.webp',
    aspect: 'landscape',
    description: 'Enterprise corporate portal built to reinforce financial transparency, investor trust, and regional compliance.',
    project: 'Abrus Krishna Finance',
    tags: ['Finance', 'Corporate', 'Compliance']
  }
];

/* =========================================================================
   2. A DAY AT TEKNOPPY (STICKY HORIZONTAL / SWIPE GALLERY)
   ========================================================================= */
export const dailyTimeline: DayTimelineItem[] = [
  {
    id: 'day-1',
    time: '09:15',
    period: 'AM',
    title: 'Morning Stand-up & Daily Sprint Sync',
    subtitle: 'Aligning design, code, and growth priorities',
    description: 'The Kochi team kicks off the morning reviewing sprint pipelines, deployment checklists, and active client questions across Kerala and GCC timezones.',
    image: '/whoweare.webp',
    tag: 'Culture & Sync',
    location: 'Main Studio'
  },
  {
    id: 'day-2',
    time: '11:30',
    period: 'AM',
    title: 'UI/UX & Component Architecture Review',
    subtitle: 'Pixel precision meets conversion psychology',
    description: 'Sanal and the design squad critique high-fidelity Figma components, testing typographic contrast, CTA button magnetic physics, and mobile touch targets.',
    image: '/whatwedo.webp',
    tag: 'Design Studio',
    location: 'Design Lab'
  },
  {
    id: 'day-3',
    time: '01:15',
    period: 'PM',
    title: 'Chai, Lunch & Unfiltered Team Banter',
    subtitle: 'Recharging over Kerala meals & laughs',
    description: 'The team unplugs over hot tea, discussing fresh design trends, weekend movie picks, tech memes, and creative inspirations from across the web.',
    image: '/tekenoppyadvantage.webp',
    tag: 'Moments Between',
    location: 'Studio Pantry'
  },
  {
    id: 'day-4',
    time: '03:30',
    period: 'PM',
    title: 'Client Strategy & Sprint Catchup',
    subtitle: 'Transparent demos and milestone showcases',
    description: 'Vijayakala leads live walkthroughs with founders, presenting staging demos, reviewing content hierarchies, and aligning launch schedules.',
    image: '/testimonials/vivek-menon-portrait.webp',
    tag: 'Client Relations',
    location: 'Conference Hub'
  },
  {
    id: 'day-5',
    time: '06:00',
    period: 'PM',
    title: 'QA Testing, Lighthouse 100 & Deploy',
    subtitle: 'Shipping code with zero regressions',
    description: 'Cross-browser validation on iOS, Android, and desktop. Niya and Nandana verify schema structures and Core Web Vitals before staging turns to production.',
    image: '/herodarkwebdesign.webp',
    tag: 'Engineering QA',
    location: 'Dev Pods'
  }
];

/* =========================================================================
   3. VERIFIED TEAM MEMBERS (NEWSPAPER FOLDING CARDS)
   ========================================================================= */
export const teamMembers: TeamMemberLife[] = [
  {
    id: 'team-sanal',
    name: 'Sanal Edison',
    role: 'Founder & Lead Digital Strategist',
    department: 'Leadership & Strategy',
    photo: '/team/sanal-edison.webp',
    photoFallback: '/sanal.png',
    bio: 'Guided 120+ web engineering and design projects across Kerala since founding Teknoppy in 2018. Specialising in conversion architecture, SEO foundations, and clean modern aesthetics.',
    specialty: 'Strategy, Architecture & Creative Direction'
  },
  {
    id: 'team-vijayakala',
    name: 'Vijayakala',
    role: 'Business Development & Client Relations',
    department: 'Client Engagement',
    photo: '/team/vijayakala.webp',
    bio: 'The primary bridge between client visions and the delivery pod. Handles scope clarity, transparent timelines, and lasting client partnerships across Kerala and the GCC.',
    specialty: 'Account Strategy & Client Success'
  },
  {
    id: 'team-niya',
    name: 'Niya K K',
    role: 'SEO Lead',
    department: 'Search Engine Strategy',
    photo: '/team/niya-kk.webp',
    bio: 'Directs Teknoppy’s search engine delivery wing, setting technical audit frameworks, semantic keyword mapping, and rigorous on-page standards before any website ships.',
    specialty: 'Technical SEO & Search Architecture'
  },
  {
    id: 'team-neha',
    name: 'Neha P',
    role: 'SEO Analyst',
    department: 'Search Analytics',
    photo: '/team/neha-p.webp',
    bio: 'Drives deep-dive competitor intelligence, keyword difficulty assessments, SERP movement diagnostics, and data-backed monthly growth reports for client stakeholders.',
    specialty: 'Competitor Intelligence & Ranking Audits'
  },
  {
    id: 'team-nandana',
    name: 'Nandana S Madhu',
    role: 'Web Developer',
    department: 'Frontend & CMS Engineering',
    photo: '/team/nandana.webp',
    bio: 'Translates high-fidelity UI prototypes into clean, sub-second web applications. Masters responsive CSS, custom WordPress systems, and modular frontend architectures.',
    specialty: 'Modern Frontend & WordPress Systems'
  },
  {
    id: 'team-adithya',
    name: 'Adithya K',
    role: 'Social Media Content Strategist',
    department: 'Content & Brand Voice',
    photo: '/team/adithya-k.webp',
    bio: 'Curates brand calendars, high-impact social copy, and visual storytelling campaigns that humanize our clients and amplify their market authority.',
    specialty: 'Storytelling & Campaign Management'
  },
  {
    id: 'team-nithya',
    name: 'Nithya Sibi',
    role: 'Jr. SEO Executive',
    department: 'Search Operations',
    photo: '/team/nithya-sibi.webp',
    bio: 'Executes day-to-day search performance tuning, metadata hardening, crawl error triage, and local citation accuracy across client portfolios.',
    specialty: 'On-Page Optimization & Site Health'
  },
  {
    id: 'team-anjali',
    name: 'Anjali Babu',
    role: 'Jr. SEO Executive',
    department: 'Content & Search Tuning',
    photo: '/team/anjali-babu.webp',
    bio: 'Implements structured content enhancements, internal linking networks, and search intent alignment mapped out by the senior search strategists.',
    specialty: 'Search Alignment & Keyword Mapping'
  },
  {
    id: 'team-anjana',
    name: 'Anjana Babu',
    role: 'Jr. SEO Executive',
    department: 'Technical Search Ops',
    photo: '/team/anjana-babu.webp',
    bio: 'Focuses on website health diagnostics, rich snippet validation, page speed benchmarks, and recurring search health checkups.',
    specialty: 'Diagnostics & Schema Verification'
  },
  {
    id: 'team-farsana',
    name: 'Farsana A',
    role: 'Jr. SEO Executive',
    department: 'Search Execution',
    photo: '/team/farsana-a.webp',
    bio: 'Supports continuous on-page iteration, directory verification, and ranking tracking across emerging local search keywords.',
    specialty: 'Citation Networks & Ranking Tracking'
  }
];

/* =========================================================================
   4. FROM IDEA TO LAUNCH (PROJECT PROGRESS STEPS)
   ========================================================================= */
export const projectWorkflow: ProjectWorkflowStage[] = [
  {
    number: '01',
    title: 'Discovery & Strategic Blueprint',
    subtitle: 'Understanding business DNA',
    description: 'We unpack your commercial goals, target audience personas, and competitor landscape to craft an airtight project roadmap.',
    deliverables: ['Requirements Spec', 'User Personas', 'Sitemap Tree', 'SEO Keyword Plan'],
    image: '/whoweare.webp'
  },
  {
    number: '02',
    title: 'Wireframing & Conversion Flow',
    subtitle: 'Structuring intuitive journeys',
    description: 'Low-fidelity layout blueprints mapping high-converting user pathways, sticky CTA anchors, and effortless form submissions.',
    deliverables: ['Clickable Wireframes', 'Information Flow', 'CTA Hierarchy'],
    image: '/whatwedo.webp'
  },
  {
    number: '03',
    title: 'Visual UI & Editorial Craft',
    subtitle: 'Modern aesthetics with brand character',
    description: 'Bespoke design concepts pairing typography, vibrant brand color palettes, custom iconography, and micro-interaction states.',
    deliverables: ['Figma Prototypes', 'Design System Specs', 'Component States'],
    image: '/mockup.webp'
  },
  {
    number: '04',
    title: 'High-Performance Development',
    subtitle: 'Clean code, rapid loads',
    description: 'Engineered using modern stacks (Astro, TypeScript, Tailwind) and custom WordPress engines. Zero bloated plugins, 100% lightweight performance.',
    deliverables: ['Mobile Responsive Build', 'Sub-second Loads', 'Custom Admin CMS'],
    image: '/herodarkwebdesign.webp'
  },
  {
    number: '05',
    title: 'QA, Speed Audit & SEO Markup',
    subtitle: 'Rigor before production',
    description: 'Exhaustive verification across 15+ screen sizes, WCAG accessibility checks, JSON-LD Schema markup, and Core Web Vitals optimization.',
    deliverables: ['Lighthouse 90+ Score', 'Structured Data Schema', 'Cross-browser Signoff'],
    image: '/tekenoppyadvantage.webp'
  },
  {
    number: '06',
    title: 'Live Launch & Proactive Care',
    subtitle: 'Turning visitors into customers',
    description: 'Zero-downtime production deployment, Google Search Console indexing submission, conversion event tracking, and warranty support.',
    deliverables: ['Production Deploy', 'GSC Submission', 'Post-Launch Monitoring'],
    image: '/portfolios/website/direction-north.webp'
  }
];

/* =========================================================================
   5. CURRENTLY BUILDING (LIVE PRODUCTION BOARD)
   ========================================================================= */
export const activeBuilds: ActiveBuild[] = [
  {
    id: 'build-1',
    client: 'Greens Ayurveda Global',
    projectType: 'International Wellness Portal',
    stage: 'Multi-lingual Architecture & Booking Engine',
    progressPercent: 92,
    lead: 'Sanal Edison',
    badge: 'Near Launch',
    accent: '#10B981'
  },
  {
    id: 'build-2',
    client: 'Evosyz Technology',
    projectType: 'FinTech Platform V2 & Ecosystem Docs',
    stage: 'Interactive Component Library & Dark Mode UI',
    progressPercent: 84,
    lead: 'Nandana S Madhu',
    badge: 'In Review',
    accent: '#3B82F6'
  },
  {
    id: 'build-3',
    client: 'Apolo Mattress Kerala',
    projectType: 'Direct-to-Consumer Ecommerce Experience',
    stage: 'Cart Micro-interactions & Payment Gateways',
    progressPercent: 78,
    lead: 'Vijayakala & Dev Pod',
    badge: 'Sprint 3',
    accent: '#F59E0B'
  },
  {
    id: 'build-4',
    client: 'Direction North Logistics',
    projectType: 'Freight Quote Real-time Calculator',
    stage: 'REST API Integration & QA Hardening',
    progressPercent: 88,
    lead: 'Nandana & Niya K K',
    badge: 'Testing',
    accent: '#8B5CF6'
  }
];

/* =========================================================================
   6. WITH OUR CLIENTS (FILM-STRIP COLLABORATIONS)
   ========================================================================= */
export const clientMoments: ClientMoment[] = [
  {
    id: 'client-moment-1',
    clientName: 'Vivek Menon',
    organization: 'Evosyz, Kochi',
    role: 'Chief Technology Officer',
    image: '/testimonials/vivek-menon-portrait.webp',
    location: 'Kochi Infopark Zone',
    highlight: 'Building enterprise FinTech credibility through sleek, dependable digital design.',
    projectRef: 'Fintech Corporate Web App',
    youtubeId: 'E7HfgGOHjYE'
  },
  {
    id: 'client-moment-2',
    clientName: 'Dr. Asghar',
    organization: 'Greens Ayurveda',
    role: 'Founder & Chief Physician',
    image: '/testimonials/dr-asghar.webp',
    location: 'Calicut & International',
    highlight: 'Transforming patient discovery and cross-border wellness booking enquiries.',
    projectRef: 'Ayurvedic Treatment Portal'
  },
  {
    id: 'client-moment-3',
    clientName: 'Lenaa',
    organization: 'Personal Brand & Creative Endeavours',
    role: 'Actor, Author & TEDx Speaker',
    image: '/testimonials/lenaa.webp',
    location: 'Kerala & International',
    highlight: 'Unveiling a bespoke digital space for literary works and public speaking engagements.',
    projectRef: 'Personal Brand Platform',
    youtubeId: 'T6Vzf4ZhCYk'
  },
  {
    id: 'client-moment-4',
    clientName: 'Biju Thomas',
    organization: 'Olives Resort',
    role: 'Chief Executive Officer',
    image: '/testimonials/biju-thomas.webp',
    location: 'Wayanad, Kerala',
    highlight: 'Achieving direct booking domination and top search visibility for luxury resort stays.',
    projectRef: 'Resort Direct Booking Site'
  },
  {
    id: 'client-moment-5',
    clientName: 'Shainesh Prakashan',
    organization: 'Exacore IT Solutions',
    role: 'Director',
    image: '/testimonials/shainesh-prakashan.webp',
    location: 'Kochi & GCC',
    highlight: 'Positioning global cloud enterprise capabilities for Middle East enterprise tenders.',
    projectRef: 'Cloud IT Corporate Redesign'
  }
];

/* =========================================================================
   7. MILESTONES & ACHIEVEMENTS (ANIMATED COUNTERS)
   ========================================================================= */
export const milestones: MilestoneItem[] = [
  {
    value: '120+',
    numericValue: 120,
    suffix: '+',
    label: 'High-Performance Websites',
    sublabel: 'Delivered across Kerala, India & GCC',
    iconName: 'Rocket'
  },
  {
    value: '100+',
    numericValue: 100,
    suffix: '+',
    label: 'Ambitious Brands Served',
    sublabel: 'From local leaders to international firms',
    iconName: 'Building'
  },
  {
    value: '2018',
    numericValue: 2018,
    suffix: '',
    label: 'Year Established in Kochi',
    sublabel: 'Over 8 years of relentless digital innovation',
    iconName: 'Calendar'
  },
  {
    value: '99.4%',
    numericValue: 99.4,
    suffix: '%',
    label: 'On-Time Project Delivery',
    sublabel: 'Verified client milestone satisfaction',
    iconName: 'CheckCircle'
  }
];

/* =========================================================================
   8. CULTURE MOMENTS & POLAROIDS
   ========================================================================= */
export const cultureMoments = [
  {
    id: 'cult-1',
    caption: 'Sprint Retros & Whiteboard Blueprints',
    subtext: 'Translating messy ideas into clean code',
    image: '/whatwedo.webp',
    rotation: '-rotate-2',
    tag: '#DesignSprint'
  },
  {
    id: 'cult-2',
    caption: 'Chai Time & Big Brain Ideation',
    subtext: 'The best architecture breakthroughs happen over tea',
    image: '/tekenoppyadvantage.webp',
    rotation: 'rotate-2',
    tag: '#ChaiAndCode'
  },
  {
    id: 'cult-3',
    caption: 'Celebrating Another Production Launch',
    subtext: 'Nothing beats the feeling of pressing the Deploy button',
    image: '/whoweare.webp',
    rotation: '-rotate-1',
    tag: '#ShippedIt'
  },
  {
    id: 'cult-4',
    caption: 'Late-Evening Lighthouse Score Celebrations',
    subtext: 'Hitting 100 on Performance & SEO gives us life',
    image: '/herodarkwebdesign.webp',
    rotation: 'rotate-1',
    tag: '#Lighthouse100'
  }
];
