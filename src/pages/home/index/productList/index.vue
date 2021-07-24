<template>
  <div class="product-list">
    <h3 class="product-list-title">新品推荐</h3>
      <van-row justify="space-between" gutter="10" class="product-wrap">
        <van-col span="12" v-for="(item, index) in list" :key="index" >
          <div class="product-container">
          <van-image
            :src="item.base_info.main_image"
            width="170"
            height="170"
            fit="cover"
            />
            <div class="product-name product-text van-ellipsis">{{item.base_info.product_name}}</div>
            <div class="product-price product-text van-ellipsis">&yen;{{item.base_info.sale_price}}</div>
          </div>
        </van-col>
      </van-row>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'ProductList',
  // 接收父组件传值
  props: {
    list: {
      type: Array,
      // 引用类型用方法接收
      default () {
        return []
      }
    }
  },
  components: {
  },
  methods: {
  },
  mounted () {
    console.log(this.list)
  }
}
</script>

<style lang="less" scoped>
.product-list {
  margin-top: 20px;
  padding: 0 20px;
  .product-list-title {
      text-align: center;
  }
  .product-text {
    font-size: 28px;
    font-weight: 600;
    margin-left: 10px;
  }
  .product-container {
    margin-bottom: 30px;
    overflow: hidden;// 需要加这句border-radius才生效
    border-radius: 20px;
    box-shadow: 0 0 12px 3px #eee;
    background: rgba(255, 255, 255, 1);
  }
}
</style>
