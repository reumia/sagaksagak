<template>
  <div class="page-user">
    <Introduction
      v-if="user"
      :title="user.name"
      :descriptions="user.descriptions"
      :status="user.status"
      :imageUrl="user.imageUrl"
    >
      <Functions>
        <a :href="`mailto:${user.email}`" class="function"><i class="icon material-icons">mail_outline</i></a>
        <a v-if="user.site" :href="user.site" class="function" target="_blank"><i class="icon material-icons">open_in_browser</i></a>
        <span class="function"><i class="icon material-icons">crop_din</i> {{ user.cuts.length | formatCurrency }}</span>
        <Like class="function" :data="user" :type="'user'" :id="id"></Like>
      </Functions>
      <OwnerButtons v-if="isMine">
        <router-link :to="{ name: 'AddComic' }" class="button button-success">새 코믹</router-link>
        <router-link :to="{ name: 'UpdateUser' }" class="button button-primary">유저 정보 수정</router-link>
      </OwnerButtons>
    </Introduction>

    <div class="user-body">
      <Index :items="user.comics"></Index>
    </div>
  </div>
</template>

<script>
  import Index from '@/components/partials/Index'
  import Card from '@/components/partials/Card'
  import Sticker from '@/components/partials/Sticker'
  import Functions from '@/components/partials/Functions'
  import OwnerButtons from '@/components/partials/OwnerButtons'
  import Introduction from '@/components/partials/Introduction'
  import Like from '@/components/partials/Like'
  import filters from '@/utils/filters'
  import { mapState } from 'vuex'

  export default {
    name: 'user',
    props: [ 'id' ],
    filters: filters,
    components: { Card, Index, Functions, Sticker, OwnerButtons, Introduction, Like },
    created () {
      this.$store.dispatch('GET_USER_BY_ID', {id: this.id})
        .catch(err => console.warn(err.response.data))
    },
    computed: {
      ...mapState([ 'currentUser', 'user' ]),
      isMine () {
        return this.currentUser && this.user && this.currentUser.id === parseInt(this.id, 10)
      }
    }
  }
</script>

<style lang="scss">
  @import 'init';

  .user-body {
    padding-top: $space-unit * 2.5;
    padding-left: $intro-width + $space-unit * 4;
  }
</style>
