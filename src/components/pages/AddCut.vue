<template>
  <div class="add-cut">
    <Card title="부모 컷" v-if="parentCut">
      <!-- 현재 부모 컷 -->
      <div class="parent-cut">
        <div class="parent-cut-image">
          <img :src="parentCut.imageUrl" class="image">
        </div>
        <div class="parent-cut-text">
          <div class="title">#{{ parentCut.id }}</div>
          <div class="descriptions">{{ parentCut.title }}</div>
        </div>
      </div>
      <!-- // 현재 부모 컷 -->
    </Card>
    <Card :title="id ? '컷 수정' : '새 컷'">
      <FileUploader
        :ratio="1 / 1"
        @onSuccess="addFile"
      ></FileUploader>
      <form @submit.prevent="handleSubmit">
        <!-- 부모 컷 선택하기 -->
        <div class="select">
          <i class="select-icon icon material-icons" :disabled="Boolean(parentId) === false && options.length <= 0">keyboard_arrow_down</i>
          <select
            class="select-input input"
            :disabled="Boolean(parentId) === false && options.length === 1 && options[0].value === null"
            v-model="selected"
            @change="handleChange"
          >
            <option
              v-for="item in options"
              :value="item.value"
              :disabled="item.value === null"
            >{{ item.text }}</option>
          </select>
        </div>
        <!-- // 부모 컷 선택하기 -->
        <input class="input" v-model="newTitle" type="text" placeholder="제목" required/>
        <div class="button-flex">
          <button class="button button-primary" type="submit"><i class="icon material-icons">check</i> {{ id ? '변경내용 적용' : '새 컷 만들기' }}</button>
          <button class="button" type="button" @click="$router.go(-1)"><i class="icon material-icons">close</i> 취소</button>
        </div>
      </form>
    </Card>
  </div>
</template>

<script>
  import Card from '@/components/partials/Card'
  import FileUploader from '@/components/partials/FileUploader'
  import { mapState, mapMutations } from 'vuex'
  import _ from 'lodash'

  export default {
    name: 'add-cut',
    components: { Card, FileUploader },
    props: [ 'id', 'parentId', 'comicId' ],
    created () {
      this.$store.dispatch('GET_COMIC_BY_ID', { id: this.comicId })
        .catch(err => console.warn(err.response.data))
    },
    data () {
      return {
        selected: null
      }
    },
    computed: {
      ...mapState([ 'currentUser', 'comic' ]),
      newTitle: {
        get () {
          return this.cut ? this.cut.title : null
        },
        set (value) {
          this.SET_CUT({title: value})
        }
      },
      options () {
        let values = [{ value: null, text: '부모 컷을 선택하세요.' }]

        if (Boolean(this.comic) === false) return values

        _.forEach(this.comic.cuts, cut => {
          values.push({ value: cut.id, text: `#${cut.id} : ${cut.title}` })
          if (parseInt(cut.id, 10) === parseInt(this.parentId, 10)) this.selected = cut.id
        })

        return values
      },
      parentCut () {
        if (Boolean(this.comic) === false) return null

        const filtered = _.filter(this.comic.cuts, o => parseInt(o.id, 10) === parseInt(this.parentId, 10))

        return filtered[0]
      }
    },
    methods: {
      ...mapMutations([ 'SET_CUT' ]),
      add () {
        console.log({
          parentId: this.selected,
          comicId: this.comicId
        })
        this.$store.dispatch('ADD_CUT', {
          parentId: this.selected,
          comicId: this.comicId
        })
          .then(cut => this.$router.push({ name: 'Cut', params: { id: cut.id } }))
          .catch(err => console.warn(err.response.data))
      },
      handleSubmit () {
        if (this.id) this.update()
        else this.add()
      },
      handleChange () {
        if (Boolean(this.selected) === false) return
        this.$router.push({ name: 'AddCut', query: { comicId: this.comicId, parentId: this.selected } })
      },
      addFile (response) {
        this.SET_CUT({imageUrl: response.imageUrl})
      }
    }
  }
</script>

<style lang="scss">
  @import 'init';

  .add-cut {
    margin: 0 auto;
    max-width: $site-width-narrow;
  }

  .parent-cut {
    display: flex;
    border-radius: $radius-unit;
    margin: ($space-unit / 2) auto;
    background-color: $color-background;
    align-items: center;
    border: 2px solid $color-border;
  }
  .parent-cut-image {
    position: relative;
    margin: ($space-unit / 2);
    .image {
      display: block;
      width: 80px;
      height: 80px;
    }
    &:after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border: 1px solid rgba(0,0,0,.1);
    }
  }
  .parent-cut-text {
    margin-left: $space-unit;
    .title {
      font-weight: bold;
    }
    .descriptions {
      color: $color-text-light;
      font-size: $font-size-small;
    }
  }
</style>
