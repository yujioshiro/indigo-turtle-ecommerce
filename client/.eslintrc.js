module.exports = {
  root: true,
  extends: [
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'standard-with-typescript',
    'prettier',
    'react-app',
    'plugin:tailwindcss/recommended',
  ],
  rules: {},
  files: ['*.ts','*.tsx', '*.js', '*.jsx'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', 'prettier'],
  overrides: [],
};
