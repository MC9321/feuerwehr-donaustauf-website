import js from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettier from 'eslint-plugin-prettier/recommended';
import reactPlugin from 'eslint-plugin-react';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

export default defineConfig([
  globalIgnores(['.next/**', 'out/**', 'build/**', 'coverage/**', 'node_modules/**', 'next-env.d.ts', 'postcss.config.mjs', 'vitest.setup.ts', '**/*.tsbuildinfo']),
  js.configs.recommended,
  ...nextVitals,
  ...nextTs,
  prettier,
  {
    extends: [reactPlugin.configs.flat.recommended],
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'import/extensions': 'off',
      'jsx-a11y/anchor-is-valid': 'off',
      'react/jsx-filename-extension': ['warn', { extensions: ['.ts', '.tsx'] }],
      'react/prop-types': 'off',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },
]);
