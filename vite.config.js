import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    // Enable minification for production builds
    minify: 'terser',
    // Enable brotli and gzip compression
    brotliSize: true,
    // Generate sourcemaps for production
    sourcemap: process.env.NODE_ENV === 'production',
    // Optimize chunks
    rollupOptions: {
      output: {
        // Split vendor and app code
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['@astrojs/tailwind', '@tailwindcss/forms'],
    // Don't scan these files (improves performance)
    exclude: ['@astrojs/mdx', 'astro'],
  },
  // Improve build performance
  server: {
    fs: {
      // Allow serving files from one level up from the package root
      allow: ['..'],
    },
  },
  // Enable experimental features
  experimental: {
    // Enable faster refresh
    renderBuiltUrl(filename, { hostType }) {
      if (hostType === 'js') {
        return { runtime: `__vitePreload(${JSON.stringify(filename)})` };
      }
      return { relative: true };
    },
  },
});
