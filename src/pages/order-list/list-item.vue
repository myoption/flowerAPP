<template>
  <div class="order-list-item-wrap">
    <div class="order-list-item-box" v-for="item in orderList" :key="item.keyId">
      <div class="title-time">{{item.order_sn | timeFormat}}</div>
      <van-card
        :num="item.total_product_count"
        :price="item.format_pay_price"
        desc="描述信息"
        :title="item.product_list[0].product_name"
        :thumb="item.product_list[0].main_image"
      >
        <template #footer>
          <span>共计{{item.total_product_count}}件，总价&yen;{{item.format_product_total_price}}</span>
          <van-button size="mini">删除</van-button>
        </template>
      </van-card>
    </div>
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
    height: 60px;
    line-height: 60px;
    background-color: #FAFAFA;
    font-size: 28px;
    text-indent: 20px;
  }
  /deep/.van-card {
    margin-top: 0;
    padding-top: 0;
  }
}
</style>
