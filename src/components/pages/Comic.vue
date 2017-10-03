<template>
  <div class="page-comic">
    <Featured
      :isMine="isMine"
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
  import filters from '@/utils/filters'

  export default {
    name: 'comic',
    props: [ 'id' ],
    filters: filters,
    components: { Card },
    computed: {
      // TODO : 인증한 사용자의 만화인지 아닌지
      isMine () {
        return false
      }
    },
    async created () {
      const response = await this.$http.get(`/comics/${this.id}`)
      const comic = response.data

      this.backgroundImage = comic.image_url
      this.title = comic.title
      this.descriptions = comic.descriptions
      this.stickers = [comic.status]
      this.items = [
        { icon: 'person', value: comic.owner.name, click () { /* TODO : 클릭시 행동 지정 : 유저이동 */ } },
        { icon: 'favorite', value: this.$options.filters.formatCurrency(comic.likes), click () { /* TODO : 클릭시 행동 지정 : 좋아요 */ } },
        { icon: 'crop_square', value: this.$options.filters.formatCurrency(comic.cuts), click () {} }
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
