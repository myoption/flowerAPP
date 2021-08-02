<template>
  <div class="add-to-cart">
    <van-popup
    v-model="showPopup"
    position="bottom"
    :style="{ height: '34%' }"
    closeable
    @close="isClosed"
    >
      <van-row justify="start" class="pop-title" gutter="10">
        <van-col >
          <van-image
          :src="info.main_image"
          width="80"
          height="80"
          fit="cover"
          />
        </van-col>
        <van-col>
          <div class="pop-product-text">
            <p class="pop-product-name van-ellipsis">{{info.product_name}}</p>
            <p class="pop-product-price">&yen;{{info.format_sale_price}}</p>
          </div>
        </van-col>
      </van-row>
      <CountComponent @numChange="numChange"></CountComponent>
      <div class="confirm-btn-wrap">
        <van-button round type="primary" class="confirm-btn" @click="addCart">加入购物车</van-button>
      </div>
    </van-popup>
  </div>
</template>

<script type="text/javascript">
import { mapMutations } from 'vuex'
import CountComponent from '../../../components/count'
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    info: {
      type: Object
    }
  },
  data () {
    return {
      // 商品数量默认1
      number: 1,
      product_name: '',
      format_sale_price: 0,
      // 是否展示弹窗
      showPopup: false
    }
  },
  components: {
    CountComponent
  },
  methods: {
    ...mapMutations('shopCart', {
      addToCart: 'addToCart'
    }),
    isClosed () {
      //
      this.$emit('close-popup', false)
    },
    // 商品数量
    numChange (num) {
      // console.log(num)
      this.number = num
    },
    // 加入购物车
    addCart () {
      // 先处理数据
      const cartInfo = {
        ...this.info,
        goodsNum: this.number,
        isChecked: false
      }
      // console.log(this.number)
      this.addToCart(cartInfo)
      this.$emit('close-popup', false)
    }
  },
  watch: {
    // 监听data 、props中实例变化
    show (value) {
      this.showPopup = value
    }
  }
}
</script>

<style lang="less" scoped>
.add-to-cart {
  position: relative;
  z-index: 2;
  .van-popup {
    background: rgb(235, 235, 235);
  }
  .pop-title {
    margin-top: 20px;
    padding-left: 20px;
    padding-bottom: 12px;
    border-bottom: 1px solid rgb(204, 203, 203);
    margin-bottom: 20px;
    .pop-product-text {
      height: 80px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      .pop-product-name {
        transform: translateY(20px);
        width: 500px;
      }
      .pop-product-price{
        transform: translateY(50px);
      }
    }
  }
  .confirm-btn-wrap {
    margin-top: 40px;
    padding: 0 80px;
    .confirm-btn {
      width: 100%;
    }
  }
}
</style>
