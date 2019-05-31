import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    biodata:{},
  },
  mutations: {
    setBiodata(state,data){
      state.biodata = data
    }
  },
  actions: {

  }
})
