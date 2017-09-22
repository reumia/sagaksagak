<template>
  <div class="page-comic">
    <Featured
      :backgroundImage="backgroundImage"
      :title="title"
      :descriptions="descriptions"
      :stickers="stickers"
      :items="items"
    ></Featured>

    <Card>
      Comic<br/>
      여러개의 Cut을 가짐.<br/>
      트리가 노출되는 영역.
    </Card>
  </div>
</template>

<script>
  import Card from '@/components/partials/Card'
  import Featured from '@/components/partials/Featured'
  import formatter from '@/mixin/formatter'

  export default {
    mixins: [ formatter ],
    name: 'comic',
    props: [ 'id' ],
    components: { Card, Featured },
    async created () {
      const response = await this.$http.get(`${process.env.API_ENDPOINT}/comics/${this.id}`)
      const comic = response.data

      this.backgroundImage = comic.image_url
      this.title = comic.title
      this.descriptions = comic.descriptions
      this.stickers = [comic.status]
      this.items = [
        { icon: 'person', value: comic.owner.name, click () { /* TODO : 클릭시 행동 지정 : 유저이동 */ } },
        { icon: 'heart', value: comic.likes, click () { /* TODO : 클릭시 행동 지정 : 좋아요 */ } },
        { icon: 'sagak', value: comic.cuts, click () {} }
      ]
    },
    data () {
      return {
        backgroundImage: '',
        title: '',
        descriptions: '',
        stickers: '',
        items: []
      }
    }
  }
</script>

<style lang="scss">

</style>
