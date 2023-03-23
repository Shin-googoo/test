<template>
 <!-- 1.  -->
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!--자식태그명 msg(전달할 매개변수명)="전달할값"  -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <HelloWorld msg="두번째" />
  </div>
</template>

<script>
//부모입장에서 불러올 자식컴포넌트를 import시킨다.(확장자는 생략가능)
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',   //부모컴포넌트 이름
  components: { //부모컴포넌트 입장에서 중첩시킬 자식컴포넌트의 목록을 등록
    HelloWorld//,여러개의 컴포넌트를 만들어서 중첩이 가능
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
