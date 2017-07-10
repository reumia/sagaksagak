import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  isAsideShown: false,
  isAuthorized: false,
};

const getters = {};

const mutations = {};

export default new Vuex.Store({
  state,
  getters,
  mutations,
});
