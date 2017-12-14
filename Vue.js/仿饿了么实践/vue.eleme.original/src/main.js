// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import goods from './components/goods/goods'
import ratings from './components/ratings/ratings'
import seller from './components/seller/seller'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)
let routes = [
  { path: '/goods', component: goods },
  { path: '/ratings', component: ratings },
  { path: '/seller', component: seller }
]
let router = new VueRouter({
  linkActiveClass: 'active',
  routes
})
/* eslint-disable no-new */
let app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
// 默认跳转到/goods
// router.push('/goods')
export default app
