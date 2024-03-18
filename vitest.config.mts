import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    include: ['./src/**/*.{test,spec}.?(c|m)[jt]s?(x)'],
    globals: true,
    environment: 'jsdom',
    setupFiles: './.vitest/vitest.setup.ts'
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
});
