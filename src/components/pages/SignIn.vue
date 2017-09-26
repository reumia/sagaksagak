<template>
  <Card class="sign-in" title="로그인">
    <form class="form-sign-in" @submit.prevent="signIn">
      <div class="input-wrap">
        <input class="input" v-model="email" type="email" placeholder="이메일"/>
        <input class="input" v-model="password" type="password" placeholder="비밀번호"/>
        <button class="button button-primary" type="submit">로그인</button>
      </div>
      <div class="button-wrap">
        <button class="button" @click.prevent="$router.push({name: 'SignUp'})">회원가입</button>
        <button class="button" @click.prevent="$router.push({name: 'ResetPassword'})">비밀번호 재설정</button>
      </div>
    </form>
  </Card>
</template>

<script>
  // TODO : 로그인 페이지 구성 https://github.com/jacobwise/vuex-firebase/blob/master/src/components/Login.vue
  import Card from '@/components/partials/Card'

  export default {
    name: 'sign-in',
    components: { Card },
    data () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      async signIn () {
        if (this.$store.getters.IS_AUTHORIZED) this.$router.push({ name: 'Intro' })
        else {
          this.$store.dispatch('SIGN_IN', {
            self: this,
            email: this.email,
            password: this.password
          })
        }
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import 'init';

  .sign-in {
    max-width: $site-width / 2.5;
  }

  .input ~ .input,
  .input ~ .button {
    margin-top: $space-unit / 2;
  }
</style>
