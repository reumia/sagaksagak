<template>
  <div class="add-comic">
    <Card :title="id ? '코믹 수정' : '새 코믹'">
      <FileUploader
        @onAdded="addFile"
        @onDeleted="deleteFile"
      ></FileUploader>
      <form @submit.prevent="handleSubmit">
        <input class="input" v-model="newTitle" type="text" placeholder="제목" required/>
        <textarea class="input" v-model="newDescriptions" placeholder="설명" required></textarea>
        <button class="button button-primary" type="submit"><i class="icon material-icons">check</i> 변경내용 적용</button>
      </form>
    </Card>
  </div>
</template>

<script>
  import Card from '@/components/partials/Card'
  import FileUploader from '@/components/partials/FileUploader'
  import { mapState, mapMutations } from 'vuex'

  export default {
    name: 'add-comic',
    created () {
      this.$store.dispatch('GET_COMIC_BY_ID', { id: this.id })
        .catch(err => console.warn(err.response.data))
    },
    components: { Card, FileUploader },
    props: [ 'id' ],
    computed: {
      ...mapState([ 'currentUser', 'comic' ]),
      newTitle: {
        get () {
          return this.comic ? this.comic.title : null
        },
        set (value) {
          this.SET_COMIC({title: value})
        }
      },
      newDescriptions: {
        get () {
          return this.comic ? this.comic.descriptions : null
        },
        set (value) {
          this.SET_COMIC({descriptions: value})
        }
      }
    },
    methods: {
      ...mapMutations([ 'SET_COMIC' ]),
      add () {
        this.$store.dispatch('ADD_COMIC')
          .then(comic => this.$router.push({ name: 'Comic', params: { id: comic.id } }))
          .catch(err => console.warn(err.response.data))
      },
      update () {
        this.$store.dispatch('UPDATE_COMIC', { id: this.id })
          .then(comic => this.$router.push({ name: 'Comic', params: { id: comic.id } }))
          .catch(err => console.warn(err.response.data))
      },
      handleSubmit () {
        if (this.id) this.update()
        else this.add()
      },
      addFile (file) {
        // TODO
        // this.image_url = file.url
      },
      deleteFile () {
        // TODO
        // this.image_url = null
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
