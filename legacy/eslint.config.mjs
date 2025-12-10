import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginAstro from 'eslint-plugin-astro';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';

export default [
  // Global ignores
  {
    ignores: ['node_modules/', 'dist/', '.astro/', 'coverage/', '*.min.js', '.vercel/'],
  },

  // JavaScript base config
  eslint.configs.recommended,

  // TypeScript configs
  ...tseslint.configs.recommended,

  // Astro configs
  ...eslintPluginAstro.configs.recommended,
  ...eslintPluginAstro.configs['jsx-a11y-recommended'],

  // Global settings for all files
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  // TypeScript-specific rules
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },

  // Astro-specific rules
  {
    files: ['**/*.astro'],
    rules: {
      // Astro components can have unused vars in frontmatter
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },

  // Test files
  {
    files: ['**/*.test.ts', '**/*.test.tsx', '**/tests/**/*.ts'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },

  // Prettier compatibility (must be last)
  eslintConfigPrettier,
];
