import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
  },
  root: './src',
  plugins: [react()],
  base: './',
  build: {
    outDir: '../public',
    emptyOutDir: true,
  },
});
