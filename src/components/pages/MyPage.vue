<template>
  <form class="my-page" @submit.prevent="updateUser">
    <Card title="기본 정보">
      <input class="input" v-model="email" type="email" placeholder="이메일"/>
      <input class="input" v-model="name" type="text" placeholder="이름"/>
    </Card>
    <Card title="비밀번호 변경">
      <input class="input" v-model="password" type="password" placeholder="기존 비밀번호"/>
      <input class="input" v-model="newPassword" type="password" placeholder="새 비밀번호"/>
    </Card>
    <Card>
      <button class="button button-primary" type="submit">정보수정</button>
      <button class="button button-danger" @click.prevent="signOut">로그아웃</button>
    </Card>
  </form>
</template>

<script>
  import Card from '@/components/partials/Card'
  import { mapState } from 'vuex'

  export default {
    name: 'mypage',
    components: { Card },
    created () {
      this.$store.dispatch('GET_CURRENT_USER')
    },
    data () {
      return {
        password: '',
        newPassword: ''
      }
    },
    computed: mapState({
      email: state => state.currentUser ? state.currentUser.email : '',
      name: state => state.currentUser ? state.currentUser.name : ''
    }),
    methods: {
      updateUser () {
        // TODO : 유저 정보 수정
      },
      signOut () {
        this.$store.dispatch('SIGN_OUT')
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

<style lang="scss">
  @import 'init';

  .my-page {
    margin: 0 auto;
    max-width: $site-width-narrow;
  }
</style>
