<template>
  <div class="article-detail-wrap">
    <HeaderComponent title="文章详情">
      <!-- slot传入返回按钮 -->
      <div class="go-back-warp" slot="left">
        <van-icon name="revoke" @click="goBack"/>
      </div>
    </HeaderComponent>
    <!-- 展示数据有2种方式 可以直接用富文本展示 需要后台配合 另外一种就是根据数据进行渲染 -->
    <!--   需要动态渲染组件 因为不同文章内图片 文字数等不同
    <Title></Title>
    <IMG></IMG>
    <TEXTContent></TEXTContent> -->
    <div class="article-detail-content-wrap">
      <van-image
      width="100%"
      height="180"
      :src="detail.feed_detail.image_list[0].image"
      fit="cover"
      />
      <!-- 动态渲染组件 -->
      <component
      :is="componentNames[info.type]"
      v-for="(info,key) in detail.feed_detail.content_tag_list"
      :key="key"
      :info="info"
      ></component>
    </div>
  </div>
</template>

<script type="text/javascript">
import HeaderComponent from '../../components/header'
import IMG from './article-detail/img-component.vue'
import TEXTContent from './article-detail/text-component.vue'
import Title from './article-detail/title-component.vue'
import * as request from './api'

export default {
  data () {
    return {
      detail: {
        // 需要默认值 否则报 Cannot read property 'image_list' of undefined
        feed_detail: {
          content_tag_list: [],
          image_list: [{ image: '' }]
        }
      }, // 页面列表数据
      componentNames: {
        title: 'Title',
        img: 'IMG',
        text: 'TEXTContent'
      }
    }
  },
  components: {
    HeaderComponent,
    // eslint-disable-next-line vue/no-unused-components
    IMG,
    // eslint-disable-next-line vue/no-unused-components
    TEXTContent,
    // eslint-disable-next-line vue/no-unused-components
    Title
  },
  methods: {
    async getFoundList () {
      const res = await request.getDetailList()
      if (res && res.errorCode === 0) {
        this.detail = res.data
      }
      // console.log('articl', res.data)
    },
    goBack () {
      // console.log('click')
      this.$router.go(-1)
    }
  },
  mounted () {
    this.getFoundList()
  }
}
</script>

<style lang="less" scoped>
.article-detail-wrap {
  height: 100vh;
  padding-bottom: 110px;
  box-sizing: border-box;
  overflow: auto;
  .article-detail-content-wrap {
    padding: 0 20px;
    color: rgba(37, 37, 37, 0.7);
  }
}
</style>
