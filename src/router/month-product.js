const MonthProduct = () => import(/* webpackChunkName: "month-product" */ '../pages/monthProduct')

export default [
  {
    name: 'MonthProduct',
    path: '/month-product',
    meta: {
      title: 'MonthProduct'
    },
    component: MonthProduct
  }
]
