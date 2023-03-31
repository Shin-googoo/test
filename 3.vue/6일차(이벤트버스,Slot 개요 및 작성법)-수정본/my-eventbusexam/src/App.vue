<template>
  <div id="app">
    <Input />
    <List />
  </div>
</template>

<script>
import Input from './components/Input.vue'
import List from './components/List.vue'

export default {
  name: 'App',
  components: {//자식컴포넌트를 등록
    Input,List
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
