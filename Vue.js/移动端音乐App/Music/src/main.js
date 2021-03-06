import Vue from 'vue'
import App from './App'
import router from './router'
// 引入基础样式
import 'common/stylus/index.styl'
// babel-polyfill的引用和使用 解决ie9和一些低版本的高级浏览器对es6新语法并不支持
import 'babel-polyfill'
// 300毫秒点击延迟解决方案
import fastClick from 'fastclick'
// 图片懒加载技术
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueLazyLoad, {
  loading: require('common/image/default.png')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
