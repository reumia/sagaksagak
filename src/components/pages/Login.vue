<template>
  <Page class="page-login">
    <form class="form-login">
        <input class="input" type="email" placeholder="이메일"/>
        <input class="input" type="password" placeholder="비밀번호"/>
        <button class="button button-primary" type="submit">로그인</button>
        <button class="button" type="button">회원가입</button>
        <p class="description">비밀번호를 잊어버리셨나요? <a href="/user/find-password">비밀번호 찾기</a></p>
    </form>
  </Page>
</template>

<script>
  import Page from '@/components/partials/Page';

  export default {
    name: 'login',
    components: { Page },
    data() {
      return {
        title: '사각사각 소개',
      };
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
