const app = Vue.createApp({
  data: () => ({
    message: ''
  }),
  methods: {
    clickHandler: function(message) {
      // console.log(message)
      this.message = message
    }
  }
})
app.mount('#app')