<template>
  <Page class="page-login">
    <form class="form-login" @submit.prevent="login">
        <input class="input" v-model="email" type="email" placeholder="이메일"/>
        <input class="input" v-model="password" type="password" placeholder="비밀번호"/>
        <button class="button button-primary" type="submit">로그인</button>
        <button class="button" type="button">회원가입</button>
        <p class="description">비밀번호를 잊어버리셨나요? <a href="/user/find-password">비밀번호 찾기</a></p>
    </form>
  </Page>
</template>

<script>
  // TODO : 로그인 페이지 구성 https://github.com/jacobwise/vuex-firebase/blob/master/src/components/Login.vue
  // TODO : 프로그래밍방식 라우터 네비게이션 http://router.vuejs.org/kr/essentials/navigation.htmlhttp://router.vuejs.org/kr/essentials/navigation.html
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

<style lang="scss" scoped>
  @import '../../scss/form.scss';

  .form-login {
    margin: 40px auto;
    max-width: 260px;
  }

  .description {
    margin-top: 10px;
    font-size: 12px;
    text-align: center;
  }
</style>
