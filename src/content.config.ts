import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.string().default('Notes'),
    favoriteOrder: z.number().int().positive().optional(),
    draft: z.boolean().default(false),
    sample: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    technologies: z.array(z.string()),
    featuredOrder: z.number().int().positive().optional(),
    year: z.string(),
    kind: z.string(),
    artwork: z.enum(['notes', 'relay', 'search']).default('notes'),
    repository: z.url().optional(),
    demo: z.url().optional(),
    draft: z.boolean().default(false),
    sample: z.boolean().default(false),
  }),
});

export const collections = { posts, projects };
