/**
 * @desc 请求购物车数据的接口
 * @param {*} request
 * @param {*} response
 */
const getShopCartList = (request, response) => {
  const list = [
    {
      'base_info': {
        'product_name': '进口花伴手礼小花束',
        'publish_status': '1',
        'summary': '进口花伴手礼小花束',
        'product_type': 2,
        'stock': 99996,
        'sale': 7,
        'sale_price': 25800,
        'format_sale_price': '258.00',
        'original_price': 29800,
        'format_original_price': '298.00',
        'shipping_price': 0,
        'format_shipping_price': '0.00',
        'updated_timestamp': null,
        'created_timestamp': 1610858927,
        'item_id': 378,
        'sku_id': 0,
        'sort': 37,
        'main_image': 'http://saidad.oss-cn-guangzhou.aliyuncs.com/image/eb209ef395fe09dc0db6a36ba2c2a5ca.jpeg'
      },
      'specifications': null,
      'galley_image_list': null,
      'brand_story': null,
      'care_instructions': null,
      'special_note': null,
      'logistics_desc': null,
      'after_sale_instructions': null,
      'purchase_note': null,
      'detail': null
    }, {
      'base_info': {
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
        'main_image': 'http://saidad.oss-cn-guangzhou.aliyuncs.com/image/7f0008089c9174ee43c81af2a25ce788.jpeg'
      },
      'specifications': null,
      'galley_image_list': null,
      'brand_story': null,
      'care_instructions': null,
      'special_note': null,
      'logistics_desc': null,
      'after_sale_instructions': null,
      'purchase_note': null,
      'detail': null
    }, {
      'base_info': {
        'product_name': '年宵花蝴蝶兰盆栽设计',
        'publish_status': '1',
        'summary': '年宵花蝴蝶兰盆栽设计',
        'product_type': 2,
        'stock': 99998,
        'sale': 2,
        'sale_price': 52000,
        'format_sale_price': '520.00',
        'original_price': 68000,
        'format_original_price': '680.00',
        'shipping_price': 0,
        'format_shipping_price': '0.00',
        'updated_timestamp': null,
        'created_timestamp': 1612086177,
        'item_id': 392,
        'sku_id': 0,
        'sort': 36,
        'main_image': 'http://saidad.oss-cn-guangzhou.aliyuncs.com/image/58de02e0c1f3480bf2190c5e944ddefb.jpeg'
      },
      'specifications': null,
      'galley_image_list': null,
      'brand_story': null,
      'care_instructions': null,
      'special_note': null,
      'logistics_desc': null,
      'after_sale_instructions': null,
      'purchase_note': null,
      'detail': null
    }
  ]
  const result = {
    'errorCode': 0,
    'errorMessage': 'success',
    'data': {
      'product_list': list,
      'page_info': {
        'page_size': 10,
        'index': 1,
        'has_more': true,
        'count': 10
      }
    },
    'success': true
  }
  response.json(result)
}
/**
 * @desc 添加到购物车
 * @param {*} request
 * @param {*} response
 */
const addShopCart = (request, response) => {
  const result = {
    'errorCode': 0,
    'errorMessage': 'success',
    'data': true,
    'success': true
  }
  response.json(result)
}
/**
 * @description 删除商品
*/
const removeShopCart = (request, response) => {
  const result = {
    'errorCode': 0,
    'errorMessage': 'success',
    'data': true,
    'success': true
  }
  response.json(result)
}

const ShopCartMockAPI = app => {
  app.get('/mock/shopcart/getShopCartList', getShopCartList)
  app.post('/mock/shopcart/addShopCart', addShopCart)
  app.post('/mock/shopcart/removeShopCart', removeShopCart)
}

module.exports = ShopCartMockAPI
