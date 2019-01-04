import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex)

const state = {
  val: ''
}

const store = new Vuex.Store({
  state,
  actions,
  mutations
})

export default store
