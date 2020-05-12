import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    infoError: {},
    conectado: false
  },
  mutations: {
    SET_INFOERROR(state, infoError){
      state.infoError = infoError
    },
    SET_CONECTADO(state, conectado){
      state.conectado = conectado
    }
  },
  actions: {
    setInfoError({commit}, infoError){
      commit('SET_INFOERROR', infoError)
    },
    setConectado({commit}, conectado){
      commit('SET_CONECTADO', conectado)
    }
  },
  modules: {
  }
})
