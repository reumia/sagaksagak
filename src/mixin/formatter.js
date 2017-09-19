const formatter = {
  methods: {
    currency (value) {
      return value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
    }
  }
}

export default formatter
