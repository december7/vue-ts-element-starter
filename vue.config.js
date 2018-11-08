module.exports = {
  runtimeCompiler: true,
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.html$/,
          loader: 'html-loader',
          options: {
            minimize: true
          },
          exclude: /\index.html$/
        }
      ]
    }
  },
  devServer: {
    proxy: {
      '/mall': {
        target: 'https://api-minp.shenceai.com',
        changeOrigin: true,
        secure: false,
        onProxyReq:function onProxyReq(proxyReq, req, res) {
          proxyReq.setHeader('X-Forwarded-Proto', 'https');
        }
      }
    }
  }
}