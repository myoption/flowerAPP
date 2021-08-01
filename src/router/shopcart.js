const shopCart = () => import(/* webpackChunkName: "my-shopcart" */ '../pages/monthProduct/shopcart/myShopCart')
const toPay = () => import(/* webpackChunkName: "immediately-to-pay" */ '../pages/monthProduct/shopcart/toPay')

export default [
  {
    name: 'ShopCart',
    path: '/my-shopcart',
    component: shopCart
  },
  {
    name: 'ToPay',
    path: '/immediately-to-pay',
    component: toPay
  }
]
