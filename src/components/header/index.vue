<template>
  <div class="main-header">
    <div class="back-warp"></div>
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
}
</style>
