<template>
<div>
  <div class="banner" @click="handleBannerClick">
    <img class="banner-img" :src="banner.bannerImg" />
    <div class="banner-info">
      <div class="banner-title">{{banner.sightName}}</div>
      <div class="banner-num"><span class="iconfont icon-img">&#xe60b;</span>{{gallaryImgsLength}}</div>
    </div>
  </div>
  <fade-animation>
    <common-gallary :imgs="banner.gallaryImgs" v-show="showGallary" @closeGallery="handleGallaryClose"></common-gallary>
  </fade-animation>
</div>
</template>

<script>
import CommonGallary from '../../../components/gallary/Gallary.vue'
import FadeAnimation from '../../../components/fade/Fade.vue'
export default {
  name: 'Banner',
  props: {
    banner: Object
  },
  data: function () {
    return {
      showGallary: false
    }
  },
  computed: {
    gallaryImgsLength () {
      return this.banner.gallaryImgs.length
    }
  },
  methods: {
    handleBannerClick: function () {
      this.showGallary = true
    },
    handleGallaryClose: function () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary,
    FadeAnimation
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/mixins.styl'
.banner
  position: relative
  overflow: hidden
  height: 0
  padding-bottom: 55%
  .banner-img
    width: 100%
  .banner-info
    display: flex
    position: absolute
    left: 0
    right: 0
    bottom: 0
    line-height: .6rem
    color: #fff
    background: linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,.8))
    .banner-title
      flex: 1
      font-size: .32rem
      padding: .1rem
      ellipsis()
    .banner-num
      height: .4rem
      line-height: .4rem
      margin-top: .18rem
      margin-right: .2rem
      padding: 0 .4rem
      border-radius: .2rem
      background: rgba(0,0,0,.8)
      font-size: .24rem
      .icon-img
        font-size: .22rem
        padding-right: .1rem
</style>
