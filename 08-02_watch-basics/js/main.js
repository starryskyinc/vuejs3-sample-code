const app = Vue.createApp({
  data: () => ({
    message: 'Hello Vue.js!'
  }),
  watch: {
    message: function(newValue, oldValue) {
      console.log('new: %s, old: %s', newValue, oldValue)
    }
  }
})
app.mount('#app')