module.exports = {
  title: 'GitSocial',
  resolve: true,
  publicPath: '/GitSocial/',
  mergeConfig: {
    resolve: {
      extensions: ['.styl']
    },
    module: {
      rules: [
        {
          test: /\.styl$/,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'stylus-loader',
              options: {
                preferPathResolve: 'webpack'
              }
            }
          ]
        }
      ]
    }
  }
}
