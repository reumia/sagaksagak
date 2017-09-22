import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const API_ENDPOINT = process.env.API_ENDPOINT

const state = {
  isAuthorized: false,
  authorizedUserId: 3,
  user: {
    'stickers': [
      'OPENED'
    ],
    'name': '흑흑맨',
    'descriptions': '흑흑맨은 항상 울고 다닙니다. 그러나 가끔 현자타임이 돠면 후후맨으로 변신하곤 하지요. 세상일 다 세옹지마입니다.',
    'email': 'zzo.skt@sk.com',
    'site': 'http://www.ifkiller.com/',
    'cuts': 10000,
    'likes': 302395,
    'profileImageUrl': '/static/example/user_profile.jpg',
    'featuredImageUrl': '/static/example/user_featured.jpg',
    'createdAt': '2017-09-20T15:00:00.000Z',
    'comics': [
      {
        'status': 'CLOSED',
        'title': '흑흑맨의 일기',
        'descriptions': '항상 우는 흑흑맨의 일기입니다. 자칫 너무 우울할 수 있으니 조심해 X꺄.',
        'image_url': null,
        'created_at': '2017-09-20T15:00:00.000Z',
        'id': 26,
        'owner_id': 3
      }
    ]
  },
  comic: {
    id: 0,
    status: ['OPEN', 'MVP_MONTH'],
    title: '유미의 세포들',
    descriptions: '어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 ',
    likes: 102,
    totalContents: 3281,
    imageUrl: '/static/example/featured.jpg',
    owner: {
      id: 0,
      name: 'Comic Artist A.K.A カラス'
    }
  },
  tree: {
  }
}

const getters = {
}

const mutations = {
  GET_USER (state, user) {
    state.user = user
  },
  GET_COMIC (state, comic) {

  }
}

const actions = {
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
