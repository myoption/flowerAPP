const ProductDetail = () => import(/* webpackChunkName: "product-detail" */ '../pages/monthProduct/product-detail')

export default [
  {
    name: 'ProductDetail',
    // 动态路由 需配置参数
    path: '/product-detail/:productId',
    component: ProductDetail
  }
]
