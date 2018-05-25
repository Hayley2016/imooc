<template>
  <div>
    <el-carousel>
      <el-carousel-item v-for="item in carouselData" :key="item.id">
        <img :src="item.urlImg">
        <h3>{{ item.title }}</h3>
      </el-carousel-item>
    </el-carousel>
    <el-row :gutter="20">
      <el-col :span="4">
        <div class="grid-content recommend-content">
          <div class="img">
            <img src="http://img.zcool.cn/community/012c4a5af8fc4da801207ab4a4f513.jpeg@260w_195h_1c_1e_1o_100sh.jpg">
          </div>
          <div class="info">
            <div class="title">Lynk&Co 02 | 碎片ynk&Co 02 | 碎片ynk&Co 02 | 碎片都市</div>
            <div class="type">平面-图案</div>
            <div class="desc">
              <div class="desc-item">
                <span></span>
                <span></span>
              </div>
              <div class="desc-item">
              	
              </div>
              <div class="desc-item">
              	
              </div>
            </div>
          </div>
          <div class="msg">
            <span class="release-user">
              <img class="release-img" src="http://img.zcool.cn/community/041283553fb2d80000014027d2e0a4.jpg@80w_80h_1c_1e_1o_100sh.jpg">
              <span class="release-name">用户用户用名名用户用名名用名名</span>
            </span>
            <span class="release-time">2018-05-14</span>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: function () {
    return {
      carouselData: [{
        urlImg: 'http://i1.hdslb.com/bfs/archive/763293ce06bf1e684ef0ea3da43ae5008d8564b8.jpg',
        title: '图片1',
        id: '0001'
      }, {
        urlImg: 'http://news.mydrivers.com/Img/20110224/09314147.jpg',
        title: '图片2',
        id: '0002'
      }]
    }
  }
}
</script>

<style lang="stylus">
@import '~assets/stylus/variabled.styl'
@import '~assets/stylus/mixin.styl'
.el-carousel
  margin: -10px -10px 0px -10px
.recommend-content
  background-color: #fff
  margin: 10px 0px
  color: #bbb
  .img
    height: 150px
    img
      width: 100%
      height: 100%
  .info
    border-bottom: 1px solid #eee
    .title
      padding: 0px 10px
      color: #333
      line-height: 25px
      no-wrap()
    .type
      padding: 0px 10px
      line-height: 15px
      font-size: $font-size-small
    .desc
      padding: 0px 10px
      line-height: 40px
      display: flex
      .desc-item
        flex: 1
   .msg
   	 padding: 5px 10px
   	 font-size: $font-size-small
   	 display: flex
   	 align-items: center
     .release-user
       flex: 1
       padding-right: 5px
       no-wrap()
       .release-img
         width: 26px
         height: 26px
         border-radius: 50%
       .release-name
       	line-height: 26px
     .release-time
     	width: 65px
     	line-height: 26px
</style>
