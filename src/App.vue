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
    <!-- 登录页不显示 -->
    <Tabbar v-show="isShowTabbar()"></Tabbar>
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
  },
  methods: {
    isShowTabbar () {
      // 这样更简洁
      const names = ['Login', 'ProductDetail']
      return !names.includes(this.route.name)
    }
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
