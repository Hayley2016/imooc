<template>
  <div class="icons">
    <swiper :options="swiperOption" v-if="showIcons">
      <!-- slides -->
      <swiper-slide v-for="(page , index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
      <!-- Optional controls -->
      <!-- <div class="swiper-pagination" slot="pagination"></div> -->
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    iconList: Array
  },
  data: function () {
    return {
      swiperOption: {
        // pagination: '.swiper-pagination',
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    },
    showIcons () {
      return this.iconList.length
    }
  }
}

</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/varibles.styl'
@import '../../../assets/styles/mixins.styl'
.icons .swiper-container
  overflow: hidden
  width:100%
  height: 0
  padding-bottom: 50%
  background-color: #fff
  margin-top: .1rem
  .icon
    position: relative
    overflow: hidden
    float: left
    width: 25%
    height: 0
    padding-bottom: 25%
    .icon-img
      position: absolute
      top: 0px
      left: 0px
      right: 0px
      bottom: 0.44rem
      box-sizing: border-box
      padding: 0.1rem
      .icon-img-content
        display: block
        margin: 0 auto
        height: 100%
    .icon-desc
      position: absolute
      left: 0px
      right: 0px
      bottom: 0px
      height: .44rem
      line-height: .44rem
      color: $darkTextColor
      text-align: center
      ellipsis()
</style>
