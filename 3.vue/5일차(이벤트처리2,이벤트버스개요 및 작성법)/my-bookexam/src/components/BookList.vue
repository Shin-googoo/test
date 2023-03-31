<template>
   <div class="hello">
      <h1>도서 목록 {{bookList.length}} 권</h1>
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
  name:'BookList',
  props:{
      bookList:Array
  },
  methods:{
    x:function(e){
      console.log('e->',e)
      //부모에게 전달->자식->부모컴포넌트=>이벤트 버스 개념
      //:data-xxx="book.name"
      this.$emit('xyz',e.target.dataset.xxx)//클릭한 이미지책이름
    }
  }
}
</script>
<style scoped>
    ul{
        list-style-type:none;
    }
</style>