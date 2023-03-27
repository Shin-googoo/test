<template>
  <div id="app">
    <center>
     <table border="1">
       <tr><th colspan="2">이벤트 실습 종합예제</th></tr>
       <tr><td><HelloWorld /></td><td><Cal /></td></tr>
       <tr><td><Price /></td><td><Book /></td></tr>
       <tr><td><Event /></td><td><Watch /></td></tr>
     </table>
    </center>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
//추가
import Cal from './components/Cal.vue'
import Price from './components/Price.vue'
import Book from './components/Book.vue'
import Event from './components/Event.vue'
import Watch from './components/Watch.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,Cal,Price,Book,Event,Watch
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
