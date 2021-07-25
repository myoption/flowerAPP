import Found from '../pages/found'
// 动态加载页面
// const Found = () => import('../pages/found')
// 注意 routes是数组
const Article = () => import('../pages/found/article-detail')
export default [
  {
    name: '发现好物',
    path: '/found',
    component: Found
  },
  {
    name: '文章详情',
    path: '/article-detail',
    component: Article
  }
]
