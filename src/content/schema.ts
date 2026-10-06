import { z } from 'astro/zod';

const locale = z.enum(['en', 'fr']);

const journalSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  locale,
  category: z.enum(['Design', 'Hardware', 'Software']),
  entryType: z.enum(['intention', 'design-note']).default('intention'),
  perspective: z.enum(['experience', 'implementation']).default('experience'),
  number: z.string(),
  visual: z.enum(['scale', 'display', 'signal']),
  draft: z.boolean().default(false),
});

const homeSchema = z.object({
  page: z.literal('home'),
  locale,
  metaTitle: z.string(),
  metaDescription: z.string(),
  hero: z.object({
    eyebrowKicker: z.string(),
    eyebrowEra: z.string(),
    titleLine1: z.string(),
    titleLine2: z.string(),
    tiny: z.string(),
    intro: z.array(z.string()).min(1),
    meetCta: z.string(),
    imageAlt: z.string(),
    imageTag: z.string(),
    imageTagSub: z.string(),
    figLabel: z.string(),
    figNote: z.string(),
    tunerBand: z.string(),
    tunerCaption: z.string(),
    footLeft: z.string(),
    footStatus: z.string(),
  }),
  object: z.object({
    marker: z.string(),
    aside: z.string(),
    titleLine1: z.string(),
    titleLine2: z.string(),
    paragraphs: z.array(z.string()).min(1),
    approachCta: z.string(),
    originCta: z.string(),
    points: z
      .array(
        z.object({
          kicker: z.string(),
          title: z.string(),
          text: z.string(),
        }),
      )
      .length(3),
  }),
  signal: z.object({
    marker: z.string(),
    aside: z.string(),
    titleLine1: z.string(),
    titleLine2: z.string(),
    lead: z.array(z.string()).min(1),
  }),
  process: z.object({
    marker: z.string(),
    aside: z.string(),
    titleLine1: z.string(),
    titleLine2: z.string(),
    lead: z.string(),
    steps: z
      .array(
        z.object({
          number: z.string(),
          title: z.string(),
          text: z.string(),
          tag: z.string(),
        }),
      )
      .length(3),
  }),
  journal: z.object({
    marker: z.string(),
    aside: z.string(),
    title: z.string(),
    cta: z.string(),
    note: z.string(),
  }),
  about: z.object({
    kicker: z.string(),
    title: z.string(),
    paragraphs: z.array(z.string()).min(1),
    originCta: z.string(),
    journalCta: z.string(),
    stamp: z.tuple([z.string(), z.string(), z.string(), z.string()]),
  }),
});

const storySchema = z.object({
  page: z.literal('story'),
  locale,
  metaTitle: z.string(),
  metaDescription: z.string(),
  kicker: z.string(),
  written: z.string(),
  titleLine1: z.string(),
  titleLine2: z.string(),
  dek: z.string(),
  end: z.string(),
  nextText: z.string(),
  nextCta: z.string(),
  figures: z.object({
    snow: z.object({
      alt: z.string(),
      caption: z.string(),
      note: z.string(),
      screen: z.string(),
      set: z.string(),
    }),
    shelf: z.object({
      alt: z.string(),
      caption: z.string(),
      note: z.string(),
      owned: z.string(),
      missing: z.string(),
      have: z.array(z.string()).min(1),
      lack: z.array(z.string()).min(1),
    }),
    path: z.object({
      alt: z.string(),
      caption: z.string(),
      note: z.string(),
      steps: z
        .array(
          z.object({
            n: z.string(),
            title: z.string(),
            detail: z.string(),
          }),
        )
        .length(3),
    }),
    chassis: z.object({
      alt: z.string(),
      caption: z.string(),
      note: z.string(),
      meters: z.string(),
      screen: z.string(),
      plate: z.string(),
    }),
  }),
});

const journalPageSchema = z.object({
  page: z.literal('journal'),
  locale,
  metaTitle: z.string(),
  metaDescription: z.string(),
  marker: z.string(),
  aside: z.string(),
  titleLine1: z.string(),
  titleLine2: z.string(),
  intro: z.array(z.string()).min(1),
  originCta: z.string(),
  note: z.string(),
});

const signalSchema = z.object({
  page: z.literal('signal'),
  locale,
  overview: z.string(),
  architecture: z.string(),
  exploreAria: z.string(),
  select: z.string(),
  flow: z.string(),
  stages: z
    .array(
      z.object({
        name: z.string(),
        device: z.string(),
        detail: z.string(),
        text: z.string(),
        tag: z.string(),
      }),
    )
    .length(4),
});

const notFoundSchema = z.object({
  page: z.literal('not-found'),
  locale,
  metaTitle: z.string(),
  kicker: z.string(),
  headingLine1: z.string(),
  headingLine2: z.string(),
  text: z.string(),
  cta: z.string(),
});

export const pagesSchema = z.discriminatedUnion('page', [
  homeSchema,
  storySchema,
  journalPageSchema,
  signalSchema,
  notFoundSchema,
]);

export { journalSchema };
