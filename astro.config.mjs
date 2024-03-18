import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: "https://freddsana.art",
  integrations: [tailwind(), preact()],
  build: {
    output: "/src/assets"
  },
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    prefixDefaultLocale: false,
    domains: {
      es: "https://freddsana.art",
      en: "https://en.freddsana.art"
    }
  },
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});