<template>
  <div class="tabbar-wrap">
    <van-tabbar >
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="search">发现</van-tabbar-item>
      <van-tabbar-item icon="friends-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
// import { ref } from 'vue'
export default {
/*   setup () {
    const active = ref(0)
    return { active }
  } */
}
</script>

<style lang="less" scoped>
.tabbar-wrap {
  height: 140px;
}
</style>
