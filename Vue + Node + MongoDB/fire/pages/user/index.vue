<template lang="pug">
.container
  .user
    .user-header
      .user-header-text {{ authUser.name }}
      img(:src="authUser.avatar")
    .user-address
      cell(title='收获地址' iconName='place')
      .user-content {{ authUser.address }}
    .user-phone
      cell(title='电话' iconName='phone_iphone')
      .user-content {{ authUser.phoneNumber }}
    .user-name
      cell(title='姓名' iconName='account_box')
      .user-content {{ authUser.name }}
    .user-order
      cell(title='我的订单' iconName='list')
      .user-order-item(v-for='(item, index) in payments' :key='index')
        img(:src='item.image')
        .user-order-intro
          .title {{ item.title }}
          .content {{ item.introduce }}
        .user-order-price
          span ¥{{ item.price }}
</template>

<script>
import cell from '../../components/cell.vue'
import { mapState } from 'vuex'

export default {
  // middleware: 'wechat-auth',
  head() {
    return {
      title: '个人中心'
    }
  },
  computed: {
    ...mapState([
      'authUser',
      'imageCDN',
      'payments'
    ])
  },
  methods: {},
  beforeCreate() {
    this.$store.dispatch('fetchPayments')
  },
  components: {
    cell
  }
}
</script>

<style lang="sass" scoped src='../../static/sass/user.sass'></style>
