const app = Vue.createApp({
  data() {  // data is a function that returns an object
    return {
      firstName: 'Human',
      lastName: 'Person',
      email: 'real@person.fosho',
      gender: 'female',
      picture: 'https://randomuser.me/api/portraits/women/0.jpg'
    }
  },
  methods: {
    async getUser() {
      const res = await fetch('https://randomuser.me/api')
      const { results } = await res.json()
      this.firstName = results[0].name.first,
      this.lastName = results[0].name.last,
      this.email = results[0].email,
      this.gender = results[0].gender,
      this.picture = results[0].picture.large
    }
  }
})

app.mount('#app')