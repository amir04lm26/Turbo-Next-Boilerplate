module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-prettier',
    'stylelint-config-prettier-scss',
  ],
  plugins: ['stylelint-scss', 'stylelint-no-unsupported-browser-features'],
  rules: {
    'max-nesting-depth': [
      3,
      {
        ignore: ['pseudo-classes', 'blockless-at-rules'],
      },
    ],
    'plugin/no-unsupported-browser-features': [
      true,
      {
        severity: 'warning',
      },
    ],
    'color-function-notation': null,
  },
  ignorePatterns: [
    'node_modules', // # node_modules
    'public', // # public route
    'styles', // # styles
    'coverage', // # testing
    '.next', // # build
    'dist', // # build
    '.turbo', // # turbo routes
  ],
}
