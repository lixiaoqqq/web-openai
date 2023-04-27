const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // transpileDependencies: true,
  // publicPath: './',
  devServer: {
    port: 6366,
    client: {
      webSocketURL: 'ws://0.0.0.0:6366/ws',
    },
    
    // hot: true,//自动保存
    proxy: {
      // 如果请求地址以/api打头,就出触发代理机制
      // http://localhost:9588/api/login -> http://localhost:3000/api/login
      '/': {
        target: 'https://api.getai.fun/', // 我们要代理的真实接口地址
        changeOrigin: true, // 支持跨域
        secure: false,
        ws: true,
      }
    }
  },
})
