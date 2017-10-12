<template>
  <div class="add-comic">
    <Card :title="id ? '코믹 수정' : '새 코믹'">
      <ExistsImage :image_url="image_url" @onDelete="deleteImage"></ExistsImage>
      <FileUploader @onUpload="addFile"></FileUploader>
      <form @submit.prevent="handleSubmit">
        <input class="input" v-model="title" type="text" placeholder="제목" required/>
        <textarea class="input" v-model="descriptions" placeholder="설명" required></textarea>
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
  import ExistsImage from '@/components/partials/ExistsImage'
  import { mapState } from 'vuex'

  export default {
    name: 'add-comic',
    components: { Card, FileUploader, ExistsImage },
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
      deleteImage () {
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

  .exists-image {
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
    .button-flex {
      justify-content: flex-end;
      padding: $space-unit / 2;
    }
  }
</style>
