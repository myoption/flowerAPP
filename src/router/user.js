// const User = () => import('../pages/user') 懒加载
import User from '../pages/user'

export default [
  {
    name: '我的',
    path: '/user',
    component: User
  }
]
