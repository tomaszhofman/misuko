const config = {
  parser: '@typescript-eslint/parser',
  extends: [
    'next',
    'next/core-web-vitals',
    'plugin:jsx-a11y/strict',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  plugins: [
    'jsx-a11y',
    'react',
    'react-hooks',
    'jest-dom',
    'testing-library',
    'simple-import-sort',
    'unused-imports',
    '@typescript-eslint',
  ],
  env: {
    es6: true,
    browser: true,
    jest: true,
    node: true,
  },
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    //#region  //*=========== Unused Import ===========
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
    ],
    //#endregion  //*======== Unused Import ===========

    //#region  //*=========== Import Sort ===========
    'simple-import-sort/exports': 'warn',
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          // ext library & side effect imports
          ['^@?\\w', '^\\u0000'],
          // {s}css files
          ['^.+\\.s?css$'],
          // Lib and hooks
          ['^@/lib', '^@/hooks'],
          // static data
          ['^@/data'],
          // components
          ['^@/components', '^@/container'],
          // Other imports
          ['^@/'],
          // relative paths up until 3 level
          [
            '^\\./?$',
            '^\\.(?!/?$)',
            '^\\.\\./?$',
            '^\\.\\.(?!/?$)',
            '^\\.\\./\\.\\./?$',
            '^\\.\\./\\.\\.(?!/?$)',
            '^\\.\\./\\.\\./\\.\\./?$',
            '^\\.\\./\\.\\./\\.\\.(?!/?$)',
          ],
          ['^@/types'],
          // other that didn't fit in
          ['^'],
        ],
      },
    ],
    //#endregion  //*======== Import Sort ===========
  },

  parserOptions: {
    project: ['tsconfig.json'],
  },
  ignorePatterns: [
    'build/',
    '.turbo/',
    'dist/',
    'node_modules/',
    '*.js',
    '*.jsx',
    'misuku/api.tsx',
  ],
};

module.exports = config;
