<template>
  <div id="app">
    <HelloWorld />
    <HelloWorld2 />
    <p />
    <hr />
    <Input />
    <List />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
//추가
import HelloWorld2 from './components/HelloWorld2.vue'
import Input from './components/Input.vue'
import List from './components/List.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,HelloWorld2,Input,List
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
