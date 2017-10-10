<template>
  <div class="page-user">
    <div class="user" v-if="user">
      <div class="user-profile" v-if="user.profile_image_url" :style="{ backgroundImage: `url(${user.profile_image_url})`}"></div>
      <div class="user-name">
        {{ user.name }}
        <Sticker :code="user.status"></Sticker>
      </div>
      <div class="user-descriptions">{{ user.descriptions }}</div>
      <Functions>
        <a :href="`mailto:${user.email}`" class="function"><i class="icon material-icons">email</i></a>
        <a v-if="user.site" :href="user.site" class="function" target="_blank"><i class="icon material-icons">web_asset</i></a>
        <button class="function color-danger"><i class="icon material-icons">favorite</i> {{ user.likes.length | formatCurrency }}</button>
        <button class="function"><i class="icon material-icons">crop_square</i> {{ user.cuts.length | formatCurrency }}</button>
      </Functions>
    </div>

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
  import filters from '@/utils/filters'
  import { mapState } from 'vuex'

  export default {
    name: 'user',
    props: [ 'id' ],
    filters: filters,
    components: { Card, Index, Functions, Sticker, OwnerButtons },
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

  .user {
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
    margin: ($space-unit * 3) auto;
    padding: $space-unit ($space-unit * 2) 0;
    max-width: $space-unit * 24;
    background-color: $color-background;
    border-radius: $radius-unit;
    box-shadow: $box-shadow-unit;
  }
  .user-profile {
    margin: ($space-unit * -1) ($space-unit * -2) ($space-unit * 1.5);
    height: 100px;
    background-position: center center;
    background-size: cover;
  }
  .user-name {
    font-size: $font-size-large;
    font-weight: bold;
  }
  .user-descriptions {
    margin-top: $space-unit / 2;
    color: $color-text-light;
    font-size: $font-size-small;
  }
</style>
