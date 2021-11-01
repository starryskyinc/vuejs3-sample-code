const helloComponent = {
  template: '<p>Hello!</p>'
}

const app = Vue.createApp({
  data: () => ({
    
  }),
  components: {
    'hello-component': helloComponent
  }
})

app.mount('#app')