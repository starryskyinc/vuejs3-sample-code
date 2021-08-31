const app = Vue.createApp({
  data: () => ({
    
  }),
  computed: {
    computedNumber: function() {
      console.log('computed!')
      return Math.random()
    }
  },
  methods: {
    methodsNumber: function() {
      console.log('methods!')
      return Math.random()
    }
  }
})
app.mount('#app')