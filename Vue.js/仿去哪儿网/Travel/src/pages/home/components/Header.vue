<template>
  <div class="header">
    <div class="header-left"><div class="iconfont icon-back">&#xe63f;</div></div>
    <div class="header-input"><span class="iconfont">&#xe62a;</span>输入城市 / 景点 / 游玩主题</div>
    <div class="header-right">城市<span class="iconfont icon-arrow">&#xe64a;</span></div>
  </div>
</template>
<script>
export default {
  name: 'HomeHeader'
}

</script>
<style lang="stylus" scoped>
@import '../../../assets/styles/varibles.styl'
/* scoped关键字使样式只作用域当前组件 */
.header
  display: flex
  height: .86rem
  line-height: .86rem
  background: $bgColor
  color: #fff
  .header-left
    width: .64rem
    float: left
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
    width: 1.24rem
    float: right
    text-align: center
    .icon-arrow
      font-size: .24rem
      margin-left: .05rem
</style>
