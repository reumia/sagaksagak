<template>
  <div class="my-page" v-if="currentUser">
    <Card :title="`${newName} 수정`">
      <FileUploader
        @onAdded="addFile"
        @onDeleted="deleteFile"
      ></FileUploader>
      <form @submit.prevent="updateUser">
        <input class="input" v-model="newName" type="text" placeholder="이름"/>
        <textarea class="input" v-model="newDescriptions" placeholder="설명" required></textarea>
        <input class="input" v-model="newSite" type="url" placeholder="웹사이트"/>
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
    computed: {
      ...mapState([ 'currentUser' ]),
      newName: {
        get () {
          return this.currentUser.name
        },
        set () {
          // TODO
        }
      },
      newDescriptions: {
        get () {
          return this.currentUser.descriptions
        },
        set () {
          // TODO
        }
      },
      newSite: {
        get () {
          return this.currentUser.site
        },
        set () {
          // TODO
        }
      }
    },
    methods: {
      addFile (file) {
        // TODO
        // this.image_url = file.url
      },
      deleteFile () {
        // TODO
        // this.image_url = null
      },
      updateUser () {
        this.$store.dispatch('UPDATE_USER', {
          id: this.currentUser.id,
          name: this.name,
          descriptions: this.descriptions,
          image_url: this.image_url,
          site: this.site
        })
          .then(user => this.$router.push({ name: 'User', params: { id: user.id } }))
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
  }
</style>
