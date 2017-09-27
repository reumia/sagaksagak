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
      signIn () {
        this.$store.dispatch('SIGN_IN', { email: this.email, password: this.password })
          .then(() => {
            this.$router.push({ name: 'Home' })
          })
          .catch((err) => {
            const errorCode = err.response.data
            console.warn(errorCode)
          })
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
