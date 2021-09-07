const app = Vue.createApp({
  data: () => ({
    classObject: {
      large: true,
      'text-danger': true
    }
  })
})
app.mount('#app')