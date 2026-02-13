import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import prettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config(
  { ignores: ['dist', 'node_modules', 'build', 'coverage'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      eslintConfigPrettier,
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'prettier/prettier': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
    },
  },
  // Enforce test file location
  {
    files: ['**/*.test.{ts,tsx}', '**/*.spec.{ts,tsx}'],
    ignores: ['**/test/**', '**/__tests__/**', 'test/**'],
    rules: {
      'no-restricted-syntax': [
        'error',
        {
          selector: 'Program',
          message:
            '❌ Test files must be placed in test/ or __tests__/ directories',
        },
      ],
    },
  }
);
