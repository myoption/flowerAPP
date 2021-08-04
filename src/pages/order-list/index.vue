<template>
  <div class="order-list-wrap">
    <HeaderComponent title="我的订单" :showGoBack="true"></HeaderComponent>
    <van-tabs v-model="activeName">
      <van-tab v-for="item in tabList" :key="item.name" :title="item.title" :name="item.name">
        <ListItemComponent :orderList="orderList"></ListItemComponent>
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
      activeName: '',
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
        page_size: 10
      }
    }
  },
  components: {
    HeaderComponent,
    ListItemComponent
  },
  created () {
    // 获取数据
    this.getOrderList()
  },
  methods: {
    async getOrderList () {
      const res = await apis.getOrderList()
      // console.log(res)
      if (res && res.errorCode === 0) {
        this.orderList = res.data.order_list.map(item => {
          return {
            ...item,
            keyId: nanoid()
          }
        })
        this.page_info = res.data.page_info
      }
    }
  }
}
</script>

<style lang="less" scoped>
.order-list-wrap {
  /deep/ .van-tabs__line {
    background-color: rgba(4, 138, 4, .8);
  }
}
</style>
