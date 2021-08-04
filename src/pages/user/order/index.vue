<template>
  <div class="user-order-wrap">
    <div class="user-order-title" @click="toOrderList">
      <span>我的订单</span>
      <van-icon name="arrow"/>
    </div>
    <div class="user-order-info">
      <!-- 使用循环渲染 -->
      <div class="user-order-icon" v-for="icon in entrys" :key="icon.statusCode">
        <van-icon :name="icon.icon" class="user-order-circle"/>
        <span>{{ icon.name }}</span>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {
      entrys: [
        {
          name: '待支付',
          icon: 'pending-payment',
          statusCode: 0
        },
        {
          name: '待发货',
          icon: 'free-postage',
          statusCode: 1
        },
        {
          name: '待收货',
          icon: 'logistics',
          statusCode: 2
        },
        {
          name: '已完成',
          icon: 'sign',
          statusCode: 3
        }
      ]
    }
  },
  components: {
  },
  methods: {
    toOrderList (query = 'all') {
      // 跳转到order list
      this.$router.push('/order-list')
    }
  }
}
</script>

<style lang="less" scoped>
.user-order-wrap {
  font-size: 36px;
  margin: 20px 0;
  background-color: #fff;
  margin: 0 20px;
  overflow: hidden;
  .user-order-title {
    margin: 20px 0 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 20px;
    color: rgba(65, 62, 62, .7);
    span {
      color: black;
    }
  }
  .user-order-info {
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    font-size: 28px;
    .user-order-icon {
      margin: 20px 0;
      .user-order-circle {
        width: 80px;
        height: 80px;
        line-height: 80px;
        border-radius: 40px;
        background-color: rgba(108, 223, 198, 0.5);
        font-size: 60px;
        color:  rgba(5, 175, 138, 0.7);
      }
      span{
        display: block;
      }
    }
  }
}
</style>
