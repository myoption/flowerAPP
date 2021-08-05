<template>
  <div class="order-list-item-wrap">
        <div class="order-list-item-box" v-for="item in orderList" :key="item.key">
          <!-- 过滤器已经废弃 -->
          <!-- <div class="title-time">{{item.order_sn | timeFormat}}</div> -->
          <div class="title-time">{{ formatDate(item.created_timestamp)}}</div>
          <van-card
            :num="item.total_product_count"
            :price="item.format_pay_price"
            desc="描述信息"
            :title="item.product_list[0].product_name"
            :thumb="item.product_list[0].main_image"
          >
            <template #tags>
              <van-tag plain type="danger">订单状态：{{ orderStatus[item.order_status] }}</van-tag>
            </template>
            <template #footer>
              <span class="footer-text">共计{{item.total_product_count}}件，总价&yen;{{item.format_product_total_price}}</span>
              <div class="btn-wrap">
                <van-button size="mini" class="del-btn"
                v-for="(btnItem, key) in btnStatus[item.order_status]"
                :key="key"
                :type="btnItem.type"
                @click="handler(btnItem.operationKey)"
                >{{btnItem.text}}</van-button>
              </div>
            </template>
          </van-card>
        </div>
  </div>
</template>

<script type="text/javascript">
import * as config from './orderConfig'
import * as apis from './api'
import moment from 'moment'
export default {
  props: {
    orderList: {
      type: Array
    }
  },
  data () {
    return {
      orderStatus: config.ORDERSTATUSTEXT,
      btnStatus: config.ORDERSTATUSBUTTON
    }
  },
  components: {
  },
  methods: {
    /**
     * @desc 格式化时间
     */
    formatDate (date) {
      return moment(date * 1000).format('YYYYMMDD hh:mm:ss')
    },
    /**
     * @desc 按钮调用对应方法
     */
    async handler (fnName) {
      // 调用对应的方法
      const res = await apis[fnName]()
      if (res && res.errorCode === 0) {
        this.$toast({
          type: 'success',
          message: res.message
        })
      }
    }
  },
  filters: {
    /**
     * @desc 时间格式化
     */
    timeFormat (val) {
      const y = val.slice(0, 4)
      const m = val.slice(4, 6).padStart(2, '0')
      const d = val.slice(6, 8).padStart(2, '0')
      const hh = val.slice(8, 10).padStart(2, '0')
      const mm = val.slice(10, 12).padStart(2, '0')
      const ss = val.slice(12, 14).padStart(2, '0')
      return `${y}-${m}-${d}  ${hh}:${mm}:${ss}`
    },
    /**
     * @desc 订单状态格式化
     */
    orderStatusFormat (val) {
      let status = ''
      switch (val) {
        case 60:
          status = '待支付'
          break
        case 70:
          status = '待发货'
          break
        case 80:
          status = '待收货'
          break
        case 90:
          status = '已完成'
          break
      }
      return status
    }
  }
}
</script>

<style lang="less" scoped>
.order-list-item-wrap {
    margin-top: 20px;
    background-color: #F4F4F4;
    padding: 0 20px;
  .order-list-item-box {
    margin-top: 32px;
    box-shadow: 0 0 12px 0 #dedede;
    }
  .title-time {
    height: 66px;
    line-height: 66px;
    background-color: #FAFAFA;
    font-size: 28px;
    text-indent: 20px;
  }
  /deep/.van-card {
    margin-top: 0;
    padding-top: 0;
  }
  /deep/ .van-card__desc {
    margin: 4px 0;
  }
  /deep/ .van-card__footer {
    display: flex;
    margin-top: 6px;
    justify-content: space-between;
    align-items: center;
    .footer-text {
      font-size: 14px;
      font-weight: 600;
    }
    .del-btn {
      border-radius: 6px;
    }
  }
}
</style>
