// Shape of a service landing page's wording — see ServiceLanding.astro.
// Strings marked (html) may contain <br> and entities; everything else is text.
// Icon names are keys of ICONS in ../shared.ts.

export interface WorkItem {
  img: string;
  name: string;
  place: string;
  type: string;
  text: string;
  href: string;
}

export interface Stat {
  icon: string;
  value?: string;
  /** (html) */
  label: string;
  wide?: boolean;
}

export interface ServiceCopy {
  title: string;
  description: string;
  nav: [string, string][];
  footerBlurb: string;
  actionLabel: string;
  waText: string;
  source: string;
  service: string;

  pill: string;
  heroTitle: string;
  /** (html) */
  heroLead: string;
  chips: string[];
  ticks: string[];
  heroCta: string;

  statsTitle: string;
  stats: Stat[];

  bandIcon: string;
  /** (html) */
  bandTitle: string;
  bandText: string;
  bandList: [string, string][];

  workTitle: string;
  workSub: string;
  work: WorkItem[];

  testiSub: string;
  testiCta: string;

  /** (html) */
  problemsTitle: string;
  problems: [string, string][];
  /** (html) */
  solve: string;

  /** [icon, (html) label] */
  why: [string, string][];
  whyCta: string;

  processTitle: string;
  process: [string, string][];

  /** (html) */
  includedTitle: string;
  included: [string, string][];

  trust: string[];
  faq: [string, string][];

  expertTitle: string;
  expertSub: string;

  contactSub: string;
  contactPoints: string[];
  formTitle: string;

  finalTitle: string;
  finalText: string;
  pills: string[];
}
