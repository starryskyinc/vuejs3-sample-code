const app = Vue.createApp({
  data: () => ({
    items: null,
    keyword: '',
    message: ''
  }),
  watch: {
    
  },
  mounted: function() {
    this.keyword = 'JavaScript'
    this.getAnswer()
  },
  methods: {
    getAnswer: function() {
      if(this.keyword === '') {
        console.log('karamoji')
        this.items = null
        return
      }

      this.message = 'Lading...'
      const vm = this
      const params = { page: 1, per_page: 20, query: this.keyword }
      axios.get('https://qiita.com/api/v2/items', { params })
           .then(function(response){
             // console.log(response)
             vm.items = response.data
           })
           .catch(function(error){
             vm.message = 'Error!' + error
           })
           .finally(function() {
             vm.message = ''
           })
    }
  }
})
app.mount('#app')