import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn:false
  },
  getters: {
    isLoggedIn:function(state) {
      return state.isLoggedIn
    }
  },
  mutations: {
    setIsLoggedIn(state, payload) {
      state.isLoggedIn = payload;
    }
  },
  actions: {

  }
})
