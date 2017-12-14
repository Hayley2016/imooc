<template>
<div>
  <div class="goods">
  	<div class="menu-wrapper" ref="menuWrapper" >
  		<ul>
  			<li v-for="(item,index) in goods" class="menu-item" :class="{'current':currentIndex === index}" @click="selectMenu(index, $event)">
  				<span class="text border-1px"><span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>{{item.name}}</span>
  			</li>
  		</ul>
  	</div>
  	<div class="foods-wrapper" ref="foodsWrapper">
  		<ul>
  			<li v-for="item in goods" class="food-list food-list-hook">
  				<h1 class="title">{{item.name}}</h1>
  				<ul>
  					<li @click="selectFood(food,$event)" v-for="food in item.foods" class="food-item border-1px">
  						<div class="icon">
  							<img width="57" height="57" :src="food.icon">
  						</div>
  						<div class="content">
  							<h2 class="name">{{food.name}}</h2>
  							<p class="desc">{{food.description}}</p>
  							<div class="extra">
  								<span class="count">{{food.sellCount}}份</span><span>{{food.rating}}%</span>
  							</div>
  							<div class="price">
  								<span class="now">￥{{food.price}}</span><span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
  							</div>
  							<div class="cartcontrol-wrapper">
  								<cartcontrol :food="food"></cartcontrol>
  							</div>
  						</div>
  					</li>
  				</ul>
  			</li>
  		</ul>
  	</div>
  	<shopcart ref="shopcart" :select-foods="selectFoods" :delivery-price="seller.deliveryPrice" :min-price="seller.minPrice"></shopcart>
  </div>
  <food @add="addFood" :food="selectedFood" ref="food"></food>
</div>
</template>
<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import shopcart from 'components/shopcart/shopcart.vue'
import cartcontrol from 'components/cartcontrol/cartcontrol.vue'
import food from 'components/food/food.vue'
const ERR_OK = 0
export default {
  props: {
    seller: {
      type: Object
    }
  },
  components: {
    shopcart,
    cartcontrol,
    food
  },
  data () {
    return {
      goods: [],
      listHeight: [],
      scrollY: 0,
      selectedFood: {}
    }
  },
  created () {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    this.$http.get('/api/goods').then((response) => {
      response = response.body
      if (response.errno === ERR_OK) {
        this.goods = response.data
        this.$nextTick(() => {
          this._initScroll()
          this._calculateHeight()
        })
        // console.log(this.goods)
      }
    })
  },
  computed: {
    currentIndex () {
      // console.log(this.listHeight.length)
      for (let i = 0; i < this.listHeight.length; i++) {
        let height1 = this.listHeight[i]
        let height2 = this.listHeight[(i + 1)]
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          // console.log(this.scrollY)
          // console.log(height1)
          // console.log(i)
          return i
        }
      }
      return 0
    },
    selectFoods () {
      let foods = []
      this.goods.forEach((good) => {
        good.foods.forEach((food) => {
          if (food.count) {
            foods.push(food)
          }
        })
      })
      // console.log(foods)
      return foods
    }
  },
  methods: {
    _initScroll () {
      this.menuScroll = new BScroll(this.$refs.menuWrapper, {
        click: true
      })
      this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
        click: true,
        probeType: 3
      })
      this.foodsScroll.on('scroll', (pos) => {
        this.scrollY = Math.abs(Math.round(pos.y))
      })
    },
    _calculateHeight () {
      let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook')
      let height = 0
      this.listHeight.push(height)
      for (let i = 0; i < foodList.length; i++) {
        let item = foodList[i]
        height += item.clientHeight
        this.listHeight.push(height)
      }
    },
    selectMenu (index, event) {
      // console.log(index)
      if (!event._constructed) {
        // 去掉自带click事件的点击
        return
      }
      let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook')
      let el = foodList[index]
      this.foodsScroll.scrollToElement(el, 300)
    },
    _drop (target) {
      // 体验优化,异步执行下落动画
      this.$nextTick(() => {
        this.$refs.shopcart.drop(target)
      })
    },
    selectFood (food, event) {
      if (!event._constructed) {
        // 去掉自带click事件的点击
        return
      }
      this.selectedFood = food
      console.log(this.$refs.food)
      this.$refs.food.show()
    },
    addFood (target) {
      this._drop(target)
    }
  },
  events: {
    'cart.add' (target) {
      console.log(target)
      this._drop(target)
    }
  }
}

</script>
<style lang="stylus" rel="stylesheet/stylus">
@import "../../commom/stylus/mixin.styl"
@import "goods.styl"

</style>
