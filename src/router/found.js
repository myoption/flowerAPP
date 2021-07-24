import Found from '../pages/found'
// 动态加载页面
// const Found = () => import('../pages/found')
// 注意 routes是数组
export default [
  {
    name: '发现好物',
    path: '/found',
    component: Found
  }
]
