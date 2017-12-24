import axios from 'axios'

// axio默认配置
axios.defaults.baseURL = process.env.BASE_URL
axios.defaults.withCredentials = true

// 接口地址
const API = {
  login: '/admin/login'
}

// 登陆
const login = (params) => new Promise((resolve, reject) => {
  axios.post(API.login, params).then(res => {
    resolve(res)
  }).catch(err => {
    reject(err)
  })
})

// export
export default {
  login
}
