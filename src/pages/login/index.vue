<template>
  <div class="user-login">
    <div class="user-login-title">Welcome</div>
    <!-- <van-config-provider :theme-vars="themeVars"> -->
      <van-form @submit="onSubmit" class="login-form">
        <van-cell-group>
          <van-field
            v-model="params.name"
            name="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="params.pwd"
            :type="pwdType"
            name="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          >
          <!-- 自定义 眼睛图标
          1.绑定密码框的type属性
          2.在密码框使用插槽  由于icon标签不能直接提供点击事件，使用span标签包裹住.
          3.写好方法与变量
          -->
          <template #button>
            <span @click="isShowPwd">
              <van-icon name="closed-eye" v-show="show" color="rgb(235, 235, 235)"/>
              <van-icon name="eye-o" v-show="!show" color="rgb(235, 235, 235)"/>
            </span>
          </template>
          </van-field>
        </van-cell-group>
        <div class="login-btn-wrap">
          <van-button round block type="primary" native-type="submit" class="login-btn">
            登&nbsp;&nbsp;录
          </van-button>
        </div>
      </van-form>
    <!-- </van-config-provider> -->
  </div>
</template>

<script>
// import HeaderComponent from '../../components/header'
import * as config from '../../utils/config'
import * as request from './api'
import { mapMutations } from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
      // 自定义组件样式
      themeVars: {
        fieldInputTextColor: '#fff'
      },
      show: true,
      pwdType: 'password',
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjI2MTUwNTQwLCJleHAiOjE2MjYxNTA4NDB9.CXwYzwqP39wtkeTp3M0f7oxPYk3N0zVxKFkOh_xkp9w',
      user: {
      },
      params: {
        name: '',
        pwd: ''
      }
    }
  },
  components: {
  },
  methods: {
    ...mapMutations(['updateUserInfo']),
    async login () {
      const res = await request.logIn(this.params)
      const { token, user } = res.data
      if (res && res.errorCode === 0) {
        console.log('token', token)
        console.log('user', user)
        // 缓存用户信息
        localStorage.setItem(config.TOKENKEY, token)
        localStorage.setItem(config.USERINFO, JSON.stringify(user))
        // 提示登录成功
        this.$notify({ type: 'success', message: '登录成功' })
        // 处理跳转
        const rejectUrl = localStorage.getItem(config.REJECTURL)
        // 登录成功 需要重定向
        const path = rejectUrl || '/'
        // 删除重定向数据
        sessionStorage.removeItem(config.REJECTURL)
        // 更新用户数据
        this.updateUserInfo(user)
        // 使用replace 将当前path history 替换
        this.$router.replace(path)
      }
    },
    onSubmit () {
      this.login()
    },
    /**
     * @desc 控制密码显示与隐藏
     */
    isShowPwd () {
      this.show = !this.show
      if (this.show === true) {
        this.pwdType = 'password'
      } else {
        this.pwdType = 'text'
      }
    }
  }
}
</script>

<style lang="less" scoped>
.user-login {
  // 铺满屏幕
  height: 100vh;
  // 渐变背景se
  background: linear-gradient(-45deg, #3879c9, #6cc9b7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: 600;
  .login-form {
    margin: 0 40px;
    .van-cell-group{
      background-color: transparent;
      .van-cell {
        background-color: transparent;
        // 修改placeholder字体样式
        ::placeholder {
          color:rgb(235, 235, 235);
        }
        .van-cell__value {
          .van-field__body{
            .van-field__control,input{
               color:#fff;
            }
          }
        }
      }
    }
    .login-btn-wrap {
      margin: 50px 220px;
      .login-btn {
        background-color: transparent;
        border-color: #b4c0cf;
        // box-shadow: 0 0 12px 0;
        color: rgb(235, 235, 235)
      }
    }
  }

  .user-login-title {
    text-align: center;
    color: rgb(235, 235, 235);
    margin-bottom: 40px;
  }
// 修改输入框文字颜色 但是未生效
:root {
  --van-field-input-text-color: #fff;
}
}
</style>
