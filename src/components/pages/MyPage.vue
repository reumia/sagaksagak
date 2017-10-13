<template>
  <div class="my-page" v-if="currentUser">
    <Card title="유저 정보">
      <ExistsImage :image_url="image_url" @onDelete="deleteImage"></ExistsImage>
      <FileUploader @onUpload="addFile"></FileUploader>
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
  import ExistsImage from '@/components/partials/ExistsImage'
  import { mapState } from 'vuex'

  export default {
    name: 'mypage',
    components: { Card, FileUploader, ExistsImage },
    data () {
      return {
        name: null,
        descriptions: null,
        image_url: null,
        site: null
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
      addFile (file) {
        this.image_url = file.url
      },
      deleteImage () {
        this.image_url = null
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
