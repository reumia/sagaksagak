<template>
  <div class="page-comic">
    <Featured :data="{
      backgroundImage: $store.state.comic.imageUrl,
      title: $store.state.comic.title,
      descriptions: $store.state.comic.descriptions,
      stickers: $store.state.comic.status,
      items: [
        {
          icon: 'user',
          value: $store.state.comic.owner.name,
          click () {
          }
        },
        {
          icon: 'heart',
          value: currency($store.state.comic.likes),
          click () {
          }
        },
        {
          icon: 'sagak',
          value: currency($store.state.comic.totalContents),
          click () {
          }
        }
      ]
    }"></Featured>

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
    components: { Card, Featured },
    data () {
      return {
      }
    }
  }
</script>

<style lang="scss">

</style>
