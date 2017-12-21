import Vue from 'vue'
const api = {
  login: '/admin/login'
}
export default {
  login: function (params) {
    return Vue.$http.post(api.login, params)
  }
}
