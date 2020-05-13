import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    infoError: {},
    conectado: false,
    carregando: true
  },
  mutations: {
    SET_INFOERROR(state, infoError){
      state.infoError = infoError
    },
    SET_CONECTADO(state, conectado){
      state.conectado = conectado
    },
    SET_CARREGANDO(state, carregando){
      state.carregando = carregando
    }
  },
  actions: {
    setInfoError({commit}, infoError){
      commit('SET_INFOERROR', infoError)
    },
    setConectado({commit}, conectado){
      commit('SET_CONECTADO', conectado)
    },
    setCarregando({commit}, carregando){
      commit('SET_CARREGANDO', carregando)
    }
  },
  modules: {
  }
})
