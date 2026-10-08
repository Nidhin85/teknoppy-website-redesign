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

// Content lives in websitePortfolioData.json, which the CMS sync overwrites — edit it in the CMS.
import data from './websitePortfolioData.json';

export const portfolioFilterCategories: PortfolioFilterCategory[] = data.portfolioFilterCategories as PortfolioFilterCategory[];
export const websitePortfolioProjects: WebsitePortfolioItem[] = data.websitePortfolioProjects as WebsitePortfolioItem[];
