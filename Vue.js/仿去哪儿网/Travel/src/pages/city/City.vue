<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :letter="letter" :hotCities="hotCities" :cities="cities"></city-list>
    <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
  </div>
</template>
<script>
import axios from 'axios'
import CityHeader from './components/Header.vue'
import CitySearch from './components/Search.vue'
import CityList from './components/List.vue'
import CityAlphabet from './components/Alphabet.vue'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      hotCities: [],
      cities: {},
      letter: ''
    }
  },
  mounted () {
    this.getCityInfo()
  },
  methods: {
    getCityInfo: function () {
      axios.get('/api/city.json').then(this.getCityInfoSucc)
    },
    getCityInfoSucc: function (res) {
      res = res.data
      // console.log(res)
      if (res.ret && res.data) {
        const data = res.data
        this.hotCities = data.hotCities
        this.cities = data.cities
        // console.log(this.hotCities)
      }
    },
    handleLetterChange: function (letter) {
      // console.log(letter)
      this.letter = letter
    }
  }
}

</script>
<style lang="stylus" scoped></style>
