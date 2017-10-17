<template>
  <button :class="{ 'color-danger': hasLiked }" @click="handleLike">
    <i class="icon material-icons">favorite</i> {{ data.likes.length | formatCurrency }}
  </button>
</template>

<script>
  import filters from '@/utils/filters'
  import { mapState } from 'vuex'
  import _ from 'lodash'

  export default {
    name: 'like',
    props: [ 'type', 'data', 'id' ],
    filters: filters,
    computed: {
      ...mapState([ 'currentUser' ]),
      hasLiked () {
        return this.currentUser && this.data && _.find(this.data.likes, {'userId': parseInt(this.currentUser.id, 19)})
      }
    },
    methods: {
      handleLike () {
        if (this.hasLiked) this.deleteLike()
        else this.addLike()
      },
      addLike () {
        this.$store.dispatch('ADD_LIKE', {type: this.type, id: this.id})
          .then(like => {
            this.data.likes.push(like)
          })
          .catch(err => console.warn(err.response.data))
      },
      deleteLike () {
        this.$store.dispatch('DELETE_LIKE', {type: this.type, id: this.id})
          .then(like => {
            this.data.likes = _.reject(this.data.likes, like)
          })
          .catch(err => console.warn(err.response.data))
      }
    }
  }
</script>
