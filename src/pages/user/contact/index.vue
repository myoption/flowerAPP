<template>
  <div class="user-contact-wrap">
      <span>联系我们</span>
      <div class="user-contact-right">
        <span>客服电话</span>
        <van-icon name="arrow" />
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
.user-contact-wrap {
  font-size: 36px;
  margin: 20px 20px;
  background-color: #fff;
  height: 8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  border-radius: 20px;
  .user-contact-right {
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(65, 62, 62, .7);
  }
}
</style>
