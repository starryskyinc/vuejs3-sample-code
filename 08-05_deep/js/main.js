const app = Vue.createApp({
  data: () => ({
    colors: [
      { name: 'Red'},
      { name: 'Green'},
      { name: 'Blue'}
    ]
  }),
  watch: {
    colors: {
      handler: function(newValue, oldValue) {
        console.log('Update!')
      },
      deep: true
    }
  },
  methods: {
    onClick: function(event) {
      this.colors[1].name = 'White'
    }
  }
})
app.mount('#app')