<template>
  <form class="add-comic" @submit.prevent="addComic">
    <Card title="새 코믹">
      <input class="input" v-model="title" type="text" placeholder="제목"/>
      <textarea class="input" v-model="descriptions" type="text" placeholder="설명"></textarea>
    </Card>
    <Card>
      <div class="button-flex">
        <button class="button button-primary" type="submit"><i class="icon material-icons">check</i> 확인</button>
        <button class="button" @click.prevent="$router.go(-1)"><i class="icon material-icons">close</i> 취소</button>
      </div>
    </Card>
  </form>
</template>

<script>
  import Card from '@/components/partials/Card'
  import {mapState} from 'vuex'

  export default {
    name: 'add-comic',
    components: { Card },
    data () {
      return {
        title: '',
        descriptions: '',
        imageUrl: ''
      }
    },
    computed: {
      ...mapState([ 'currentUser' ])
    },
    methods: {
      addComic () {
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
