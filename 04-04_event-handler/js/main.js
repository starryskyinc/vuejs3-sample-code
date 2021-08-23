const app = Vue.createApp({
  data: () => ({

  }),
  methods: {
    addItem: function(event) {
      console.log('Clicked!')
    }
  }
})
app.mount('#app')