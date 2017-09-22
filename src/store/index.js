import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

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
  GET_USER_BY_ID: async ({ commit }, { userId, self }) => {
    try {
      const user = await self.$http.get(`/users/${userId}`)
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
