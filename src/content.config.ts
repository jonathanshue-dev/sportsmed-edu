import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const topics = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/topics' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['lower-limb', 'upper-limb', 'spine', 'prevention', 'rehab']),
    last_verified: z.string(),
    /** true 表示內容尚未通過證據查核，頁面會顯示未查核標示 */
    verification_pending: z.boolean().default(false),
    /** 查核來源；OpenEvidence 不可用時可改為文獻查核並註明 */
    verified_via: z.string().default('OpenEvidence'),
    references: z.array(z.string()).default([]),
  }),
});

export const collections = { topics };
