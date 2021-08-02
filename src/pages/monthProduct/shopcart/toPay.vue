<template>
  <div class="">
    <HeaderComponent title="商品结算" :showGoBack="true"></HeaderComponent>
    <div class="text">
      {{ text | textFormat}}
    </div>
  </div>
</template>

<script type="text/javascript">
import HeaderComponent from '../../../components/header'
export default {
  data () {
    return {
      text: '[{"进口花伴手礼小花束":"10支混搭"},{"过捏花伴手礼":"10支"},{"厄瓜多尔玫瑰":"10支"}]'
    }
  },
  components: {
    HeaderComponent
  },
  methods: {
  },
  filters: {
    textFormat (text) {
      if (!text) return ''
      let res = JSON.parse(text)
      res = res.map(item => `${Object.keys(item)}:${Object.values(item)}`)
      return res.join('\r\n')
    }
  }
}
</script>

<style lang="less" scoped>
.text {
  white-space: pre-line;
}
</style>
