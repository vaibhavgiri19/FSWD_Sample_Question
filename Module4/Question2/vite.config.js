// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// ✅ No <reference ... /> line here — that’s only for TypeScript

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,        // enables describe, it, expect globally
    environment: 'jsdom', // for React DOM testing
    setupFiles: './src/setupTests.js',
  },
});
