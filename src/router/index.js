import Vue from 'vue'
import iView from 'iview'
import Util from '../libs/util'
import VueRouter from 'vue-router'
import Cookies from 'js-cookie'
import routers from './router'

Vue.use(VueRouter)

// 路由配置
const router = new VueRouter({
  history: true,
  routes: routers
})

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  Util.title(to.meta.title)
  if (!Cookies.get('user') && to.name !== 'login') { // 判断是否已经登录且前往的页面不是登录页
    next({
      name: 'login'
    })
  } else if (Cookies.get('user') && to.name === 'login') { // 判断是否已经登录且前往的是登录页
    Util.title()
    next({
      name: 'home_index'
    })
  } else {
    Util.toDefaultPage([...routers], to.name, router, next)
  }
})

router.afterEach((to) => {
  iView.LoadingBar.finish()
})

export default router
