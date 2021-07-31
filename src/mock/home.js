/**
* @author: HeGuoxue
* @update: 2021-07-20 20:15
* @desc 处理返回banner 数据
* @param {object} request express 请求对象
* @param {object} response express 请求对象
* @returns {object} json 对象
 */

const getAdvertising = (request, response) => {
  const result = {
    errorCode: 0,
    errorMessage: 'success',
    data: {
      advertising_list: [
        {
          id: 27,
          title: '特供',
          link: '/pages/productDetail/index?id=295',
          image: 'http://saidad.oss-cn-guangzhou.aliyuncs.com/image/0b9709b4490830a47ad5b370b6a696ca.jpeg',
          type: 'image'
        },
        {
          id: 28,
          title: '特供1',
          link: '/pages/productDetail/index?id=295',
          image: 'http://saidad.oss-cn-guangzhou.aliyuncs.com/image/0b9709b4490830a47ad5b370b6a696ca.jpeg',
          type: 'image'
        },
        {
          id: 29,
          title: '特供2',
          link: '/pages/productDetail/index?id=295',
          image: 'http://saidad.oss-cn-guangzhou.aliyuncs.com/image/0b9709b4490830a47ad5b370b6a696ca.jpeg',
          type: 'image'
        },
        {
          id: 30,
          title: '特供3',
          link: '/pages/productDetail/index?id=295',
          image: 'http://saidad.oss-cn-guangzhou.aliyuncs.com/image/0b9709b4490830a47ad5b370b6a696ca.jpeg',
          type: 'image'
        },
        {
          id: 31,
          title: '特供4',
          link: '/pages/productDetail/index?id=295',
          image: 'http://saidad.oss-cn-guangzhou.aliyuncs.com/image/0b9709b4490830a47ad5b370b6a696ca.jpeg',
          type: 'image'
        }
      ]
    },
    success: true
  }

  response.json(result)
}

/**
 * @desc 处理获取 数据
 * @param { object } request express 请求对象
 * @param { object } response express 响应对象
 * @returns { object } json 对象
 */
const getProductList = (request, response) => {
  // console.log(request, request)
  const list = [
    {
      base_info: {
        product_name: '进口花伴手礼小花束',
        publish_status: 1,
        summary: '进口花伴手礼小花束',
        product_type: 2,
        stock: 99996,
        sale: 7,
        sale_price: 25800,
        format_sale_price: 258.00,
        original_price: 29800,
        format_original_price: 298.00,
        shipping_price: 0,
        format_shipping_price: 0.00,
        updated_timestamp: null,
        created_timestamp: 1610858927,
        item_id: 378,
        sku_id: 0,
        sort: 37,
        main_image: 'http://saidad.oss-cn-guangzhou.aliyuncs.com/image/eb209ef395fe09dc0db6a36ba2c2a5ca.jpeg'
      },
      specifications: null,
      galley_image_list: null,
      brand_story: null,
      care_instructions: null,
      special_note: null,
      logistics_desc: null,
      after_sale_instructions: null,
      purchase_note: null,
      detail: null
    }, {
      base_info: {
        product_name: '年宵花水泥盆蝴蝶兰设计',
        publish_status: 1,
        summary: '年宵花水泥盆蝴蝶兰设计',
        product_type: 2,
        stock: 99997,
        sale: 4,
        sale_price: 52000,
        format_sale_price: 520.00,
        original_price: 68000,
        format_original_price: 680.00,
        shipping_price: 0,
        format_shipping_price: 0.00,
        updated_timestamp: null,
        created_timestamp: 1612086744,
        item_id: 393,
        sku_id: 0,
        sort: 36,
        main_image: 'http://saidad.oss-cn-guangzhou.aliyuncs.com/image/7f0008089c9174ee43c81af2a25ce788.jpeg'
      },
      specifications: null,
      galley_image_list: null,
      brand_story: null,
      care_instructions: null,
      special_note: null,
      logistics_desc: null,
      after_sale_instructions: null,
      purchase_note: null,
      detail: null
    }, {
      base_info: {
        product_name: '年宵花蝴蝶兰盆栽设计',
        publish_status: 1,
        summary: '年宵花蝴蝶兰盆栽设计',
        product_type: 2,
        stock: 99998,
        sale: 2,
        sale_price: 52000,
        format_sale_price: 520.00,
        original_price: 68000,
        format_original_price: 680.00,
        shipping_price: 0,
        format_shipping_price: 0.00,
        updated_timestamp: null,
        created_timestamp: 1612086177,
        item_id: 392,
        sku_id: 0,
        sort: 36,
        main_image: 'http://saidad.oss-cn-guangzhou.aliyuncs.com/image/58de02e0c1f3480bf2190c5e944ddefb.jpeg'
      },
      specifications: null,
      galley_image_list: null,
      brand_story: null,
      care_instructions: null,
      special_note: null,
      logistics_desc: null,
      after_sale_instructions: null,
      purchase_note: null,
      detail: null
    }, {
      base_info: {
        product_name: '红色系定制',
        publish_status: 1,
        summary: '红色系定制',
        product_type: 2,
        stock: 99999,
        sale: 0,
        sale_price: 68000,
        format_sale_price: 680.00,
        original_price: 88000,
        format_original_price: 880.00,
        shipping_price: 0,
        format_shipping_price: 0.00,
        updated_timestamp: null,
        created_timestamp: 1612085978,
        item_id: 391,
        sku_id: 0,
        sort: 36,
        main_image: 'http://saidad.oss-cn-guangzhou.aliyuncs.com/image/cea6225257bb428d4319663384dba68f.jpeg'
      },
      specifications: null,
      galley_image_list: null,
      brand_story: null,
      care_instructions: null,
      special_note: null,
      logistics_desc: null,
      after_sale_instructions: null,
      purchase_note: null,
      detail: null
    }, {
      base_info: {
        product_name: '进口寸寸金90cm（含花器挂件）',
        publish_status: 1,
        summary: '进口寸寸金90cm（含花器挂件）',
        product_type: 2,
        stock: 99999,
        sale: 16,
        sale_price: 98000,
        format_sale_price: 980.00,
        original_price: 108000,
        format_original_price: 1080.00,
        shipping_price: 0,
        format_shipping_price: 0.00,
        updated_timestamp: null,
        created_timestamp: 1612085810,
        item_id: 390,
        sku_id: 0,
        sort: 36,
        main_image: 'http://saidad.oss-cn-guangzhou.aliyuncs.com/image/bd4510844b1307e38a43eb7eeac63014.jpeg'
      },
      specifications: null,
      galley_image_list: null,
      brand_story: null,
      care_instructions: null,
      special_note: null,
      logistics_desc: null,
      after_sale_instructions: null,
      purchase_note: null,
      detail: null
    }, {
      base_info: {
        product_name: '何其美',
        publish_status: 1,
        summary: '何其美',
        product_type: 2,
        stock: 99999,
        sale: 15,
        sale_price: 52000,
        format_sale_price: 520.00,
        original_price: 68000,
        format_original_price: 680.00,
        shipping_price: 0,
        format_shipping_price: 0.00,
        updated_timestamp: 1612085437,
        created_timestamp: 1612085305,
        item_id: 389,
        sku_id: 0,
        sort: 36,
        main_image: 'http://saidad.oss-cn-guangzhou.aliyuncs.com/image/e6e1b90babe35940b66eb18a0874aaf9.jpeg'
      },
      specifications: null,
      galley_image_list: null,
      brand_story: null,
      care_instructions: null,
      special_note: null,
      logistics_desc: null,
      after_sale_instructions: null,
      purchase_note: null,
      detail: null
    }, {
      base_info: {
        product_name: '紫色恋人',
        publish_status: 1,
        summary: '紫色恋人',
        product_type: 2,
        stock: 99999,
        sale: 14,
        sale_price: 128000,
        format_sale_price: 1280.00,
        original_price: 158000,
        format_original_price: 1580.00,
        shipping_price: 0,
        format_shipping_price: 0.00,
        updated_timestamp: null,
        created_timestamp: 1612085138,
        item_id: 388,
        sku_id: 0,
        sort: 36,
        main_image: 'http://saidad.oss-cn-guangzhou.aliyuncs.com/image/2b758d13177021042ea23a60393a36d4.jpeg'
      },
      specifications: null,
      galley_image_list: null,
      brand_story: null,
      care_instructions: null,
      special_note: null,
      logistics_desc: null,
      after_sale_instructions: null,
      purchase_note: null,
      detail: null
    }, {
      base_info: {
        product_name: '情人节圆筒礼盒',
        publish_status: 1,
        summary: '情人节圆筒礼盒',
        product_type: 2,
        stock: 99999,
        sale: 13,
        sale_price: 39800,
        format_sale_price: 398.00,
        original_price: 52000,
        format_original_price: 520.00,
        shipping_price: 0,
        format_shipping_price: 0.00,
        updated_timestamp: null,
        created_timestamp: 1611829185,
        item_id: 387,
        sku_id: 0,
        sort: 36,
        main_image: 'http://saidad.oss-cn-guangzhou.aliyuncs.com/image/4d76f0d2d283c8ffdd6c7da7f6a8e4c0.jpeg'
      },
      specifications: null,
      galley_image_list: null,
      brand_story: null,
      care_instructions: null,
      special_note: null,
      logistics_desc: null,
      after_sale_instructions: null,
      purchase_note: null,
      detail: null
    }, {
      base_info: {
        product_name: '巨型亚克力枪炮礼盒',
        publish_status: 1,
        summary: '巨型亚克力枪炮礼盒',
        product_type: 2,
        stock: 99999,
        sale: 12,
        sale_price: 158000,
        format_sale_price: 1580.00,
        original_price: 188000,
        format_original_price: 1880.00,
        shipping_price: 0,
        format_shipping_price: 0.00,
        updated_timestamp: null,
        created_timestamp: 1611828887,
        item_id: 386,
        sku_id: 0,
        sort: 36,
        main_image: 'http://saidad.oss-cn-guangzhou.aliyuncs.com/image/7a2bf6c3bea5d13809630bdb11a2534f.jpeg'
      },
      specifications: null,
      galley_image_list: null,
      brand_story: null,
      care_instructions: null,
      special_note: null,
      logistics_desc: null,
      after_sale_instructions: null,
      purchase_note: null,
      detail: null
    }, {
      base_info: {
        product_name: '透视亚克力a级玫瑰花盒',
        publish_status: 1,
        summary: '透视亚克力a级玫瑰花盒',
        product_type: 2,
        stock: 99999,
        sale: 11,
        sale_price: 39800,
        format_sale_price: 398.00,
        original_price: 52000,
        format_original_price: 520.00,
        shipping_price: 0,
        format_shipping_price: 0.00,
        updated_timestamp: null,
        created_timestamp: 1611827886,
        item_id: 385,
        sku_id: 0,
        sort: 36,
        main_image: 'http://saidad.oss-cn-guangzhou.aliyuncs.com/image/95f27ba930360fc394c32f1491c94b74.jpeg'
      },
      specifications: null,
      galley_image_list: null,
      brand_story: null,
      care_instructions: null,
      special_note: null,
      logistics_desc: null,
      after_sale_instructions: null,
      purchase_note: null,
      detail: null
    }
  ]

  const result = {
    errorCode: 0,
    errorMessage: 'success',
    data: {
      product_list: list,
      page_info: {
        page_size: 10,
        index: 1,
        has_more: true,
        count: 10
      }
    },
    success: true
  }
  response.json(result)
}
/**
 * @desc 处理获取 商品详情 数据
 * @param { object } request express 请求对象
 * @param { object } response express 响应对象
 * @returns { object } json 对象
 */
const getProductDetail = (request, response) => {
  // console.log(request, request)
  const result = {
    'errorCode': 0,
    'errorMessage': 'success',
    'data': {
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
      'specifications': '[{"进口花伴手礼小花束":"10支混搭"},{"过捏花伴手礼":"10支"},{"厄瓜多尔玫瑰":"10支"}]',
      'galley_image_list': null,
      'brand_story': ' AS Flower  Boutique 主要以花艺设计为主，为顾客定制属于自己的的专属花礼。创始人力求精致和品味，从花材的挑选、搭配、制作到包装，无一不注重细节n AS Flower  Boutique环绕花卉与绿植，引入与自然相关的产品，提倡一种接近自然的生活方式，推出与花艺植物相关的课程和产品，并承接各种商务活动花艺布置。',
      'care_instructions': ' 花束养护方法：花束收到后需要当天拆包装修根水养，水位10cm-20cm左右，尽量放在常温通风的地方n前期-每天或者隔天换水修根一次，修根需要冲洗一下杆子，水一定要保持干净哦～水脏容易滋生细菌，杆子生病腐烂不吸水就造成了花的枯萎。n中期-因为每一种甚至每一朵花的生命周期都不太一样，有的叶片会先枯萎，我们需要把不好的叶片处理掉，如果有花的花边碰撞损坏或者发霉就把不好的花瓣拔掉，避免感染好的，养护的得好是可以延长花期呢n尾期：开始发现鲜花精神状态不佳之后继续剪根还能维持一段时间，越短越好，剪短之后不能维持原本的造型了可以分放置小杯子或者小瓶子里面，小小的几只放在洗手台、床头柜、窗户旁也是很可爱的～请务必让她们绽放到最后！',
      'special_note': '周四晚10:00前截止下一周的订单,超过支付时间的顺延下下周，特殊情况另请沟通。',
      'logistics_desc': '专人配送，一个师傅只送一束花。',
      'after_sale_instructions': '因鲜花商品的特殊属性,将不接受退货,如有质量问题,请在收货后24小时内联系客服。',
      'purchase_note': '1:鲜花是季节性商品，某些花材可能由于天气、运输等突发状况而出现缺货，特殊造型的花材和设计款花束是无法复制的，因为花材一直在变化，花材的大小曲线也是不同的，只能做相同色系风格，不能保证一模一样，如果图片花材已经下市或者缺货我们会用相同色系风格的花材代替。n 2:节日和恶劣天气的情况下不支持指定时间配送，建议自行下单或自取。n3:下单请务必保证收件人电话接听畅通，地址不详，电话无人接通，再次配送需要买家承担相关费用。n4:客服时间：10:00-18:00，非本时间段内的留言我们将在工作时的第一件回复处理。',
      'detail': {
        'detail_list': [{
          'id': 0,
          'type': 'image',
          'content': 'http://saidad.oss-cn-guangzhou.aliyuncs.com/image/187fc70ab4f6c12d1caffe5954f03884.jpeg'
        }, {
          'id': 1,
          'type': 'image',
          'content': 'http://saidad.oss-cn-guangzhou.aliyuncs.com/image/187fc70ab4f6c12d1caffe5954f03884.jpeg'
        }, {
          'id': 2,
          'type': 'image',
          'content': 'http://saidad.oss-cn-guangzhou.aliyuncs.com/image/187fc70ab4f6c12d1caffe5954f03884.jpeg'
        }, {
          'id': 3,
          'type': 'image',
          'content': 'http://saidad.oss-cn-guangzhou.aliyuncs.com/image/187fc70ab4f6c12d1caffe5954f03884.jpeg'
        }]
      }
    },
    'success': true
  }
  response.json(result)
}
// home Mock api
const HomeMockApi = (app) => {
  // 路由用法同express
  app.post('/mock/advertising/getAdvertisingList', getAdvertising)
  app.post('/mock/product/getProductList', getProductList)
  app.get('/mock/product/getProductDetail', getProductDetail)
}
module.exports = HomeMockApi
