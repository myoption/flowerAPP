<template>
  <div class="found-list-wrap" @click="toDetail">
    <van-image :src="item.feed_detail.image_list[0].image"
    width="100%"
    height="180"
    fit="cover"
    />
    <div class="found-list-desc van-ellipsis">
      {{item.feed_detail.description}}
    </div>
    <div class="found-list-detail">
      <div class="detail-left">
        <span>{{item.author_info.nick_name}}</span>
        <span>{{item.feed_base_info.publish_time_str}}</span>
      </div>
      <div class="detail-right">
        <van-icon name="browsing-history-o" class="icon-fontsize-identify"/>
        <span>{{item.feed_base_info.view_num}}</span>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    item: {
      type: Object
      // 可以不用给默认值
      // default: {}
    }
  },
  methods: {
    /**
     * @desc 跳转到文章详情页
     */
    toDetail () {
      this.$router.push('/article-detail')
    }
  }
}
</script>

<style lang="less" scoped>
.found-list-wrap {
  box-shadow: 0 0 12px 0 #ddd;
  background-clip: #fff;
  margin-bottom: 20px;
  .found-list-desc {
    width: 40vw;
    margin: 20px 10px;
    font-size: 32px;
    font-weight: 600;
  }
  .found-list-detail {
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
      font-size:28px;
      color: rgba(92, 86, 86, .9);
      padding-left: 15px;
    }
    .detail-left {
      span {
        margin-right: 20px;
      }
    }
    .detail-right {
      padding-right: 10px;
      margin: 10px 0;
      .icon-fontsize-identify {
        font-size: 32px;
        vertical-align: middle;
      }
      span {
        margin-left: 8px;
        vertical-align: middle;
      }
    }
  }
}
</style>
