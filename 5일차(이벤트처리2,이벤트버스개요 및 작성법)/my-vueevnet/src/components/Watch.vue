<template>
    <div class="hello">
      <h1>Watch 속성</h1>
      <!-- input의 값을 특정변수에 저장 onChange=함수연결(react)
          v-model="연결시킬 data속성에 해당되는 키명"
       -->
      값:<input type="text" v-model="num">
    </div>
</template>
<script>
export default {
   name:'Watch',
   data:function(){
     return {
       num:10
     }
   },
   watch:{ //1.주로 긴시간이 필요로하는 비동기처리에 주로 사용
           /*
             2.데이터가 변경되었을때 함수가 자동으로 호출
             3.반드시 함수명과 data속성의 키명과 일치해야 한다.
               화면상에서는 에러가 발생하지않지만 콘솔에서 변경된값을
               호출하지 않음을 확인할 수 있다.
           */
    num:function(changeValue){
      console.log(this.num,changeValue)
    }
   }
}
</script>
<style scoped>

</style>