<template>
<!--render(return(태그 하나로 묶어서 출력)) 
  형식) {{출력할 매개변수명}} react  {this.props.msg}
-->
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: { //props->부모로부터 전달받은 매개변수를 작성하는 속성
    msg: String //전달받는 매개변수명:자료형(react는 소문자 string)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 h1 {
   background-Color:yellow;
   color:red;
   font-size:18pt;
 }
</style>
