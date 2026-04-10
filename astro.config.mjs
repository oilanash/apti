import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://oilanash.github.io',
  base: '/apti',
  devToolbar: {
    enabled: false
  },
  integrations: [tailwind()]
});
