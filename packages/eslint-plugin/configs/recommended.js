module.exports = {
  plugins: ['pe-eslint-plugin'],
  rules: {
    'pe-eslint-plugin/no-http-url': 'warn',
    'pe-eslint-plugin/no-secret-info': 'error',
  },
};
