<template>
  <div class="hello">
      <div>
       <h1><center>부서 홈페이지</center></h1>
       <table border="1" align="center">
        <thead>      
          <tr>
            <td>사원번호</td>
            <td>사원명</td>
            <td>나이</td>
          </tr>
        </thead>
        <tbody>
         <tr v-for="(sawon,idx) in list" :key="idx">
          <td>{{sawon.id}}</td>
          <td>{{sawon.name}}</td>
          <td>{{sawon.age}}</td>
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
  beforeMount() {//화면에 출력하기전에 호출
    this.x();
  },
  methods: {
    x:function(){
      var xxx = this.list;
      //axios.get("http://localhost:8090/app/")
       axios.get("http://localhost:8090/VueTest/getPersonList.jsp")
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
