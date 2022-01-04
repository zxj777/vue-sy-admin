module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'airbnb-base',
    'prettier',
    'plugin:prettier/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 13,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],

    // 'vue/script-setup-uses-vars': 'error',
    // 'no-use-before-define': 'off',
    // '@typescript-eslint/no-use-before-define': 'off',
  },
  globals: {
    defineProps: 'readonly',
  },
}
