<template>
    <div class="hello">
      <h1>교재 정보</h1>
      <div v-for="(book,idx) in bookList" :key="idx">
        <input type="checkbox" v-model="books" :value="book.name">
         {{book.name}} <span>{{book.price}}</span>
         <button v-on:click="del" :data-idx="idx">삭제</button>
      </div><p>
      <hr />
      <button v-on:click="delAll">전체 삭제</button>
    </div>
</template>
<script>
export default {
   name:'Book',
   data:function(){
     return{
       bookList:[{name:'자바의 정석',price:2000},
                 {name:'JSP의 정석',price:3000},
                 {name:'Spring의 정석',price:1500},
                 {name:'jQuery의 정석',price:2500},
                 {name:'React의 정석',price:3000}
                ],
       books:[] //체크한 책항목
     }
   },
   methods:{
     del:function(e){ //원하는 항목만 삭제
       var delIdx=e.target.dataset.idx //dataset.idx(클릭한 삭제버튼)
       console.log('delIdx=>',delIdx)
       this.bookList.splice(delIdx,1)//1.인덱스번호(기준점),2.삭제갯수
     },
     delAll:function(){//전부삭제
       var xx=this.bookList;//현재 책리스트
       this.books.map(function(ele){//체크한 항목의 이름 전달받음
          xx.map(function(e,i){//현재 책리스트에서 꺼낸 항목
            if(e.name==ele){//리스트의 책이름==체크한 책이름
              xx.splice(i,1)
            }//if
          })//inner map
       })//outer map
     }//delAll
   }//methods
}
</script>
<style scoped>

</style>