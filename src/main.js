// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import iView from 'iview'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App'
import router from './router'
import 'iview/dist/styles/iview.css'

Vue.use(iView)
Vue.use(VueAxios, axios)

// axio默认配置
axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.withCredentials = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
