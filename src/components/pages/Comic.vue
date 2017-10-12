<template>
  <div class="page-comic">
    <div class="comic-background" v-if="comic" :style="{ backgroundImage: `url(${comic.image_url})` }"></div>
    <Introduction v-if="comic" :title="comic.title" :descriptions="comic.descriptions" :status="comic.status">
      <Functions>
        <span class="function"><i class="icon material-icons">access_time</i> {{ comic.created_at | formatDate }}</span>
        <router-link :to="{ name: 'User', params: { id: comic.owner_id } }" class="function"><i class="icon material-icons">person</i> {{ comic.owner.name }}</router-link>
        <span class="function"><i class="icon material-icons">crop_din</i> {{ comic.cuts.length | formatCurrency }}</span>
        <button class="function color-danger"><i class="icon material-icons">favorite</i> {{ comic.likes.length | formatCurrency }}</button>
      </Functions>
    </Introduction>

    <OwnerButtons v-if="isMine">
      <router-link :to="{ name: 'AddCut' }" v-if="comic.cuts.length === 0" class="button button-success">
        첫번째 컷 작성
      </router-link>
      <router-link :to="{ name: 'UpdateComic', params: { id: comic.id } }" class="button button-primary">
        코믹 수정
      </router-link>
    </OwnerButtons>

    <article class="comic-body">
      <Card title="트리" v-if="comic">
        {{ comic }}
      </Card>
    </article>
  </div>
</template>

<script>
  import Card from '@/components/partials/Card'
  import Functions from '@/components/partials/Functions'
  import OwnerButtons from '@/components/partials/OwnerButtons'
  import Introduction from '@/components/partials/Introduction'
  import filters from '@/utils/filters'
  import { mapState } from 'vuex'

  export default {
    name: 'comic',
    props: [ 'id' ],
    filters: filters,
    components: { Card, Functions, OwnerButtons, Introduction },
    computed: {
      ...mapState([ 'currentUser' ]),
      isMine () {
        return this.currentUser && this.comic && this.comic.owner_id === parseInt(this.currentUser.id, 10)
      }
    },
    created () {
      this.$http.get(`/comics/${this.id}`)
        .then(response => {
          this.comic = response.data
        })
        .catch(err => console.warn(err.response.data))
    },
    data () {
      return {
        comic: null
      }
    }
  }
</script>

<style lang="scss">
  @import 'init';

  .page-comic {
    overflow: hidden;
    position: relative;
  }
  .comic-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 300px;
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
  .comic-body {
    position: relative;
    z-index: 1;
  }
</style>
