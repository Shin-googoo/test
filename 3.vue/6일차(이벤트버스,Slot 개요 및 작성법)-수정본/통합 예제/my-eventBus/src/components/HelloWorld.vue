<template>
  <div class="hello">
    <h2>이벤트 버스 실습</h2>
    <button v-on:click="x">HelloWorld2로 요청</button>
  </div>
</template>
<script>
//다른 컴포넌트끼리 이벤트버스를 이용(데이터 전송)
import eventBus from './EventBus' //공통
export default {
  name: 'HelloWorld',
  methods:{
    x:function(){
      //형식) eventBus객체명.$emit("연결할 키워드")
      eventBus.$emit("xyz")//HelloWorld2로 이벤트종류(xyz)전송
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
