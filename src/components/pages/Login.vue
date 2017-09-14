<template>
  <Card class="card-login" title="로그인">
    <form class="form-login" @submit.prevent="login">
      <div class="input-wrap">
        <input class="input" v-model="email" type="email" placeholder="이메일"/>
        <input class="input" v-model="password" type="password" placeholder="비밀번호"/>
        <button class="button button-primary" type="submit">로그인</button>
      </div>
      <div class="button-wrap">
        <button class="button" @click.prevent="$router.push({name: 'Join'})">회원가입</button>
        <button class="button" @click.prevent="$router.push({name: 'Password'})">비밀번호 찾기</button>
      </div>
    </form>
  </Card>
</template>

<script>
  // TODO : 로그인 페이지 구성 https://github.com/jacobwise/vuex-firebase/blob/master/src/components/Login.vue
  import Card from '@/components/partials/Card'

  export default {
    name: 'login',
    components: { Card },
    data () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      login () {
        window.console.log(this.email, this.password)
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import 'init';

  .input ~ .input,
  .input ~ .button {
    margin-top: $space-unit / 2;
  }
</style>
