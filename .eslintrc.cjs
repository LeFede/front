module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  ignorePatterns: [
    'dist',
    '.eslintrc.cjs',
    'vite-env.d.ts',
    'vite.config.ts',
    'cypress.config.ts',
  ],
  plugins: ['react', 'react-refresh'],
  parser: '@typescript-eslint/parser',
  rules: {
    semi: ['error', 'never'],
    quotes: ['error', 'single', { avoidEscape: true }],
    'eol-last': ['error', 'always'],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-function-return-type': ['off'],
    '@typescript-eslint/no-explicit-any': 'error',
    'no-console': ['error'],
    'react/jsx-tag-spacing': ['error'],
    'max-len': [
      'error',
      {
        code: 80,
        // tabWidth: 2,
        // "ignoreComments": true, //"comments": 80
        // "ignoreUrls": true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false,
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
