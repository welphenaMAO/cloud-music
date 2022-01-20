const path = require('path')
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@/assets/css/variables.scss";'
      }
    }
  },
  devServer: {
    disableHostCheck: true,
    // host: 'manage.sic.wiki',
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  configureWebpack: config => {
    Object.assign(config, {
      // 开发生产共同配置
      resolve: {
        extensions: ['.js', '.vue', '.json', '.ts', '.tsx'],
        alias: {
          vue$: 'vue/dist/vue.js',
          '@': path.resolve(__dirname, './src')
        }
      }
    })
  }
}