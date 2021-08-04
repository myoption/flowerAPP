<template>
  <div class="order-list-wrap">
    <HeaderComponent title="我的订单" :showGoBack="true"></HeaderComponent>
    <van-tabs v-model="active">
      <van-tab v-for="item in tabList" :key="item.name" :title="item.title" @click-tab="activeTab">
        <div class="god-father-wrap">
          <van-pull-refresh
          v-model="refresh"
          success-text="刷新成功"
          @refresh="onRefresh"
          class="pull-refresh"
          >
            <van-list
              v-model="loading"
              :finished="finished"
              finished-text="没有更多了"
              :immediate-check="false"
              @load="onLoad"
            >
            <!-- <van-cell> -->
              <ListItemComponent :orderList="orderList"></ListItemComponent>
            <!-- </van-cell> -->
            </van-list>
          </van-pull-refresh>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script type="text/javascript">
import HeaderComponent from '../../components/header'
import ListItemComponent from './list-item.vue'
import { nanoid } from 'nanoid'
import * as apis from './api'
export default {
  data () {
    return {
      offset: 5,
      active: 0,
      tabList: [
        {
          title: '全部',
          name: 'all'
        },
        {
          title: '待支付',
          name: 'unpaid'
        },
        {
          title: '待发货',
          name: 'unpackaged'
        },
        {
          title: '待收货',
          name: 'onTheWay'
        },
        {
          title: '已完成',
          name: 'signed'
        }
      ],
      orderList: [],
      page_info: {
        index: 1,
        count: 10
      },
      // 请求参数
      params: {
        // 0--全部 1--待支付 2--待发货 3--待收货 4--已完成
        statusCode: 0,
        currentPage: 1
      },
      // 是否刷新
      refresh: false,
      // 是否加载
      loading: false,
      // 数据是否全部请求
      finished: false
    }
  },
  components: {
    HeaderComponent,
    ListItemComponent
  },
  created () {
    // 获取查询类型
    const { statusCode } = this.$route.params
    if (statusCode) {
      this.active = statusCode
      this.params.statusCode = statusCode
    }
    // 获取数据
    this.getOrderList(this.params)
  },
  methods: {
    /**
     * @desc 请求数据
     */
    async getOrderList (params) {
      // console.log(params)
      const res = await apis.getOrderList(params)
      if (res && res.errorCode === 0) {
        const listRe = res.data.order_list.map(item => {
          return {
            ...item,
            keyId: nanoid()
          }
        })
        // 如果是首次请求 直接赋值 不需要 太复杂了
        // if (this.orderList.length === 0) {
        //   this.orderList = listRe
        // } else if (this.refresh === true) { // 如果是下拉刷新 则重新取值覆盖原来的list
        //   this.orderList = listRe
        // }
        this.orderList = this.orderList.concat(listRe)
        this.page_info = res.data.page_info
        this.refresh = false
        this.loading = false
        // this.finished = true
        if (this.orderList.length === this.page_info.count) {
          this.finished = true
        }
      }
    },
    onRefresh () {
      // 获取数据
      this.refresh = true
      // 清除原来的数据 以便存放刷新后获得的数据
      this.orderList = []
      this.page_info = {}
      this.getOrderList(this.params)
    },
    activeTab (val) {
      console.log(val)
    },
    onLoad () {
      console.log('加载更多')
      this.loading = true
      // 页码加1
      this.params.currentPage += 1
      this.getOrderList(this.params)
    }
  }
}
</script>

<style lang="less" scoped>
.order-list-wrap {
  /deep/ .van-tabs__line {
    background-color: rgba(4, 138, 4, .8);
  }
.god-father-wrap {
    height: 500px;
  }
  /deep/ .van-list {
    flex-direction: column;
  }
}
</style>
