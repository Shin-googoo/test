<template id="HelloWorld">
  <div class="hello">
    <h1>이벤트 버스 실습</h1>
    <button v-on:click="x">HelloWorld2로 요청</button>
  </div>
</template>

<script>
//다른 컴포넌트끼리는 이벤트버스를 이용(데이터를 전송)
import eventBus from './EventBus'//공통

export default {
  name: 'HelloWorld',
  template:"#HelloWorld",
  methods:{
    x:function(){
       //eventBus객체명.$emit("연결할 키워드")
       eventBus.$emit("xyz")//HelloWorld2로 이벤트종류(xyz)로 전송
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
