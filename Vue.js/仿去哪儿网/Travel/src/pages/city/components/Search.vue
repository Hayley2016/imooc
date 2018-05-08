<template>
  <div>
    <div class="search">
      <input v-model="keyword" type="text" class="search-input" placeholder="输入城市名 / 拼音" name="">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item border-bottom" v-for="item of list" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasList">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  props: {
    cities: Object
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  },
  computed: {
    hasList () {
      return !this.list.length
    }
  },
  methods: {
    handleCityClick: function (city) {
      // 适用异步
      this.$store.dispatch('changeCity', city)
      // 适用同步
      // this.$store.commit('changeCity', city)
      this.keyword = ''
      this.$router.push('/')
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  }
}

</script>
<style lang="stylus" scoped>
@import '../../../assets/styles/varibles.styl'
/* scoped关键字使样式只作用域当前组件 */
.search
  height: $headerHeight
  line-height: $headerHeight
  background: $bgColor
  padding: 0 .1rem
  .search-input
    width: 100%
    height: 70%
    box-sizing: border-box
    border-radius: .1rem
    text-align: center
    color: #666
    padding: 0 .1rem
.search-content
  z-index: 1
  overflow: hidden
  position: absolute
  top: 1.72 rem
  left: 0
  right: 0
  bottom: 0
  background-color: #eee
  .search-item
    line-height: .62rem
    padding-left: .2rem
    color: #666
    background-color: #fff
</style>
