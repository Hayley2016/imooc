import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
const createStore = () => {
  return new Vuex.Store({
    state: {
      products: [],
      focusProduct: {},
      houses: [],
      focusHouse: {},
      characters: [],
      focusCharacter: {},
      cities: [],
      authUser: {},
      imageCDN: '',
      payments: []
    },
    getters,
    actions,
    mutations
  })
}
export default createStore
