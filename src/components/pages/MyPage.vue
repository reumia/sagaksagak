<template>
  <Card class="my-page" title="My Page">
    <div class="button-wrap">
      <button class="button button-primary" @click.prevent="signOut">로그아웃</button>
    </div>
  </Card>
</template>

<script>
  import Card from '@/components/partials/Card'

  export default {
    name: 'mypage',
    components: { Card },
    async created () {
      try {
      } catch (err) {
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
    },
    methods: {
      signOut () {
        this.$store.dispatch('SIGN_OUT')
          .then(() => {
            this.$router.push({ name: 'Home' })
          })
          .catch((err) => {
            const errorCode = err.response.data
            console.warn(errorCode)
          })
      }
    }
  }
</script>

<style lang="scss">
  @import 'init';

  .my-page {
    max-width: $site-width / 2.5;
  }
</style>
