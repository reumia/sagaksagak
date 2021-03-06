<template>
  <div class="page-comic" v-if="comic.id">
    <div class="comic-background" v-if="comic.imageUrl" :style="{ backgroundImage: `url(${comic.imageUrl})` }"></div>
    <Introduction
      :title="comic.title"
      :descriptions="comic.descriptions"
      :status="comic.status"
    >
      <Functions>
        <span class="function"><i class="icon material-icons">access_time</i> {{ comic.createdAt | formatDate }}</span>
        <router-link :to="{ name: 'User', params: { id: comic.ownerId } }" class="function"><i class="icon material-icons">person</i> {{ comic.owner.name }}</router-link>
        <span class="function"><i class="icon material-icons">crop_din</i> {{ comic.cuts.length | formatCurrency }}</span>
        <Like class="function" :data="comic" :type="'comic'" :id="id"></Like>
      </Functions>
      <OwnerButtons v-if="isMine">
        <router-link :to="{ name: 'AddCut', query: { comicId: this.id } }" class="button button-success">{{ comic.cuts.length > 0 ? '새 컷' : '첫번째 컷' }}</router-link>
        <router-link :to="{ name: 'UpdateComic', params: { id: comic.id } }" class="button button-primary">코믹 정보 수정</router-link>
      </OwnerButtons>
    </Introduction>
    <Tree v-if="comic.cuts.length > 0"></Tree>
  </div>
</template>

<script>
  import Card from '@/components/partials/Card'
  import Functions from '@/components/partials/Functions'
  import OwnerButtons from '@/components/partials/OwnerButtons'
  import Introduction from '@/components/partials/Introduction'
  import Like from '@/components/partials/Like'
  import Tree from '@/components/partials/Tree'
  import filters from '@/utils/filters'
  import { mapState } from 'vuex'

  export default {
    name: 'comic',
    props: [ 'id' ],
    filters: filters,
    components: { Card, Functions, OwnerButtons, Introduction, Like, Tree },
    created () {
      this.$store.dispatch('GET_COMIC_BY_ID', { id: this.id })
        .catch(err => console.warn(err.response.data))
    },
    computed: {
      ...mapState([ 'currentUser', 'comic', 'tree' ]),
      isMine () {
        return this.comic.ownerId === parseInt(this.currentUser.id, 10)
      }
    }
  }
</script>

<style lang="scss">
  @import 'init';

  .page-comic {
    overflow: hidden;
  }
  .comic-background {
    position: absolute;
    top: $header-height;
    left: 0;
    right: 0;
    height: $space-unit * 24;
    background-size: cover;
    background-position: center center;
    filter: blur(2px);
    &:after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(transparentize($color-background-dark, .2), $color-background-dark);
    }
  }
</style>
