import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      external: [],
      output: {
        // Split vendor libraries (React, ReactDOM) into a separate chunk
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
    // Raise chunk size warning limit to 1MB to suppress unnecessary warnings
    chunkSizeWarningLimit: 1000,
  },
  // Ensure proper base path for production
  base: '/',
}));