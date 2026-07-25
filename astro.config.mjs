// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jonathanshue-dev.github.io',
  base: '/sportsmed-edu',
  i18n: {
    defaultLocale: 'zh-tw',
    locales: ['zh-tw', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
