<template>
  <div id="app">
    app
    <div class="link-wrap">
      <router-link to="/">to home</router-link>
      &nbsp;&nbsp;
      <router-link to="/a">page a</router-link>
      &nbsp;&nbsp;
      <router-link to="/b">page b</router-link>
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

<style>

</style>
