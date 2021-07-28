const HomeMockApi = require('./src/mock/home')
const LoginMockApi = require('./src/mock/login')
const FoundMockAPI = require('./src/mock/found')
// 引入自动转化为rem
const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')
// 配置解析请求
const bodyparser = require('body-parser')

module.exports = {
  // devServer作为mock服务器
  devServer: {
    port: 3333,
    before (app/* server, compiler */) {
      // 解析请求数据
      app.use(bodyparser.urlencoded({ extended: false }))
      app.use(bodyparser.json())
      // 首页接口
      HomeMockApi(app)
      // 登录mock接口
      LoginMockApi(app)
      // 发现页mock接口
      FoundMockAPI(app)
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
