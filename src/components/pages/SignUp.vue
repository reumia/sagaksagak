<template>
  <Card class="sign-up" title="회원가입">
    <form class="form-sign-up" @submit.prevent="signUp">
      <div class="input-wrap">
        <input class="input" v-model="email" type="email" placeholder="이메일"/>
        <input class="input" v-model="password" type="password" placeholder="비밀번호"/>
      </div>
      <div class="button-wrap">
        <button class="button button-primary" type="submit">회원가입</button>
      </div>
    </form>
  </Card>
</template>

<script>
  // TODO : 로그인 페이지 구성 https://github.com/jacobwise/vuex-firebase/blob/master/src/components/Login.vue
  import Card from '@/components/partials/Card'

  export default {
    name: 'sign-up',
    components: { Card },
    data () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      async signUp () {
        try {
          const response = await this.$http.post(`/users/sign-up`, {
            email: this.email,
            password: this.password
          })

          console.log(response)
        } catch (err) {
          console.warn(err.response.data)
        }
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import 'init';

  .sign-up {
    max-width: $site-width / 2.5;
  }

  .input ~ .input,
  .input ~ .button {
    margin-top: $space-unit / 2;
  }
</style>
