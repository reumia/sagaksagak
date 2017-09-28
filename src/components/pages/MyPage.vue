<template>
  <div class="my-page">
    <Card title="비밀번호 변경">
      <form class="my-page" @submit.prevent="updatePassword">
        <input class="input" v-model="password" type="password" placeholder="기존 비밀번호"/>
        <input class="input" v-model="newPassword" type="password" placeholder="새 비밀번호"/>
      </form>
    </Card>
    <Card title="유저정보 변경">
      <form class="my-page" v-if="IS_CURRENT_USER_EXIST" @submit.prevent="updateUser">
        <input class="input" v-model="currentUser.email" type="email" placeholder="이메일" disabled/>
        <input class="input" v-model="currentUser.name" type="text" placeholder="이름"/>
        <input class="input" v-model="currentUser.site" type="url" placeholder="웹사이트"/>
        <input class="input" v-model="currentUser.profile_image_url" type="text" placeholder="프로필 이미지"/>
        <input class="input" v-model="currentUser.featured_image_url" type="text" placeholder="전경 이미지"/>
      </form>
    </Card>
    <Card>
      <div class="button-flex">
        <button class="button button-primary" type="submit"><i class="icon material-icons">check</i> 확인</button>
        <button class="button" @click.prevent="$router.go(-1)"><i class="icon material-icons">close</i> 취소</button>
      </div>
    </Card>
  </div>
</template>

<script>
  import Card from '@/components/partials/Card'
  import { mapState, mapGetters } from 'vuex'

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
    computed: {
      ...mapState([ 'currentUser' ]),
      ...mapGetters([ 'IS_CURRENT_USER_EXIST' ])
    },
    methods: {
      updateUser () {
        // TODO : 유저 정보 수정
      },
      updatePassword () {
        // TODO : 비밀번호 변경
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
