module.exports = {
  title: 'GitSocial',
  resolve: true,
  dist: './docs',
  mergeConfig: {
    resolve: {
      extensions: ['.styl']
    },
    stylus: {
      preferPathResolver: 'webpack'
    }
  }
}
