
const Login = () => import(/* webpackChunkName: "login" */'../pages/login')

export default [
  {
    name: 'Login',
    path: '/login',
    component: Login
  }
]
