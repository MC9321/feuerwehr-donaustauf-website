/* eslint-disable import/no-anonymous-default-export */
/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-recommended', 'stylelint-prettier/recommended'],
  plugins: ['stylelint-order', 'stylelint-prettier'],
  ignoreFiles: ['node_modules/**', 'out/**', '.next/**', 'build/**', 'coverage/**', 'test-results/**'],
  rules: {
    'font-family-no-missing-generic-family-keyword': [
      true,
      {
        ignoreFontFamilies: ['Icons'],
      },
    ],
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['box-orient'],
      },
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen', 'layer', 'theme', 'custom-variant', 'custom-selector', 'import'],
      },
    ],
    'function-no-unknown': [
      true,
      {
        ignoreFunctions: ['theme'],
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
    'order/properties-alphabetical-order': true,
    'prettier/prettier': true,
  },
};
