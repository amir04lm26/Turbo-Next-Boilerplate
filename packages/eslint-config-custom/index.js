module.exports = {
  env: { browser: true, node: true, jest: true },
  extends: ['eslint:recommended', 'next', 'next/core-web-vitals', 'prettier'],
  rules: {
    '@next/next/no-html-link-for-pages': ['error', './src/pages'],
    'react/jsx-key': 'error',
    'import/first': 'error',
    'no-unused-vars': 'error',
    'no-var': 'error',
    semi: 'off',
    indent: [
      'error',
      2,
      {
        ignoredNodes: ['TemplateLiteral'],
        SwitchCase: 1,
      },
    ],
    'prefer-const': 'error',
    'no-debugger': 'error',
    'no-console': 'error',
  },
  overrides: [
    {
      env: {
        jest: true,
      },
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react', 'plugin:jest/recommended'],
      rules: {
        'import/no-extraneous-dependencies': [
          'off',
          { devDependencies: ['**/?(*.)+(spec|test).[jt]s?(x)'] },
        ],
      },
    },
  ],
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
