<template>
  <div class="shopcart-wrap">
    <!-- 路由模式切换按钮和页面 -->
    <van-tabbar route>
      <van-tabbar-item  to="/my-shopcart" class="tabbar-item-left">
      <span class="my-shopcart">
        <van-icon name="cart-o" color="#1989fa" badge="9"/>
      </span>
      </van-tabbar-item>
      <van-tabbar-item>
      <van-button
      round
      type="warning"
      class="btn btn-to-add"
      @click="openPopup"
      >添加到购物车</van-button>
      </van-tabbar-item>
      <van-tabbar-item  to="/immediately-to-pay">
      <van-button round type="danger" class="btn btn-to-pay" >立即购买</van-button>
      </van-tabbar-item>
    </van-tabbar>
    <AddToMyCartComponent :show="show" @close-popup="closePopup" :info="info"></AddToMyCartComponent>
  </div>
</template>

<script>
import AddToMyCartComponent from './addToMyShopCart'
export default {
  props: {
    info: {
      type: Object
    }
  },
  components: {
    AddToMyCartComponent
  },
  data () {
    return {
      show: false
    }
  },
  computed: {
    // show:
  },
  methods: {
    openPopup () {
      // console.log('click')
      this.show = true
      // console.log(this.show)
    },
    closePopup (isClosed) {
      // console.log(isClosed)
      this.show = isClosed
    }
  }
}
</script>

<style lang="less" scoped>
.shopcart-wrap {
  height: 100px;
  position: fixed;
  bottom: 0;
  font-size: 32px;
  .my-shopcart {
    font-size: 60px;
  }
  .tabbar-item-left {
    margin-left: -80px;
  }
  .btn {
    width: 240px;
    height: 70px;
    border: none;
  }
}
</style>
