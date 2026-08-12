import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog posts — managed via the CMS (markdown body + frontmatter)
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    category: z.string(),
    date: z.coerce.date(),
    // GEO rule (site structure doc §10): posts expose a published and, when
    // revised, an updated date so AI crawlers can verify freshness.
    updated: z.coerce.date().optional(),
    // The blog hub doc requires every post preview to carry a named author.
    author: z.string().default('Teknoppy SEO and Content Team'),
    readTime: z.string().default('5 min read'),
    cover: z.string().default('/blog/blog1.png'),
    draft: z.boolean().default(false),
  }),
});

// Portfolio projects
const portfolio = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/portfolio' }),
  schema: z.object({
    name: z.string(),
    location: z.string(),
    industry: z.string(),
    description: z.string(),
    result: z.string(),
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

// Client testimonials
const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/testimonials' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    quote: z.string(),
    initials: z.string().default(''),
    order: z.number().default(0),
  }),
});

export const collections = { blog, portfolio, testimonials };
