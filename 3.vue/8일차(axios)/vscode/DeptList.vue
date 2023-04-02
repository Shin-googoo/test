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

<script>

import axios from 'axios';
import eventBus from './EventBus';

export default {
  name: 'DeptList',
  data:function(){
    return {
      list:[]
    }
  },
  beforeMount() {
    this.x();
  },
   // emit 처리
  created:function(){
     //this.list.push(dept)
     // eventBus.$emit("xyz", this.sawon); DeptAdd.vue에서 전달
     eventBus.$on('xyz' , this.y )//this.list.push(sawon)
     //eventBus.$emit("xyz2", this.id); DeptList.vue에서 전달
     eventBus.$on('xyz2' , this.y2 )
  },
  methods: {
    x:function(){
      var xxx = this.list;
      //axios.get("http://localhost:8090/app/")
      axios.get("http://localhost:8090/VueTest/getPersonList.jsp")
       .then((res)=>{
           //res.data.map(function(ele,idx){
             res.data.map(function(ele){
              xxx.push(ele)
           })
        }).catch();
    },
    y:function(sawon){//y:function(dept){
       console.log("sawon> ", sawon);
       this.list.push(sawon)
    },
    y2:function(id){//y2:function(deptno){
       console.log("y2",id)
           var xxx = this.list;
       this.list.map(function(ele,idx){
           if(ele.id == id){
              xxx.splice(idx,1);
             //console.log("xxxxxxx", ele.id, id)
           }
       })
    }
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
