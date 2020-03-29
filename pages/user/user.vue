<template>
  <div class="container">
    <div>
      <h1 class="title">
        <nuxt-link id="title" to="/">
          Welcome to the user page
        </nuxt-link>
      </h1>
      <h2 class="subtitle">
        Ecomerce app
      </h2>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import axios from '@nuxtjs/axios'

export default {
  components: {},
  data() {
    return {
      ip: null
    }
  },
  methods: {
    async fecthSomething() {
      const ips = await this.$axios.$get('http://localhost:3000/')
      return { ips }
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
#title {
  text-decoration: none;
  color: #35495e;
}
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: inline;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
