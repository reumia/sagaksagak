<template>
  <div class="add-cut">
    <Card :title="id ? '컷 수정' : '새 컷'">
      <FileUploader
        :ratio="1 / 1"
        @onSuccess="addFile"
      ></FileUploader>
      <form @submit.prevent="handleSubmit">
        <input class="input" v-model="newTitle" type="text" placeholder="제목" required/>
        <div class="button-flex">
          <button class="button button-primary" type="submit"><i class="icon material-icons">check</i> {{ id ? '변경내용 적용' : '새 컷 만들기' }}</button>
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
    name: 'add-cut',
    created () {
    },
    components: { Card, FileUploader },
    props: [ 'id' ],
    computed: {
      ...mapState([ 'currentUser', 'cut' ]),
      newTitle: {
        get () {
          return this.cut ? this.cut.title : null
        },
        set (value) {
          this.SET_CUT({title: value})
        }
      }
    },
    methods: {
      ...mapMutations([ 'SET_CUT' ]),
      add () {
      },
      update () {
      },
      handleSubmit () {
        if (this.id) this.update()
        else this.add()
      },
      addFile (response) {
      }
    }
  }
</script>

<style lang="scss">
  @import 'init';

  .add-cut {
    margin: 0 auto;
    max-width: $site-width-narrow;
  }
</style>
