<template>
  <div id="app">
    <!-- 배열의 값을 전달 v-bind:매개변수명=배열의 값(키명)-->
    <BookList v-bind:bookList="list" />
  </div>
</template>

<script>
import BookList from './components/BookList.vue'

export default {
  name: 'App',
  components: {
    BookList
  },
  data:function(){
    return {
     list:[{id:'p01',name:'위험한 식탁',price:2000,date:'20191204',img:'a'},
           {id:'p02',name:'공부의 비결',price:3000,date:'20191204',img:'b'},
           {id:'p03',name:'오메르타',price:4000,date:'20191204',img:'c'},
           {id:'p04',name:'행복한 여행',price:5000,date:'20191204',img:'d'},
           {id:'p05',name:'해커스 토익',price:6000,date:'20191204',img:'e'},
           {id:'p06',name:'도로 안내서',price:2000,date:'20191204',img:'f'}],
     bookName:''
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
