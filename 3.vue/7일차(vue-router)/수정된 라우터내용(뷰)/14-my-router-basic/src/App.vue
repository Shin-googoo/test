<template>
  <div id="app">
    <!--router-link태그로 경로를 지정
      router-link to="요청경로"(요청에 관련된 태그)
      router-view=>이 부분이 출력부분
     -->
    <!-- <router-link to="/">Home</router-link>&nbsp;&nbsp; -->
    <router-link :to="{name:'Bar'}">Home</router-link>&nbsp;&nbsp;
    <!-- <router-link to="/login/홍길동">login</router-link>&nbsp;&nbsp;-->
    <router-link to="/foo">Foo</router-link>&nbsp;&nbsp;
    <router-link to="/my/1234">pw</router-link>&nbsp;&nbsp;
    <router-link :to="{name:'Baz',params:{id:'kkk'}}">my</router-link>&nbsp;&nbsp;
    <router-link to="/knu">knu</router-link>&nbsp;&nbsp;
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
