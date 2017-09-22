import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const API_ENDPOINT = process.env.API_ENDPOINT

const state = {
  isAuthorized: false,
  authorizedUserId: 3,
  tree: {
  }
}

const getters = {
}

const mutations = {
  // GET_USER (state, user) {
  //   state.user = user
  // },
}

const actions = {
  // this.$store.dispatch('GET_USER_BY_ID', { userId: 3 })
  GET_USER_BY_ID: async ({ commit }, { userId }) => {
    try {
      const user = await axios.get(`${API_ENDPOINT}/users/${userId}`)
      const result = user.data

      commit('GET_USER', result)
    } catch (err) {
      console.log(err)
    }
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
