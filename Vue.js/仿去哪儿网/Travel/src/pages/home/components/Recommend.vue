<template>
  <div class="">
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img :src="item.imgUrl" class="item-img">
        </div>
        <div class="item-info-wrapper">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data: function () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1804/3c/3c1d865ea3175504a3.img.jpg_200x200_8844d692.jpg',
        title: '“最忆是杭州”- G20峰会特别版《印象西湖》',
        desc: '👍小伙伴们都收藏了，去看看吧~'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201406/24/e2a5766e6e81793b2b518a7a08812a4a.jpg_200x200_66ce1370.jpg',
        title: '“西溪国家湿地公园',
        desc: '帅的人都去过了😎，你还等什么~'
      }]
    }
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
