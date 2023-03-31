<template>
  <div class="hello">
    <h1>{{num}}</h1>
    {{xxx()}} {{xxx()}}
    {{yyy}} {{yyy}}<!-- yyy() 이라고 쓰면 함수가 아니라는 에러발생 -->
    <hr />
    <h1>Vue.js에서의 이벤트처리 방법2</h1>
    <!-- 형식) v-on:[속성명]="호출할 함수명" 
         형식) 태그 내부에 data-변수명=저장할값 or 객체(배열)
                    
     -->
    <button v-on:[aaa]="handleEvent">OK-bind</button>
    <button @[bbb]="handleEvent">OK-bind2</button>
    <button v-on:click="message.push('Outer')">OK-bind3</button>
    <button v-on:click="handleEvent2"
          data-my="100" data-my2='{"a":200,"b":300}'>OK2</button><br>
    <p />
    message의 값출력:{{message}}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data:function(){
    return{
      num:10,
      aaa:'click',//속성(키명):발생시킬 이벤트종류명
      bbb:'mouseover',//console로 확인
      ccc:'mouseleave',//마우스를 벗어날때
      message:[] //데이터가 저장될 배열객체
    }
  },
  methods:{ //methods 함수를 작성->매번 호출이 가능,캐싱기능 X (반복)
    //추가
    handleEvent(){
       console.log('이벤트 종류 확인!')
    },
    handleEvent2:function(e){ //특정태그에 저장된 값을 불러올때
    //형식) e.target.dataset.불러올 항목(my)
     console.log(e,e.target.dataset.my)
     var x=JSON.parse(e.target.dataset.my2)
     console.log(x.a,x.b)//가져온 객체의 속성별로 구분해서 출력
    },
    xxx:function(){
      console.log("xxx함수호출",this.num)
    },
    change:function(){
      this.num=20
      console.log("change 함수 호출")
    }
  },
  computed:{ //computed 계산속성->1.한번만 호출이 가능하다.
              //2.화면에 여러번 출력이 가능하나 호출은 한번만
    yyy:function(){ //3.return 구문이 있어야 한다.
      console.log("yyy",this.num)
      return "yyy"+this.num
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
