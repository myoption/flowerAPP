import Vue from 'vue'
import VueRouter from 'vue-router'
import home from './home'
import found from './found'
import user from './user'
import login from './login'
import monthproduct from './month-product'
import ProductDetail from './product-detail'
Vue.use(VueRouter)

const routes = [
  ...home,
  ...found,
  ...user,
  ...login,
  ...monthproduct,
  ...ProductDetail
]

// console.log(routes)

const router = new VueRouter({
  mode: 'history',
  routes
})
//  导航守卫
router.beforeEach((to, from, next) => {
  const isAuthenticated = true
  if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  else next()
})
// 跳转后的处理 通常是处理滚动位置
router.afterEach((to, from) => {
  // ...
  if (to.meta.scroll) {
    //  x
  }
})
export default router
