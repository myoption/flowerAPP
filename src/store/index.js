import Vue from 'vue'
import Vuex from 'vuex'
import a from './a'
import b from './b'
// import * as types from './types' mutations type  属性名表达式 [types.DEINCREASE] () {xxx}
// 引入vuex持久化
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)
const modules = {
  a,
  b
}
// 持久化数据

// 创建store
const store = new Vuex.Store({
  modules,
  plugins: [createPersistedState({
    key: '$vuex'
  })]
})

export default store
