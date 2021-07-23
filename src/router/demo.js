const AComponent = () => import('../pages/a.vue')
const BComponent = () => import('../pages/b.vue')
export default [
  {
    path: '/a',
    name: 'Apage',
    meta: {
      title: 'a',
      scroll: true, // 判断是否记录滚动位置
      keepAlive: true // 是否不销毁组件
    },
    component: AComponent
  },
  {
    path: '/b',
    name: 'Bpage',
    component: BComponent
  }
]
