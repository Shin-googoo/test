<template>
  <div class="hello">
    <h1>도서 목록 {{bookList.length}}</h1>
    <ul>
    <!-- 디렉티브
      <c:forEach var="꺼낼객체명" items="배열객체명 또는 컬렉션객체명" />
      v-for="꺼낼객체명(book) in 배열객체명(booKList)" v-bind:key="객체명.구분자"
    let book={id:'p01',name:'위험한 식탁',price:2000,date:'20191204',img:'a'}

     -->
       <li v-for="book in bookList" v-bind:key="book.id">
          <img :src="require(`@/assets/image/${book.img}.jpg`)">
          {{book.name}} {{book.img}}
       </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'BookList', //<BookList />
  props:{
    bookList:Array //도서목록을 배열형태로 받아서 출력
  }
}
</script>

<style>
 ul{
     list-style-type:none;/*마커제거*/
 }
</style>