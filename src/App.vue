<template>
  <div id="app">
    <navbar />
    <router-view />
    <tabbar />
  </div>
</template>

<script>
import navbar from '@/layout/components/navbar/index.vue'
import tabbar from '@/layout/components/tabbar/index.vue'
export default {
  name: 'App',
  components: {
    navbar,
    tabbar
  },
  created () {
    // if (location.pathname !== '/login') {
    //   this.$store.dispatch('manageList/getList')
    // }
  }
}
</script>

<style>
#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
