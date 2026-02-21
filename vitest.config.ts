import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';
import path from 'path';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/test/setup.ts',
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
      coverage: {
        provider: 'v8', // 👈 moved inside test
        reportsDirectory: './coverage', // 👈 moved inside test
        reporter: ['text', 'json', 'html'],
        exclude: [
          'node_modules/',
          'src/test/',
          '**/*.d.ts',
          '**/*.config.*',
          'dist/',
          'coverage/',
        ],
        thresholds: {
          // 👈 moved inside test
          lines: 80,
          functions: 80,
          branches: 80,
          statements: 80,
        },
      },
    },
  })
);
