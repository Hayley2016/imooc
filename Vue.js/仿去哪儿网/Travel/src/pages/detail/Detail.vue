<template>
  <div>
    <detail-banner :banner="banner"></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner.vue'
import DetailHeader from './components/Header.vue'
import DetailList from './components/List.vue'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  mounted () {
    this.getDetailInfo()
  },
  methods: {
    getDetailInfo: function () {
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc: function (res) {
      res = res.data
      // console.log(res)
      if (res.ret && res.data) {
        const data = res.data
        this.list = data.categoryList
        this.banner = {
          'sightName': data.sightName,
          'bannerImg': data.bannerImg,
          'gallaryImgs': data.gallaryImgs
        }
      }
    }
  },
  data () {
    return {
      list: [],
      banner: {
        'sightName': '',
        'bannerImg': '',
        'gallaryImgs': []
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.content
  height: 50rem
</style>
