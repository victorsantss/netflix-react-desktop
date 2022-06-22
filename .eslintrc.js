module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
extends: [
    'airbnb',
    'airbnb-typescript'
  ],
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules:{
    'linebreak-style': 0,
    'import/prefer-default-export': 'off'
  }
};