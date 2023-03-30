<template>
  <div id="app">
    <!-- router-link로 경로지정
         router-view부분이 화면에 실질적으로 보여주는 부분
         path가 아닌 name으로 사용  -->
    <!--
    <router-link to="/">Home</router-link>
    <router-link to="/login/홍길동">login</router-link>
    <router-link to="/my/1234">pw</router-link>
    <router-link to="/knu">knu</router-link>
    <router-view></router-view> -->
    <router-link :to="{name:'Bar'}">Home</router-link>
    <router-link :to="{name:'Foo'}">login</router-link>
    <router-link :to="{name:'Baz',params:{id:'kkkk'}}">my</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
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
