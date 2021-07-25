<template>
  <div class="tabbar-wrap">
    <!-- 路由模式切换按钮和页面 -->
    <van-tabbar route>
      <van-tabbar-item  to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item  to="/found" icon="search">发现</van-tabbar-item>
      <van-tabbar-item  to="/user" icon="friends-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.tabbar-wrap {
  height: 100px;
  position: fixed;
  bottom: 0;
}
</style>
