import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import request from './utils/request'
import 'amfe-flexible'
import './vant'

Vue.config.productionTip = false
// 挂载axios
// console.log(request)
Vue.prototype.$axios = request

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
