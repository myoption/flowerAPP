<template>
  <div class="main-header">
    <!--
    <HeaderComponent title="文章详情">
      slot传入返回按钮
      <div class="go-back-warp" slot="left">
        <van-icon name="revoke" @click="goBack"/>
      </div>
    </HeaderComponent>
     -->
    <slot name="left"></slot>
    <div class="title">{{title}}</div>
    <div class="more-icon"></div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'AWSL Flower'
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
