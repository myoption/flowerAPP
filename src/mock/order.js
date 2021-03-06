/**
 * @desc 获取订单列表
 * @param {*} request
 * @param {*} response
 */
const getOrderList = (request, response) => {
  const { query } = request
  console.log(query)
  // 订单列表
  const list = [{
    'product_list': [{
      'item_id': 289,
      'sku_id': 0,
      'product_name': '鲜花',
      'product_price': 90,
      'format_product_price': '0.90',
      'count': 1,
      'main_image': 'https://img01.hua.com/uploadpic/newpic/9012092.jpg_220x240.jpg'
    }],
    'created_timestamp': 1606053880,
    'pay_status': 0,
    'order_status': 60,
    'total_product_count': 1,
    'order_sn': '202011221404409316254',
    'order_id': 2708,
    'close_countdown': null,
    'shipping_info': {
      'receiver': '高富帅',
      'address': '详细地址',
      'phone': '15276513544',
      'province': '上海市',
      'city': '上海城区',
      'area': '黄浦区'
    },
    'shipping_word': '订单已于2020-11-22 14:38:01超时未支付关闭',
    'product_total_price': 90,
    'discount_price': 0,
    'shipping_price': 0,
    'pay_price': 90,
    'format_product_total_price': '0.90',
    'format_discount_price': '0.00',
    'format_shipping_price': '0.00',
    'format_pay_price': '0.90'
  },
  {
    'product_list': [{
      'item_id': 289,
      'sku_id': 0,
      'product_name': '鲜花',
      'product_price': 90,
      'format_product_price': '0.90',
      'count': 1,
      'main_image': 'https://img01.hua.com/uploadpic/newpic/9012092.jpg_220x240.jpg'
    }],
    'created_timestamp': 1606053880,
    'pay_status': 0,
    'order_status': 60,
    'total_product_count': 1,
    'order_sn': '202011221404409316254',
    'order_id': 2708,
    'close_countdown': null,
    'shipping_info': {
      'receiver': '高富帅',
      'address': '详细地址',
      'phone': '15276513544',
      'province': '上海市',
      'city': '上海城区',
      'area': '黄浦区'
    },
    'shipping_word': '订单已于2020-11-22 14:38:01超时未支付关闭',
    'product_total_price': 90,
    'discount_price': 0,
    'shipping_price': 0,
    'pay_price': 90,
    'format_product_total_price': '0.90',
    'format_discount_price': '0.00',
    'format_shipping_price': '0.00',
    'format_pay_price': '0.90'
  },
  {
    'product_list': [{
      'item_id': 289,
      'sku_id': 0,
      'product_name': '鲜花',
      'product_price': 90,
      'format_product_price': '0.90',
      'count': 1,
      'main_image': 'https://img01.hua.com/uploadpic/newpic/9012092.jpg_220x240.jpg'
    }],
    'created_timestamp': 1606053880,
    'pay_status': 0,
    'order_status': 60,
    'total_product_count': 1,
    'order_sn': '202011221404409316254',
    'order_id': 2708,
    'close_countdown': null,
    'shipping_info': {
      'receiver': '高富帅',
      'address': '详细地址',
      'phone': '15276513544',
      'province': '上海市',
      'city': '上海城区',
      'area': '黄浦区'
    },
    'shipping_word': '订单已于2020-11-22 14:38:01超时未支付关闭',
    'product_total_price': 90,
    'discount_price': 0,
    'shipping_price': 0,
    'pay_price': 90,
    'format_product_total_price': '0.90',
    'format_discount_price': '0.00',
    'format_shipping_price': '0.00',
    'format_pay_price': '0.90'
  },
  {
    'product_list': [{
      'item_id': 289,
      'sku_id': 0,
      'product_name': '鲜花',
      'product_price': 90,
      'format_product_price': '0.90',
      'count': 1,
      'main_image': 'https://img01.hua.com/uploadpic/newpic/9012092.jpg_220x240.jpg'
    }],
    'created_timestamp': 1606053880,
    'pay_status': 0,
    'order_status': 60,
    'total_product_count': 1,
    'order_sn': '202011221404409316254',
    'order_id': 2708,
    'close_countdown': null,
    'shipping_info': {
      'receiver': '高富帅',
      'address': '详细地址',
      'phone': '15276513544',
      'province': '上海市',
      'city': '上海城区',
      'area': '黄浦区'
    },
    'shipping_word': '订单已于2020-11-22 14:38:01超时未支付关闭',
    'product_total_price': 90,
    'discount_price': 0,
    'shipping_price': 0,
    'pay_price': 90,
    'format_product_total_price': '0.90',
    'format_discount_price': '0.00',
    'format_shipping_price': '0.00',
    'format_pay_price': '0.90'
  }, {
    'product_list': [{
      'item_id': 291,
      'sku_id': 0,
      'product_name': '怦然心动',
      'product_price': 128000,
      'format_product_price': '1280.00',
      'count': 1,
      'main_image': 'http://ipxmall.oss-cn-zhangjiakou.aliyuncs.com/ipxmall/e7ac283d6dd0dd1b000423d6d123aec8'
    }],
    'created_timestamp': 1605875921,
    'pay_status': 0,
    'order_status': 60,
    'total_product_count': 1,
    'order_sn': '202011201238412980421',
    'order_id': 2702,
    'close_countdown': null,
    'shipping_info': {
      'receiver': '高富帅',
      'address': '详细地址',
      'phone': '15276513544',
      'province': '上海市',
      'city': '上海城区',
      'area': '黄浦区'
    },
    'shipping_word': '订单已于2020-11-20 13:13:01超时未支付关闭',
    'product_total_price': 98000,
    'discount_price': 0,
    'shipping_price': 0,
    'pay_price': 98000,
    'format_product_total_price': '980.00',
    'format_discount_price': '0.00',
    'format_shipping_price': '0.00',
    'format_pay_price': '980.00'
  }, {
    'product_list': [{
      'item_id': 289,
      'sku_id': 0,
      'product_name': '鲜花',
      'product_price': 90,
      'format_product_price': '0.90',
      'count': 1,
      'main_image': 'https://img01.hua.com/uploadpic/newpic/9012092.jpg_220x240.jpg'
    }],
    'created_timestamp': 1605859843,
    'pay_status': 0,
    'order_status': 70,
    'total_product_count': 1,
    'order_sn': '202011200810431370305',
    'order_id': 2694,
    'close_countdown': null,
    'shipping_info': {
      'receiver': '高富帅',
      'address': '详细地址',
      'phone': '15276513544',
      'province': '上海市',
      'city': '上海城区',
      'area': '黄浦区'
    },
    'shipping_word': '订单已于2020-11-20 08:45:02超时未支付关闭',
    'product_total_price': 90,
    'discount_price': 0,
    'shipping_price': 0,
    'pay_price': 90,
    'format_product_total_price': '0.90',
    'format_discount_price': '0.00',
    'format_shipping_price': '0.00',
    'format_pay_price': '0.90'
  }, {
    'product_list': [{
      'item_id': 289,
      'sku_id': 0,
      'product_name': '鲜花',
      'product_price': 90,
      'format_product_price': '0.90',
      'count': 1,
      'main_image': 'https://img01.hua.com/uploadpic/newpic/9012092.jpg_220x240.jpg'
    }],
    'created_timestamp': 1605859756,
    'pay_status': 0,
    'order_status': 80,
    'total_product_count': 1,
    'order_sn': '202011200809161861023',
    'order_id': 2693,
    'close_countdown': null,
    'shipping_info': {
      'receiver': '高富帅',
      'address': '详细地址',
      'phone': '15276513544',
      'province': '上海市',
      'city': '上海城区',
      'area': '黄浦区'
    },
    'shipping_word': '订单已于2020-11-20 08:43:01超时未支付关闭',
    'product_total_price': 90,
    'discount_price': 0,
    'shipping_price': 0,
    'pay_price': 90,
    'format_product_total_price': '0.90',
    'format_discount_price': '0.00',
    'format_shipping_price': '0.00',
    'format_pay_price': '0.90'
  }, {
    'product_list': [{
      'item_id': 289,
      'sku_id': 0,
      'product_name': '鲜花',
      'product_price': 90,
      'format_product_price': '0.90',
      'count': 1,
      'main_image': 'https://img01.hua.com/uploadpic/newpic/9012092.jpg_220x240.jpg'
    }],
    'created_timestamp': 1605859595,
    'pay_status': 0,
    'order_status': 80,
    'total_product_count': 1,
    'order_sn': '202011200806359939678',
    'order_id': 2692,
    'close_countdown': null,
    'shipping_info': {
      'receiver': '高富帅',
      'address': '详细地址',
      'phone': '15276513544',
      'province': '上海市',
      'city': '上海城区',
      'area': '黄浦区'
    },
    'shipping_word': '订单已于2020-11-20 08:40:01超时未支付关闭',
    'product_total_price': 90,
    'discount_price': 0,
    'shipping_price': 0,
    'pay_price': 90,
    'format_product_total_price': '0.90',
    'format_discount_price': '0.00',
    'format_shipping_price': '0.00',
    'format_pay_price': '0.90'
  }, {
    'product_list': [{
      'item_id': 289,
      'sku_id': 0,
      'product_name': '鲜花',
      'product_price': 90,
      'format_product_price': '0.90',
      'count': 1,
      'main_image': 'https://img01.hua.com/uploadpic/newpic/9012092.jpg_220x240.jpg'
    }],
    'created_timestamp': 1605858232,
    'pay_status': 0,
    'order_status': 90,
    'total_product_count': 1,
    'order_sn': '202011200743527737353',
    'order_id': 2691,
    'close_countdown': null,
    'shipping_info': {
      'receiver': '高富帅',
      'address': '详细地址',
      'phone': '15276513544',
      'province': '上海市',
      'city': '上海城区',
      'area': '黄浦区'
    },
    'shipping_word': '订单已于2020-11-20 08:18:01超时未支付关闭',
    'product_total_price': 90,
    'discount_price': 0,
    'shipping_price': 0,
    'pay_price': 90,
    'format_product_total_price': '0.90',
    'format_discount_price': '0.00',
    'format_shipping_price': '0.00',
    'format_pay_price': '0.90'
  }, {
    'product_list': [{
      'item_id': 291,
      'sku_id': 0,
      'product_name': '怦然心动',
      'product_price': 128000,
      'format_product_price': '1280.00',
      'count': 1,
      'main_image': 'http://ipxmall.oss-cn-zhangjiakou.aliyuncs.com/ipxmall/e7ac283d6dd0dd1b000423d6d123aec8'
    }],
    'created_timestamp': 1605788651,
    'pay_status': 2,
    'order_status': 90,
    'total_product_count': 1,
    'order_sn': '202011191224119352278',
    'order_id': 2640,
    'close_countdown': null,
    'shipping_info': {
      'receiver': '高富帅',
      'address': '详细地址',
      'phone': '15276513544',
      'province': '上海市',
      'city': '上海城区',
      'area': '黄浦区'
    },
    'shipping_word': null,
    'product_total_price': 180,
    'discount_price': 0,
    'shipping_price': 0,
    'pay_price': 180,
    'format_product_total_price': '1.80',
    'format_discount_price': '0.00',
    'format_shipping_price': '0.00',
    'format_pay_price': '1.80'
  }, {
    'product_list': [{
      'item_id': 291,
      'sku_id': 0,
      'product_name': '怦然心动',
      'product_price': 128000,
      'format_product_price': '1280.00',
      'count': 1,
      'main_image': 'http://ipxmall.oss-cn-zhangjiakou.aliyuncs.com/ipxmall/e7ac283d6dd0dd1b000423d6d123aec8'
    }],
    'created_timestamp': 1605787749,
    'pay_status': 2,
    'order_status': 70,
    'total_product_count': 1,
    'order_sn': '202011191209096136633',
    'order_id': 2638,
    'close_countdown': null,
    'shipping_info': {
      'receiver': '高富帅',
      'address': '详细地址',
      'phone': '15276513544',
      'province': '上海市',
      'city': '上海城区',
      'area': '黄浦区'
    },
    'shipping_word': null,
    'product_total_price': 180,
    'discount_price': 0,
    'shipping_price': 0,
    'pay_price': 180,
    'format_product_total_price': '1.80',
    'format_discount_price': '0.00',
    'format_shipping_price': '0.00',
    'format_pay_price': '1.80'
  }, {
    'product_list': [{
      'item_id': 288,
      'sku_id': 0,
      'product_name': '名称',
      'product_price': 160,
      'format_product_price': '1.60',
      'count': 1,
      'main_image': 'https://img01.hua.com/uploadpic/newpic/9012332.jpg_220x240.jpg'
    }],
    'created_timestamp': 1605787446,
    'pay_status': 2,
    'order_status': 60,
    'total_product_count': 1,
    'order_sn': '202011191204066128101',
    'order_id': 2616,
    'close_countdown': null,
    'shipping_info': {
      'receiver': '高富帅',
      'address': '详细地址',
      'phone': '15276513544',
      'province': '上海市',
      'city': '上海城区',
      'area': '黄浦区'
    },
    'shipping_word': null,
    'product_total_price': 160,
    'discount_price': 0,
    'shipping_price': 0,
    'pay_price': 160,
    'format_product_total_price': '1.60',
    'format_discount_price': '0.00',
    'format_shipping_price': '0.00',
    'format_pay_price': '1.60'
  }, {
    'product_list': [{
      'item_id': 291,
      'sku_id': 0,
      'product_name': '怦然心动',
      'product_price': 128000,
      'format_product_price': '1280.00',
      'count': 1,
      'main_image': 'http://ipxmall.oss-cn-zhangjiakou.aliyuncs.com/ipxmall/e7ac283d6dd0dd1b000423d6d123aec8'
    }],
    'created_timestamp': 1605630006,
    'pay_status': 0,
    'order_status': 80,
    'total_product_count': 1,
    'order_sn': '202011171620069239205',
    'order_id': 2597,
    'close_countdown': null,
    'shipping_info': {
      'receiver': '高富帅',
      'address': '详细地址',
      'phone': '15276513544',
      'province': '上海市',
      'city': '上海城区',
      'area': '黄浦区'
    },
    'shipping_word': '订单已于2020-11-17 16:54:01超时未支付关闭',
    'product_total_price': 180,
    'discount_price': 0,
    'shipping_price': 0,
    'pay_price': 180,
    'format_product_total_price': '1.80',
    'format_discount_price': '0.00',
    'format_shipping_price': '0.00',
    'format_pay_price': '1.80'
  }]
  let targetList = []
  // 根据参数进行筛选不同状态的订单
  if (query.statusCode === '0') {
    targetList = list
  }
  if (query.statusCode === '1') {
    targetList = list.filter(item => {
      if (item.order_status === 60) {
        return item
      }
    })
  }
  if (query.statusCode === '2') {
    targetList = list.filter(item => {
      if (item.order_status === 70) {
        return item
      }
    })
  }
  if (query.statusCode === '3') {
    targetList = list.filter(item => {
      if (item.order_status === 80) {
        return item
      }
    })
  }
  if (query.statusCode === '4') {
    targetList = list.filter(item => {
      if (item.order_status === 90) {
        return item
      }
    })
  }
  const total = targetList.length
  const page_info = {
    'page_size': 4,
    'page_num': Math.ceil(total / 4),
    'index': query.currentPage,
    'has_more': false,
    'count': total
  }
  // console.log(targetList)
  let qureyList = []
  // 根据currentPage 返回当前的数据
  const positison = (query.currentPage - 1) * 4
  if (query.currentPage < page_info.page_num) {
    qureyList = targetList.slice(positison, page_info.index * 4)
    page_info.has_more = true
  } else {
    qureyList = targetList.slice(positison, page_info.index * 4)
    page_info.has_more = false
  }
  const result = {
    'errorCode': 0,
    'errorMessage': 'success',
    'data': {
      'page_info': page_info,
      'order_list': qureyList
    },
    'success': true
  }

  response.json(result)
}

/**
 * @desc 删除订单
 * @param {*} request
 * @param {*} response
 */
const toDelete = (request, response) => {
  const result = {
    'errorCode': 0,
    'message': '已删除订单',
    'success': true
  }
  response.json(result)
}

/**
 * @desc 取消订单
 * @param {*} request
 * @param {*} response
 */
const toCancle = (request, response) => {
  const result = {
    'errorCode': 0,
    'message': '已取消订单',
    'success': true
  }
  response.json(result)
}

/**
 * @desc 提醒发货
 * @param {*} request
 * @param {*} response
 */
const toRemindPacking = (request, response) => {
  const result = {
    'errorCode': 0,
    'message': '已提醒商家发货',
    'success': true
  }
  response.json(result)
}
/**
 * @desc 确认收货
 * @param {*} request
 * @param {*} response
 */
const toSign = (request, response) => {
  const result = {
    'errorCode': 0,
    'message': '请确定您已收到商品',
    'success': true
  }
  response.json(result)
}
/**
 * @desc 去支付
 * @param {*} request
 * @param {*} response
 */
const toPay = (request, response) => {
  const result = {
    'errorCode': 0,
    'message': '跳转到支付',
    'success': true
  }
  response.json(result)
}

/**
 * @desc 查看物流
 * @param {*} request
 * @param {*} response
 */
const toCheckExpress = (request, response) => {
  const result = {
    'errorCode': 0,
    'message': '暂未查询到物流信息',
    'success': true
  }
  response.json(result)
}

const OrderMockApi = app => {
  app.get('/mock/order/getOrderList', getOrderList)
  app.post('/mock/order/toDelete', toDelete)
  app.post('/mock/order/toCancle', toCancle)
  app.post('/mock/order/toRemindPacking', toRemindPacking)
  app.post('/mock/order/toSign', toSign)
  app.post('/mock/order/toPay', toPay)
  app.post('/mock/order/toCheckExpress', toCheckExpress)
}

module.exports = OrderMockApi
