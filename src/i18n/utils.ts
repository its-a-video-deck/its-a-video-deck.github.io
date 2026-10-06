import { getCollection, getEntry, type CollectionEntry } from 'astro:content';
import { getAbsoluteLocaleUrl, getRelativeLocaleUrl } from 'astro:i18n';
import { defaultLang, type Lang, ui, type Copy } from './ui';

export const pageIds = [
  'home',
  'story',
  'journal',
  'signal',
  'not-found',
] as const;

export type PageId = (typeof pageIds)[number];

type PageEntry<T extends PageId> = CollectionEntry<'pages'> & {
  data: Extract<CollectionEntry<'pages'>['data'], { page: T }>;
};

export function isLang(value: string | undefined): value is Lang {
  return value === 'en' || value === 'fr';
}

export function getLang(currentLocale: string | undefined): Lang {
  return isLang(currentLocale) ? currentLocale : defaultLang;
}

export function useCopy(lang: Lang): Copy {
  return ui[lang];
}

export async function getPage<T extends PageId>(
  lang: Lang,
  page: T,
): Promise<PageEntry<T>> {
  const entry = await getEntry('pages', `${lang}/${page}`);
  if (!entry) {
    throw new Error(`Missing src/content/pages/${lang}/${page}.md`);
  }
  if (entry.data.page !== page || entry.data.locale !== lang) {
    throw new Error(
      `src/content/pages/${lang}/${page}.md must set page: ${page} and locale: ${lang}`,
    );
  }
  return entry as PageEntry<T>;
}

export function localizedPath(lang: Lang, path: string): string {
  const trimmed = path.replace(/^\/+/, '').replace(/\/+$/, '');
  return getRelativeLocaleUrl(lang, trimmed);
}

export function localizedAbsoluteUrl(lang: Lang, path: string): string {
  const trimmed = path.replace(/^\/+/, '').replace(/\/+$/, '');
  return getAbsoluteLocaleUrl(lang, trimmed);
}

export function stripLocalePrefix(pathname: string): string {
  const withSlash = pathname.endsWith('/') ? pathname : `${pathname}/`;
  if (withSlash === '/fr/' || withSlash.startsWith('/fr/')) {
    const rest = withSlash.slice('/fr'.length);
    return rest.startsWith('/') ? rest : `/${rest}`;
  }
  return withSlash;
}

export function journalSlug(entry: CollectionEntry<'journal'>): string {
  const slug = entry.id.split('/').pop();
  return slug ?? entry.id;
}

export async function getJournalEntries(lang: Lang) {
  return (
    await getCollection(
      'journal',
      ({ data }) => !data.draft && data.locale === lang,
    )
  ).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function journalStaticPaths(lang: Lang) {
  const entries = await getJournalEntries(lang);
  return entries.map((entry) => ({
    params: { id: journalSlug(entry) },
    props: { entry },
  }));
}
