module.exports = {
  plugins: ['vue'],
  env: {
    browser: true
  },
  globals: {
    __DEV__: false,
    __PROD__: false,
    __SERVER__: false,
    SERVER_PREFIX: false,
    INNER_SERVER: false
  },
  rules: {
    'vue/jsx-uses-vars': 2
  }
}
