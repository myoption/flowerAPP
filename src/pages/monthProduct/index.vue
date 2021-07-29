<template>
  <div class="month-product-wrap">
    <HeaderComponent title="订花" :showGoBack="true">
    </HeaderComponent>
    <!-- tab标签 -->
    <div class="tab-wrap">
      <van-tabs>
        <van-tab v-for="(item, index) in tabs" :key="index " :title="item.label" >
          <div class="img-wrap">
            <van-image
            height="180"
            fit="cover"
            :src="item.src"
            />
          </div>
          <FilterComponent></FilterComponent>
          <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
          >
          <FilterListComponent :list="list"></FilterListComponent>
          </van-list>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script type="text/javascript">
import HeaderComponent from '../../components/header'
import FilterComponent from './index/filter-component.vue'
import FilterListComponent from './index/filter-list.vue'
import * as request from '../home/api'
export default {
  data () {
    return {
      loading: false,
      finished: true,
      list: [],
      page_info: {},
      tabs: [
        {
          name: 'month',
          label: '包月鲜花',
          src: 'http://saidad.oss-cn-guangzhou.aliyuncs.com/image/b77d1bfb872925b89ff50506ce417125.jpeg'
        },
        {
          name: 'gift',
          label: '礼品鲜花',
          src: 'http://saidad.oss-cn-guangzhou.aliyuncs.com/image/eb209ef395fe09dc0db6a36ba2c2a5ca.jpeg'
        }
      ]
    }
  },
  components: {
    HeaderComponent,
    FilterComponent,
    FilterListComponent
  },
  methods: {
    onLoad () {

    },
    async getProductList () {
      const res = await request.getProductList()
      // console.log(res)
      if (res && res.errorCode === 0) {
        this.page_info = res.data.page_info
        this.list = res.data.product_list
      }
    }
  },
  mounted () {
    this.getProductList()
  }
}
</script>

<style lang="less" scoped>
.month-product-wrap {
  height: 100vh;
  padding-bottom: 110px;
  overflow: auto;
  box-sizing: border-box;
  .tab-wrap {
    border-top: 1px solid rgba(0, 0, 0,0.1);
    padding: 0 20px;
    .img-wrap {
      margin-top: 20px;
    }
    // 样式穿透
    /deep/.van-tab {
      background-color: rgba(0, 0, 0,0.15);
    }
    /deep/.van-tab--active {
      background-color: #fff;
    }
    /deep/.van-tabs__line {
      background-color: green;
    }
  }
}
</style>
