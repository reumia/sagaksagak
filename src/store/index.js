import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../utils/axios'

Vue.use(Vuex)

const state = {
  isGlobalNavigationVisible: false,
  user: null,
  currentUser: null,
  comicsLatest: null,
  comicsBest: null,
  tree: null
}

const mutations = {
  TOGGLE_GLOBAL_NAVIGATION (state) {
    state.isGlobalNavigationVisible = state.isGlobalNavigationVisible === false
  },
  HIDE_GLOBAL_NAVIGATION (state) {
    state.isGlobalNavigationVisible = false
  },
  SET_LATEST_COMICS (state, comics) {
    state.comicsLatest = comics
  },
  SET_USER (state, user) {
    state.user = user
  },
  SET_CURRENT_USER (state, user) {
    state.currentUser = user
  },
  DELETE_CURRENT_USER (state) {
    state.currentUser = null
  }
}

const actions = {
  async SIGN_IN ({commit}, {email, password}) {
    const response = await axios.post('/auth/sign-in', { email: email, password: password })
    const user = response.data

    commit('SET_CURRENT_USER', user)
  },
  async SIGN_OUT ({commit}) {
    await axios.post('/auth/sign-out')

    commit('DELETE_CURRENT_USER')
  },
  async GET_USER ({commit}, {id}) {
    const response = await axios.get(`/users/${id}`)
    const user = response.data

    commit('SET_USER', user)
  },
  async GET_CURRENT_USER ({commit}) {
    const response = await axios.get('/users/@me')
    const user = response.data

    commit('SET_CURRENT_USER', user)
  },
  async GET_LATEST_COMICS ({commit}) {
    const response = await axios.get(`/comics`)
    const comics = response.data

    commit('SET_LATEST_COMICS', comics)
  }
}

const store = {
  state,
  mutations,
  actions
}

export default new Vuex.Store(store)
