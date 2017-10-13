import Vue from 'vue'
import VueUploadComponent from 'vue-upload-component'

import App from './App'
import router from './router'
import store from './store'
import axios from './utils/axios'

// Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.component('file-upload', VueUploadComponent)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
