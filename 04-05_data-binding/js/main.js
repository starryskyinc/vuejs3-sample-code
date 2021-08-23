const app = Vue.createApp({
  data: () => ({
    newItem: ''
  }),
  methods: {
    addItem: function(event) {
      console.log('Clicked!')
    }
  }
})
app.mount('#app')