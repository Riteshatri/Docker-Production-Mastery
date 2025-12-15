import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Docker-Production-Mastery/',   // Set the base path for the project , For GitHub Pages deployment
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
  