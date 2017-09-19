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
            // TODO : 클릭시 행동 지정 : 유저페이지 이동
          }
        },
        {
          icon: 'heart',
          value: currency($store.state.comic.likes),
          click () {
            // TODO : 클릭시 행동 지정 : 좋아요
          }
        },
        {
          icon: 'sagak',
          value: currency($store.state.comic.totalContents),
          click () {}
        }
      ]
    }"></Featured>

    <Card>
      <!--TODO : TREE 그리기-->
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
