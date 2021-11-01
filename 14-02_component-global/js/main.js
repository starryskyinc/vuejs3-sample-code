const app = Vue.createApp({
  data: () => ({
    
  }),
})

app.component('hello-component', {
  template: '<p>Hello!</p>'
})

app.mount('#app')