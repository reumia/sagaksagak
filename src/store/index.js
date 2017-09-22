import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  isAuthorized: false,
  authorizedUserId: 3,
  comicsLatest: [],
  comicsBest: [],
  tree: {}
}

const getters = {
}

const mutations = {
  GET_COMICS_LATEST (state, comics) {
    state.comicsLatest = comics
  }
}

const actions = {
  async GET_COMICS_LATEST ({ commit }, { self }) {
    try {
      const response = await self.$http.get(`/comics`)
      const comics = response.data

      commit('GET_COMICS_LATEST', comics)
    } catch (err) {
    }
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
