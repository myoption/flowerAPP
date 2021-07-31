<template>
  <div class="month-product-wrap">
    <HeaderComponent title="订花" :showGoBack="true">
    </HeaderComponent>
    <!-- tab标签 -->
    <div class="tab-wrap">
      <van-tabs @change="tabChange" v-model="active">
        <van-tab v-for="(item, index) in tabs" :key="index " :title="item.label" class="tab-list">
          <div class="img-wrap">
            <van-image
            height="180"
            fit="cover"
            :src="item.src"
            />
          </div>
          <FilterComponent @priceChange="filterPrice"></FilterComponent>
          <!-- 下拉刷新组件 -->
          <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <van-list
              v-model="loading"
              :finished="pageData[item.key].finished"
              finished-text="没有更多了"
              @load="getProductList"
            >
            <FilterListComponent :list="pageData[item.key].list" ></FilterListComponent>
            </van-list>
          </van-pull-refresh>
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
      active: 0,
      loading: false,
      finished: true,
      loadMore: false,
      refreshing: false,
      list: [],
      page_info: {},
      tabs: [
        {
          key: 'month',
          label: '包月鲜花',
          src: 'http://saidad.oss-cn-guangzhou.aliyuncs.com/image/b77d1bfb872925b89ff50506ce417125.jpeg'
        },
        {
          key: 'gift',
          label: '礼品鲜花',
          src: 'http://saidad.oss-cn-guangzhou.aliyuncs.com/image/eb209ef395fe09dc0db6a36ba2c2a5ca.jpeg'
        }
      ],
      pageData: {
        month: {
          list: [],
          page_info: { index: 1, count: 10 },
          filterObj: {},
          finished: false
        },
        gift: {
          list: [],
          page_info: { index: 1, count: 10 },
          filterObj: {},
          finished: true
        }
      }
    }
  },
  components: {
    HeaderComponent,
    FilterComponent,
    FilterListComponent
  },
  methods: {
    /**
     * @desc 加载数据公共入口
     */
    async getProductList () {
      this.loadMore = true
      this.tabChange()
    },
    /**
     * @desc 下拉刷新
     */
    onRefresh () {
      const { currentKey } = this
      // 无数据
      const initPageInfo = {
        list: [],
        page_info: { index: 1, count: 10 }
      }
      // 情况数据 更新对应tab的页面数据 然后调用加载更多
      this.pageData[currentKey] = {
        ...this.pageData[currentKey],
        ...initPageInfo
      }
      console.log('下拉刷新')
      this.tabChange()
    },
    /**
     * @desc 接收子组件的传值
     */
    filterPrice (filterObj) {
      // console.log(filterObj)
      const { currentKey } = this
      // 无数据
      const initPageInfo = {
        list: [],
        page_info: { index: 1, count: 10 },
        filterObj
      }
      // 情况数据 更新对应tab的页面数据 然后调用加载更多
      this.pageData[currentKey] = initPageInfo
      this.tabChange()
    },
    /**
     * @desc tab切换事件
     */
    tabChange () {
      const { currentKey, pageData, loadMore } = this
      const info = pageData[currentKey]
      const params = {
        ...info.page_info,
        ...info.filterObj
      }
      // 如果是下拉加载 更新请求参数
      if (loadMore) {
        // console.log('more')
        params.index = info.page_info.index + 1
        // 是否完成根据接口 has_more 取反
        // info.finished = true
      }
      currentKey === 'month' ? this.loadMonthInfo(params) : this.loadGiftInfo(params)
      // 处理刷新状态
      this.refreshing = false
      this.loadMore = false
    },
    /**
     * @desc 请求gift列表数据
     */
    async loadGiftInfo (pageInfo) {
      // console.log('gift')
      const res = await request.getProductList(pageInfo)
      this.pageData.gift.loading = false
      this.pageData.gift.finished = true
      // console.log(res)
      if (res && res.errorCode === 0) {
        this.pageData.gift.page_info = res.data.page_info
        // 数据合并
        this.pageData.gift.list = [...this.pageData.gift.list, ...res.data.product_list]
      }
    },
    /**
     * @desc 请求month列表数据
     */
    async loadMonthInfo (pageInfo) {
      // console.log('month')
      const res = await request.getProductList(pageInfo)
      this.pageData.month.loading = false
      this.pageData.month.finished = true
      // console.log('res', res)
      if (res && res.errorCode === 0) {
        this.pageData.month.page_info = res.data.page_info
        // 是否有更多数据 有的话 finished == fasle
        // this.pageData[tabKey].finished = !page_info.has_more
        this.pageData.month.list = [...this.pageData.month.list, ...res.data.product_list]
      }
    }
  },
  mounted () {
    this.tabChange()
  },
  computed: {
    /**
     * @desc 计算当前key
     */
    currentKey () {
      // 提高性能
      const { active, tabs } = this
      return tabs[active].key
    }
  }
}
</script>

<style lang="less" scoped>
.month-product-wrap {
  // 去除外面盒子的高度
  // height: 100vh;
  // padding-bottom: 110px;
  // overflow: auto;
  // box-sizing: border-box;
  // 给滚动区域设置高度
  .tab-list {
    height: calc(100vh - 300px);
    overflow: auto;
  }
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
