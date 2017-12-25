import Login from '@/views/login'
import Main from '@/views/main'
import Home from '@/views/home'
import Page404 from '@/views/404'
import Page403 from '@/views/403'
import Page500 from '@/views/500'

// 登录
const loginRouter = {
  path: '/login',
  name: 'login',
  meta: {
    title: '登录',
    auth: true
  },
  component: Login
}

// 404
const page404 = {
  path: '/*',
  name: 'page-404',
  meta: {
    title: '页面不存在'
  },
  component: Page404
}

// 403
const page403 = {
  path: '/403',
  meta: {
    title: '权限不足'
  },
  name: 'page-403',
  component: Page403
}

// 500
const page500 = {
  path: '/500',
  meta: {
    title: '服务端出错'
  },
  name: 'page-500',
  component: Page500
}

// Main子组件
const mainRouter = [
  {
    path: '/',
    name: 'mainRouter',
    redirect: '/home',
    component: Main,
    children: [{
      path: 'home',
      title: '首页',
      name: 'home',
      component: Home
    }]
  }
]

const routers = [
  loginRouter,
  ...mainRouter,
  page403,
  page404,
  page500
]

export default routers
