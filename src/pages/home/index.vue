<template>
  <div class="home-wrap">
    <!-- header公用组件 -->
    <HeaderComponent></HeaderComponent>
    <div class="swiper">
      <SwiperComponent></SwiperComponent>
    </div>
    <!-- 商品分类组件 -->
    <CateComponent></CateComponent>
    <!-- 商品展示 -->
    <ProductListComponent :list="product_list"></ProductListComponent>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
// 引入组件
import HeaderComponent from '../../components/header'
import SwiperComponent from './index/swiper'
import CateComponent from './index/category'
import ProductListComponent from './index/productList'
import * as request from './api'
export default {
  name: 'Home',
  data () {
    return {
      page_info: [],
      product_list: {}
    }
  },
  components: {
    HeaderComponent,
    SwiperComponent,
    CateComponent,
    ProductListComponent
  },
  // 注意模块后的用法
  computed: {
    ...mapState({
      info: state => state.a.count
    })
  },
  methods: {
    // a模块下的Mutations中increasement 方法
    ...mapMutations('a', {
      increasement: 'increasement'
    }),
    async getProductList () {
      const res = await request.getProductList()
      console.log('res', res)
      //  报错 Identifier 'page_info' is not in camel case
      // const { page_info, product_list } = res.data
      this.page_info = res.data.page_info
      this.product_list = res.data.product_list
    }
  },
  mounted () {
    this.getProductList()
  }
}
</script>

<style lang="less" scoped>
.home-wrap {
  // 计算高度 才能解决遮盖
  height: calc(100vh - 140px);
  overflow: auto;
}
</style>
