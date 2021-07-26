<template>
  <div class="user-date-wrap">
    <div class="user-date user-date-left">
      <van-icon name="completed" color="rgba(5, 175, 138, 0.7)" /><span>收花日历</span>
    </div>
    <div class="user-date user-date-right">
      <van-icon name="goods-collect-o" color="rgba(5, 175, 138, 0.7)"/><span>近期福利</span>
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
.user-date-wrap {
  margin: 16px 24px;
  height: 12vh;
  display: flex;
  justify-content: space-between;
  .user-date {
    width: 46%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    vertical-align: middle;
    font-size:48px;
    padding-left: 20px;
    color: black;
    span {
      margin-right: 20px;
      font-size: 36px;
    }
  }
  .user-date-left {
    border-radius: 10% 0  0 10%;
  }
  .user-date-right {
    border-radius: 0 10%  10% 0;
  }
}
</style>
