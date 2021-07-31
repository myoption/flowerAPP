<template>
  <div class="main-header">
    <slot name="left">
      <div class="go-back-warp" v-if="showGoBack">
        <van-icon name="arrow-left" @click="goBack"/>
      </div>
    </slot>
    <div class="title van-ellipsis">{{title}}</div>
    <div class="more-icon"></div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'AWSL Flower'
    },
    showGoBack: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
.main-header {
  position: relative;
  height: 120px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  .title {
    margin: 0 120px;
    text-align: center;
    font-size: 38px;
  }
  .go-back-warp {
    position: absolute;
    left: 20px;
  }
}
</style>
