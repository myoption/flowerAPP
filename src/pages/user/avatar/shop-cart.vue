<template>
  <div class="shop-cart-box">
    <div class="shop-cart-radius">
      <van-icon name="shopping-cart-o" color="white"  badge="9"/>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {
    }
  },
  components: {
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
.shop-cart-radius{
  display: flex;
  width: 100px;
  height: 60px;
  border-radius: 30px;
  background-color: rgba(5, 175, 138, 0.7);
  justify-content: center;
  align-items: center;
}
</style>
