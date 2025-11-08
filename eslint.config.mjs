import { defineConfig, globalIgnores } from 'eslint/config';
import js from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettier from 'eslint-plugin-prettier/recommended';

export default defineConfig([
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts', 'node_modules/**', 'dist/**', 'postcss.config.mjs', '**/setupTests.ts']),
  js.configs.recommended,
  ...nextVitals,
  ...nextTs,
  prettier,
  {
    extends: [reactPlugin.configs.flat.recommended],
    rules: {
      'import/extensions': 'off',
      'jsx-a11y/anchor-is-valid': 'off',
      'react/jsx-filename-extension': ['warn', { extensions: ['.ts', '.tsx'] }],
      'react/prop-types': 'off',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
    },
  },
]);
