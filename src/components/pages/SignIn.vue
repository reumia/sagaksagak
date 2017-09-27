<template>
  <div class="sign-in">
    <Card title="로그인">
      <form @submit.prevent="signIn">
        <div class="input-wrap">
          <input class="input" v-model="email" type="email" placeholder="이메일"/>
          <input class="input" v-model="password" type="password" placeholder="비밀번호"/>
          <button class="button button-primary" type="submit">로그인</button>
          <button class="button button-success" @click.prevent="$router.push({name: 'SignUp'})">회원가입</button>
          <button class="button" @click.prevent="$router.push({name: 'ResetPassword'})">비밀번호 재설정</button>
        </div>
      </form>
    </Card>
  </div>
</template>

<script>
  import Card from '@/components/partials/Card'

  export default {
    name: 'sign-in',
    metaInfo: {
      title: '로그인'
    },
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
    margin: 0 auto;
    max-width: $site-width-narrow;
  }
</style>
