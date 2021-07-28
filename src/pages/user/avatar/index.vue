<template>
  <van-row type="flex" justify="space-between" class="user-avatar-wrap" align="center" >
    <van-col span="16">
      <van-row type="flex" justify="flex-start" align="center">
        <van-col span="10" class="user-avatar">
          <van-image
            round
            width="60"
            height="60"
            :src="userInfo.avatar"
          />
        </van-col>
        <van-col span="8" class="user-name van-ellipsis">{{userInfo.nick_name}}</van-col>
      </van-row>
    </van-col>
    <van-col span="6" class="shop-cart">
      <ShopCart></ShopCart>
    </van-col>
  </van-row>
</template>

<script type="text/javascript">
import ShopCart from './shop-cart.vue'
export default {
  props: ['userInfo'],
  data () {
    return {
    }
  },
  components: {
    ShopCart
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
.user-avatar-wrap {
  border-top: 1px solid rgba(0, 0, 0, .05);
  margin: 20px 24px;
  background: rgba(255, 255, 255, 1);
  .user-name{
    font-size: 36px;
    color: rgba(0, 0, 0, .85);
    font-weight: 500;
  }
  .user-avatar{
    display: flex;
    justify-content: center;
    margin: 20px 0;
  }
  .shop-cart {
    display: flex;
    justify-content: flex-end;
    // margin-right: 40px; 用这个属性容易失真
    transform: translateX(-40px);
  }
}
</style>
