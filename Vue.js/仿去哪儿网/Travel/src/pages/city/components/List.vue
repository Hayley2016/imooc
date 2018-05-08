<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button"><!-- {{this.$store.state.city}} -->{{currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hotCities" :key="item.id" @click="handleCityClick(item.name)">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item ,key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list" v-for="list of item" :key="list.id" @click="handleCityClick(list.name)">
          <div class="item border-bottom">{{list.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  props: {
    hotCities: Array,
    cities: Object,
    letter: String
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  watch: {
    letter () {
      if (this.letter) {
        const ele = this.$refs[this.letter][0]
        this.scroll.scrollToElement(ele)
      }
    }
  },
  methods: {
    handleCityClick: function (city) {
      // 适用异步
      // this.$store.dispatch('changeCity', city)
      this.changeCity(city)
      // 适用同步
      // this.$store.commit('changeCity', city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  }
}

</script>
<style lang="stylus" scoped>
@import '../../../assets/styles/varibles.styl'
/* scoped关键字使样式只作用域当前组件 */
.border-topbottom
  &:before
    border-color: #ccc
  &:after
    border-color: #ccc
.border-bottom
  &:before
    border-color: #ccc
.list
  position: absolute
  top: 1.72rem
  left: 0
  right: 0
  bottom: 0
  overflow: hidden
  .title
    line-height: .8rem
    background-color: #eee
    padding-left: .2rem
    color: #666
    font-size: .26rem
  .button-list
    overflow: hidden
    padding: .1rem .6rem .1rem .1rem
    .button-wrapper
      float: left
      width: 33.3%
      .button
        margin: .1rem
        text-align: center
        border: .02rem solid #ccc
        padding: .1rem
        border-radius: .06rem
  .item-list
    .item
      line-height: .76rem
      color: #666
      padding-left: .2rem
</style>
