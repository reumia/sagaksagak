import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../utils/axios'
import _ from 'lodash'

Vue.use(Vuex)

const state = {
  isGlobalNavigationVisible: false,
  comicsLatest: null,
  comicsBest: null,
  currentUser: null,
  comic: null,
  user: null
}

const mutations = {
  TOGGLE_GLOBAL_NAVIGATION (state) {
    state.isGlobalNavigationVisible = state.isGlobalNavigationVisible === false
  },
  HIDE_GLOBAL_NAVIGATION (state) {
    state.isGlobalNavigationVisible = false
  },
  SET_CURRENT_USER (state, user) {
    state.currentUser = user
  },
  DELETE_CURRENT_USER (state) {
    state.currentUser = null
  },
  SET_USER (state, user) {
    state.user = _.assignIn(state.user, user)
  },
  DELETE_USER (state) {
    state.user = null
  },
  SET_COMIC (state, comic) {
    state.comic = _.assignIn(state.comic, comic)
  },
  DELETE_COMIC (state) {
    state.comic = null
  },
  SET_LATEST_COMICS (state, comics) {
    state.comicsLatest = comics
  }
}

const actions = {
  async SIGN_IN ({commit}, {email, password, descriptions}) {
    const response = await axios.post('/auth/sign-in', {
      email: email,
      password: password,
      descriptions: descriptions
    })
    const user = response.data

    commit('SET_CURRENT_USER', user)
  },
  async SIGN_OUT ({commit}) {
    await axios.post('/auth/sign-out')

    commit('DELETE_CURRENT_USER')
  },
  async GET_CURRENT_USER ({commit}) {
    const response = await axios.get('/users/@me')
    const user = response.data

    commit('SET_CURRENT_USER', user)
  },
  async GET_USER_BY_ID ({commit}, {id}) {
    if (id) {
      const response = await axios.get(`/users/${id}`)
      const user = response.data

      commit('SET_USER', user)
    } else {
      commit('DELETE_USER')
    }
  },
  async ADD_USER () {
  },
  async UPDATE_USER ({commit, state}, {id}) {
    const response = await axios.put(`/users/${id}/update`, {
      name: state.user.name,
      descriptions: state.user.descriptions,
      image_url: state.user.image_url,
      site: state.user.site
    })
    const user = response.data

    if (id === state.currentUser.id) commit('SET_CURRENT_USER', user)

    return user
  },
  async GET_COMIC_BY_ID ({commit}, {id}) {
    if (id) {
      const response = await axios.get(`/comics/${id}`)
      const comic = response.data

      commit('SET_COMIC', comic)
    } else {
      commit('DELETE_COMIC')
    }
  },
  async ADD_COMIC ({commit, state}) {
    const response = await axios.post('/comics', {
      title: state.comic.title,
      descriptions: state.comic.descriptions,
      image_url: state.comic.image_url
    })
    const comic = response.data

    return comic
  },
  async UPDATE_COMIC ({commit, state}, {id}) {
    const response = await axios.put(`/comics/${id}/update`, {
      title: state.comic.title,
      descriptions: state.comic.descriptions,
      image_url: state.comic.image_url
    })
    const comic = response.data

    return comic
  },
  async GET_LATEST_COMICS ({commit}) {
    const response = await axios.get(`/comics/latest`)
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
