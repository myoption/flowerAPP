// const User = () => import('../pages/user') 懒加载
import User from '../pages/user'

export default [
  {
    name: 'User',
    path: '/user',
    component: User
  }
]
