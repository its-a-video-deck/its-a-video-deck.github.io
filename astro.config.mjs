import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://its-a-video-deck.github.io',
  output: 'static',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
