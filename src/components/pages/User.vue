<template>
  <div class="page-user">
    <Featured :data="{
      backgroundImage: $store.state.user.featuredImageUrl,
      foregroundImage: $store.state.user.profileImageUrl,
      title: $store.state.user.name,
      descriptions: $store.state.user.descriptions,
      items: [
        {
          icon: 'heart',
          value: currency($store.state.user.likes),
          click () {
          }
        },
        {
          icon: 'sagak',
          value: currency($store.state.user.totalContents),
          click () {
          }
        },
        {
          icon: 'email',
          value: $store.state.user.email,
          click () {
          }
        },
        {
          icon: 'web',
          value: $store.state.user.site,
          click () {
          }
        }
      ]
    }"></Featured>
    <Card title="소유중인 사각">
      <Index></Index>
    </Card>
    <Card title="참여중인 사각">
      <Index rows="6"></Index>
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
    components: { Card, Index, Featured },
    data () {
      return {
      }
    }
  }
</script>

<style lang="scss">
</style>
