module.exports = {
  extends: ['eslint:recommended', 'next', 'next/core-web-vitals', 'prettier'],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
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
}
