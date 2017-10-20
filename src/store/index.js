import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../utils/axios'
import _ from 'lodash'
import initialState from './initialState'

Vue.use(Vuex)

const state = {
  ...initialState
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
    state.currentUser = {
      ...initialState.currentUser
    }
  },
  SET_USER (state, user) {
    state.user = _.assignIn(state.user, user)
  },
  DELETE_USER (state) {
    state.user = {
      ...initialState.user
    }
  },
  SET_COMIC (state, comic) {
    state.comic = _.assignIn(state.comic, comic)
  },
  DELETE_COMIC (state) {
    state.comic = {
      ...initialState.comic
    }
  },
  SET_LATEST_COMICS (state, comics) {
    state.comicsLatest = comics
  },
  SET_CUT (state, cut) {
    state.cut = _.assignIn(state.cut, cut)
  },
  DELETE_CUT (state) {
    state.cut = {
      ...initialState.cut
    }
  }
}

const actions = {
  async SIGN_IN ({commit}, payload) {
    const response = await axios.post('/auth/sign-in', {
      ...payload
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
      imageUrl: state.user.imageUrl,
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

      const d3 = require('d3-hierarchy')
      const stratify = d3.stratify().id((d) => d.id).parentId((d) => d.parentId)

      state.comic.tree = await stratify(comic.cuts)

      commit('SET_COMIC', comic)
    } else {
      commit('DELETE_COMIC')
    }
  },
  async ADD_COMIC ({commit, state}) {
    const response = await axios.post('/comics', {
      title: state.comic.title,
      descriptions: state.comic.descriptions,
      imageUrl: state.comic.imageUrl
    })
    const comic = response.data

    return comic
  },
  async UPDATE_COMIC ({commit, state}, {id}) {
    const response = await axios.put(`/comics/${id}/update`, {
      title: state.comic.title,
      descriptions: state.comic.descriptions,
      imageUrl: state.comic.imageUrl
    })
    const comic = response.data

    return comic
  },
  async GET_LATEST_COMICS ({commit}) {
    const response = await axios.get(`/comics/latest`)
    const comics = response.data

    commit('SET_LATEST_COMICS', comics)
  },
  async ADD_CUT ({commit, state}, payload) {
    const response = await axios.post('/cuts', {
      ...payload,
      title: state.cut.title,
      imageUrl: state.cut.imageUrl
    })
    const cut = response.data

    return cut
  },

  async ADD_LIKE ({commit}, {type, id}) {
    const response = await axios.post(`/likes/${type}/${id}`)
    return response.data
  },
  async DELETE_LIKE ({commit}, {type, id}) {
    const response = await axios.delete(`/likes/${type}/${id}`)
    return response.data
  }
}

const store = {
  state,
  mutations,
  actions
}

export default new Vuex.Store(store)
