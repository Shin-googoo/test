<template>
  <div class="hello">
      <div>
       <h1>Dept 홈페이지</h1>
       <table border="1">
        <thead>      
          <tr>
            <td>부서번호</td>
            <td>부서명</td>
            <td>부서위치</td>
          </tr>
        </thead>
        <tbody>
         <tr v-for="(dept,idx) in list" :key="idx">
          <td>{{dept.deptno}}</td>
          <td>{{dept.dname}}</td>
          <td>{{dept.loc}}</td>
         </tr>  
        </tbody>  
       </table> 
      </div>
  </div>   
</template>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>

import axios from 'axios';

export default {
  name: 'HelloWorld',
  data:function(){
    return {
      list:[]
    }
  },
  beforeMount() {
    this.x();
  },
  methods: {
    x:function(){
      var xxx = this.list;
      axios.get("http://localhost:8090/app/")
      //axios.get("http://localhost:8090/app/dept.json")
       .then((res)=>{
           res.data.map(function(ele,idx){
              xxx.push(ele)
           })
        }).catch();
         }
      }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
