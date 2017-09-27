import moment from 'moment'

moment.locale(window.navigator.language)

export default {
  formatCurrency (value) {
    return value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
  },
  formatDate (value) {
    return moment(String(value)).format('LL')
  }
}
