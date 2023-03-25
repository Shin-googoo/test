<template>
  <div id="app">
    <h1>Life Cylce Test</h1>
    <HelloWorld />
    <Life />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
//추가
import Life from './components/Life.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,Life
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
</style>
