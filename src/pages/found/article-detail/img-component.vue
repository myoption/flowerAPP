<template>
  <div class="article-detail-img">
    <van-image
    width="100%"
    height="180"
    fit="cover"
    :src="info.src"
    />
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    info: Object
  }
}
</script>

<style lang="less" scoped>
.article-detail-img {
  margin: 10px 0;
}
</style>
