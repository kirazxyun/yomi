const routers = [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录'
    },
    component: resolve => {
      require(['@/views/login.vue'], resolve)
    }
  }, {
    path: '/index',
    name: 'home_index',
    meta: {
      titie: 'home'
    },
    component: resolve => {
      require(['@/components/HelloWorld.vue'], resolve)
    }
  }
]

export default routers
