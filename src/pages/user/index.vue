<template>
  <div class="user-wrap">
    <HeaderComponent title="个人中心"></HeaderComponent>
    <UserAvatar :userInfo="user"></UserAvatar>
    <UserDate></UserDate>
    <UserOrder></UserOrder>
    <UserContact></UserContact>
    <UserOnlineService></UserOnlineService>
  </div>
</template>

<script type="text/javascript">
import HeaderComponent from '../../components/header'
import UserAvatar from './avatar'
import UserDate from './date'
import UserOrder from './order'
import UserContact from './contact'
import UserOnlineService from './online-service'
import { mapState } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    // ...mapState(['globalInfo'])
    // 第二种使用方式
    ...mapState({
      user: state => state.globalInfo.user
    })
  },
  components: {
    HeaderComponent,
    UserAvatar,
    UserDate,
    UserOrder,
    UserContact,
    UserOnlineService
  },
  methods: {
  },
  mounted () {
    // console.log(this.globalInfo)
  }
}
</script>

<style lang="less" scoped>
.user-wrap {
  height: calc(100vh - 140px);
  overflow: auto;
}
</style>
