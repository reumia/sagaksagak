import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Nice Solutions to connect with DATABASE.
// https://stackoverflow.com/questions/41609155/vuex-rendering-data-that-is-fetched-from-rest-api

const state = {
  isAuthorized: false,
  user: {
    id: 0,
    name: '이동건'
  },
  comic: {
    id: 0,
    owner: 0,
    title: '유미의 세포들',
    descriptions: '어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 ',
    imageUrl: '/static/example/featured.jpg',
    likes: 102,
    status: 'OPEN'
  },
  tree: {
  }
}

const getters = {

}

const mutations = {}

export default new Vuex.Store({
  state,
  getters,
  mutations
})
