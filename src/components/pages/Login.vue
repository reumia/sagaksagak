<template>
  <Page class="page-login">
    <form class="form-login" @submit.prevent="login">
      <div class="section-login">
        <input class="input" v-model="email" type="email" placeholder="이메일"/>
        <input class="input" v-model="password" type="password" placeholder="비밀번호"/>
        <button class="button button-primary" type="submit">로그인</button>
      </div>
      <div class="section-other">
        <button class="button" @click.prevent="$router.push({name: 'Join'})">회원가입</button>
        <button class="button" @click.prevent="$router.push({name: 'Password'})">비밀번호 찾기</button>
      </div>
    </form>
  </Page>
</template>

<script>
  // TODO : 로그인 페이지 구성 https://github.com/jacobwise/vuex-firebase/blob/master/src/components/Login.vue
  import Page from '@/components/partials/Page';

  export default {
    name: 'login',
    components: { Page },
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      login() {
        window.console.log(this.email, this.password);
      },
    },
  };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import '../../scss/form.scss';

  .form-login {
    margin: 40px auto;
    max-width: 260px;
  }

  .section-other {
    margin-top: 40px;
  }

  .input ~ .input,
  .input ~ .button,
  .button ~ .button {
    margin-top: 5px;
  }
</style>
