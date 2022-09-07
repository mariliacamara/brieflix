module.exports = {
  env: {
    node: true,
    browser: true,
    es2022: true
  },
  extends: ['next'],
  plugins: ['@typescript-eslint', 'jsx-a11y', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'comma-dangle': ['error', 'never'],
    '@typescript-eslint/no-unused-vars': ['error'],
    'no-console': ['warn']
  }
}
