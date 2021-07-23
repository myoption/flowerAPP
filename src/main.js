import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant'
import store from './store'
import router from './router'
import request from './utils/request'
import 'vant/lib/index.css' // 样式文件单独引入
import 'amfe-flexible'

Vue.use(Vant)

Vue.config.productionTip = false
// 挂载axios
// console.log(request)
Vue.prototype.$axios = request

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
