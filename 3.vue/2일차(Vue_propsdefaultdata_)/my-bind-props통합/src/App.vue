<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!--binding(단방향)
        숫자계산(X),객체의 키명 출력(X) =>예외조건
        숫자,배열,불린,객체의 값을 전달->매개변수 앞에 v-bind:매개변수명=>생략해서 :매개변수명
        특히 숫자,객체의 키명을 통한 값을 전달->반드시 v-bind:을 생략(X)
    -->
    <HelloWorld username="홍길동" v-bind:age="20" myAddress="서울"
                isMarried v-bind:isMarried2="false"
                v-bind:phones="[100,200,300]" 
                v-bind:writer="{
                  name:'테스트',
                  company:'KIC IT'
                }" />
    <hr />
    <!--list(배열의 값을 전달할 키명) -->
    <BookList v-bind:bookList="list" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
//추가
import BookList from './components/BookList.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,BookList
  },
  data:function(){
    return{   //this.state={list:[],bookName} react의 경우
      list:[{id:'p01',name:'위험한 식탁',price:2000,date:'20191204',img:'a'},
            {id:'p02',name:'공부의 비결',price:3000,date:'20201204',img:'b'},
            {id:'p03',name:'오메르타',   price:4000,date:'20191204',img:'c'},
            {id:'p04',name:'행복한 여행',price:5000,date:'20191204',img:'d'},
            {id:'p05',name:'해커스 토익',price:6000,date:'20191204',img:'e'},
            {id:'p06',name:'도로 안내서',price:2000,date:'20191204',img:'f'}],
      bookName:'' //도서명저장
    }
  }//data
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
