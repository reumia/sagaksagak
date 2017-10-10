<template>
  <div class="page-user">
    <Introduction v-if="user" :title="user.name" :descriptions="user.descriptions" :status="user.status" :imageUrl="user.profile_image_url">
      <Functions>
        <a :href="`mailto:${user.email}`" class="function"><i class="icon material-icons">mail_outline</i></a>
        <a v-if="user.site" :href="user.site" class="function" target="_blank"><i class="icon material-icons">open_in_browser</i></a>
        <span class="function"><i class="icon material-icons">crop_din</i> {{ user.cuts.length | formatCurrency }}</span>
        <button class="function color-danger"><i class="icon material-icons">favorite</i> {{ user.likes.length | formatCurrency }}</button>
      </Functions>
    </Introduction>

    <OwnerButtons v-if="isMine">
      <button class="button button-small button-primary">코믹관리</button>
      <button class="button button-small button-success">컷관리</button>
      <button class="button button-small button-danger">버튼</button>
    </OwnerButtons>

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
  import Sticker from '@/components/partials/Sticker'
  import Functions from '@/components/partials/Functions'
  import OwnerButtons from '@/components/partials/OwnerButtons'
  import Introduction from '@/components/partials/Introduction'
  import filters from '@/utils/filters'
  import { mapState } from 'vuex'

  export default {
    name: 'user',
    props: [ 'id' ],
    filters: filters,
    components: { Card, Index, Functions, Sticker, OwnerButtons, Introduction },
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
  @import 'init';
</style>
