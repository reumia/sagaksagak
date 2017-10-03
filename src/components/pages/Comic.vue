<template>
  <div class="page-comic">
    {{ comic }}

    <Card v-if="comic">
      <Functions>
        <button class="function"><i class="icon material-icons color-danger">favorite</i> {{ comic.likes.length | formatCurrency }}</button>
        <button class="function"><i class="icon material-icons">crop_square</i> {{ comic.cuts.length | formatCurrency }}</button>
        <router-link :to="{ name: 'User', params: { id: comic.owner_id } }" class="function"><i class="icon material-icons">person</i> {{ comic.owner.name }}</router-link>
      </Functions>
    </Card>

    <Card v-if="isMine" class="button-flex">
      <button class="button button-small button-primary">코믹관리</button>
      <button class="button button-small button-success">컷관리</button>
      <button class="button button-small button-danger">버튼</button>
    </Card>

    <Card>
      Comic<br/>
      여러개의 Cut을 가짐.<br/>
      트리가 노출되는 영역.
    </Card>
  </div>
</template>

<script>
  import Card from '@/components/partials/Card'
  import Functions from '@/components/partials/Functions'
  import filters from '@/utils/filters'
  import { mapState } from 'vuex'

  export default {
    name: 'comic',
    props: [ 'id' ],
    filters: filters,
    components: { Card, Functions },
    computed: {
      ...mapState([ 'currentUser' ]),
      isMine () {
        return this.comic && this.comic.owner_id === parseInt(this.currentUser.id, 10)
      }
    },
    created () {
      this.$http.get(`/comics/${this.id}`)
        .then(response => {
          this.comic = response.data
        })
        .catch(err => console.warn(err))
    },
    data () {
      return {
        comic: null
      }
    }
  }
</script>

<style lang="scss">

</style>
