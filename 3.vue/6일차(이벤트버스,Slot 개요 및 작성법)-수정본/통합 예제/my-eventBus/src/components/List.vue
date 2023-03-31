<template>
  <div>
    <h3>전달받은 값을 출력</h3>
    <ul v-for="(a,idx) in toDoList" :key="idx">
       <li>{{a}} <button @click="del(idx)">삭제</button></li>
    </ul>
  </div>
</template>

<script>
import eventBus from './EventBus'
export default {
  name:'List',
  data:function(){
    return{
        toDoList:[]//입력받은 값 저장(배열)
    }
  },
  //화면에 입력받은값을 출력하기전에 미리 받아서 저장
  created:function(){
     //~.$on('전달받은 수신키워드',호출할 콜백함수지정)
     eventBus.$on("abc",this.add)
  },
  methods:{
    add:function(m){//m->this.mesg
        this.toDoList.push(m)
    },
    del:function(idx){
       console.log('idx=>',idx)
       this.toDoList.splice(idx,1)//1.삭제시킬 index 2.삭제갯수
    }
  }
}
</script>

<style>
  ul {
    list-style:none
  }
</style>