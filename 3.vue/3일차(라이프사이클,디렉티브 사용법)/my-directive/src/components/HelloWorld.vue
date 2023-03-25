<template>
  <div class="hello">
    <!-- {출력변수}리액트, {{x}} , v-text="키명(x)" -->
    v-text:<span v-text="x"></span><br>
    v-html:<span v-html="y"></span><br>
    <h1>로컬 스타일 적용</h1>
    <Style />
    <hr />
    <!--v-bind(객체의 속성과 단방향 바인딩하기위한 방법)
       :value="mesg(속성의 키명)에 해당되는 문자열을 출력"
       생략하면 안되는 것->숫자(v-bind:age,v-bind:객체)
     -->
     mesg <input type="text" value="mesg"><br>
     :mesg <input type="text" :value="mesg"><br>
     v-bind:mesg <input type="text" v-bind:value="mesg"><br>
    <hr />
    <h1>양방향(v-model="연결시킬 키명")</h1>
     mesg <input type="text" v-model="mesg"><br>
     mesg <input type="text" v-model="mesg"><br>
     <hr />
     <h1>v-model 수식어</h1>
     <h4>Lazy(v-model.lazy="연결시킬 키명(문자열과 연관")</h4>
     <input type="text" v-model.lazy="lazy" />
     <p>
       <strong>Lazy:</strong>{{lazy}}
     </p>
     <!--Number -->
    <h4>숫자는 적용되나 문자는적용이 안되는 경우</h4>
    <!-- 처음부터 숫자를 입력한경우 중간에 다른 문자열은 입력X -->
     <input type="text" v-model.number="number" />
     <p>
       <strong>Number:</strong>{{number}}
     </p>
     <p><!--typeof 변수,값(자료형을 알려주는 연산자) -->
       <strong>Type of Number:</strong>{{typeof number}}
     </p>
     <!--No Trim(공백제거없음) -->
     <h4>No Trim</h4>
     <input type="text" v-model="noTrim" />
     <p><!--처음에 공백을 입력->공백을 인식X(문자만 입력 중간에 생기는
            공백은 인식 O)  -->
       <strong>No Trim:</strong>{{noTrim}}
     </p>
     <hr />
     <h4>Trim</h4>
     <input type="text" v-model.trim="trim" />
     <p><!--글자입력시 맨 처음에 사용되는 공백만 인식(제거)  -->
       <strong>Trim:</strong>{{trim}}
     </p>
     <h1>선택(양방향)(읽기,쓰기전용) 단방향(읽기전용)</h1>
     <select v-model="mesg2">
        <option>10</option>
        <option>20</option>
        <option>30</option>
        <option>40</option>
     </select>
     <br>
    <input type="text" v-model="mesg2" />
  </div>
</template>

<script>
import Style from './Style.vue'

export default {
  name: 'HelloWorld',
  components:{
    Style
  },
  data:function(){
    return{
      x:'홍길동', //jQuery(text())->v-text
      y:'<h1>홍길동</h1>',//jQuery(html())->v-html
      mesg:'테스트김',
      lazy:'',
      number:'',
      noTrim:'',
      trim:'',
      mesg2:20
    }
  }
}
</script>

<!-- 
   <style></style> ->전역적 스타일적용(부모 스타일->자식컴포넌트)
   <style scoped></style>->지역적 스타일적용(현재 컴포넌트만 적용)
 -->
<style>
  h1{
    background-Color:yellow;
    color:red;
    font-size:18pt;
  }
</style>
