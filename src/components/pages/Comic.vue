<template>
  <div class="page-comic">
    <div class="comic-background" v-if="comic" :style="{ backgroundImage: `url(${comic.image_url})` }"></div>
    <Introduction v-if="comic" :title="comic.title" :descriptions="comic.descriptions" :status="comic.status">
      <Functions>
        <span class="function"><i class="icon material-icons">access_time</i> {{ comic.created_at | formatDate }}</span>
        <router-link :to="{ name: 'User', params: { id: comic.owner_id } }" class="function"><i class="icon material-icons">person</i> {{ comic.owner.name }}</router-link>
        <button class="function color-danger"><i class="icon material-icons">favorite</i> {{ comic.likes.length | formatCurrency }}</button>
        <button class="function"><i class="icon material-icons">crop_square</i> {{ comic.cuts.length | formatCurrency }}</button>
      </Functions>
    </Introduction>

    <OwnerButtons v-if="isMine">
      <button class="button button-small button-primary">코믹관리</button>
      <button class="button button-small button-success">컷관리</button>
      <button class="button button-small button-danger">버튼</button>
    </OwnerButtons>

    <article class="comic-body">
      <Card>
        Comic<br/>
        여러개의 Cut을 가짐.<br/>
        트리가 노출되는 영역.<br/>
        <blockquote :style="{ whiteSpace: 'pre' }">{{ comic }}</blockquote>
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
