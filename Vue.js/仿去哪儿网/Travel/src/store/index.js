import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'
import mutation from './mutation.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: state,
  actions: {
    changeCity (ctx, city) {
      ctx.commit('changeCity', city)
    }
  },
  mutations: mutation
})
