import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    css: true,
    include: [
      'src/test/**/*.{test,spec}.{js,jsx,ts,tsx}',
      'test/**/*.{test,spec}.{js,jsx,ts,tsx}',
      'src/**/__tests__/**/*.{test,spec}.{js,jsx,ts,tsx}',
    ],
    exclude: ['node_modules', 'dist', 'build', 'coverage', '.git'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      reportsDirectory: './coverage',
      exclude: [
        'node_modules/',
        'src/test/',
        '**/*.d.ts',
        '**/*.config.*',
        '**/mockData',
        'dist/',
        'coverage/',
        '**/*.test.{ts,tsx}',
        '**/*.spec.{ts,tsx}',
      ],
    },
  },
});
