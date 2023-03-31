<template>
    <div id="app2">
      <!-- v-on:발생시킬이벤트종류명="메서드명",@이벤트명="메서드명" 
            onClick={this.x}   ,function(e) or function(event)
            $event=>이벤트객체 표시(앵귤러에서 가져온 문법)
      -->
      <button v-on:click="x">OK</button>
      <button @click="y">cancel</button>
      <button @click="z('홍길동',$event)">data입력</button>
    </div>
</template>
<script>
export default {
   name:'Event',
   data:function(){
     return{
       num:10
     }
   },
   methods:{//매번 필요로하는 여러번호출,이벤트처리 함수까지 포함
     x:function(){  //저장,출력(Setter,Getter)
       console.log("OK"+this.num)
     },
     y:function(e){
       console.log(e.target.textContent)//이벤트발생객체의 문자내용
     },
     z:function(data,e){
       console.log('data->',data,'e->',e)
     }
   }
}
</script>
<style scoped>

</style>