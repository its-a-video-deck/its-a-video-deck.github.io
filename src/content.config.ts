import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const journal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/journal' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.enum(['Design', 'Hardware', 'Software']),
    number: z.string(),
    visual: z.enum(['scale', 'display', 'signal']),
    draft: z.boolean().default(false),
  }),
});

export const collections = { journal };
