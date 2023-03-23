<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!--
       자식태그명 매개변수명=전달할값(문자,숫자,배열,객체,,,)
       중첩컴포넌트는 여러번 사용이 가능,매개변수를 전달하지 않아도 에러발생X
     -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <HelloWorld msg="Testing!" />
    <HelloWorld />
    <Happy test="전달이요" /> 
  </div>
  <!-- <Happy /> div태그 밖에 중첩X -->
</template>

<script>
//1.부착시킬 컴포넌트 불러오기(Happy(확장자는 생략가능))
import HelloWorld from './components/HelloWorld.vue'
import Happy from './components/Happy'

export default {
  name: 'App', //부모컴포넌트명 <App />
  components: { //자식컴포넌트를 등록시켜주는 속성명
    HelloWorld,Happy //자식컴포넌트명,,,
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
