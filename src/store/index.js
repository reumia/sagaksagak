import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Nice Solutions to connect with DATABASE.
// https://stackoverflow.com/questions/41609155/vuex-rendering-data-that-is-fetched-from-rest-api

const state = {
  isAuthorized: false,
  user: {
    id: 0,
    status: ['BLOCKED'],
    name: 'Comic Artist A.K.A カラス',
    descriptions: '고동을 끓는 작고 보라. 아니더면, 몸이 아니한 것은 것이다.보라, 기관과 쓸쓸하랴? 같이, 피어나는 사람은 대고, 이는 칼이다. 그들은 설산에서 이는 심장의 생생하며, 눈이 듣는다. 유소년에게서 과실이 광야에서 웅대한 피가 무엇을 우리 미묘한 사랑의 철환하였는가? 끓는 어디 인류의 이것이야말로 관현악이며, 청춘을 교향악이다. 거친 불어 속에서 곧 인간에 영락과 부패뿐이다. 그것을 같은 이상을 그들의 바로 이것은 있는가? 방지하는 스며들어 간에 그들의 봄바람이다. 꽃이 우리 되려니와, 있다.',
    likes: 10000,
    totalContents: 200,
    email: 'sample@awesomedomain.com',
    site: 'https://dev.zzoman.com',
    profileImageUrl: '/static/example/user_profile.jpg',
    featuredImageUrl: '/static/example/user_featured.jpg'
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
  getIndex: (state, payload) => {

  }
}

const mutations = {

}

export default new Vuex.Store({
  state,
  getters,
  mutations
})
