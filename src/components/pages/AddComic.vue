<template>
  <div class="add-comic">
    <Card :title="id ? '코믹 수정' : '새 코믹'">
      <FileUploader
        @onSuccess="addFile"
      ></FileUploader>
      <form @submit.prevent="handleSubmit">
        <input class="input" v-model="newTitle" type="text" placeholder="제목" required/>
        <textarea class="input" v-model="newDescriptions" placeholder="설명" required></textarea>
        <div class="button-flex">
          <button class="button button-primary" type="submit"><i class="icon material-icons">check</i> {{ id ? '변경내용 적용' : '새 코믹 만들기' }}</button>
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
    name: 'add-comic',
    created () {
      const currentRouterName = this.$router.history.current.name

      if (currentRouterName === 'UpdateComic') {
        this.$store.dispatch('GET_COMIC_BY_ID', { id: this.id })
          .catch(err => console.warn(err.response.data))
      }
      if (currentRouterName === 'AddComic') this.DELETE_COMIC()
    },
    components: { Card, FileUploader },
    props: [ 'id' ],
    computed: {
      ...mapState([ 'currentUser', 'comic' ]),
      newTitle: {
        get () {
          return this.comic.title
        },
        set (value) {
          this.SET_COMIC({title: value})
        }
      },
      newDescriptions: {
        get () {
          return this.comic.descriptions
        },
        set (value) {
          this.SET_COMIC({descriptions: value})
        }
      }
    },
    methods: {
      ...mapMutations([ 'SET_COMIC', 'DELETE_COMIC' ]),
      // TODO : 새 코믹 추가 후 페이지 이동 시, Relation 모델 데이터 못 불러오는 문제
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
      addFile (response) {
        this.SET_COMIC({imageUrl: response.imageUrl})
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
