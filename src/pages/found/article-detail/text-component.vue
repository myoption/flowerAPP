<template>
  <div class="article-detail-text">
    {{ info.content }}
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    info: {
      type: Object
    }
  }
}
</script>

<style lang="less" scoped>
.article-detail-text {
  font-size: 32px;
}
</style>
