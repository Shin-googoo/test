<template>
  <div>
    <!--onKeyup={this.add} 글을 입력하고 enter쳤을때 호출-->
    <input type="text" @keyup.enter="add" v-model="mesg">
  </div>
</template>

<script>
import eventBus from './EventBus'//공통관심 클래스역할

export default {
 name:'Input',
 data:function(){
    return{
       mesg:''//초기값 설정 
    }
 },
 methods:{
   add:function(){
      console.log('add함수호출됨')
//형식) eventBus객체명.$emit("연결할 키워드(이벤트종류)",전달할값)
      eventBus.$emit("abc",this.mesg)//입력받을값 전달
      this.mesg=''//연결된 input의 value도 같이 지워준다.
   }
 }
}
</script>

<style>

</style>