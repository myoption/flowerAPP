const moduleShopCart = {
  namespaced: true,
  state: {
    // 购物车数据
    goodsInCart: [
      {
        'product_name': '年宵花水泥盆蝴蝶兰设计',
        'publish_status': '1',
        'summary': '年宵花水泥盆蝴蝶兰设计',
        'product_type': 2,
        'stock': 99997,
        'sale': 4,
        'sale_price': 52000,
        'format_sale_price': '520.00',
        'original_price': 68000,
        'format_original_price': '680.00',
        'shipping_price': 0,
        'format_shipping_price': '0.00',
        'updated_timestamp': null,
        'created_timestamp': 1612086744,
        'item_id': 393,
        'sku_id': 0,
        'sort': 36,
        'goodsNum': 1,
        'isChecked': false,
        'main_image': 'http://saidad.oss-cn-guangzhou.aliyuncs.com/image/7f0008089c9174ee43c81af2a25ce788.jpeg'
      }
    ],
    checkedList: []
  },
  mutations: {
    /**
     * @desc 添加到购物车数据
     * @param {*} state
     * @param {Object} item 商品基本信息 id 名称 价格等
     */
    addToCart (state, item) {
      state.goodsInCart.push(item)
      // console.log(state.goodsInCart)
    },
    /**
     * @desc 同步修改商品数量
     * @param {*} state
     * @param {*} info
     */
    changeCartGoodsNum (state, info) {
      state.goodsInCart.forEach(item => {
        if (item.item_id === info.item_id) {
          item.goodsNum = info.goodsNum
        }
      })
    },
    /**
     * @desc 全选 反选
     * @param {*} state
     * @param {Boolean} isChecked
     */
    toggleCheckBoxItem (state, isChecked) {
      state.goodsInCart.forEach(item => { item.isChecked = isChecked })
    },
    /**
     * @desc 删除购物车商品
     * @param {*} state
     */
    deleteCartItem (state) {
      const indexs = state.goodsInCart.map(item => {
        // 如果被勾选 则返回其索引
        if (item.isChecked === true) {
          const index = state.goodsInCart.indexOf(item)
          // console.log(index)
          if (index !== -1) {
            return index
          }
        }
      }
      )
      // 去除undefined
      // indexs = indexs.filter(item => item !== undefined)
      indexs.sort((a, b) => b - a)
      console.log(indexs)
      // 删除选中数据
      indexs.forEach(item => {
        state.goodsInCart.splice(item, 1)
      })
    },
    /**
     * @desc 单选改变选中状态
     * @param {*} state
     * @param {Number} item_id
     */
    changeOne (state, id) {
      console.log(id)
      // state.goodsInCart.forEach(item => {
      //   if (item.item_id === id) {
      //     item.isChecked = !item.isChecked
      //   }
      // })
    }
  },
  getters: {
    // 购物车红点显示的数量
    goodsNum: state => state.goodsInCart.length,
    // 被选中的数量
    checkedNum: state => {
      // state.checkedList = []
      state.checkedList = state.goodsInCart.filter(item => item.isChecked === true)
      return state.checkedList.length
    }
  }
}
export default moduleShopCart
