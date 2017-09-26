import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../../config/axios'

Vue.use(Vuex)

const state = {
  isAuthorized: false,
  user: {},
  comicsLatest: [],
  comicsBest: [],
  tree: {}
}

const getters = {
  IS_AUTHORIZED (state) {
    return state.isAuthorized
  }
}

const mutations = {
  SIGN_IN (state, user) {
    state.isAuthorized = true
    if (user) state.user = user
  },
  GET_COMICS_LATEST (state, comics) {
    state.comicsLatest = comics
  }
}

const actions = {
  async FETCH_AUTH ({commit}) {
    try {
      const response = await axios.get('/auth/check')

      if (response.data.isAuthorized) commit('SIGN_IN')
    } catch (err) {
      console.warn(err.response.data)
    }
  },
  async SIGN_IN ({commit}, {email, password}) {
    try {
      const response = await axios.post('/auth/sign-in', {
        email: email,
        password: password
      })
      const user = response.data

      commit('SIGN_IN', user)
    } catch (err) {
      if (err.response.data === 'ALREADY_AUTHORIZED') commit('SIGN_IN')

      console.warn(err.response.data)
    }
  },
  async GET_COMICS_LATEST ({ commit }) {
    try {
      const response = await axios.get(`/comics`)
      const comics = response.data

      commit('GET_COMICS_LATEST', comics)
    } catch (err) {
      console.warn(err.response.data)
    }
  }
}

const store = {
  state,
  getters,
  mutations,
  actions
}

export default new Vuex.Store(store)
