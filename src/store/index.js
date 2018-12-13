import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)


export default new Vuex.Store({
    state: {
      count: 0
    },

    mutations: {
      increments(state) {
        state.count ++
      },
      decrements(state) {
        state.count --
      }
    },
    getters: {
      squared: (state) =>
        state.count * state.count,

      cubed: (state, getters) =>
        state.count * getters.squared
    }

  })


