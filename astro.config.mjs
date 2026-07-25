// @ts-check
import { defineConfig } from 'astro/config';

// site 會在 GitHub repo 建立後補上正確的 username
export default defineConfig({
  site: 'https://jonathanshue.github.io',
  base: '/sportsmed-edu',
  i18n: {
    defaultLocale: 'zh-tw',
    locales: ['zh-tw', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
