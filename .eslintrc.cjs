/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@electron-toolkit',
    '@electron-toolkit/eslint-config-ts/eslint-recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'vue/require-default-prop': 'off',
    'vue/multi-word-component-names': 'off',
    "@typescript-eslint/explicit-function-return-type": "off"
  }
}
