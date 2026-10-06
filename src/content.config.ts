import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { journalSchema, pagesSchema } from './content/schema';

const journal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/journal' }),
  schema: journalSchema,
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: pagesSchema,
});

export const collections = { journal, pages };
