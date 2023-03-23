<template>
<!-- 1. 화면에 출력하는 부분(reactDOM과 연관)-->
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
//script 안쪽에는 자바의 주석처럼 사용할 수가 있다.
/*
 template와 연관이 있는 컴포넌트의 정보영역(자바스크립트 코드작성)
*/
export default {
  name: 'HelloWorld', //부착시킬 컴포넌트 이름
  props: {   //부모컴포넌트로부터 매개변수를 전달받았을대 처리하는 부분
    msg: String //속성명:자료형->react(string(소문자 사용))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only 
   template영역에 출력할 스타일시트를 적용시키는 영역
-->
<style scoped>
h1 {
  background-Color:rgb(0, 247, 255);
  color:red;
  font-size:18pt;
}
</style>
