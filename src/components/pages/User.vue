<template>
  <div class="page-user">
    <Featured
      :isMine="isMine"
      :backgroundImage="backgroundImage"
      :foregroundImage="foregroundImage"
      :title="title"
      :descriptions="descriptions"
      :stickers="stickers"
      :items="items"
    ></Featured>

    <Card title="운영중인 사각">
      <Index :items="comics"></Index>
    </Card>
    <Card title="참여중인 사각">
      <Index></Index>
    </Card>
  </div>
</template>

<script>
  import Index from '@/components/partials/Index'
  import Featured from '@/components/partials/Featured'
  import Card from '@/components/partials/Card'
  import filters from '@/utils/filters'

  export default {
    name: 'user',
    props: [ 'id' ],
    filters: filters,
    components: { Card, Index, Featured },
    computed: {
      isMine () {
        return this.$store.state.currentUser ? this.id === this.$store.state.currentUser.id : false
      }
    },
    async created () {
      try {
        const response = await this.$http.get(`/users/${this.id}`)
        const user = response.data

        this.comics = user.comics
        this.backgroundImage = user.featured_image_url
        this.foregroundImage = user.profile_image_url
        this.title = user.name
        this.descriptions = user.descriptions
        this.stickers = [user.status]
        this.items = [
          { icon: 'favorite', value: this.$options.filters.formatCurrency(user.likes), click () { /* TODO : 클릭시 행동 지정 : 좋아요 */ } },
          { icon: 'crop_square', value: this.$options.filters.formatCurrency(user.cuts), click () {} },
          { icon: 'email', value: user.email, click () { /* TODO : 클릭시 행동 지정 : 복사 */ } },
          { icon: 'web_asset', value: user.site, click () { /* TODO : 클릭시 행동 지정 : 복사 */ } }
        ]
      } catch (err) {
        console.log(err)
      }
    },
    data () {
      return {
        backgroundImage: '',
        foregroundImage: '',
        title: '',
        descriptions: '',
        stickers: '',
        items: [],
        comics: []
      }
    }
  }
</script>

<style lang="scss">
</style>
