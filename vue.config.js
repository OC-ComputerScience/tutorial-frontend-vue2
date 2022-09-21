module.exports = {
  devServer: {
    host: 'localhost',
    port: 8081
  },
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '/tutorial-frontend-1/',
  transpileDependencies: ['vuetify'],
}

