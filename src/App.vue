<template>
  <div id="app">
      <Home/>
  </div>
</template>

<script>
 import Home from "./pages/Home"
export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  width:100%;
}
body,html{
  margin: 0;
  padding: 0;
  width:100%;
}
</style>
