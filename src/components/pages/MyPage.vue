<template>
  <div class="my-page" v-if="currentUser">
    <Card title="프로필 이미지 변경">
      <div class="image-wrap" :style="{ backgroundImage: `url(${currentUser.image_url})` }">
        <div class="button-flex">
          <button class="button button-extra-small button-primary" @click="toggleFileUploader">
            <i class="icon material-icons">mode_edit</i> 수정
          </button>
          <button class="button button-extra-small button-danger" @click="removeImage">
            <i class="icon material-icons">remove</i> 삭제
          </button>
        </div>
      </div>
    </Card>

    <Card title="유저정보 변경">
      <form @submit.prevent="handleSubmit">
        <input class="input" v-model="currentUser.email" type="email" placeholder="이메일" disabled/>
        <input class="input" v-model="currentUser.name" type="text" placeholder="이름"/>
        <input class="input" v-model="currentUser.site" type="url" placeholder="웹사이트"/>
        <button class="button button-primary" type="submit"><i class="icon material-icons">check</i> 확인</button>
      </form>
    </Card>

    <Card title="비밀번호 변경">
      <form @submit.prevent="updatePassword">
        <input class="input" v-model="password" type="password" placeholder="새 비밀번호"/>
        <input class="input" v-model="passwordConfirm" type="password" placeholder="새 비밀번호 확인"/>
        <button class="button button-primary" type="submit"><i class="icon material-icons">check</i> 확인</button>
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
      }
    },
    computed: {
      ...mapState([ 'currentUser' ])
    },
    methods: {
      addFile () {
      },
      removeImage () {
      },
      toggleFileUploader () {
      },
      handleSubmit () {
      },
      signOut () {
        this.$store.dispatch('SIGN_OUT')
          .then(() => {
            this.$router.push({ name: 'Home' })
          })
          .catch((err) => {
            console.warn(err.response.data)
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
    .image-wrap {
      position: relative;
      margin: ($space-unit / 2) auto;
      height: 120px;
      background-size: cover;
      background-position: center center;
      &:after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border: 2px solid rgba(0,0,0,.1);
      }
      .button-flex {
        position: absolute;
        z-index: 1;
        top: 0;
        right: $space-unit / 2;
      }
    }
    .image {
      display: block;
      width: 100%;
      height: auto;
    }
  }
</style>
