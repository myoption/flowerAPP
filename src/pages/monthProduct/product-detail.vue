<template>
  <div class="product-detail-wrap">
    <HeraderComponent :title="productDetaiInfo.base_info.product_name" :showGoBack="true"></HeraderComponent>
    <div class="detail-content-wrap">
      <div  class="detail-content-box">
        <van-image
          :src="productDetaiInfo.base_info.main_image"
          height="220"
          fit="cover"
        />
        <DetailComponent :productDetaiInfo="productDetaiInfo" class="product-detail-content"></DetailComponent>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import HeraderComponent from '../../components/header'
import DetailComponent from './detail/detail'
import * as api from './api'
export default {
  data () {
    return {
      productDetaiInfo: {
        base_info: {
          product_name: '商品详情'
        },
        detail: {
          detail_list: []
        }
      }
    }
  },
  components: {
    HeraderComponent,
    DetailComponent
  },
  methods: {
    /**
     * @desc 获取商品详情数据
     */
    async getProductDetail () {
      const res = await api.getProductDetail()
      // console.log(res)
      if (res && res.errorCode === 0) {
        this.productDetaiInfo = res.data
      }
    }
  },
  mounted () {
    this.getProductDetail()
  }
}
</script>

<style lang="less" scoped>
.product-detail-wrap {
  .detail-content-wrap {
    height: calc(100vh - 230px);
    overflow: auto;
    margin-top: 20px;
    padding: 0 20px;
    .detail-content-box {
      position: relative;
      .product-detail-content {
        position: absolute;
        width: 100%;
        top: 400px;
        background-color: #fff;
        border-radius: 24px;
      }
    }
  }
}
</style>
