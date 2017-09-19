<template>
  <span :class="`sticker-${getType}`">
    {{ getValue }}
  </span>
</template>

<script>
export default {
  name: 'stikcer',
  props: [ 'code' ],
  computed: {
    getType () {
      return this.resolveCode(this.code).type
    },
    getValue () {
      return this.resolveCode(this.code).value
    }
  },
  methods: {
    resolveCode (value) {
      const map = {
        DEFAULT: { type: 'default', value: '정의되지않은 CODE입니다.' },
        OPEN: { type: 'success', value: '진행중' },
        CLOSE: { type: 'warning', value: '종료' },
        BLOCKED: { type: 'danger', value: '차단' },
        MVP_MONTH: { type: 'hot', value: '이달의 사각' }
      }

      if (typeof map[value] === 'undefined') return map['DEFAULT']
      else return map[value]
    }
  }
}
</script>

<style lang="scss">
  @import 'init';

  [class^=sticker] {
    display: inline-block;
    margin-left: $space-unit / 2;
    color: $color-text;
    font-size: $font-size-smaller;
    font-weight: bold;
    &:before {
      content: '\0025AA';
      display: inline-block;
    }
  }

  .sticker-default {
    color: $color-text-light;
  }
  .sticker-success {
    color: $color-success;
  }
  .sticker-warning {
    color: $color-warning;
  }
  .sticker-danger {
    color: $color-danger;
  }
  .sticker-hot {
    color: hotpink;
  }
</style>
