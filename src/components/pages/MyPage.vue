<template>
  <form class="my-page" @submit.prevent="updateUser">
    <Card title="My Page">
      <div class="input-wrap">
        <input class="input" v-model="$store.state.currentUser.email" type="email" placeholder="이메일"/>
        <input class="input" v-model="$store.state.currentUser.name" type="text" placeholder="이름"/>
        <button class="button button-primary" type="submit">정보수정</button>
        <button class="button button-danger" @click.prevent="signOut">로그아웃</button>
      </div>
    </Card>
  </form>
</template>

<script>
  import Card from '@/components/partials/Card'

  export default {
    name: 'mypage',
    components: { Card },
    beforeCreate () {
      this.$store.dispatch('GET_CURRENT_USER')
    },
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
