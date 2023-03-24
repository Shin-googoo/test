<template>
  <div class="hello">
    <h1 class="test">{{username}} {{age+1}} {{myAddress}} {{isMarried}}
        {{isMarried2}} {{phones}} {{writer}}
        {{writer.name}} {{writer.company}}
    </h1>
    <hr />
    <h5 class="test2">
      <!--v-bind:매개변수=전달 (원칙) 또는 v-bind 생략가능
           :매개변수명="전달할값 또는 data속성의 특정키명(키와 연관된 값도출력)"
       -->
      <Default username="홍길동" :age='20' my-address="서울"/>
      <Default :username="x" />
      <hr />
      <!--{this.state.x} -->
      이름:{{x}} 나이:{{y}}  지역:{{z}}
      이메일:{{k.aa}} {{k.bb}}
      person:{{p.username}} {{p.age}}
    </h5>
  </div>
</template>
<script>
import Default from './Default.vue'
//추가
import {Person} from './Person';//~.js 생략

export default {
  name: 'HelloWorld',
  props: {
    username: String,
    age:Number,//숫자->number로 소문자로 쓰면 에러발생(자료형은 대문자)
    myAddress:String,//특수기호 - 때문에 그 다음문자는 대문자
    isMarried:Boolean,//논리적인값(=자바의 Wrapper클래스)
    isMarried2:Boolean,
    phones:Array,//배열
    writer:Object//객체
  },
  components:{
    Default
  },
  /*
   data속성을 이용해서 데이터를 저장->반드시 함수로 작성할것.
   return을 이용해서 반환받을 변수를 이용해서 화면에 출력
  */
 /*
  data:function(){ //this.state:{속성명:값}
    return{
      //속성명:저장할값->출력목적
      x:'테스트김', //{{속성명(=변수명)}}
      y:'29',
      z:'서울시'
    }
  } */
  data:()=>{ //this.state:{속성명:값}
    return{
      //속성명:저장할값->출력목적
      x:'임시테스트', 
      y:'32',
      z:[10,20,30], /*배열 출력*/
      k:{aa:'hong',bb:30}, /*객체 출력*/
      p:new Person("aaa",20)
    }
  }
  //------------------------------
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1.test{
     background-Color:yellow;
     color:red;
     font-size:18pt;
  }
  h5.test2{
     background-Color:cyan;
     color:blue;
     font-size:18pt;
  }
</style>
