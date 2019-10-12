<template>
  <div id="app">
    <div id="nav">
      <router-link v-for='item in navs'
                   :to="item.path"
                   :key='item.path'>{{item.name}} |</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  data () {
    return {
      navs: [
        { path: '/', name: 'Home' },
        { path: '/about', name: 'About' },
        { path: '/vchart', name: 'V-Chart' },
        { path: '/validate', name: 'Vee-Validate' },
        { path: '/vslot', name: 'V-slot' },
        { path: '/swiper', name: 'V-swipe' },
        { path: '/pie', name: 'V-pie' }
      ]
    }
  }
}
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
