import Login from '@/views/login'
import Home from '@/components/HelloWorld'

const routers = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: '首页'
    },
    component: Home
  }, {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录',
      auth: true
    },
    component: Login
  }
]

export default routers
