<template>
  <div class="cart-warp">
    <!-- 顶部 -->
    <HeaderComponent title="购物车" :showGoBack="true"></HeaderComponent>
    <!-- 中间显示组件 -->
    <div class="product-to-pay">
      <div class="product-to-pay-edit">
        <van-button type="warning" @click="checkAll" size="small">全选</van-button>
        <van-button type="warning" @click="editProduct"  size="small" v-show="edit">编辑</van-button>
        <van-button type="warning" @click="editProduct"  size="small" v-show="!edit">完成</van-button>
      </div>
      <!-- <van-checkbox-group :key="index"  ref="checkboxGroup" v-model="checked"  v-for="(item, index) in goodsInCart"> -->
        <div class="checkbox-item-cart" :key="index" v-for="(item, index) in goodsInCart">
          <van-checkbox @click="changeOneCheck(item.item_id)" :name="item.item_id" class="checkbox-item"  v-model="item.isChecked">
            <div class="checkbox-item-box">
              <van-image
              width="80"
              height="80"
              fit="cover"
              :src="item.main_image"
              />
              <div class="checkbox-item-text">
                <span class="product-name van-multi-ellipsis--l2">{{item.product_name}}</span>
                <span>&yen;{{item.format_sale_price}}</span>
              </div>
            </div>
        </van-checkbox>
        <CountComponent
        :width="26"
        :title="''"
        :button-size="btnSize"
        class="checkbox-count"
        :value="item.goodsNum"
        :id="item.item_id"
        @numChange="changeNum"
        ></CountComponent>
        </div>
      <!-- </van-checkbox-group> -->
    </div>
    <!-- 底部 -->
    <CartFooterComponent :edit="edit"></CartFooterComponent>
  </div>
</template>

<script type="text/javascript">
import HeaderComponent from '../../../components/header'
import CountComponent from '../../../components/count'
import CartFooterComponent from './cartFooter.vue'
import { mapState, mapMutations } from 'vuex'

export default {
  data () {
    return {
      checked: true,
      btnSize: '24px',
      edit: true
    }
  },
  computed: {
    ...mapState('shopCart', {
      goodsInCart: state => state.goodsInCart
    })
  },
  components: {
    HeaderComponent,
    CountComponent,
    CartFooterComponent
  },
  methods: {
    ...mapMutations('shopCart', {
      changeCartGoodsNum: 'changeCartGoodsNum',
      toggleCheckBoxItem: 'toggleCheckBoxItem',
      changeOne: 'changeOne'
    }),
    /**
     * @desc 全选按钮
     */
    checkAll () {
      this.toggleCheckBoxItem(this.checked)
      // 取反
      this.checked = !this.checked
    },
    /**
     * @desc 当修改数据时，同步数据
     */
    changeNum (value, id) {
      this.changeCartGoodsNum({ item_id: id, goodsNum: value })
    },
    editProduct () {
      this.edit = !this.edit
    },
    /**
     * @desc 单选状态改变
     */
    changeOneCheck (id) {
      // console.log(id)
      this.changeOne(id)
    }
  }
}
</script>

<style lang="less" scoped>
.product-to-pay {
  height: calc(100vh - 230px);
  overflow: auto;
  padding: 0 20px;
  box-sizing: border-box;
  font-size: 28px;
  .product-to-pay-edit{
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
  }
  .checkbox-item-cart {
    display: flex;
    align-items: center;
    margin: 20px 0;
    background-color: #fff;
    height: 180px;
    border-radius: 12px;
    .product-name {
      width: 180px;
    }
    .checkbox-count {
      // transform: translateX(-20px);
      margin-right: 20px;
    }
    .checkbox-item {
      flex-grow: 1;
      .checkbox-item-box {
        display: flex;
        align-items: center;
        .checkbox-item-text {
          margin-left: 12px;
          span{
            margin: 10px 0;
          }
        }
      }
    }
  }
}
</style>
