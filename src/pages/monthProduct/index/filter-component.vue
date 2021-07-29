<template>
  <div class="filter-wrap">
    <van-row justify="space-between">
      <van-col span="8" class="filter-left" :class="{ active: active === 0}" @click="changeTab(0)">综合</van-col>
      <van-col span="8" class="filter-middle" :class="{ active: active === 1}" @click="changeTab(1)">新品</van-col>
      <van-col span="8" class="filter-right" :class="{ active: active === 2, 'active-left': top === 0 && active ===2 ,'active-right': top === 1 && active ===2}" @click="changeTab(2)">价格</van-col>
    </van-row>
  </div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {
      active: 0,
      top: 0
    }
  },
  components: {
  },
  methods: {
    // 切换filter tab
    changeTab (id) {
      // 设置价格排序 同时激活对应三角形
      this.active = id
      if (id === 2) {
        this.top = this.active !== 2 ? 0 : (this.top === 0 ? 1 : 0)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.filter-wrap {
  margin: 20px 0;
  font-size: 28px;
  .filter-middle {
    text-align: center;
  }
  .filter-right {
    position: relative;
    padding-right: 32px;
    text-align: right;
    &::before {
      content: "";
      display: block;
      position: absolute;
      right: 4px;
      top: -10px;
      border: 12px solid transparent;
      border-bottom-color: rgba(105, 102, 102, .6);
    }
    &::after {
      content: "";
      display: block;
      position: absolute;
      right: 4px;
      top: 18px;
      border: 12px solid transparent;
      border-top-color: rgba(105, 102, 102, .6);
    }
    &.active-left {
      &::before {
        border-bottom-color: red;
      }
    }
    &.active-right {
      &::after {
        border-top-color: red;
    }
  }
 }
   .active {
    color: red;
  }
}
</style>
