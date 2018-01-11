import axios from 'axios'

// 路径前缀
axios.defaults.baseURL = process.env.BASE_URL

// 接口地址
const API = {
  login: `/admin/login`,
  getArticle: `/article`,
  getArchived: '/article/getArchived',
  getExcellent: '/article/getExcellent',
  getVoting: '/article/getVoting'
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
  axios.get(API.getArticle, {params: params}).then(res => {
    resolve(res.data)
  }).catch(err => {
    reject(err)
  })
})

const getArchived = () => new Promise((resolve, reject) => {
  axios.get(API.getArchived).then(res => {
    resolve(res.data)
  }).catch(err => {
    reject(err)
  })
})

const getExcellent = () => new Promise((resolve, reject) => {
  axios.get(API.getExcellent).then(res => {
    resolve(res.data)
  }).catch(err => {
    reject(err)
  })
})

const getVoting = () => new Promise((resolve, reject) => {
  axios.get(API.getVoting).then(res => {
    resolve(res.data)
  }).catch(err => {
    reject(err)
  })
})

// export
export default {
  login,
  getArticle,
  getArchived,
  getExcellent,
  getVoting
}
