<template>
  <div class="hello">
    <h1>도서 목록 {{bookList.length }}</h1>
    <ul>
     <li v-for="(book,idx) in bookList" :key="idx"> 
  <a v-on:click="x">
    <img :src="require(`@/assets/image/${book.img}.jpg`)"
         width="100" height="100" :data-xxx="book.name">
      {{book.name}}
  </a>
     </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'BookList',//<BookList />
  props:{
    bookList:Array //도서목록을 배열형태로 받아서 출력
  },
  methods:{
    x:function(e){
      this.$emit('xyz',e.target.dataset.xxx)//클릭한이미지 책이름
    }
  }
}
</script>

<style>
  ul{
    list-style-type:none; /*마커 제거 */
  }
</style>