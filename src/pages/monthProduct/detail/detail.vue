<template>
  <div class="product-detail-content-wrap">
    <div class="product-detail-content-item">
      <h2 class="product-detail-title">{{productDetaiInfo.base_info.product_name}}</h2>
      <van-row justify="start" gutter="10">
        <van-col class="product-detail-price">&yen;{{productDetaiInfo.base_info.format_sale_price}}</van-col>
        <van-col class="product-detail-sale">{{productDetaiInfo.base_info.sale}}人已购买</van-col>
      </van-row>
    </div>
    <div class="product-detail-content-info">
      <h2 class="product-detail-subtitle">商品详情</h2>
      <van-image
      v-for="item in productDetaiInfo.detail.detail_list"
      :key="item.id"
      :src="item.content"
      fit="cover"
      height="220"
      class="product-detail-img"
      />
      <van-collapse v-model="activeNames">
        <van-collapse-item
        v-for="item in collapseList"
        :key="item.key"
        :title="item.name"
        :name="item.key"
        >
        <!-- 需要进行文本格式化 v-html更方便 -->
        <div
        class="product-detail-text"
        v-html="productDetaiInfo[item.key]"
        ></div>
        <!-- 传入数组 key 和 文本  作为过滤器参数 无法进行换行等操作-->
        <!-- <div
        class="product-detail-text"
        >{{ [item.key, productDetaiInfo[item.key]] | textFormat}}</div> -->
        </van-collapse-item>
      </van-collapse>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    productDetaiInfo: {
      type: Object
      // default: {}
    }
  },
  data () {
    return {
      // activeNames: [],改为计算属性
      // 也可循环渲染手风琴组件
      collapseList: [
        {
          key: 'brand_story',
          name: '品牌历史'
        },
        {
          key: 'care_instructions',
          name: '养护指南'
        },
        {
          key: 'logistics_desc',
          name: '配送政策'
        },
        {
          key: 'purchase_note',
          name: '购买提示'
        },
        {
          key: 'special_note',
          name: '特别注意'
        },
        {
          key: 'specifications',
          name: '商品规格'
        }
      ]
    }
  },
  computed: {
    // 默认全部展开
    activeNames () {
      return this.collapseList.map(item => item.key)
    }
  },
  beforeUpdate () {
    // 进行文本处理
    this.activeNames.forEach(key => {
      this.productDetaiInfo[key] = this.textFormat(key, this.productDetaiInfo[key])
    })
  },
  watch: {
    info: {
      deep: true,
      handler (info) {

      }
    }
  },
  components: {
  },
  methods: {
    /**
     * @desc 文本过滤器
     * @param {value} 数组 第一个参数为collapseList.key 第二个参数为文本内容 即productDetaiInfo[item.key]
     */
    textFormat (key, text) {
      if (!text) return ''
      if (key === 'specifications') {
        let res = JSON.parse(text)
        res = res.map(item => `${Object.keys(item)}:${Object.values(item)}<br>`)
        return res.join('')
      }
      // 将换行n 替换
      if (key === 'purchase_note') {
        text = text.replace(/n/g, '<br>')
        return text
      }
      return text
    }
  }
}
</script>

<style lang="less" scoped>
.product-detail-content-wrap {
  font-size: 32px;
  color: rgba(0, 0, 0, .8);
  // background-color: #fff;
  .product-detail-content-item {
    padding: 0 20px 12px 20px;
    border-bottom: 1px solid rgba(109, 107, 107, .3);
    .product-detail-title {
      font-size: 38px;
      margin: 20px 0;
    }
    .product-detail-price {
      color: rgba(0, 0, 0);
      font-weight: 600;
    }
  }
  .product-detail-content-info {
    .product-detail-subtitle {
    margin: 20px 0;
    font-size: 38px;
    font-weight: 600;
  }
  .product-detail-img {
    margin-bottom: 20px;
  }
  .product-detail-text {
    // text-indent: 60px;
  }
 }
}
</style>
