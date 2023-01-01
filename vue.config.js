module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      // eslint-disable-next-line quote-props
      // 'ajax': {
      //   target: 'https://m.maoyan.com',
      //   changeOrigin: true
      // },
      // eslint-disable-next-line quote-props
      'damon': {
        target: 'https://m.maoyan.com',
        changeOrigin: true,
        pathRewrite: {
          '^/damon': ''
        }
      }
    }
  }
// eslint-disable-next-line eol-last
}