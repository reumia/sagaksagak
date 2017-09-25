// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// TODO : process.env 제대로 접근 안됨

Vue.prototype.$http = axios.create({
  baseURL: process.env.API_ENDPOINT,
  timeout: 10000,
  withCredentials: true
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
