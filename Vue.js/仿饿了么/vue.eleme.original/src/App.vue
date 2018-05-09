<template>
  <div>
    <v-header :seller="seller"></v-header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">
          商品
        </router-link>
        <!-- <a v-link="{path:'/goods'}">商品</a> -->
      </div>
      <div class="tab-item">
        <router-link to="/ratings">
          评论
        </router-link>
        <!-- <a v-link="{path:'/ratings'}">评论</a> -->
      </div>
      <div class="tab-item">
        <router-link to="/seller">
          商家
        </router-link>
        <!-- <a v-link="{path:'/seller'}">商家</a> -->
      </div>
    </div>
    <!-- <div class="content">
      content
    </div> -->
    <keep-alive>
    <router-view :seller="seller"></router-view>
    </keep-alive>
  </div>
</template>
<script type="text/ecmascript-6">
import header from './components/header/header.vue'
import {urlParse} from './commom/js/util'
export default {
  data () {
    return {
      seller: {
        id: (() => {
          let queryParam = urlParse()
          // console.log(queryParam)
          return queryParam.id
        })()
      }
    }
  },
  created () {
    this.$http.get('/api/seller?id=' + this.seller.id).then((response) => {
      response = response.body
      // console.log(response)
      if (response.errno === 0) {
        this.seller = response.data
        // console.log(this.seller)
      }
    })
  },
  components: {
    'v-header': header
  }
}

</script>
<style lang="stylus" rel="stylesheet/stylus">
.tab 
  display:flex 
  width:100% 
  // border:1px solid red 
  height:40px 
  line-height:40px 
  .tab-item 
    flex:1 
    text-align:center 
    &>a
      display:block
      font-size:14px
      color:rgb(77,85,93)
      &.active
        color:rgb(240,20,20)
</style>
