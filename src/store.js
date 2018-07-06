import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn:false,
    children:[
      {name:'Hazel', dailyStickers: [{color:'blue'}], light:'green'},
      {name:'James', dailyStickers: [{color:'red'}], light:'green'}
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
    },
    addDailySticker(state, payload) {
      state.children.find(child => {
        if(child.name === payload.child){
          child.dailyStickers.push({color:payload.color})
          return true;
        }
      })
      // child.dailyStickers.push(payload.color)
    },
    removeDailySticker(state, payload) {
      state.children.find(child => {
        if(child.name === payload.child){
          child.dailyStickers.splice(payload.index, 1);
          return true;
        }
      })
      
    }
  },
  actions: {

  }
})
