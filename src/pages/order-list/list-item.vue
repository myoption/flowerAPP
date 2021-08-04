<template>
  <div class="order-list-item-wrap van-clearfix">
    <van-row>
      <van-col v-for="item in orderList" :key="item.keyId">
        <div class="order-list-item-box">
          <div class="title-time">{{item.order_sn | timeFormat}}</div>
          <van-card
            :num="item.total_product_count"
            :price="item.format_pay_price"
            desc="描述信息"
            :title="item.product_list[0].product_name"
            :thumb="item.product_list[0].main_image"
          >
            <template #tags>
              <van-tag plain type="danger">订单状态：{{item.order_status | orderStatusFormat}}</van-tag>
            </template>
            <template #footer>
              <span class="footer-text">共计{{item.total_product_count}}件，总价&yen;{{item.format_product_total_price}}</span>
              <van-button size="mini" class="del-btn" type="danger">删除</van-button>
            </template>
          </van-card>
        </div>
      </van-col>
    </van-row>

  </div>
</template>

<script type="text/javascript">

export default {
  props: {
    orderList: {
      type: Array
    }
  },
  data () {
    return {
    }
  },
  components: {
  },
  methods: {
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
    height: calc(100vh - 340px);
    overflow: auto;
    box-sizing: border-box;
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
