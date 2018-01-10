import MockAjax from 'mockajax'
import faker from 'faker'

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
    url: '/article',
    response (req) {
      let rows = []
      for (let i = 0, len = faker.random.number(30); i < len; i++) {
        rows.push({
          id: faker.random.uuid(),
          username: '我是推荐人',
          title: '我是标题',
          recommend_name: '为什么为什么不为什么',
          time: new Date(),
          score: 0,
          link: ''
        })
      }

      return {
        success: true,
        msg: '',
        data: {
          rows: rows
        }
      }
    }
  }
])
