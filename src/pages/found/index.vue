<template>
  <div class="found-wrap">
    <!-- 属性不绑定 直接传值 -->
    <HeaderComponent title="发现"></HeaderComponent>
    <List
    v-for="item in list"
    :key="item.nanoid"
    ></List>
  </div>
</template>

<script type="text/javascript">
import HeaderComponent from '../../components/header'
import List from './list'
import * as request from './api'
import { nanoid } from 'nanoid'
export default {
  data () {
    return {
      list: [], // 页面列表数据
      // 分页参数
      page_info: {
        index: 1,
        page_size: 10
      }
    }
  },
  components: {
    List,
    HeaderComponent
  },
  methods: {
    async getFoundList () {
      const res = await request.getFoundList()
      if (res && res.errorCode === 0) {
        const { feed_info_list, page_info } = res.data
        // 手动添加id
        this.list = feed_info_list.map(item => ({ ...item, nanoid: nanoid() }))
        this.page_info = page_info
      }
      // console.log('found', res)
    }
  },
  mounted () {
    this.getFoundList()
  }
}
</script>

<style lang="less" scoped>
.found-wrap {
  height: 100vh;
  // padding-bottom: 110px;
  box-sizing: border-box;
  overflow: auto;
}
</style>
