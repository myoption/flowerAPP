<template>
  <div id="app">
    <div class="link-wrap">
    </div>
    <!-- 渲染不销毁组件 -->
    <keep-alive v-if="route.meta.keepAlive">
      <router-view></router-view>
    </keep-alive>
    <!-- 渲染可销毁组件 -->
    <router-view v-else></router-view>
    <!-- 渲染tabbar -->
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from './components/tabbar'
export default {
  name: 'App',
  components: {
    Tabbar
  },
  computed: {
    route () {
      return this.$route
    }
  },
  mounted () {
    // console.log(this)
  }
}
</script>

<style lang="less" scoped>
#app {
  background-color: #F4F4F4;
  // 高度为设备高度
  height: 100vh;
}
</style>
