<template>
    <div class="hello">
      <h1>이벤트 실습1</h1>
      값1:<input type="text" v-model="num1"><br>
      값2:<input type="text" v-model="num2"><br>
      <button v-on:click="sum">+</button>
      <br>
      결과값:{{total}}
    </div>
</template>
<script>
export default {
   name:'Event2',
   data:function(){
       return {
        //변수선언 후 단방향연결(출력),양방형연결(입력(저장),출력 동시) 설정
           num1:'',  
           num2:'',
           total:'' //단방향으로 연결
       }
   },
   methods:{
       sum:function(){
           //문자열->숫자로 변환(Integer.parseInt)(자바)
           //Number.parseInt(변환문자열)<->string
         this.total=Number.parseInt(this.num1)+Number.parseInt(this.num2)  
       }
   }
}
</script>
<style scoped>

</style>