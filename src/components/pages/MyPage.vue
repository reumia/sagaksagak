<template>
  <div class="my-page" v-if="currentUser">
    <Card :title="`${newName} 수정`">
      <FileUploader
        @onSuccess="addFile"
      ></FileUploader>
      <form @submit.prevent="update">
        <input class="input" v-model="newName" type="text" placeholder="이름"/>
        <textarea class="input" v-model="newDescriptions" placeholder="설명" required></textarea>
        <input class="input" v-model="newSite" type="url" placeholder="웹사이트"/>
        <div class="button-flex">
          <button class="button button-primary" type="submit"><i class="icon material-icons">check</i> 유저 정보 변경</button>
          <button class="button" type="button" @click="$router.go(-1)"><i class="icon material-icons">close</i> 취소</button>
        </div>
      </form>
    </Card>
  </div>
</template>

<script>
  import Card from '@/components/partials/Card'
  import FileUploader from '@/components/partials/FileUploader'
  import { mapState, mapMutations } from 'vuex'

  export default {
    name: 'mypage',
    created () {
      this.$store.dispatch('GET_USER_BY_ID', { id: this.currentUser.id })
        .catch(err => console.warn(err.response.data))
    },
    components: { Card, FileUploader },
    computed: {
      ...mapState([ 'currentUser', 'user' ]),
      newName: {
        get () {
          return this.user ? this.user.name : null
        },
        set (value) {
          this.SET_USER({name: value})
        }
      },
      newDescriptions: {
        get () {
          return this.user ? this.user.descriptions : null
        },
        set (value) {
          this.SET_USER({descriptions: value})
        }
      },
      newSite: {
        get () {
          return this.user ? this.user.site : null
        },
        set (value) {
          this.SET_USER({site: value})
        }
      }
    },
    methods: {
      ...mapMutations([ 'SET_USER' ]),
      update () {
        this.$store.dispatch('UPDATE_USER', {
          id: this.currentUser.id,
          name: this.name,
          descriptions: this.descriptions,
          image_url: this.image_url,
          site: this.site
        })
          .then(user => this.$router.push({ name: 'User', params: { id: user.id } }))
          .catch(err => console.warn(err.response.data))
      },
      addFile (response) {
        this.SET_USER({image_url: response.image_url})
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
