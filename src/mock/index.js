// import MockAjax from 'mockajax'
require('mockajax')

MockAjax.mock([
  {
    url: '/admin/login',
    response (req) {
      return {
        success: true,
        msg: '登陆成功'
      }
    }
  },
  {
    url: '/article/getArticle',
    response (req) {
      return {
        success: true,
        msg: '',
        data: {
          rows: [{
            id: '12qwe',
            username: '我是推荐人',
            title: '我是标题',
            recommend: '为什么为什么不为什么',
            time: new Date(),
            score: 0
          }]
        }
      }
    }
  }
])
