<template>
  <form class="sign-up" @submit.prevent="signUp">
    <Card title="회원가입">
      <div class="input-wrap">
        <input class="input" v-model="email" type="email" placeholder="이메일" required/>
        <input class="input" v-model="password" type="password" placeholder="비밀번호" required/>
        <input class="input" v-model="name" type="text" placeholder="이름" required/>
        <button class="button button-primary" type="submit">회원가입</button>
        <button class="button" @click="$router.go(-1)">취소</button>
      </div>
    </Card>
  </form>
</template>

<script>
  import Card from '@/components/partials/Card'

  export default {
    name: 'sign-up',
    metaInfo: {
      title: '회원가입'
    },
    components: { Card },
    data () {
      return {
        email: '',
        password: '',
        name: ''
      }
    },
    methods: {
      signUp () {
        this.$http.post(`/auth/sign-up`, {
          email: this.email,
          password: this.password,
          name: this.name
        })
          .then(() => this.$router.push({ name: 'SignIn' }))
          .catch(err => console.warn(err.response.data))
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import 'init';

  .sign-up {
    margin: 0 auto;
    max-width: $site-width / 2.5;
  }
</style>
