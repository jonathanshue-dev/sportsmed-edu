import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const topics = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/topics' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['lower-limb', 'upper-limb', 'spine', 'prevention']),
    last_verified: z.string(),
    references: z.array(z.string()).default([]),
  }),
});

export const collections = { topics };
