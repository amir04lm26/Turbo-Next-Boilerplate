module.exports = {
  root: true,
  // This tells StyleLint to load the config from the package `stylelint-config-custom`
  extends: ['stylelint-config-custom'],
  settings: {
    next: {
      rootDir: ['apps/*/', 'packages/share/'],
    },
  },
}
