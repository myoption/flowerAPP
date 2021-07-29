<template>
  <div class="category-wrap">
    <div class="type-item type-item-left" @click="goToList">
      <van-icon name="gift-o" color="red" /><span>包月鲜花</span>
      </div>
    <div class="type-item type-item-right" @click="goToList">
      <van-icon name="goods-collect-o" color="red"/><span>礼品鲜花</span>
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
    goToList () {
      this.$router.push('/month-product')
    }
  }
}
</script>

<style lang="less" scoped>
.category-wrap {
  margin: 16px 24px;
  height: 12vh;
  display: flex;
  justify-content: space-between;
  .type-item {
    width: 46%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    vertical-align: middle;
    font-size: 40px;
    padding-left: 20px;
    color: rgba(161, 147, 147, .7);
    span {
      margin-left: 10px;
    }
  }
  .type-item-left {
    border-radius: 10% 0  0 10%;
  }
  .type-item-right {
    border-radius: 0 10%  10% 0;
  }
}
</style>
