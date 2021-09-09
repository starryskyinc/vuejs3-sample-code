const app = Vue.createApp({
  data: () => ({
    counter: 0
  }),
  methods: {
    clickHandler: function(event) {
      this.counter++
      // console.log(event)
      console.log(event.target)
      console.log(event.target.tagName)
      console.log(event.target.innerHTML)
      console.log(event.target.type)
      console.log(event.target.id)
    }
  }
})
app.mount('#app')