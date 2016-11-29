module.exports = {
  title: 'GitSocial',
  resolve: true,
  mergeConfig: {
    resolve: {
      extensions: ['.styl']
    },
    stylus: {
      preferPathResolver: 'webpack'
    }
  }
}
