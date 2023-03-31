<template>
  <div class="hello">
    <h2>HelloWorld2 데이터전송을 받음</h2>
  </div>
</template>

<script>
import eventBus from './EventBus.vue'

export default {
  name: 'HelloWorld2',
  //emit를 전달받을 수 있도록 코딩->라이프사이클을 이용
  created:function(){
    //받는쪽 컴포넌트(created함수에서 받는내용을 처리)
    //형식) eventBus객체명.$on("연결할 키워드",호출할함수명)
    eventBus.$on('xyz',this.handleEvent)//1.수신키워드 2.콜백함수
  },
  methods:{
    handleEvent:function(){
       console.log("handleEvent 호출됨") 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
