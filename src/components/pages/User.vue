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
        <button class="function" :class="{ 'color-danger': hasLiked }" @click="handleLike"><i class="icon material-icons">favorite</i> {{ user.likes.length | formatCurrency }}</button>
      </Functions>
    </Introduction>

    <OwnerButtons v-if="isMine">
      <router-link :to="{ name: 'AddComic' }" class="button button-success">새 코믹</router-link>
      <router-link :to="{ name: 'UpdateUser' }" class="button button-primary">유저 정보 수정</router-link>
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
  import _ from 'lodash'

  export default {
    name: 'user',
    props: [ 'id' ],
    filters: filters,
    components: { Card, Index, Functions, Sticker, OwnerButtons, Introduction },
    created () {
      this.$store.dispatch('GET_USER_BY_ID', {id: this.id})
        .catch(err => console.warn(err.response.data))
    },
    computed: {
      ...mapState([ 'currentUser', 'user' ]),
      isMine () {
        return this.currentUser && this.user && this.currentUser.id === parseInt(this.id, 10)
      },
      hasLiked () {
        return this.currentUser && this.user && _.find(this.user.likes, {'userId': parseInt(this.currentUser.id, 19)})
      }
    },
    methods: {
      handleLike () {
        if (this.hasLiked) this.unlikeUser()
        else this.likeUser()
      },
      likeUser () {
        this.$store.dispatch('ADD_LIKE_USER', {id: this.id})
          .then(like => {
            this.user.likes.push(like)
          })
          .catch(err => console.warn(err.response.data))
      },
      unlikeUser () {
        this.$store.dispatch('DELETE_LIKE_USER', {id: this.id})
          .then(like => {
            this.user.likes = _.reject(this.user.likes, like)
          })
          .catch(err => console.warn(err.response.data))
      }
    }
  }
</script>

<style lang="scss">
  @import 'init';
</style>
