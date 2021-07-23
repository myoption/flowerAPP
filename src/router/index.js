import Vue from 'vue'
import VueRouter from 'vue-router'
import demo from './demo'
import home from './home'

Vue.use(VueRouter)

const routes = [
  ...demo,
  ...home
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
