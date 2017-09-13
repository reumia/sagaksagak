import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  isAuthorized: false,
  user: {
    id: 0,
    name: '이동건'
  },
  comic: {
    id: 0,
    owner: 13,
    title: '유미의 세포들',
    descriptions: '어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 ',
    imageUrl: '/static/example/featured.jpg',
    data: {}
  },
  cut: {
    id: 0,
    title: '유미의 세포들 #1',
    descriptions: '',
    imageUrl: '/static/example/single_02.jpg',
    prev: {
      id: 4,
      title: '유미의 세포들 #0',
      descriptions: '',
      imageUrl: '/static/example/single_01.jpg'
    },
    next: [
      {
        id: 1,
        title: '유미의 세포들 #2-1',
        descriptions: '',
        imageUrl: '/static/example/single_03.jpg'
      },
      {
        id: 2,
        title: '유미의 세포들 #2-2',
        descriptions: '',
        imageUrl: '/static/example/single_04.jpg'
      },
      {
        id: 3,
        title: '유미의 세포들 #2-3',
        descriptions: '',
        imageUrl: '/static/example/single_05.jpg'
      }
    ]
  }
}

const getters = {}

const mutations = {}

export default new Vuex.Store({
  state,
  getters,
  mutations
})
