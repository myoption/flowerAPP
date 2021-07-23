<template>
  <div class="user-login">
    <h3 class="title">用户登录页面</h3>
    <div class="btn-wrap">
      <van-button type="primary" @click="increasement">登录</van-button>
    </div>
  </div>
</template>

<script>
import * as config from '../../utils/config'
export default {
  name: 'Login',
  data () {
    return {
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjI2MTUwNTQwLCJleHAiOjE2MjYxNTA4NDB9.CXwYzwqP39wtkeTp3M0f7oxPYk3N0zVxKFkOh_xkp9w',
      user: {
        name: 'hello world',
        age: 12,
        id: '10001',
        avatar: ''
      }
    }
  },
  methods: {
    login () {
      const { token, user } = this
      // 缓存用户信息
      localStorage.setItem(config.TOKENKEY, token)
      localStorage.setItem(config.USERINFO, JSON.stringify(user))
      // 处理跳转
      const rejectUrl = localStorage.getItem(config.REJECTURL)
      // 登录成功 需要重定向
      const path = rejectUrl || '/'
      // 使用replace 将当前path history 替换
      this.$router.replace(path)
    }
  }
}
</script>
