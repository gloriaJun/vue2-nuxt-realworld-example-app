module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    "eslint:recommended",
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    "plugin:vue/recommended",
    "plugin:prettier/recommended",
  ],
  // required to lint *.vue files
  plugins: [
    "prettier",
    "vue",
  ],
  // add your custom rules here
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "trailingComma": "all",
      },
    ],
    "semi": [2, "always"],
    "vue/max-attributes-per-line": "off",
    "vue/component-name-in-template-casing": [
      "error",
      "PascalCase",
      {
        "ignores": [
          "nuxt",
          "nuxt-link"
        ]
      }
    ],
  }
};
