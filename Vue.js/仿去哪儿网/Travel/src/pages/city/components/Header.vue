<template>
  <div class="header">
    城市选择
    <router-link to="/"><div class="iconfont icon-back">&#xe63f;</div></router-link>
  </div>
</template>
<script>
export default {
  name: 'CityHeader'
}

</script>
<style lang="stylus" scoped>
@import '../../../assets/styles/varibles.styl'
/* scoped关键字使样式只作用域当前组件 */
.header
  position: relative
  height: $headerHeight
  line-height: $headerHeight
  background: $bgColor
  color: #fff
  text-align: center
  font-size: .32rem
  .icon-back
    position: absolute
    left: 0px;
    top: 0px
    width: .64rem
    text-align: center
    color: #fff
</style>
