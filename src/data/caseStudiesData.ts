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

// Content lives in caseStudiesData.json, which the CMS sync overwrites — edit it in the CMS.
import data from './caseStudiesData.json';

export const filterCategories: FilterCategory[] = data.filterCategories as FilterCategory[];
export const caseStudiesList: CaseStudyItem[] = data.caseStudiesList as CaseStudyItem[];
export const caseStudyFAQs = data.caseStudyFAQs;
