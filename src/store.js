import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn:false,
    children:[
      {id:0, name:'Hazel', dailyStickers: [{color:'blue'}], light:'green'},
      {id:1, name:'James', dailyStickers: [{color:'red'}], light:'green', rewards:[{reward:'Walk', selected: true},{reward:'Dance', selected: false}]}
    ],
    updatedChild:{},
    currentChild:{}
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
    },
    updatedChild: function(state){
      return state.updatedChild
    }
  },
  mutations: {
    setIsLoggedIn(state, payload) {
      state.isLoggedIn = payload;
    },
    setCurrentChild(state, payload){
      state.currentChild = state.children.find(child => child.name == payload);
    },
    addDailySticker(state, payload) {
      state.currentChild.dailyStickers.push({color:payload.color})
    },
    removeDailySticker(state, payload) {
      state.currentChild.dailyStickers.splice(payload.index, 1); 
    },
    setLight(state, payload){
      state.currentChild.light = payload.light;
    },
    setReward(state, payload){
      state.currentChild.rewards.forEach((reward,index) => {
        reward.selected = payload.index === index;
      });

    },
    setUpdatedChild(state, payload){
      state.updatedChild = Object.assign({}, payload);
    },
    updateChildName(state, payload){
      state.updatedChild.name = payload
    },
    updateChild:function(state, payload){
      state.currentChild.name = state.updatedChild.name
    }
  },
  actions: {

  }
})
