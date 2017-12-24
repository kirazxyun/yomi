import Vue from 'vue'
import iView from 'iview'
import Util from '../libs/util'
import VueRouter from 'vue-router'
import Cookies from 'js-cookie'
import routers from './router'

Vue.use(VueRouter)

// 路由配置
const router = new VueRouter({
  mode: 'history',
  routes: routers,
  scrollBehavior () {
    return {
      x: 0,
      y: 0
    }
  }
})

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  if (!Cookies.get('user') && to.name !== 'login') { // 判断是否已经登录且前往的页面不是登录页
    next({
      name: 'login'
    })
  } else if (Cookies.get('user') && to.name === 'login') { // 判断是否已经登录且前往的是登录页
    next({
      name: 'home'
    })
  } else {
    Util.toDefaultPage([...routers], to.name, router, next)
  }
})

router.afterEach((to) => {
  Util.title(to.meta.title)
  iView.LoadingBar.finish()
})

export default router
