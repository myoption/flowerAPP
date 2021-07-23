<template>
  <div>
    to home
    <div class="count-wrap">count:{{info}}</div>
    <van-button type="primary" @click="increasement">增加</van-button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import * as request from './api'
export default {
  name: 'Home',
  data () {
    return {}
  },
  // 注意模块后的用法
  computed: {
    ...mapState({
      info: state => state.a.count
    })
  },
  methods: {
    // a模块下的Mutations中increasement 方法
    ...mapMutations('a', {
      increasement: 'increasement'
    }),
    async getProductList () {
      const res = await request.getProductList()
      console.log('res', res)
    }
  },
  mounted () {
    console.log('home', this)
    this.getProductList()
  }
}
</script>
