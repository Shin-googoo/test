<template id="HelloWorld2">
  <div class="hello">
    <h1>HelloWorld2 데이터전송 받음</h1>
  </div>
</template>

<script>
//다른 컴포넌트끼리는 이벤트버스를 이용(데이터를 전송)
import eventBus from './EventBus'//공통

export default {
  name: 'HelloWorld2',
  //emit를 전달받을 수 있도록 코딩->라이프싸이클을 호출
  created:function(){
    //받는쪽 컴포넌트(created 함수에서 받는내용에 해당코딩)
    //형식) 이벤트버스객체명.$on("연결할 키워드",호출할 함수명 등록)
    eventBus.$on('xyz',this.handleEvent)
  },
  methods:{
    handleEvent:function(){
       console.log("handleEvent 호출됨!")
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
