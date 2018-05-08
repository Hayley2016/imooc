<template>
  <div class="">
    <div class="recommend-title">热销推荐</div>
    <ul>
      <!-- <router-link to="/detail"> -->
        <router-link tag="li" to="/detail/"+item.id+"" class="item border-bottom" v-for="item of recommendList" :key="item.id">
          <div class="item-img-wrapper">
            <img :src="item.imgUrl" class="item-img">
          </div>
          <div class="item-info-wrapper">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
            <button class="item-button">查看详情</button>
          </div>
        </router-link>
      <!-- </router-link> -->
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendList: Array
  },
  data: function () {
    return {}
  }
}

</script>
<style lang="stylus" scoped>
@import '../../../assets/styles/mixins.styl'
.recommend-title
  margin-top: .2rem
  line-height: .8rem
  background-color: #eee
  text-indent: .2rem
.item
  display: flex
  overflow: hidden
  height: 1.9rem
  .item-img-wrapper
    width: 1.7rem
    height: 1.7rem
    padding: 0.1rem
    .item-img
      height: 100%
  .item-info-wrapper
    flex: 1
    padding: 0.1rem
    min-width: 0
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #ccc
      ellipsis()
    .item-button
      line-height: .44rem
      margin-top: .16rem
      background-color: #ff9300
      padding: 0 0.1rem
      border-radius: 0.06rem
</style>
