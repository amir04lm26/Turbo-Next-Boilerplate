module.exports = {
  development: [
    'last 1 chrome version',
    'last 1 firefox version',
    'last 1 safari version',
  ],
  production: ['last 1 version', '> 0.3%', 'not dead', 'not op_mini all', 'not ie 11'],
}
