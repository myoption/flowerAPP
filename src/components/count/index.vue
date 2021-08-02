<template>
  <div class="goods-num" :style="{ width: width + '%'}" :button-size="buttonsize">
    <span>{{title}}</span>
    <van-stepper v-model.number="number"  integer @change="numChange"/>
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    value: {
      type: Number,
      default: 1
    },
    title: {
      type: String,
      default: '购买数量'
    },
    width: {
      type: Number,
      default: 76
    },
    buttonsize: {
      type: String,
      default: '32px'
    },
    id: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      number: 1
    }
  },
  components: {
  },
  methods: {
    numChange () {
      this.$emit('numChange', this.number, this.id)
    }
  },
  created () {
    // 初始化
    this.number = this.value
  }
}
</script>

<style lang="less" scoped>
  .goods-num {
    display: flex;
    height: 80px;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    background-color: #fff;
    box-shadow: 0 0 12px 0 rgb(201, 201, 201);
    border-radius: 10px;
  }
</style>
