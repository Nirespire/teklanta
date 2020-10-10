<template>
  <div id="app">
    <img class="logo" src="./assets/logo2.png">
    <Construction/>
  </div>
</template>

<script>
import Construction from './components/Construction.vue'

export default {
  name: 'App',
  components: {
    Construction
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.logo {
  height: 300px;
  width: 300px;
  border-radius: 200px;
 -webkit-border-radius: 200px;
 -moz-border-radius: 200px;
}
</style>
