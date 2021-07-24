<template>
  <div class="swiper">
    <van-swipe  class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item
      :key="item.id"
      v-for="item in bannerList"
      >
        <van-image :src="item.image" alt="swiper"  fit="cover" height="300"/>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import * as request from '../../api'
export default {
  data: function () {
    return {
      bannerList: []
    }
  },
  methods: {
    async getBanner () {
      const res = await request.getAdvertising()
      // 判断是否返回数据
      if (res && res.errorCode === 0) {
        // console.log(res)
        this.bannerList = res.data.advertising_list
      }
    }
  },
  mounted () {
    this.getBanner()
  }
}
</script>

<style lang="less" scoped>
.swiper {
  width: 94vw;
  margin: 0 auto;
}
/*   .my-swipe .van-swipe-item {
    img {
      width: 100%;
      height: 150px;
      // 被替换的内容在保持其宽高比的同时填充元素的整个内容框
      object-fit: cover;
    }
  } */
</style>
