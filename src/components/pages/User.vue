<template>
  <div class="page-user">
    {{ user }}

    <Card v-if="user">
      <button class="function"><i class="icon material-icons">favorite</i> {{ user.likes | formatCurrency }}</button>
      <button class="function"><i class="icon material-icons">crop_square</i> {{ user.cuts | formatCurrency }}</button>
      <a :href="`mailto:${user.email}`" class="function"><i class="icon material-icons">email</i> {{ user.email }}</a>
      <a v-if="user.site" :href="user.site" class="function" target="_blank"><i class="icon material-icons">web_asset</i> {{ user.site }}</a>
    </Card>

    <Card v-if="isMine" class="button-flex">
      <button class="button button-small button-primary">코믹관리</button>
      <button class="button button-small button-success">컷관리</button>
      <button class="button button-small button-danger">버튼</button>
    </Card>

    <Card v-if="user" title="운영중인 사각">
      <Index :items="user.comics"></Index>
    </Card>

    <Card title="참여중인 사각">
      <Index></Index>
    </Card>
  </div>
</template>

<script>
  import Index from '@/components/partials/Index'
  import Card from '@/components/partials/Card'
  import filters from '@/utils/filters'
  import { mapState } from 'vuex'

  export default {
    name: 'user',
    props: [ 'id' ],
    filters: filters,
    components: { Card, Index },
    computed: {
      ...mapState([ 'currentUser' ]),
      isMine () {
        return this.currentUser && this.currentUser.id === parseInt(this.id, 10)
      }
    },
    created () {
      this.$http.get(`/users/${this.id}`)
        .then(response => {
          this.user = response.data
        })
        .catch(err => console.warn(err))
    },
    data () {
      return {
        user: null
      }
    }
  }
</script>

<style lang="scss">
</style>
