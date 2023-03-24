<template>
  <div class="hello">
    <h1 class="test">
      {{username}} {{age+1}} {{myAddress}} {{isMarried}}
      {{isMarried2}} {{phones}} {{writer}}
      {{writer.name}} {{writer.company}}
    </h1>
    <hr />
    <!-- 동적 전달 :매개변수명="Data속성의 키명(값이 전달)" -->
    <Default username="홍길동" :age='20' myAddress="서울" />
    <Default username="임시" />
    <Default :username="x" :age='y' myAddress="서울" />
    <hr />
  <h5 class="test2">
    이름:{{x}} 나이:{{y}} 지역:{{z}}
    이메일:{{k.aa}} {{k.bb}}
    person:{{p.username}} {{p.age}}
  </h5> 
  </div>
</template>

<script>
import Default from './Default.vue';
import {Person} from './Person';//~.js 생략가능

export default {
  name: 'HelloWorld',
  props: {
    username: String,
    age:Number,//숫자->number로 소문자로 쓰면 에러발생(자료형 대문자)
    myAddress:String, //특수기호 - 때문에 그 다음문자가 대문자
    isMarried:Boolean, //논리적인 값(=자바의 Wrapper class느낌)
    isMarried2:Boolean,
    phones:Array,//배열
    writer:Object//객체
  },
  components:{//자식컴포넌트 중첩시킬때
    Default
  },
  /*
   data속성을 이용해서 데이터를 저장=>반드시 함수로 작성하고
   return을 이용해서 반환받을 변수를 화면에 출력 {{반환값}}
  */
  /*
  data:function(){  //this.state={키명:값,,,}
    return{
      //속성명:저장할값->출력목적
      x:'테스트김', //{{속성명(변수)}}
      y:'29',
      z:'서울시'
    }
  }//data */
  data:()=>{
    return{
      x:'임시테스트', //{{속성명(변수)}}
      y:'32',
      z:[10,20,30],
      k:{aa:'hong',bb:30},
      p:new Person("aaa",20)
    }
  }
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
