import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../utils/axios'

Vue.use(Vuex)

const state = {
  isAuthorized: false,
  currentUser: null,
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
    if (user) state.currentUser = user
  },
  SIGN_OUT (state) {
    state.isAuthorized = false
    state.currentUser = null
  },
  GET_COMICS_LATEST (state, comics) {
    state.comicsLatest = comics
  }
}

const actions = {
  async FETCH_AUTH ({commit}) {
    const response = await axios.get('/auth/check')

    if (response.data.isAuthorized) commit('SIGN_IN')
    else commit('SIGN_OUT')
  },
  async SIGN_IN ({commit}, {email, password}) {
    const response = await axios.post('/auth/sign-in', { email: email, password: password })
    const user = response.data

    commit('SIGN_IN', user)
  },
  async GET_COMICS_LATEST ({ commit }) {
    const response = await axios.get(`/comics`)
    const comics = response.data

    commit('GET_COMICS_LATEST', comics)
  }
}

const store = {
  state,
  getters,
  mutations,
  actions
}

export default new Vuex.Store(store)
