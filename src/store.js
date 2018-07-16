import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn:false,
    children:[],
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
      state.currentChild = payload;
    },
    addDailySticker(state, payload) {
      if(state.currentChild.daily_stickers == null) state.currentChild.daily_stickers = [];
      state.currentChild.daily_stickers.push(payload)
    },
    removeDailySticker(state, payload) {
      console.log(state.currentChild)
      state.currentChild.daily_stickers.forEach(function(sticker, index){
        if(sticker._id === payload){
          state.currentChild.daily_stickers.splice(index, 1);
        }
      }) 
    },
    setDailyStickers(state, payload){
      state.currentChild.daily_stickers = payload;
    },
    setLight(state, payload){
      state.currentChild.light = payload.light;
    },
    setReward(state, payload){
      state.currentChild.rewards = payload;

    },
    setUpdatedChild(state, payload){
      state.updatedChild = Object.assign({}, state.currentChild);
    },
    updateChildName(state, payload){
      state.updatedChild.name = payload
    },
    updateChild:function(state, payload){
      state.currentChild = payload;
    },
    removeReward:function(state, payload){
      state.updatedChild.rewards.splice(payload, 1);
    },
    addReward:function(state, paylaod){
      if(!state.updatedChild.rewards) state.updatedChild.rewards = [];
      state.updatedChild.rewards.push(paylaod);
    },
    newChild:function(state, paylaod){
      state.children.push(paylaod);
    },
    getChildren:function(state, payload) {
      console.log(payload)
      state.children.splice(0, state.children.length)
      payload.forEach(function(child){
        state.children.push(child);
      })
    },
    removeChild(state, payload){
      state.children.forEach(function(child, index){
        if (child._id === payload) {
          state.children.splice(index, 1);
        }
      })
    }
  },
  actions: {
    addDailySticker ({commit}, payload) {
      axios.post('/api/addDailySticker', payload).then(function(response){
        console.log('result', response.data.result.rows[0]);
        commit('addDailySticker', response.data.result.rows[0])
      })
    },
    removeDailySticker ({commit}, payload){
      axios.post('/api/removeDailySticker', payload).then((response)=>{
        console.log(response.data.result.rows)
        commit('removeDailySticker', response.data.result.rows[0]._id);
      })
    },
    getDailyStickers ({commit}, payload){
      axios.get('getDailyStickers').then(function(response){
        commit('setDailyStickers', response.data.result.rows)
      });
    },
    setReward ({commit, state}, payload) {
      let json = state.currentChild.rewards
      json.forEach(function(reward, index){
        reward.selected = index === payload
      })
      axios.post('/api/setReward', {json, _id:state.currentChild._id}).then((response)=>{
        commit('setReward', json)
      })
    },
    updateChild ({commit}, payload) {
      // payload should have a list of rewards, and the childs name and id
      axios.post('/api/updateChild', payload).then((response)=>{
        commit('updateChild', response.data.result.rows[0])
      })
    },
    getChildren ({commit}) {
      axios.get('/api/getChildren').then((response)=>{
        console.log('response', response.data);
        commit('getChildren', response.data.result);
      })
    },
    getCurrentChild ({commit}, payload) {
      console.log(payload);
      axios.get('/api/getChild/'+payload).then(function(response){
        console.log(response.data.result)
        commit('setCurrentChild', response.data.result)
      })
    },
    newChild ({commit}, payload){
      axios.post('/api/newChild', {name:payload.name}).then((response)=>{
        commit('newChild', response.data.result);
      }).catch(function(err){
        console.log(err)
      })
    },
    removeChild({commit}, {child, index}){
      console.log(child);
      axios.post('/api/removeChild', {_id:child._id}).then(function(response){
        console.log(response.data)
        commit('removeChild', response.data.result.rows[0]._id);
      })
    }
  }
})