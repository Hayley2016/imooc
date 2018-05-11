<template>
  <div>
    <div class="recommend">
      <scroll ref="scroll" class="recommend-content" :data="distList">
        <div>
          <div class="slider-wrapper" v-if="slider.length">
            <slider>
              <div v-for = "item of slider" :key="item.id">
                <a :href = "item.linkUrl">
                  <img class="needsclick" :src = "item.picUrl" @load="loadImage"/>
                </a>
              </div>
            </slider>
          </div>
          <div class="recommend-list">
            <h1 class="list-title">热门歌单推荐</h1>
            <ul>
              <li class="item" v-for="(item) of distList" :key="item.listennum">
                <div class="icon">
                  <img width="60" height="60" v-lazy="item.imgurl" />
                </div>
                <div class="text">
                  <h2 class="name" v-html="item.creator.name"></h2>
                  <p class="desc">{{item.dissname}}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="loading-container" v-if="!distList.length">
          <loading></loading>
        </div>
      </scroll>
    </div>
  </div>
</template>

<script>
import Slider from 'base/slider/slider.vue'
import Scroll from 'base/scroll/scroll.vue'
import Loading from 'base/loading/loading.vue'
import {getRecommend, getDiscList} from 'api/recommend'
import {ERR_OK} from 'api/config.js'
export default {
  components: {
    Slider,
    Scroll,
    Loading
  },
  data () {
    return {
      slider: [],
      distList: []
    }
  },
  mounted: function () {},
  created () {
    this._getRecommend()
    this._getDiscList()
  },
  methods: {
    loadImage () {
      if (!this.checkloaded) {
        this.checkloaded = true
        this.$refs.scroll.refresh()
      }
    },
    _getRecommend () {
      getRecommend().then((res) => {
        if (res.code === ERR_OK) {
          const data = res.data
          this.slider = data.slider
          // console.log(res.data)
        }
      })
    },
    _getDiscList () {
      getDiscList().then((res) => {
        // console.log(res)
        if (res.code === ERR_OK) {
          const data = res.data
          this.distList = data.list
          // console.log(res.data)
        }
      })
    }
  }
}
</script>

<style scoped lang="stylus">
@import "~common/stylus/variable"
.recommend
  position: fixed
  width: 100%
  top: 88px
  bottom: 0
  .recommend-content
    height: 100%
    overflow: hidden
    .slider-wrapper
      position: relative
      width: 100%
      overflow: hidden
      height: 0
      padding-bottom: 40%
    .recommend-list
      .list-title
        height: 65px
        line-height: 65px
        text-align: center
        font-size: $font-size-medium
        color: $color-theme
      .item
        display: flex
        box-sizing: border-box
        align-items: center
        padding: 0 20px 20px 20px
        .icon
          flex: 0 0 60px
          width: 60px
          padding-right: 20px
        .text
          display: flex
          flex-direction: column
          justify-content: center
          flex: 1
          line-height: 20px
          overflow: hidden
          font-size: $font-size-medium
          .name
            margin-bottom: 10px
            color: $color-text
          .desc
            color: $color-text-d
    .loading-container
      position: absolute
      width: 100%
      top: 50%
      transform: translateY(-50%)
</style>
