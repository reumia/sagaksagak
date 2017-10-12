<template>
  <div class="my-page" v-if="currentUser">
    <Card title="로그인 정보">
      <form @submit.prevent="updatePassword">
        <input class="input" v-model="currentUser.email" type="email" placeholder="이메일" disabled/>
        <input class="input" v-model="password" type="password" placeholder="새 비밀번호"/>
        <input class="input" v-model="passwordConfirm" type="password" placeholder="새 비밀번호 확인"/>
        <button class="button button-primary" type="submit"><i class="icon material-icons">check</i> 비밀번호 변경</button>
      </form>
    </Card>

    <Card title="유저 정보">
      <div v-if="image_url" class="image-wrap" :style="{ backgroundImage: `url(${image_url})` }">
        <div class="button-flex">
          <router-link :to="{ name: 'ChangeProfileImage' }" class="button button-extra-small button-primary">
            <i class="icon material-icons">edit</i> 수정
          </router-link>
          <button class="button button-extra-small button-danger" @click="deleteImage">
            <i class="icon material-icons">delete</i> 삭제
          </button>
        </div>
      </div>
      <FileUploader></FileUploader>
      <form @submit.prevent="updateUser">
        <input class="input" v-model="name" type="text" placeholder="이름"/>
        <textarea class="input" v-model="descriptions" placeholder="설명" required></textarea>
        <input class="input" v-model="site" type="url" placeholder="웹사이트"/>
        <button class="button button-primary" type="submit"><i class="icon material-icons">check</i> 유저 정보 변경</button>
      </form>
    </Card>
  </div>
</template>

<script>
  import Card from '@/components/partials/Card'
  import FileUploader from '@/components/partials/FileUploader'
  import { mapState } from 'vuex'

  export default {
    name: 'mypage',
    components: { Card, FileUploader },
    data () {
      return {
        name: null,
        descriptions: null,
        image_url: null,
        site: null,
        password: null,
        passwordConfirm: null
      }
    },
    computed: {
      ...mapState([ 'currentUser' ])
    },
    created () {
      this.name = this.currentUser.name
      this.descriptions = this.currentUser.descriptions
      this.image_url = this.currentUser.image_url
      this.site = this.currentUser.site
    },
    methods: {
      deleteImage () {
      },
      updateUser () {
        this.$http.post(`/user/${this.currentUser.id}/update`, {
          name: this.name,
          descriptions: this.descriptions,
          site: this.site
        })
          .then(() => this.$router.push({ name: 'SignIn' }))
          .catch(err => console.warn(err.response.data))
      }
    }
  }
</script>

<style lang="scss">
  @import 'init';

  .my-page {
    margin: 0 auto;
    max-width: $site-width-narrow;
    .image-wrap {
      @include transition(height);
      position: relative;
      border-radius: $radius-unit;
      margin: ($space-unit / 2) auto;
      height: 120px;
      background-size: cover;
      background-position: center center;
      &.active {
        height: 39px;
      }
    }
    .button-flex {
      justify-content: flex-end;
      padding: $space-unit / 2;
    }
  }
</style>
