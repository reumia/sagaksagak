<template>
  <div class="page-user">
    <Featured
      :backgroundImage="backgroundImage"
      :foregroundImage="foregroundImage"
      :title="title"
      :descriptions="descriptions"
      :stickers="stickers"
      :items="items"
    ></Featured>

    <Card title="소유중인 사각">
      <Index :items="comics"></Index>
    </Card>
    <Card title="참여중인 사각">
      <Index :rows="6"></Index>
    </Card>
  </div>
</template>

<script>
  import Index from '@/components/partials/Index'
  import Featured from '@/components/partials/Featured'
  import Card from '@/components/partials/Card'
  import formatter from '@/mixin/formatter'

  export default {
    mixins: [ formatter ],
    name: 'user',
    props: [ 'id' ],
    components: { Card, Index, Featured },
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
          { icon: 'heart', value: this.currency(user.likes), click () { /* TODO : 클릭시 행동 지정 : 좋아요 */ } },
          { icon: 'sagak', value: this.currency(user.cuts), click () {} },
          { icon: 'email', value: user.email, click () { /* TODO : 클릭시 행동 지정 : 복사 */ } },
          { icon: 'web', value: user.site, click () { /* TODO : 클릭시 행동 지정 : 복사 */ } }
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
