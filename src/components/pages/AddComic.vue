<template>
  <div class="add-comic">
    <Card title="새 코믹">
      <FileUploader @fileUploaded="addFile"></FileUploader>
      <form @submit.prevent="handleSubmit">
        <input class="input" v-model="title" type="text" placeholder="제목"/>
        <textarea class="input" v-model="descriptions" placeholder="설명"></textarea>
        <div class="button-flex">
          <button class="button button-primary" type="submit"><i class="icon material-icons">check</i> 확인</button>
          <button class="button" @click.prevent="$router.go(-1)"><i class="icon material-icons">close</i> 취소</button>
        </div>
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
    data () {
      return {
        title: null,
        descriptions: null,
        imageUrl: null
      }
    },
    computed: {
      ...mapState([ 'currentUser' ])
    },
    methods: {
      handleSubmit () {
        this.$store.dispatch('ADD_COMIC', {
          title: this.title,
          descriptions: this.descriptions,
          image: null
        })
          .then(comic => this.$router.push({ name: 'Comic', params: { id: comic.id } }))
          .catch(err => console.warn(err.response.data))
      },
      addFile (file) {
        this.imageUrl = file.url
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
