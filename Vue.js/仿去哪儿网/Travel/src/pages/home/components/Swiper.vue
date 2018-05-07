<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id"><img class="swiper-img" :src="item.url"></swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data: function () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '0001',
        url: 'http://img1.qunarzz.com/piao/fusion/1706/5d/a47eff229e73f302.jpg_750x200_bcc494d4.jpg'
      }, {
        id: '0002',
        url: 'http://img1.qunarzz.com/piao/fusion/1803/34/db1fe32d3ca04b02.jpg_750x200_f541a10c.jpg'
      }]
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
