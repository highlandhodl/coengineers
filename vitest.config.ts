import { getViteConfig } from 'astro/config';

export default getViteConfig({
  test: {
    // Test environment
    environment: 'node',

    // Global setup
    setupFiles: ['./tests/setup.ts'],

    // Include patterns
    include: ['tests/**/*.test.ts'],

    // Exclude patterns
    exclude: ['node_modules', 'dist', '.astro'],

    // Coverage configuration
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['src/lib/**/*.ts', 'src/pages/api/**/*.ts'],
      exclude: ['node_modules', 'dist', '.astro', 'tests'],
    },

    // Global timeout
    testTimeout: 10000,

    // Reporter
    reporters: ['default'],
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} as any);
