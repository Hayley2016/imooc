<template>
  <div class="header">
    <div class="header-left"><div class="iconfont icon-back">&#xe63f;</div></div>
    <div class="header-input"><span class="iconfont">&#xe62a;</span>输入城市 / 景点 / 游玩主题</div>
    <router-link to="/city">
      <div class="header-right"><!-- main.js中注册了store，全局可以使用 --><!-- {{city}} -->{{city}}<span class="iconfont icon-arrow">&#xe64a;</span></div>
    </router-link>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
  // props: {
  //   city: String
  // }
}

</script>
<style lang="stylus" scoped>
@import '../../../assets/styles/varibles.styl'
/* scoped关键字使样式只作用域当前组件 */
.header
  display: flex
  height: $headerHeight
  line-height: $headerHeight
  background: $bgColor
  color: #fff
  .header-left
    width: .64rem
    // float: left
    .icon-back
      text-align: center
  .header-input
    flex: 1
    height: .64rem
    line-height: .64rem
    margin-top: .12rem
    margin-left: .2rem
    background: #fff
    border-radius: 0.1rem
    color: #ccc
    padding-left: .2rem
  .header-right
    min-width: 1.00rem
    padding: 0 .1rem
    float: right
    text-align: center
    color: #fff
    .icon-arrow
      font-size: .24rem
      margin-left: .05rem
</style>
