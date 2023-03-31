<template>
    <div class="hello">
      <Event2 />
      <hr />
      <h1>이벤트 실습2</h1>
      값1:<input type="text" v-model="num1"><br>
      값2:<input type="text" v-model="num2"><br>
      <button v-on:click="sum">+</button>
      <button v-on:click="sum">-</button>
      <button v-on:click="sum">*</button>
      <button v-on:click="sum">/</button>
      <br>
      결과값:{{total}}
    </div>
</template>
<script>
import Event2 from './Event2.vue'

export default {
   name:'Cal',
   components:{
     Event2
   },
   data:function(){
       return {
        //변수선언 후 단방향연결(출력),양방형연결(입력(저장),출력 동시) 설정
           num1:'',  
           num2:'',
           total:'' //단방향으로 연결
       }
   },
   methods:{
       sum:function(e){
         //e.getActionCommand() ->자바의 Swing
         var action=e.target.innerText//클릭한 버튼의 이름
           //각 버튼의 연산자(버튼의 이름)->if구문->switch~case
        switch(action){
          //+
         case "+":
         this.total=Number.parseInt(this.num1)+Number.parseInt(this.num2)
                    break;
          //-
         case "-":
         this.total=Number.parseInt(this.num1)-Number.parseInt(this.num2)
                    break;
          //*
         case "*":
         this.total=Number.parseInt(this.num1)*Number.parseInt(this.num2)
                    break;
          // /
         case "/":
         this.total=Number.parseInt(this.num1)/Number.parseInt(this.num2)
                    break;
        }//switch  
       }
   }
}
</script>
<style scoped>

</style>