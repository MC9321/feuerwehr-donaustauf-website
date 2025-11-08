/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  arrowParens: 'avoid',
  bracketSpacing: true,
  endOfLine: 'lf',
  jsxSingleQuote: false,
  parser: 'typescript',
  printWidth: 240,
  proseWrap: 'preserve',
  quoteProps: 'as-needed',
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindStylesheet: './styles/globals.css',
  tailwindFunctions: ['cn'],
  overrides: [
    {
      files: '*.html',
      options: {
        parser: 'html',
      },
    },
    {
      files: '*.yaml',
      options: {
        parser: 'yaml',
      },
    },
    {
      files: '*.yml',
      options: {
        parser: 'yaml',
      },
    },
    {
      files: '*.json',
      options: {
        parser: 'json',
      },
    },
    {
      files: '*.md',
      options: {
        parser: 'markdown',
      },
    },
  ],
};

export default config;
