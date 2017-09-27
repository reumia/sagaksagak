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
  SET_LATEST_COMICS (state, comics) {
    state.comicsLatest = comics
  }
}

const actions = {
  async FETCH_AUTH ({commit}) {
    await axios.get('/auth/check')

    commit('SIGN_IN')
  },
  async SIGN_IN ({commit}, {email, password}) {
    const response = await axios.post('/auth/sign-in', { email: email, password: password })
    const user = response.data

    commit('SIGN_IN', user)
  },
  SIGN_OUT ({commit}) {
    commit('SIGN_OUT')
  },
  async GET_LATEST_COMICS ({ commit }) {
    const response = await axios.get(`/comics`)
    const comics = response.data

    commit('SET_LATEST_COMICS', comics)
  }
}

const store = {
  state,
  getters,
  mutations,
  actions
}

export default new Vuex.Store(store)
