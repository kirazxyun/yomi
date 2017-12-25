import axios from 'axios'

// 路径前缀
axios.defaults.baseURL = process.env.BASE_URL

// 接口地址
const API = {
  login: `/admin/login`,
  getArticle: `/article/getArticle`
}

// 登陆
const login = (params) => new Promise((resolve, reject) => {
  axios.post(API.login, params).then(res => {
    resolve(res)
  }).catch(err => {
    reject(err)
  })
})

const getArticle = (params) => new Promise((resolve, reject) => {
  axios.get(API.getArticle, params).then(res => {
    resolve(res)
  }).catch(err => {
    reject(err)
  })
})

// export
export default {
  login,
  getArticle
}
