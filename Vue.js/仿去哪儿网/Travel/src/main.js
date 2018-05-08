// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 300毫秒点击延迟解决方案
import fastClick from 'fastclick'
// 样式统一初始化解决方案
import './assets/styles/reset.css'
// 移动端一像素边框解决方案
import './assets/styles/border.css'
// 引入字体样式
import './assets/styles/iconfont.css'
// 轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
// 引入vuex
import store from './store/index.js'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  components: {
    App
  },
  template: '<App/>'
})
