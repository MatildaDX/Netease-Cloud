<template>
  <div class="login">
    <van-nav-bar class="login-bar" left-text="手机号登录"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- 表单区域开始 -->
    <van-form @submit="onSubmit" class="van-form">
      <van-field v-model="userForm.phone"
        name="phone"
        type="number"
        label="手机号码"
        placeholder="phone"
        :rules="[
              { required: true, message: '请填写您的手机号码！' },
              { pattern: /^1[3456789]\d{9}$/, message: '手机号码格式错误！'}
        ]"/>
      <van-field v-model="userForm.password"
        type="password"
        name="password"
        label="密码"
        placeholder="password"
        :rules="[{ required: true, message: '请填写密码' }]"/>
      <div style="margin: 16px;">
        <van-button round block type="danger" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import {login} from 'network/login'

export default {
  name: 'Login',
  data () {
    return {
      // 表单数据
      userForm: {
        phone: '',
        password: null
      }
    }
    
  },
  methods: {
    // 登录
    async onSubmit(values) {
      const res = await login(values.phone, values.password)
      if (res.code !== 200) return this.$notify(res.message)
      window.sessionStorage.setItem('token', res.token)
      window.sessionStorage.setItem('userInfo', res.profile)
      this.$router.push('/home')
    },
    // 暂不登录
    onClickLeft() {
      this.$router.push('/home')
    }
  }
}
</script>

<style scoped>

  .login {
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: #fff;
  }

  .van-form {
    padding: 10px;
    width: 100%;
    position: absolute;
    top: 100px;
  }

</style>