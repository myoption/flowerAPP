const HomeMockApi = require('./src/mock/home')
const LoginMockApi = require('./src/mock/login')
// 引入自动转化为rem
const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')

module.exports = {
  // devServer作为mock服务器
  devServer: {
    before (app/* server, compiler */) {
      // 首页接口
      HomeMockApi(app)
      // 登录mock接口
      LoginMockApi(app)
    }
  },
  // 配置自动转化为rem
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 75,
            propList: ['*'],
            selectorBlackList: ['van-'] // 排斥vant框架内容s
          })
        ]
      }
    }
  }
}