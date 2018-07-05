import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn:false,
    children:[
      {name:'Hazel'},
      {name:'James'}
    ]
  },
  getters: {
    isLoggedIn:function(state) {
      return state.isLoggedIn
    },
    children:function(state) {
      return state.children
    },
    getChild: (state) => (name) => {
      return state.children.find(child => child.name === name)
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
