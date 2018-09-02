import moment from 'moment'

// add filters you want to register globally
export default {
  formatDate (value) {
    return moment(value).format('ll')
  }
}
