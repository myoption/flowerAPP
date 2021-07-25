<template>
  <div class="article-detail-title">
    {{ info.content }}
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
.article-detail-title {
  font-size: 32px;
  padding: 0 20px;
  margin: 20px 0;
  line-height: 32px;
  font-weight: 600;
}
</style>
