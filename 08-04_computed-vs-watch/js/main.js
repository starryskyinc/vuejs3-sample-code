// const app = Vue.createApp({
//   data: () => ({
//     firstName: '',
//     lastName: '',
//     fullName: ''
//   }),
//   watch: {
//     firstName: function(value) {
//       this.fullName = value + ' ' + this.lastName
//     },
//     lastName: function(value) {
//       this.fullName = this.firstName + ' ' + value
//     }
//   }
// })

const app = Vue.createApp({
  data: () => ({
    firstName: '',
    lastName: ''
  }),
  computed: {
    fullName: function() {
      return this.firstName + ' ' + this.lastName
    }
  }
})
app.mount('#app')