<template>
    <div class="login" @keydown.enter="handleSubmit">
        <div class="login-con">
            <Card :bordered="false">
                <p slot="title">
                    <Icon type="log-in"></Icon>
                    欢迎登录
                </p>
                <div class="form-con">
                    <Form ref="loginForm" :model="form" :rules="rules">
                        <FormItem prop="userName">
                            <Input v-model="form.userName" placeholder="请输入用户名">
                                <span slot="prepend">
                                    <Icon :size="16" type="person"></Icon>
                                </span>
                            </Input>
                        </FormItem>
                        <FormItem prop="password">
                            <Input type="password" v-model="form.password" placeholder="请输入密码">
                                <span slot="prepend">
                                    <Icon :size="14" type="locked"></Icon>
                                </span>
                            </Input>
                        </FormItem>
                        <p class="error-tip" v-show="errorMsg">{{ errorMsg }}</p>
                        <FormItem>
                            <Button @click="handleSubmit" type="primary" long>登录</Button>
                        </FormItem>
                    </Form>
                </div>
            </Card>
        </div>
    </div>
</template>

<script>
import Cookies from 'js-cookie'
import Server from '@/server'

export default {
  data () {
    return {
      form: {
        userName: 'admin',
        password: ''
      },
      rules: {
        userName: [{
          required: true,
          message: '账号不能为空',
          trigger: 'blur'
        }],
        password: [{
          required: true,
          message: '密码不能为空',
          trigger: 'blur'
        }]
      },
      errorMsg: ''
    }
  },
  methods: {
    handleSubmit () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          Server.login(this.form).then((res) => {
            if (res.data.success) {
              this.errorMsg = ''
              Cookies.set('user', this.form.userName)
              Cookies.set('password', this.form.password)
              if (this.form.userName === 'admin') {
                Cookies.set('access', 0)
              } else {
                Cookies.set('access', 1)
              }
              this.$router.push({
                name: 'home_index'
              })
            } else {
              this.errorMsg = res.data.msg
            }
          })
        }
      })
    }
  },
  created: function () {
  }
}
</script>

<style lang="less">
  .login{
    width: 100%;
    height: 100%;
    // background-color: aquamarine;
    background-image: url('../assets/bg.jpg');
    background-size: cover;
    background-position: center;
    position: relative;
    &-con{
        position: absolute;
        right: 160px;
        top: 50%;
        transform: translateY(-60%);
        width: 300px;
        &-header{
            font-size: 16px;
            font-weight: 300;
            text-align: center;
            padding: 30px 0;
        }
        .form-con{
            padding: 10px 0 0;
        }
        .error-tip{
            font-size: 10px;
            text-align: center;
            color: red;
        }
    }
  }
</style>
