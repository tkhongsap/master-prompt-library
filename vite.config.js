import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure this matches your deployment settings
  },
  server: {
    port: process.env.PORT || 3000,
    host: true,
  },
});
