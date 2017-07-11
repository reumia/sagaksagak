import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  isAuthorized: false,
};

const mutations = {};

export default new Vuex.Store({
  state,
  mutations,
});
