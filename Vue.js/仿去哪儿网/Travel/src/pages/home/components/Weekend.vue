<template>
  <div class="">
    <div class="recommend-title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img :src="item.imgUrl" class="item-img">
        </div>
        <div class="item-info-wrapper">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data: function () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/4e/3e87ee62e59cdb.jpg_r_640x214_fe6cc902.jpg',
        title: '杭州必游TOP10',
        desc: '杭州，前世今生与你有一场美丽约会'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/bc/83feb2e003d0dd.jpg_r_640x214_0b7269b8.jpg',
        title: '杭州多样乐园',
        desc: '这个周末终于可以陪宝贝去玩耍啦~'
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
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 37.1%
    .item-img
      width: 100%
  .item-info-wrapper
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
</style>
