<template>
  <ul class="list">
    <li
    @touchstart.prevent="handleTouchStart"
    @touchend="handleTouchEnd"
    @touchmove="handleTouchMove"
    :ref="item"
    class="item" v-for="item of letters" :key="item" @click="handleLetterClick">{{item}}</li>
  </ul>
</template>
<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick: function (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart: function (e) {
      this.touchStatus = true
    },
    handleTouchMove: function (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        // 函数节流
        this.timer = setTimeout(() => {
          const startY = this.startY
          const touchY = e.touches[0].clientY - 86
          const index = Math.floor((touchY - startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd: function (e) {
      this.touchStatus = false
    }
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  }
}

</script>
<style lang="stylus" scoped>
@import '../../../assets/styles/varibles.styl'
/* scoped关键字使样式只作用域当前组件 */
.list
  display: flex
  flex-direction: column
  justify-content: center
  position: absolute
  top: 2.4rem
  right: 0
  bottom: 0
  width: .4rem
  .item
    line-height: .4rem
    text-align: center
    color: $bgColor
</style>
