<template>
  <div class="hello">
    <h1 class="test">{{username}} {{age+1}} {{myAddress}}
        {{isMarried}} {{isMarried2}} {{phones}}  
        {{writer}} {{writer.name}} {{writer.company}}
   </h1>
   <hr />
   <!-- 동적전달 :매개변수명="Data속성의 키명(값이 전달)"   -->
   <Default username="임시" :age='20' myAddress="서울" />
   <Default username="테스트" />
   <Default :username="x" :age='y' myAddress="서울" />
   <hr />
   이름:{{x}} 나이:{{y}}  지역:{{z}}<br>
   신상정보:{{k.aa}} {{k.bb}}<p></p>
   person:{{p.username}} {{p.age}}
  </div>
</template>

<script>
import Default from './Default.vue';//1.불러오기
//컴포넌트외의 다른 파일도 import
import {Person} from './Person';// ~.js 생략가능

export default {
  name: 'HelloWorld',
  props: {
    username: String,
    age:Number, //숫자-> number로 소문자로 쓰면 에러발생
    myAddress:String,//특수기호 - 때문에 그 다음문자는 대문자
    isMarried:Boolean,//자바의 Wrapper class 느낌
    isMarried2:Boolean,
    phones:Array,//배열
    writer:Object //객체
  },
  components:{//2.등록
    Default
  },
  /*
   data속성을 이용해서 데이터를 저장=>반드시 함수로 작성
     return을 이용해서 반환받을 변수를 화면에 출력
     {{반환값}}
  */
  /*
  data:function(){ //this.state={키명:값,,} 
                   //const [변수,함수명]=useState(초기값)
   return {
      //속성명:저장할값->출력목적
      x:'테스트김', //{{속성명(변수)}}
      y:29, //내부에서 숫자로 저장
      z:'서울시'
   }
  }*/

  data:()=>{
    return{
      x:'임시테스트234',
      y:32,
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
