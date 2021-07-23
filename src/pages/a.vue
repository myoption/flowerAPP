<template>
  <div class="a">
    <h3 class="title">page a</h3>
    <van-button type="primary" @click="logOut">退出登录</van-button>
  </div>
</template>

<script>
import * as config from '../utils/config'
export default {
  methods: {
    async logOut () {
      const res = await this.$axios.post('/mock/user/logout')
      if (res && res.errorCode === 0) {
        this.clearChache()
      }
    },
    clearChache () {
      const keys = [
        config.TOKENKEY,
        config.USERINFO
      ]
      // 清除缓存
      keys.map(key => localStorage.removeItem(key))
    }
  }
}
</script>

<style lang="less">
.title {
  font-size: 60px;
}
</style>
