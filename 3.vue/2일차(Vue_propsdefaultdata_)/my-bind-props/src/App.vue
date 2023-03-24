<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!--binding(단방향) 
     문자열,숫자,배열,불린,객체의 값을 전달=>처리?
     문제점) 숫자계산(X),객체의 키명 출력(X)
     숫자,배열,불린,객체의 값을 전달->매개변수 앞에 v-bind:매개변수
     특히 숫자,객체의 키명을 통한 갑슬 출력 반드시  v-bind:을 생략X
     v-bind:->앞의 v-bind을 생략해서 :전달할 매개변수명
    -->
    <HelloWorld username="홍길동" v-bind:age="20" my-address="서울"
                isMarried isMarried2="false"
                v-bind:phones="[100,200,300]"
                :writer="{name:'테스트',company:'KIC IT'}" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
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
