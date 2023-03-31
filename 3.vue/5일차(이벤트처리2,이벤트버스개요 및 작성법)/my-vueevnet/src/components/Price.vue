<template>
    <div class="hello">
      가격:<input type="text" v-model="price"><br>
      갯수:<!-- @change="sum" -->
      <select v-on:change="sum" v-model="quantity">
         <option value="10">10</option>
         <option value="15">15</option>
         <option value="20">20</option>
      </select><p>
        <hr />
      결과:{{total}}  
    </div>
</template>
<script>
export default {
   name:'Price',
   data:function(){
     return{  //값저장
       price:'',  //v-bind(단방향) v-model(양방향)
       quantity:'',
       total:''
     }
   },
   methods:{
     sum:function(){//Number.parseInt("3000")=>3000
       this.total=Number.parseInt(this.price)*Number.parseInt(this.quantity)
     }
   }
}
</script>
<style scoped>

</style>