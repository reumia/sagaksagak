<template>
  <div class="add-comic">
    <Card :title="id ? '코믹 수정' : '새 코믹'">
      <FileUploader
        @onAdded="addFile"
        @onDeleted="deleteFile"
      ></FileUploader>
      <form @submit.prevent="handleSubmit">
        <input class="input" v-model="title" type="text" placeholder="제목" required/>
        <textarea class="input" v-model="descriptions" placeholder="설명" required></textarea>
        <button class="button button-primary" type="submit"><i class="icon material-icons">check</i> 변경내용 적용</button>
      </form>
    </Card>
  </div>
</template>

<script>
  import Card from '@/components/partials/Card'
  import FileUploader from '@/components/partials/FileUploader'
  import { mapState } from 'vuex'

  export default {
    name: 'add-comic',
    components: { Card, FileUploader },
    props: [ 'id' ],
    data () {
      return {
        title: null,
        descriptions: null,
        image_url: null
      }
    },
    created () {
      if (this.id) {
        this.$http.get(`/comics/${this.id}`)
          .then(response => {
            this.title = response.data.title
            this.descriptions = response.data.descriptions
            this.image_url = response.data.image_url
          })
          .catch(err => console.warn(err.response.data))
      }
    },
    computed: {
      ...mapState([ 'currentUser' ])
    },
    methods: {
      addUser () {
        this.$store.dispatch('ADD_COMIC', {
          title: this.title,
          descriptions: this.descriptions,
          image_url: this.image_url
        })
          .then(comic => this.$router.push({ name: 'Comic', params: { id: comic.id } }))
          .catch(err => console.warn(err.response.data))
      },
      updateUser () {
        this.$store.dispatch('UPDATE_COMIC', {
          id: this.id,
          title: this.title,
          descriptions: this.descriptions,
          image_url: this.image_url
        })
          .then(comic => this.$router.push({ name: 'Comic', params: { id: comic.id } }))
          .catch(err => console.warn(err.response.data))
      },
      handleSubmit () {
        if (this.id) this.updateUser()
        else this.addUser()
      },
      addFile (file) {
        this.image_url = file.url
      },
      deleteFile () {
        this.image_url = null
      }
    }
  }
</script>

<style lang="scss">
  @import 'init';

  .add-comic {
    margin: 0 auto;
    max-width: $site-width-narrow;
  }
</style>
