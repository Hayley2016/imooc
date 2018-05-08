<template>
<div>
  <router-link v-show="showAbs" tag="div" to="/" class="header-abs"><span class="iconfont icon-back">&#xe63f;</span></router-link>
  <div v-show="!showAbs" class="header-fixed" :style="opacityStyle">
      景点详情
    <router-link to="/"><div class="iconfont icon-back">&#xe63f;</div></router-link>
  </div>
</div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll: function (e) {
      // console.log('55')
      const top = document.documentElement.scrollTop
      if (top > 45) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity: opacity
        }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/varibles.styl'
.header-abs
  position: absolute
  left: .2rem
  top: .2rem
  width: .8rem
  height: .8rem
  line-height: .8rem
  border-radius: .4rem
  background: rgba(0,0,0,.8)
  color: #fff
  text-align: center
.header-fixed
  z-index: 2
  position: fixed
  top: 0
  left: 0
  right: 0
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
