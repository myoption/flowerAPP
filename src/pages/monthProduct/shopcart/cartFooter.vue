<template>
  <div class="cart-footer-wrap">
    <van-button type="danger"  @click="deleteItem" size="small" v-show="!edit" class="btn" :disabled="disabled">删除</van-button>
    <van-button type="danger"   @click="toPay" size="small" v-show="edit" class="btn" :disabled="disabled">去结算</van-button>
  </div>
</template>

<script type="text/javascript">
import { mapMutations, mapGetters } from 'vuex'
export default {
  props: {
    edit: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      // disabled: false
    }
  },
  computed: {
    ...mapGetters('shopCart', {
      checkedNum: 'checkedNum',
      isDisabled: 'isDisabled'
    }),
    disabled: function () {
      if (this.checkedNum === 0) {
        return true
      }
      return false
    }
  },
  // 当切换页面时 数据无变化 会使用默认值 导致bug 有勾选时按钮也不可用
  // watch: {
  //   checkedNum (val) {
  //     if (val === 0) {
  //       this.disabled = true
  //       return
  //     }
  //     this.disabled = false
  //   }
  // },
  methods: {
    ...mapMutations('shopCart', {
      deleteCartItem: 'deleteCartItem'
    }),
    toPay () {
      this.$router.push('/immediately-to-pay')
    },
    deleteItem () {
      this.deleteCartItem()
    }
  }
}
</script>

<style lang="less" scoped>
.cart-footer-wrap{
  position: fixed;
  bottom: 0px;
  width: 100%;
  margin: 0 auto;
  background-color: #fff;
  height: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  box-shadow: 0 0 12px 0 #ddd;
  /deep/ .btn {
    transform: translateX(-20px);
    width: 140px;
  }
}
</style>
