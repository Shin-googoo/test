<template>
  <div class="hello">
    <h1>구조지시자(v-if,v-show,v-for)</h1>
    <!--
      v-if (조건에 만족하면 화면에 출력 O)
            컴포넌트의 라이프싸이클(랜더링)
      v-show (조건에 만족하면 화면에 출력 O)
               display:none 속성을 변경
      형식) v-if or v-show=조건식 or 불린값을 설정
      -->
    <Valid />
    <Control />
    <p v-show=true>A</p>
    <p v-show="true">A1</p>
    <p v-show="flag">A2</p>
    <p v-show="!flag">A3</p>
    <p v-show="false">A4</p>
    <p v-show=false>A5</p>
    <hr />
    <p v-if="amount==1">Hello1</p>
    <p v-show="amount==1">Hello2</p>
    <hr />
    <p v-if="num < num2 && 3==3">Hello3</p>
    <p v-show="num < num2 || 3==3">Hello4</p>
  </div>
</template>

<script>
import Valid from './Valid'
import Control from './Control'

export default {
  name: 'HelloWorld',
  data:function(){
    return{
      flag:true,//v-if 조건식을 사용
      amount:1,
      num:10,
      num2:5
    }
  },
  components:{
    Valid,Control
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
