module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier/prettier', 'plugin:storybook/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'import/no-unresolved': [0],
    'import/no-extraneous-dependencies': [0],
    'storybook/story-exports': [0],
    'react/jsx-props-no-spreading': [0],
    'react/jsx-filename-extension': [0],
    'react/react-in-jsx-scope': [0],
    'react/function-component-definition': [0],
    'import/extensions': [0],
  },
};
