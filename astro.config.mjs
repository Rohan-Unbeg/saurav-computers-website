// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://saurav-computers.vercel.app',
  output: 'server',
  adapter: vercel({
    // Enable ISR (Incremental Static Regeneration) if needed
    // isr: true,
  }),
  
  // Configure integrations
  integrations: [tailwind(), react()],

  // Image optimization
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
});