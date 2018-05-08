<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id"><img class="swiper-img" :src="item.imgUrl"></swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperList: Array
  },
  data: function () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.swiperList.length
    }
  }
}

</script>
<style lang="stylus" scoped>
@import '../../../assets/styles/varibles.styl'
/* >>> 穿透 */
.wrapper >>> .swiper-pagination-bullet-active
  background-color: $bgColor !important
.wrapper
  overflow: hidden
  width:100%
  height: 0
  padding-bottom: 26.6%
  background-color: $bgColor
  .swiper-img
    width: 100%
</style>
