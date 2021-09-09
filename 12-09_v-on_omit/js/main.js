const app = Vue.createApp({
  data: () => ({
    message: ''
  }),
  methods: {
    clickHandler: function() {
      this.message = new Date().toLocaleTimeString()
    }
  }
})
app.mount('#app')